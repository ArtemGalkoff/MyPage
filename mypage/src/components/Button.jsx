import React from "react";

function Button({
  href,
  onClick,
  download = false,
  className = "",
  children,
  target,
  rel,
}) {
  const baseClasses = "px-4 py-1.5 rounded transition text-sm";

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={`${baseClasses} ${className}`}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;