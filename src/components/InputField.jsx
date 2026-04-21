function InputField({
  label,
  id,
  type = 'text',
  placeholder,
  rightIcon,
  onRightIconClick,
  rightIconAriaLabel = 'Toggle',
  ...rest
}) {
  return (
    <label className="block space-y-1.5">
      {label ? (
        <span className="text-sm font-medium text-gray-700">{label}</span>
      ) : null}
      <span className="relative block">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-md border border-gray-200 bg-[#f8f9fc] px-3 py-2.5 text-sm text-gray-800 outline-none transition duration-200 placeholder:text-gray-400 focus:border-[#ff4d8d] focus:bg-white focus:ring-2 focus:ring-[#ff4d8d]/20"
          {...rest}
        />
        {rightIcon ? (
          onRightIconClick ? (
            <button
              type="button"
              onClick={onRightIconClick}
              aria-label={rightIconAriaLabel}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 transition hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d8d]/40"
            >
              {rightIcon}
            </button>
          ) : (
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
              {rightIcon}
            </span>
          )
        ) : null}
      </span>
    </label>
  )
}

export default InputField
