import katex from "katex";
import "katex/dist/katex.min.css";
import { cn } from "@/lib/utils";

const TOKEN = /(\$\$[\s\S]+?\$\$|\$[^$]+\$)/g;

const render = (latex: string, displayMode: boolean) =>
  katex.renderToString(latex, { displayMode, throwOnError: false, output: "html" });

const MathText = ({ text, className }: { text: string; className?: string }) => {
  const parts = text.split(TOKEN);
  return (
    <span className={cn("math-text [&_.katex]:text-inherit", className)}>
      {parts.map((part, i) => {
        if (part.startsWith("$$") && part.endsWith("$$")) {
          return (
            <span
              key={i}
              className="block my-2 overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: render(part.slice(2, -2), true) }}
            />
          );
        }
        if (part.startsWith("$") && part.endsWith("$") && part.length > 2) {
          return (
            <span
              key={i}
              dangerouslySetInnerHTML={{ __html: render(part.slice(1, -1), false) }}
            />
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
};

export default MathText;
