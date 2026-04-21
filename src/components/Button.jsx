function Button({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  ...rest
}) {
  const variants = {
    primary:
      'bg-[#ff4d8d] text-white hover:bg-[#e33e7c] focus-visible:ring-[#ff4d8d]',
    ghost:
      'bg-[#f5f6fb] text-gray-600 hover:bg-[#eceff7] focus-visible:ring-[#ff4d8d]',
  }

  return (
    <button
      type={type}
      className={`w-full rounded-md px-4 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
