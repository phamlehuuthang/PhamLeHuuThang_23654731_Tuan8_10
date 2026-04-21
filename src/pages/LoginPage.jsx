import { useNavigate } from 'react-router-dom'
import LoginModal from '../components/LoginModal'

function LoginPage() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-[#f6f7fb] p-4 font-sans text-gray-900 sm:p-6 lg:p-8">
      <LoginModal onGoogleClick={() => navigate('/signup')} />
    </main>
  )
}

export default LoginPage
