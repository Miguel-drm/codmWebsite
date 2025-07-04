import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const navLinks = [
  { to: '/friends', label: 'Friends' },
  { to: '/attachments', label: 'Attachments' },
  { to: '/profile', label: 'Profile' },
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <header
            className={`w-full fixed top-0 left-0 right-0 z-50 border-gray-200 px-4 sm:px-10 transition-colors duration-300 bg-transparent ${menuOpen ? '' : ''}`}
        >
            <nav className="flex justify-between items-center p-[30px]">
                <div className="cursor-pointer">
                    <h1 className="font-bold text-3xl uppercase">Mahyu</h1>
                </div>
                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-[20px]">
                    {navLinks.map(({ to, label }, i) => (
                        <li key={to} className="relative">
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-bold text-2xl uppercase text-white'
                                        : 'font-bold text-2xl uppercase text-white/70'
                                }
                            >
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.07, duration: 0.3 }}
                                >
                                    {label}
                                </motion.span>
                                {location.pathname === to && (
                                    <motion.div
                                        layoutId="nav-underline"
                                        className="absolute left-0 right-0 -bottom-1 h-1 bg-white rounded"
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-4 flex-row md:flex-row">
                  {/* Hamburger */}
                  <button
                    className="md:hidden text-white focus:outline-none order-2 md:order-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                  >
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                  </button>
                  {/* Discord Icon */}
                  <div className="cursor-pointer ml-0 md:ml-4 order-1 md:order-2">
                    <a href="https://discord.gg/ER2rjDyH4t" target="_blank" rel="noopener noreferrer">
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                      >
                        <path
                          d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.0371A19.7363 19.7363 0 0 0 3.677 4.3698a.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.8732.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6601a.061.061 0 0 0-.0312-.0286ZM8.02 15.3312c-1.1835 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189Zm7.9748 0c-1.1835 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
            </nav>
            {/* Mobile Nav */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 flex"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Overlay */}
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-md"
                            onClick={() => setMenuOpen(false)}
                        />
                        {/* Drawer */}
                        <motion.div
                            className="ml-auto w-4/5 max-w-xs h-full bg-black/80 shadow-xl flex flex-col items-center pt-10 relative"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
                        >
                            {/* Close button */}
                            <button
                                className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 focus:outline-none"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={28} />
                            </button>
                            <nav className="flex flex-col gap-8 mt-8 w-full items-center">
                                {navLinks.map(({ to, label }, i) => (
                                    <li key={to} className="w-full text-center relative list-none">
                                        <NavLink
                                            to={to}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? 'block px-6 py-3 font-bold text-2xl uppercase text-white'
                                                    : 'block px-6 py-3 font-bold text-2xl uppercase text-white/70'
                                            }
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            <motion.span
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.07, duration: 0.3 }}
                                            >
                                                {label}
                                            </motion.span>
                                            {location.pathname === to && (
                                                <motion.div
                                                    layoutId="nav-underline-mobile"
                                                    className="absolute left-1/2 -translate-x-1/2 bottom-1 w-1/2 h-1 bg-white rounded"
                                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                                />
                                            )}
                                        </NavLink>
                                    </li>
                                ))}
                            </nav>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;