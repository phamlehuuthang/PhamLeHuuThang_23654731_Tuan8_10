import { Apple } from 'lucide-react'

const providers = {
  google: {
    label: 'Google',
    icon: <span className="text-base font-bold leading-none">G</span>,
    textColor: 'text-[#db4437]',
    solidBg: 'bg-[#db4437]',
  },
  facebook: {
    label: 'Facebook',
    icon: <span className="text-base font-bold leading-none">f</span>,
    textColor: 'text-[#3b5998]',
    solidBg: 'bg-[#3b5998]',
  },
  apple: {
    label: 'Apple',
    icon: <Apple size={18} />,
    textColor: 'text-[#111827]',
    solidBg: 'bg-[#111827]',
  },
}

function SocialLogin({ provider, rounded = 'md', fullWidth = true, onClick }) {
  const item = providers[provider]

  if (!item) return null

  const radiusClass = rounded === 'full' ? 'rounded-full' : 'rounded-md'
  const widthClass = fullWidth ? 'w-full justify-center' : 'w-12 h-12 justify-center'
  const colorClass = fullWidth
    ? `${item.textColor} border border-gray-200 bg-[#f5f6fb] hover:bg-[#edf0f8]`
    : `${item.solidBg} text-white hover:opacity-90`

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 ${radiusClass} ${widthClass} px-3 py-2.5 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d8d] focus-visible:ring-offset-2 ${colorClass}`}
    >
      {item.icon}
      {fullWidth ? <span>Continue with {item.label}</span> : null}
    </button>
  )
}

export default SocialLogin
