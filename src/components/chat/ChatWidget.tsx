import { useEffect, useRef, useState } from "react";
import { Bot, Sparkles } from "lucide-react";
import { ChatBubble } from "./ChatBubble";
import { QuickChips } from "./QuickChips";
import { ChatInput } from "./ChatInput";
import { AssociateModal } from "./AssociateModal";

const STORAGE_KEY = "skillforge-chat-history";
const PREVIOUS_QUESTIONS_KEY = "skillforge-previous-questions";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  timestamp: string;
}

// Levenshtein distance for string similarity
const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));

  for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }

  return matrix[str2.length][str1.length];
};

// Calculate similarity score (0 to 1, where 1 is exact match)
const calculateSimilarity = (str1: string, str2: string): number => {
  const distance = levenshteinDistance(str1.toLowerCase(), str2.toLowerCase());
  const maxLength = Math.max(str1.length, str2.length);
  return maxLength === 0 ? 1 : 1 - distance / maxLength;
};

// Check if word is similar enough (threshold: 0.6 = 60% similarity)
const isSimilar = (word: string, target: string, threshold = 0.6): boolean => {
  return calculateSimilarity(word, target) >= threshold;
};

const getBotReply = (userText: string, previousQuestions: string[]): string => {
  const text = userText.toLowerCase();
  const words = text.split(/\s+/);

  // Check for course-related keywords with fuzzy matching
  const courseKeywords = ["course", "class", "program", "curriculum", "subject"];
  const hasCourseKeyword = words.some(word => 
    courseKeywords.some(keyword => isSimilar(word, keyword, 0.6))
  );

  // Check for duration-related keywords with fuzzy matching
  const durationKeywords = ["duration", "time", "length", "period", "weeks", "months"];
  const hasDurationKeyword = words.some(word =>
    durationKeywords.some(keyword => isSimilar(word, keyword, 0.6))
  );

  // Check for enrollment-related keywords with fuzzy matching
  const enrollKeywords = ["enroll", "join", "register", "sign", "admission", "apply"];
  const hasEnrollKeyword = words.some(word =>
    enrollKeywords.some(keyword => isSimilar(word, keyword, 0.6))
  );

  // Check for placement-related keywords with fuzzy matching
  const placementKeywords = ["placement", "job", "career", "salary", "package", "company", "work"];
  const hasPlacementKeyword = words.some(word =>
    placementKeywords.some(keyword => isSimilar(word, keyword, 0.6))
  );

  // Contextual responses based on previous questions
  if (hasPlacementKeyword) {
    return "100% placement assistance for all the courses. Students placed with min package of 5LPA 💼";
  } else if (hasCourseKeyword) {
    // If they previously asked about duration, provide more context
    if (previousQuestions.some(q => durationKeywords.some(k => q.toLowerCase().includes(k)))) {
      return "As I mentioned, we offer DevOps (12 weeks), UI/UX (8 weeks), and Full Stack. Which one interests you most? 🚀";
    }
    // If they previously asked about enrollment
    if (previousQuestions.some(q => enrollKeywords.some(k => q.toLowerCase().includes(k)))) {
      return "Great! Here are our courses again: DevOps, UI/UX, Full Stack. You can enroll at skillforgeacademy.com/enroll 🎓";
    }
    // If they previously asked about placements
    if (previousQuestions.some(q => placementKeywords.some(k => q.toLowerCase().includes(k)))) {
      return "Great! Here are our courses again: DevOps, UI/UX, Full Stack. All with 100% placement assistance and min 5LPA package 🚀";
    }
    return "We offer: DevOps, UI/UX, Full Stack 🚀";
  } else if (hasDurationKeyword) {
    // If they previously asked about courses, provide specific durations
    if (previousQuestions.some(q => courseKeywords.some(k => q.toLowerCase().includes(k)))) {
      const lastCourseQuestion = previousQuestions.find(q => courseKeywords.some(k => q.toLowerCase().includes(k)));
      return `For our courses: DevOps is 12 weeks, UI/UX is 8 weeks, and Full Stack is 16 weeks. Would you like more details? ⏱️`;
    }
    return "DevOps: 12 weeks ⏱️ · UI/UX: 8 weeks 🎨";
  } else if (hasEnrollKeyword) {
    // If they previously asked about courses, encourage them to choose
    if (previousQuestions.some(q => courseKeywords.some(k => q.toLowerCase().includes(k)))) {
      return "Perfect! Once you've decided which course (DevOps, UI/UX, or Full Stack), visit skillforgeacademy.com/enroll to sign up 🎓";
    }
    // If they previously asked about duration
    if (previousQuestions.some(q => durationKeywords.some(k => q.toLowerCase().includes(k)))) {
      return "Great! Now that you know the duration, you can enroll at skillforgeacademy.com/enroll for any of our courses 🎓";
    }
    return "Awesome! Visit skillforgeacademy.com/enroll to get started 🎓";
  } else {
    // If they have previous questions, reference them
    if (previousQuestions.length > 0) {
      const lastQuestion = previousQuestions[previousQuestions.length - 1];
      return `I remember you asked about "${lastQuestion}". Would you like to know more about courses, duration, enrollment, or placements? 🤔`;
    }
    return "I didn't quite catch that 🤔. Try: Courses, Duration, Enroll, or Placements.";
  }
};

const getTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const initialMessage: Message = {
  id: "welcome",
  role: "bot",
  text: "Hi there! 👋 I'm Skillforge, your friendly assistant. Ask me about our courses, duration, placements, or how to enroll!",
  timestamp: getTime(),
};

export const ChatWidget = () => {
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [isTyping, setIsTyping] = useState(false);
  const [previousQuestions, setPreviousQuestions] = useState<string[]>([]);
  const [isAssociateModalOpen, setIsAssociateModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load chat history from localStorage on mount
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem(STORAGE_KEY);
      const savedPreviousQuestions = localStorage.getItem(PREVIOUS_QUESTIONS_KEY);
      
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
      
      if (savedPreviousQuestions) {
        setPreviousQuestions(JSON.parse(savedPreviousQuestions));
      }
    } catch (error) {
      console.error("Failed to load chat history:", error);
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 1) { // Only save if there are actual messages beyond initial
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Save previous questions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(PREVIOUS_QUESTIONS_KEY, JSON.stringify(previousQuestions));
  }, [previousQuestions]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    const userMsg: Message = {
      id: `${Date.now()}-u`,
      role: "user",
      text,
      timestamp: getTime(),
    };
    setMessages((prev) => [...prev, userMsg]);
    
    // Add question to previous questions history and get updated list
    const updatedPreviousQuestions = [...previousQuestions, text];
    setPreviousQuestions(updatedPreviousQuestions);
    
    setIsTyping(true);

    window.setTimeout(() => {
      const botMsg: Message = {
        id: `${Date.now()}-b`,
        role: "bot",
        text: getBotReply(text, updatedPreviousQuestions),
        timestamp: getTime(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const clearChat = () => {
    setMessages([{ ...initialMessage, timestamp: getTime() }]);
    setPreviousQuestions([]);
    // Clear localStorage
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(PREVIOUS_QUESTIONS_KEY);
  };

  const handleSpeakToAssociate = () => {
    setIsAssociateModalOpen(true);
  };

  return (
    <>
      <div className="flex h-[640px] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-widget">
        {/* Header */}
        <header className="flex items-center gap-3 bg-gradient-header px-5 py-4 text-primary-foreground">
          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur">
              <Bot className="h-5 w-5" />
            </div>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[hsl(var(--primary))] bg-green-400" />
          </div>
          <div className="flex-1">
            <h1 className="text-base font-semibold leading-tight">Skillforge Support</h1>
            <p className="flex items-center gap-1 text-xs opacity-90">
              <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
              Online · Replies instantly
            </p>
          </div>
          <Sparkles className="h-5 w-5 opacity-80" />
        </header>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 space-y-4 overflow-y-auto px-4 py-5"
        >
          {messages.map((m) => (
            <ChatBubble key={m.id} role={m.role} text={m.text} timestamp={m.timestamp} />
          ))}

          {isTyping && (
            <div className="flex items-end gap-2 animate-bubble-in">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-header text-primary-foreground shadow-bubble">
                <Bot className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-border bg-[hsl(var(--bot-bubble))] px-4 py-3 shadow-bubble">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing-dot"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing-dot"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing-dot"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Quick chips */}
        <QuickChips 
          onSelect={sendMessage} 
          onSpeakToAssociate={handleSpeakToAssociate}
          disabled={isTyping} 
        />

        {/* Input */}
        <ChatInput onSend={sendMessage} onClear={clearChat} disabled={isTyping} />
      </div>

      {/* Associate Modal */}
      <AssociateModal 
        isOpen={isAssociateModalOpen} 
        onClose={() => setIsAssociateModalOpen(false)} 
      />
    </>
  );
};
