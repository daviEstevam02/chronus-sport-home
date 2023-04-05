import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  secondary?: boolean
  tertiary?: boolean
  loading?: boolean
  full?: boolean
  width?: string
  height?: string
  backgroundColor?: string
  color?: string
  paddingX?: string
  paddingY?: string
  rounded?: string
  className: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  secondary = false,
  tertiary,
  loading = false,
  full = false,
  backgroundColor,
  className,
  paddingX,
  paddingY,
  rounded,
  color,
  width,
  height,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={loading ? true : disabled}
      color={color}
      className={className}
    >
      {loading ? '' : children}
    </button>
  )
}
