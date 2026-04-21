import { X } from 'lucide-react'
import loginDishImage from '../assets/img_1.jpg'
import Button from './Button'
import InputField from './InputField'
import SocialLogin from './SocialLogin'

function LoginModal({ onGoogleClick }) {
  return (
    <section className="relative mx-auto w-full max-w-[1002px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="relative h-[360px] bg-cover bg-center p-6 sm:p-10 md:h-[624px] md:w-[501px]"
          style={{
            backgroundImage:
              `linear-gradient(rgba(0,0,0,0.12), rgba(0,0,0,0.25)), url(${loginDishImage})`,
          }}
        >
          <p className="mx-auto mt-3 max-w-[280px] text-center text-3xl font-bold italic leading-snug text-white drop-shadow-lg sm:mt-8 sm:text-4xl">
            "Embrace the art of cooking, where flavors come alive!"
          </p>
        </div>

        <div className="p-6 sm:p-8 md:h-[624px] md:w-[501px]">
          <div className="mb-6 flex items-start justify-between">
            <h2 className="text-4xl font-bold">Login</h2>
            <button
              type="button"
              className="rounded-full p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4d8d]"
              aria-label="Close login modal"
            >
              <X size={22} />
            </button>
          </div>

          <p className="mb-4 text-gray-600">Enter your email to log in.</p>
          <div className="space-y-4">
            <InputField id="login-email" type="email" placeholder="Enter your email" />
            <Button>Continue</Button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-gray-200" />
            <span className="text-xs font-medium text-gray-400">OR</span>
            <span className="h-px flex-1 bg-gray-200" />
          </div>

          <p className="mb-5 text-center text-xs text-gray-400">
            By continuing, you agree to the updated Terms of Sale, Terms of Service,
            and Privacy Policy.
          </p>

          <div className="space-y-3">
            <SocialLogin provider="google" onClick={onGoogleClick} />
            <SocialLogin provider="facebook" />
            <SocialLogin provider="apple" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginModal
