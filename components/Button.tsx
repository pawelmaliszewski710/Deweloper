import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  icon, 
  className = '',
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 font-sans cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-secondary shadow-[0_4px_14px_rgba(14,42,37,0.2)] hover:shadow-[0_6px_20px_rgba(14,42,37,0.3)] transform hover:-translate-y-0.5",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-textMain hover:text-primary hover:bg-gray-100/50"
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={classes}
        {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
      </a>
    );
  }

  return (
    <button 
      className={classes}
      {...props}
    >
      {children}
      {icon && <span className="group-hover:translate-x-1 transition-transform">{icon}</span>}
    </button>
  );
};