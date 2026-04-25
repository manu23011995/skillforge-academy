import { KeyboardEvent, useState } from "react";
import { Send, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSend: (text: string) => void;
  onClear: () => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSend, onClear, disabled }: ChatInputProps) => {
  const [value, setValue] = useState("");

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-border bg-card/80 p-3 backdrop-blur">
      <div className="flex items-end gap-2">
        <Textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me anything..."
          rows={1}
          disabled={disabled}
          className="min-h-[44px] max-h-32 resize-none rounded-2xl border-border bg-background px-4 py-3 text-sm focus-visible:ring-primary"
        />
        <Button
          type="button"
          size="icon"
          onClick={handleSend}
          disabled={disabled || !value.trim()}
          className="h-11 w-11 shrink-0 rounded-full bg-gradient-header text-primary-foreground shadow-bubble transition-transform hover:scale-105 hover:opacity-95"
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </Button>
        <Button
          type="button"
          size="icon"
          variant="outline"
          onClick={onClear}
          className="h-11 w-11 shrink-0 rounded-full border-border text-muted-foreground hover:text-destructive hover:border-destructive"
          aria-label="Clear chat"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      <p className="mt-2 px-1 text-[10px] text-muted-foreground">
        Press Enter to send · Shift + Enter for new line
      </p>
    </div>
  );
};
