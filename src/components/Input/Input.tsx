import React from "react";
import "./Input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = React.forwardRef(
  (
    { label, className, error, ...props }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className="label">
        {label}
        <br />
        <input className={`input ${className}`} ref={ref} {...props} />
        {error && <div className="error-message">{error}</div>}
      </label>
    );
  }
);

export default Input;
