"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}) {
  const variants = {
    primary: "bg-primary text-white hover:opacity-90 shadow-lg shadow-primary/20",
    secondary: "bg-secondary text-slate-900 hover:opacity-90 shadow-lg shadow-secondary/20",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    ghost: "hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={classes}
          {...props}
        >
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
}
