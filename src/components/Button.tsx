"use client";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "store-hero"
  | "dark-utility"
  | "pearl-capsule";

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center btn-active-scale transition-transform duration-100 cursor-pointer select-none";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-primary text-on-primary font-text text-body rounded-pill px-[22px] py-[11px] hover:bg-primary-focus",
    secondary:
      "bg-transparent text-primary font-text text-body rounded-pill px-[22px] py-[11px] border border-primary hover:bg-primary hover:text-on-primary",
    "store-hero":
      "bg-primary text-on-primary font-text text-button-large rounded-pill px-[28px] py-[14px] hover:bg-primary-focus",
    "dark-utility":
      "bg-ink text-on-dark font-text text-button-utility rounded-sm px-[15px] py-[8px] hover:opacity-90",
    "pearl-capsule":
      "bg-surface-pearl text-ink-muted-80 font-text text-caption rounded-md px-[14px] py-[8px] border-[3px] border-divider-soft hover:border-hairline",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
