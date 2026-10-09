import {Link} from "react-router-dom";
import backgroundImage from "../../../assets/background.png";
import { ArrowRight, Star, Wrench, Bike } from "lucide-react";
export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden -mt-16 flex items-center justify-center pt-24 pb-12">
            <div className="absolute inset-0 overflow-hidden">
                <img src={backgroundImage} alt="" className="w-full h-full object-cover scale-105 brightness-85" />
                <div className="absolute inset-0 bg-black/5 dark:bg-black/60" />
            </div>
            <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-[#611313] dark:text-white">
                        <h1 className="relative text-4xl lg:text-5xl font-bold leading-tight">
                            Ride the Future with{' '}
                            <span className="text-[#611313] dark:text-white">NJET</span>
                            <span aria-hidden
                            className="absolute inset-0 text-transparent bg-clip-text mix-blend-screen bg-[linear-gradient(90deg,transparent,rgba(240,176,88,0.45),transparent)] bg-[length:200%_100%] animate-text-flow">
                            Ride the Future with NJET
                            </span>
                        </h1>
                        <p className="mt-4 text-lg text-[#611313] dark:text-gray-200 leading-relaxed">
                            Premium electric bikes, expert service, and genuine spare parts.
                            Experience the best of e-mobility today.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link to="/products"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--primary-hover)] transition-colors text-sm">
                            Shop Now <ArrowRight size={16} />
                            </Link>
                            <Link to="/appointments/new"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--primary)]/70 dark:border-white/20 bg-white/30 dark:bg-white/10 background-transparent text-[] dark:text-white font-medium hover:bg-white/50 dark:hover:bg-white/20 transition-all text-sm">
                            Book a Service
                            </Link>
                        </div>
                    </div>
                    

                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 rounded-xl bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-[#611313]/50 dark:border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.12)] px-4 py-3 hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <Bike size={20} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Premium E-Bikes</h3>
                <p className="text-xs text-muted dark:text-gray-300 mt-0.5">Top-quality electric bikes for every ride.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-[#611313]/50 dark:border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.12)] px-4 py-3 hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                <Wrench size={20} className="text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Expert Service</h3>
                <p className="text-xs text-muted dark:text-gray-300 mt-0.5">Professional tune-ups, repairs, and inspections.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-[#611313]/50 dark:border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.12)] px-4 py-3 hover:translate-y-[-4px] transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center shrink-0">
                <Star size={20} className="text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">Genuine Parts</h3>
                <p className="text-xs text-muted dark:text-gray-300 mt-0.5">Authentic spare parts and accessories.</p>
              </div>
            </div>
          </div>
            </div>
        </section>
    );
}