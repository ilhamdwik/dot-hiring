/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

export function Button({
  className,
  ...props
}: React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>) {
  return (
    <button
      className={`align-bottom inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-white bg-indigo-600 active:bg-purple-600 ${
        props.disabled
          ? 'opacity-50 cursor-auto'
          : 'hover:bg-indigo-700 cursor-pointer'
      } ${className}`}
      {...props}
    />
  );
}

export default Button;
