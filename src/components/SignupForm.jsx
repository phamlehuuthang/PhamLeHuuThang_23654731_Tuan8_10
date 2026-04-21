import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import Button from './Button'
import InputField from './InputField'
import SocialLogin from './SocialLogin'

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className="mx-auto w-full max-w-2xl rounded-2xl bg-white px-5 py-8 shadow-lg sm:px-8 sm:py-10">
      <h2 className="mb-6 text-center text-5xl font-bold">Sign up</h2>

      <form className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <InputField id="first-name" label="First name" placeholder="Input first name" />
          <InputField id="last-name" label="Last name" placeholder="Input last name" />
        </div>

        <InputField
          id="signup-email"
          label="Email"
          type="email"
          placeholder="example.email@gmail.com"
        />

        <InputField
          id="signup-password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter at least 8+ characters"
          rightIcon={showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
          onRightIconClick={() => setShowPassword((prev) => !prev)}
          rightIconAriaLabel={showPassword ? 'Hide password' : 'Show password'}
        />

        <label className="flex items-start gap-3 pt-1 text-sm text-gray-700">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#ff4d8d] focus:ring-[#ff4d8d]"
            defaultChecked
          />
          <span>
            By signing up, I agree with the{' '}
            <a className="font-medium text-[#ff4d8d]" href="#">
              Terms of Use
            </a>{' '}
            &{' '}
            <a className="font-medium text-[#ff4d8d]" href="#">
              Privacy Policy
            </a>
          </span>
        </label>

        <Button type="submit" className="mt-2">
          Sign up
        </Button>
      </form>

      <p className="mt-6 text-center text-gray-700">
        Already have an account?{' '}
        <a href="#" className="font-medium text-[#ff4d8d]">
          Log in
        </a>
      </p>

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-gray-200" />
        <span className="text-xs font-medium text-gray-400">OR</span>
        <span className="h-px flex-1 bg-gray-200" />
      </div>

      <div className="flex items-center justify-center gap-5">
        <SocialLogin provider="google" rounded="full" fullWidth={false} />
        <SocialLogin provider="facebook" rounded="full" fullWidth={false} />
        <SocialLogin provider="apple" rounded="full" fullWidth={false} />
      </div>
    </section>
  )
}

export default SignupForm
