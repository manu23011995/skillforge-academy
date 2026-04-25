import { X, Send, User, Bot } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface AssociateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  role: "user" | "agent";
  text: string;
  timestamp: string;
}

export const AssociateModal = ({ isOpen, onClose }: AssociateModalProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [agentTyping, setAgentTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Simulate connecting to agent
      setTimeout(() => {
        setIsConnected(true);
        setMessages([
          {
            id: "welcome",
            role: "agent",
            text: "Hi there! I'm Sarah from Skillforge Academy. How can I help you today?",
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
      }, 1000);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setAgentTyping(true);

    // Simulate agent response
    setTimeout(() => {
      const responses = [
        "I'd be happy to help you with that! Let me check our course availability for you.",
        "That's a great question! Our DevOps course starts next Monday. Would you like me to send you the details?",
        "Perfect! I can help you with enrollment. What's your preferred course - DevOps, UI/UX, or Full Stack?",
        "I understand. Let me connect you with our enrollment team who can provide more detailed information.",
        "Thanks for your interest! We have flexible payment options available. Would you like to know more?",
      ];

      const agentMessage: ChatMessage = {
        id: `agent-${Date.now()}`,
        role: "agent",
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, agentMessage]);
      setAgentTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="flex h-[600px] w-full max-w-lg flex-col rounded-3xl bg-card border border-border shadow-widget animate-bubble-in">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-gradient-header px-5 py-4 text-primary-foreground">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <User className="h-5 w-5" />
              </div>
              <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[hsl(var(--primary))] ${isConnected ? 'bg-green-400' : 'bg-yellow-400'}`} />
            </div>
            <div>
              <h2 className="text-sm font-semibold">Sarah - Support Agent</h2>
              <p className="text-xs opacity-90">
                {isConnected ? "Online" : "Connecting..."}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-primary-foreground/80 hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div
          ref={scrollRef}
          className="flex-1 space-y-4 overflow-y-auto px-4 py-4"
        >
          {!isConnected ? (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                <p className="text-sm text-muted-foreground">Connecting to agent...</p>
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end gap-2 animate-bubble-in ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "agent" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-header text-primary-foreground">
                    <User className="h-4 w-4" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-bubble ${
                    message.role === "user"
                      ? "bg-gradient-user text-primary-foreground rounded-br-md"
                      : "bg-[hsl(var(--bot-bubble))] text-[hsl(var(--bot-bubble-foreground))] rounded-bl-md border border-border"
                  }`}
                >
                  {message.text}
                </div>
                {message.role === "user" && (
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Bot className="h-4 w-4" />
                  </div>
                )}
                <span className="px-1 text-[10px] text-muted-foreground">
                  {message.timestamp}
                </span>
              </div>
            ))
          )}

          {agentTyping && isConnected && (
            <div className="flex items-end gap-2 animate-bubble-in">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-header text-primary-foreground">
                <User className="h-4 w-4" />
              </div>
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-border bg-[hsl(var(--bot-bubble))] px-4 py-3 shadow-bubble">
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing-dot" style={{ animationDelay: "0ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing-dot" style={{ animationDelay: "150ms" }} />
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-typing-dot" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="border-t border-border p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={!isConnected}
              className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || !isConnected}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-user text-primary-foreground shadow-bubble transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
