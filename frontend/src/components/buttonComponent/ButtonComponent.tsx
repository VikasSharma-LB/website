import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ButtonComponentProps {
  label: string;
  variant?: "primary" | "secondary";
  backgroundColor?: string; // Custom Tailwind or CSS class
  href?: string;
  onClick?: () => void;
  icon?: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  label,
  variant = "primary",
  backgroundColor,
  href,
  onClick,
  icon,
}) => {
  const baseStyle =
    "inline-flex items-center gap-2 px-6 py-2 rounded-full font-normal text-sm sm:text-base md:text-base 2xl:text-lg xl:text-lg lg:text-lg  transition-colors duration-300 btn-inner-shadow";

  const defaultVariants = {
    primary: "bg-primary text-white hover:bg-[#003BFF] btn-inner-shadow-blue",
    secondary:
      "bg-[#1B1D29] text-white border border-white/10 hover:bg-[#2A2C3C] ",
  };

  // Final style based on props
  const finalStyle = `${baseStyle} ${
    backgroundColor ? backgroundColor : defaultVariants[variant]
  }`;

  const content = (
    <span className={finalStyle}>
      {label}
      {icon && (
        <Image
          src={icon}
          alt="icon"
          width={24}
          height={24}
          className="ml-1"
        />
      )}
    </span>
  );

  return href ? (
    <Link href={href}>{content}</Link>
  ) : (
    <button onClick={onClick}>{content}</button>
  );
};

export default ButtonComponent;
