import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="p-6 md:py-12 w-full dark:bg-gray-800">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Company</h3>
          <Link to="#">About Us</Link>
          <Link to="#">Our Team</Link>
          <Link to="#">Careers</Link>
          <Link to="#">News</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Models</h3>
          <Link to="#">Compact Sedan</Link>
          <Link to="#">Midsize SUV</Link>
          <Link to="#">Full-size Sedan</Link>
          <Link to="#">Sports Car</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Resources</h3>
          <Link to="#">Configurator</Link>
          <Link to="#">Pricing</Link>
          <Link to="#">Financing</Link>
          <Link to="#">Test Drives</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Legal</h3>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Cookie Policy</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Contact</h3>
          <Link to="#">Sales</Link>
          <Link to="#">Service</Link>
          <Link to="#">Parts</Link>
          <Link to="#">Feedback</Link>
        </div>
      </div>
    </footer>
  )
}
