import React from "react";
import "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = React.forwardRef(
  (
    { label, className, ...props }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className="label">
        {label}
        <br />
        <input className={`input ${className}`} ref={ref} {...props} />
      </label>
    );
  }
);

export default Input;
