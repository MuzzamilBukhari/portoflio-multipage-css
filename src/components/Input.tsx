import React from "react";
import "@/styles/Input.css";

const Input = ({
  label,
  type,
  placeholder,
  name,
  className,
  value,
  onchange,
}: {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  className?: string;
  value?: string;
  onchange?: (e: { target: { name: string; value: string } }) => void;
}) => {
  return (
    <>
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onchange}
        placeholder={placeholder}
        className={`input-field ${className}`}
      />
    </>
  );
};

export default Input;
