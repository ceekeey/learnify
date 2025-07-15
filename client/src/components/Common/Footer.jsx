import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
    return (
        <footer className="bg-primary text-white mt-16">
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo + About */}
                <div>
                    <img src="/logo.png" alt="Learnify" className="h-10 mb-4" />
                    <p className="text-sm text-gray-200">
                        Learnify is your gateway to modern skills. Learn at your own pace from expert instructors.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Explore</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/courses" className="hover:text-accent">Courses</Link></li>
                        <li><Link to="/register" className="hover:text-accent">Become an Instructor</Link></li>
                        <li><Link to="/login" className="hover:text-accent">Sign In</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-accent">About Us</Link></li>
                        <li><Link to="/" className="hover:text-accent">Contact</Link></li>
                        <li><Link to="/" className="hover:text-accent">Blog</Link></li>
                    </ul>
                </div>

                {/* Newsletter + Social */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
                    <form className="flex items-center bg-white rounded overflow-hidden">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="px-3 py-2 text-sm text-gray-700 flex-grow outline-none"
                        />
                        <button type="submit" className="bg-accent px-4 py-2 text-gray-900 font-bold">
                            <HiOutlineMail />
                        </button>
                    </form>
                    <div className="flex gap-4 mt-4 text-xl">
                        <a href="#" className="hover:text-accent"><FaFacebookF /></a>
                        <a href="#" className="hover:text-accent"><FaTwitter /></a>
                        <a href="#" className="hover:text-accent"><FaInstagram /></a>
                        <a href="#" className="hover:text-accent"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>

            <div className="bg-indigo-700 text-center py-4 text-sm text-gray-200">
                © {new Date().getFullYear()} Learnify. All rights reserved.
            </div>
        </footer>
    );
}
