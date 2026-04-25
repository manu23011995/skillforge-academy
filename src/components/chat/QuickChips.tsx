import { BookOpen, Clock, Sparkles, Briefcase, Headset } from "lucide-react";

interface QuickChipsProps {
  onSelect: (text: string) => void;
  onSpeakToAssociate?: () => void;
  disabled?: boolean;
}

const chips = [
  { label: "Courses", icon: BookOpen, query: "What courses do you offer?" },
  { label: "Duration", icon: Clock, query: "How long is the duration?" },
  { label: "Enroll", icon: Sparkles, query: "How do I enroll?" },
  { label: "Placements", icon: Briefcase, query: "Tell me about placements" },
];

export const QuickChips = ({ onSelect, onSpeakToAssociate, disabled }: QuickChipsProps) => {
  return (
    <div className="flex flex-wrap gap-2 px-4 py-2">
      {chips.map(({ label, icon: Icon, query }) => (
        <button
          key={label}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(query)}
          className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground shadow-bubble transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none"
        >
          <Icon className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
          {label}
        </button>
      ))}
      {onSpeakToAssociate && (
        <button
          type="button"
          disabled={disabled}
          onClick={onSpeakToAssociate}
          className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-gradient-user px-3.5 py-1.5 text-xs font-medium text-primary-foreground shadow-bubble transition-all hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
        >
          <Headset className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
          Speak to Associate
        </button>
      )}
    </div>
  );
};
