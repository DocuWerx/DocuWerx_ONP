import Link from 'next/link'

const Header = () => (
  <header className="bg-blue-500 text-white p-4">
    <nav>
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
