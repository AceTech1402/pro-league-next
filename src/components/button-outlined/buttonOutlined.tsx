import { ButtonHTMLAttributes } from "react";
import classes from "./buttonOutlined.module.scss";
import Link from "next/link";

interface PropsDataType {
  children: React.ReactNode;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  isLink?: boolean;
  type?: "submit" | "button" | "reset" | undefined;
  link?: string;
  className?: string;
}

export const ButtonOutlined: React.FC<PropsDataType> = ({
  children,
  buttonProps,
  isLink = false,
  className,
  type,
  link,
}) => {
  return isLink ? (
    <Link href={link ? link : ""} className={`${classes.button} ${className}`}>
      {children}
    </Link>
  ) : (
    <button {...buttonProps} type={type} className={`${classes.button} ${className}`}>
      {children}
    </button>
  );
};
