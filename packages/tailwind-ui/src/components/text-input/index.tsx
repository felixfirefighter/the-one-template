import clsx from 'clsx';
import React, { useState } from 'react';

interface Props {
  label?: string,
  placeholder?: string,
  hint?: string,
  errorMessage: string,
  frontIcon: React.ReactNode,
  backIcon: React.ReactNode,
  disabled: boolean,
  error: boolean,
  type?: 'text' | 'email' | 'password' 
}

export const TextInput: React.FC<Props> = ({
  label,
  placeholder,
  hint,
  errorMessage,
  frontIcon,
  backIcon,
  disabled,
  error,
  type = 'text',
}) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="mb-4">
      {label && <label className="block text-neutral-700 text-sm mb-1.5">{label}</label>}
      <div
        className={clsx('flex items-center border rounded py-2.5 px-3.5 text-gray-700 focus:outline-none', {
          'border-red-500 shadow shadow-red-300': error && isFocused,
          'border-brand-500 shadow shadow-brand-300': !error && isFocused,
          'border-neutral-200': !error && !isFocused && !disabled,
          'bg-gray-100': disabled,
          'bg-neutral-50': !disabled,
        })}
      >
        {frontIcon && <span className={clsx("mr-2", {
          'text-neutral-400': disabled,
          'text-red-600': error && !disabled,
          'text-brand-600': !error && isFocused,
          'text-neutral-600': !error && !isFocused,
        })}>{frontIcon}</span>}
        <input
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="appearance-none text-sm bg-transparent border-none w-full text-gray-700 focus:outline-none"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
        />
        {backIcon && <span className={clsx("ml-2", {
          'text-neutral-400': disabled,
          'text-red-600': error && !disabled,
          'text-brand-600': !error && isFocused,
          'text-neutral-600': !error && !isFocused,
        })}>{backIcon}</span>}
      </div>
      {hint && !error && <p className="text-neutral-500 text-sm mt-1.5">{hint}</p>}
      {error && <p className="text-red-600 text-sm mt-1.5">{errorMessage}</p>}
    </div>
  );
};

export default TextInput;
