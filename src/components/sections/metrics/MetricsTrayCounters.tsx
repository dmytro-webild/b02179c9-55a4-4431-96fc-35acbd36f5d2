import { type CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";
import Icon, { type IconName } from "@/components/kit/Icon";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import MakroCounter from "@/components/kit/MakroCounter";
import MakroTitle from "@/components/kit/MakroTitle";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

type Metric = { value: string; label: string };

type MetricsTrayCountersProps = {
  tag?: { text: string; icon?: IconName };
  title?: string;
  description?: string;
  items: Metric[];
  ariaLabel?: string;
  className?: string;
};

const SPRING = { type: "spring", bounce: 0.2, duration: 1 } as const;

const MetricsTrayCounters = ({ tag, title, description, items, ariaLabel, className }: MetricsTrayCountersProps) => {
  const reduce = useReducedMotion();
  const count = items.length;
  const columns = count <= 4 ? count : count % 3 === 0 ? 3 : 4;
  const chars = Math.max(3, ...items.map((item) => item.value.length));

  return (
    <section aria-label={ariaLabel ?? title ?? "Key figures"} className={cn("relative bg-background py-[var(--section-space)] text-foreground", className)}>
      <div className="mx-auto flex w-[var(--container)] flex-col gap-[clamp(2.5rem,5vw,4rem)]">
        {(tag || title || description) && (
          <div className="flex flex-col items-center gap-5 text-center">
            {tag && (
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={SPRING}
                className="flex items-center gap-2 rounded-full bg-secondary py-1 pl-2.5 pr-3.5 text-secondary-foreground"
              >
                <Icon name={tag.icon ?? "chart-no-axes-column"} aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.75} />
                <p className="whitespace-nowrap text-[length:var(--text-label)] leading-[1.5]">{tag.text}</p>
              </motion.div>
            )}
            {title && (
              <MakroTitle text={title} className="max-w-[14em] text-[length:var(--text-h1)] leading-[1.2] tracking-[-0.04em]" />
            )}
            {description && (
              <motion.p
                initial={reduce ? false : { opacity: 0, y: 72 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={SPRING}
                className="max-w-[36em] text-balance text-[length:var(--text-body-lg)] leading-[1.5] text-muted-foreground [overflow-wrap:anywhere]"
              >
                {description}
              </motion.p>
            )}
          </div>
        )}
        <ul
          style={{ "--cols": columns, "--chars": chars } as CSSProperties}
          className={cn(
            "grid gap-[clamp(0.75rem,1.2vw,1rem)] lg:grid-cols-[repeat(var(--cols),minmax(0,1fr))]",
            count > 1 && "grid-cols-2",
          )}
        >
          {items.map((item, index) => (
            <motion.li
              key={index}
              initial={reduce ? false : { opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ ...SPRING, delay: (index % columns) * 0.1 }}
              className={cn(
                "relative isolate flex min-w-0 flex-col justify-between gap-[clamp(2rem,5vw,4rem)] overflow-hidden rounded-[var(--radius-card)] p-[clamp(1.25rem,2.5vw,2rem)] [container-type:inline-size]",
                index % 4 === 1 ? "bg-accent text-accent-foreground" : index % 4 === 2 ? "bg-deep text-deep-foreground" : "bg-card text-card-foreground",
                count > 1 && count % 2 === 1 && index === count - 1 && "col-span-2 lg:col-span-1",
              )}
            >
              {index % 4 === 2 && (
                <div aria-hidden="true" className="pointer-events-none absolute -right-[30%] -top-[40%] -z-1 aspect-square w-[120%] rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_28%,transparent),transparent)]" />
              )}
              <MakroCounter
                value={item.value}
                className={cn(
                  "whitespace-nowrap text-[length:min(var(--text-h1)*1.15,calc(100cqi/var(--chars)/0.62))] leading-none tracking-[-0.04em] tabular-nums",
                  index % 4 === 2 && "text-accent",
                )}
              />
              <p className={cn("text-[length:var(--text-body)] leading-[1.5] [overflow-wrap:anywhere]", index % 4 === 1 ? "text-accent-foreground/75" : index % 4 === 2 ? "text-deep-foreground/70" : "text-muted-foreground")}>{item.label}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MetricsTrayCounters;
