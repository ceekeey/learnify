import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "/logo.png";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Learnify Logo" className="h-10 mr-2" />
                    <span className="text-xl font-bold text-primary">Learnify</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center">
                    <Link to="/" className="text-gray-dark hover:text-primary">Home</Link>
                    <Link to="/courses" className="text-gray-dark hover:text-primary">Courses</Link>
                    <Link to="/login" className="text-gray-dark hover:text-primary">Login</Link>
                    <Link
                        to="/register"
                        className="bg-accent text-gray-dark font-semibold px-4 py-2 rounded hover:bg-lime-400 transition"
                    >
                        Register
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-dark focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {menuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="md:hidden px-4 pb-4 bg-white shadow">
                    <Link to="/" className="block py-2 text-gray-dark hover:text-primary">Home</Link>
                    <Link to="/courses" className="block py-2 text-gray-dark hover:text-primary">Courses</Link>
                    <Link to="/login" className="block py-2 text-gray-dark hover:text-primary">Login</Link>
                    <Link
                        to="/register"
                        className="block py-2 bg-accent text-gray-dark text-center font-semibold rounded mt-2 hover:bg-lime-400"
                    >
                        Register
                    </Link>
                </nav>
            )}
        </header>
    );
}
