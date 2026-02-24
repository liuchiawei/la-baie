import { cn } from "@/lib/utils";

export interface VerticalTitleProps {
  tagline?: string;
  title: string;
  className?: string;
}

export function VerticalTitle({ tagline, title, className }: VerticalTitleProps) {
  return (
    <div className={cn("w-fit flex flex-col lg:flex-row-reverse gap-2", className)}>
      {tagline && (
        <h3 className="text-xs lg:text-sm tracking-widest text-muted-foreground font-300 uppercase lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed]">
          {tagline}
        </h3>
      )}
      <h2 className={`font-serif font-semibold text-primary lg:[writing-mode:vertical-rl] lg:[text-orientation:mixed] text-4xl tracking-wider whitespace-wrap ${title.length > 6 ? "lg:text-5xl" : "lg:text-7xl"}`}>
        {title}
      </h2>
    </div>
  );
}
