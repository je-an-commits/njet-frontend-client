import { Link } from "react-router-dom";

interface User {
    isUser: boolean;
}

interface NavbarProps {
    user: User;
}
export default function Navbar({ logoPath }: { logoPath?: string }) {
    const nav: NavbarProps = { user: { isUser: false } };
    return (
        <nav className="sticky top-0 z-99 bg-[var(--primary)] text-white px-4 md:px-15 lg:px-35 py-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-xl font-bold">
                        {  logoPath !== "/logo.png" ? <img src={logoPath} alt="Logo" className="h-8 invert" /> : "NJET"}
                    </Link>
                    <div className="space-x-4">
                        {nav.user.isUser ? (
                            <Link to="/logout" className="hover:text-gray-300">
                                Logout
                            </Link>
                        ) : (
                            <Link to="/login" className="hover:text-gray-300">
                                Login
                            </Link>
                        )}
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}