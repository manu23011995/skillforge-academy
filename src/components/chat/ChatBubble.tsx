import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ChatBubbleProps {
  role: "user" | "bot";
  text: string;
  timestamp?: string;
}

export const ChatBubble = ({ role, text, timestamp }: ChatBubbleProps) => {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex w-full items-end gap-2 animate-bubble-in",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-header text-primary-foreground shadow-bubble">
          <Bot className="h-4 w-4" />
        </div>
      )}

      <div className={cn("flex max-w-[75%] flex-col gap-1", isUser && "items-end")}>
        <div
          className={cn(
            "rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-bubble",
            isUser
              ? "bg-gradient-user text-[hsl(var(--user-bubble-foreground))] rounded-br-md"
              : "bg-[hsl(var(--bot-bubble))] text-[hsl(var(--bot-bubble-foreground))] rounded-bl-md border border-border"
          )}
        >
          {text}
        </div>
        {timestamp && (
          <span className="px-2 text-[10px] text-muted-foreground">{timestamp}</span>
        )}
      </div>

      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground shadow-bubble">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  );
};
