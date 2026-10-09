import React from "react";
import Navbar  from "./Navbar";
import { Mail, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logoPath from "../../assets/logo.png";

interface FooterInfo {
    shop_name: string;
    email: string;
    phone: string;
    storeHours: { days: string; hours: string }[];
}


export default function PageLayout({ children }: { children: React.ReactNode }) {
    const footerInfo: FooterInfo = {
        shop_name: "NJET",
        email: "noelandjane@gmail.com",
        phone: "0955 - 457 - 4539",
        storeHours: [
            { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
            { days: "Saturday", hours: "10:00 AM - 4:00 PM" },
            { days: "Sunday", hours: "Closed" }
        ]
    };
    return (
        <div className="min-h-screen">
            <Navbar logoPath={logoPath} />
            <main className="container mx-auto">
                {children}
            </main>

            <footer className="bg-[#212020] border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
                <div className="flex flex-col md:flex-row md:justify-center md:gap-16 lg:gap-24 text-center md:text-left">
                    <div>
                    <p className="text-sm font-bold text-white leading-relaxed">{footerInfo.shop_name}</p>
                    <p className="mt-1 text-[11px] text-gray-400">Your trusted partner in electric mobility solutions.</p>
                    <p className="mt-2 text-[11px] text-gray-100 leading-relaxed">Ride SMART, Ride ELECTRIC, Ride the FUTURE</p>
                    </div>
                    <div>
                    <h3 className="mt-4 lg:mt-0 text-xs font-bold text-white lg:mb-1.5 uppercase tracking-wider">Quick Links</h3>
                    <div>
                        <Link to="/products" className="block text-xs text-gray-400 hover:text-white transition-colors">Products</Link>
                        <Link to="/appointments/new" className="block text-xs text-gray-400 hover:text-white transition-colors">Book Appointment</Link>
                    </div>
                    </div>
                    <div>
                    <h3 className="mt-4 lg:mt-0 text-xs font-bold text-white lg:mb-1.5 uppercase tracking-wider">Contact</h3>
                    <p className="text-xs text-gray-400 flex items-center gap-1.5 justify-center md:justify-start"><Mail size={12} className="shrink-0" /> {footerInfo.email || 'noelandjane@gmail.com'}</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1.5 justify-center md:justify-start"><Phone size={12} className="shrink-0" /> {footerInfo.phone || '0955 - 457 - 4539'}</p>
                    {footerInfo.storeHours.map((entry, i) => (
                        <p key={i} className={`text-xs text-gray-400 ${i === 0 ? 'flex items-start gap-1.5 justify-center md:justify-start' : 'text-center md:text-left'}`}>
                        {i === 0 && <Clock size={12} className="mt-0.5 shrink-0" />}{' '}{entry.days}: {entry.hours}
                        </p>
                    ))}
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-5 pt-3 text-center">
                    <p className="text-[11px] text-gray-100">&copy; {new Date().getFullYear()} {footerInfo.shop_name}. All rights reserved.</p>
                </div>
                </div>
            </footer>
        </div>
    );
}