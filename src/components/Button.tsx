import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Button = (props: ComponentPropsWithoutRef<"button">) => {
  const { className, children } = props;
  return (
    <button
      className={twMerge(
        "bg-fuchsia-500/20 px-4 py-2 font-extrabold uppercase font-heading text-sm tracking-wide relative",
        className
      )}
    >
      <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500"></div>
      <span className="leading-6">{children}</span>
    </button>
  );
};
