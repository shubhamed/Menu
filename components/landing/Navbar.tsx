import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['Product', 'Pricing', 'Integrations', 'About'];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                height: scrolled ? 64 : 72,
                background: scrolled ? 'rgba(17,17,17,0.95)' : 'rgba(17,17,17,0.85)',
                backdropFilter: 'blur(20px) saturate(180%)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
            }}
        >
            <div className="section-inner h-full flex items-center justify-between" style={{ padding: '0 48px' }}>
                {/* Logo */}
                <a href="#" className="gradient-text text-xl font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-primary)' }}>
                    Minute Menus
                </a>

                {/* Center Links (Desktop) */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-sm font-medium transition-colors duration-200"
                            style={{ color: 'var(--text-muted)' }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-5">
                    <a
                        href="#"
                        className="text-sm font-medium transition-colors duration-200"
                        style={{ color: 'var(--text-muted)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                        Log In
                    </a>
                    <a href="#get-started" className="btn-nav">Get Started Free</a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div
                    className="md:hidden absolute top-full left-0 right-0 border-t"
                    style={{
                        background: 'rgba(17,17,17,0.98)',
                        backdropFilter: 'blur(20px)',
                        borderColor: 'var(--border-subtle)',
                        padding: '24px',
                    }}
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map(link => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="text-base font-medium py-2"
                                style={{ color: 'var(--text-secondary)' }}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link}
                            </a>
                        ))}
                        <hr style={{ borderColor: 'var(--border-subtle)' }} />
                        <a href="#" className="text-base font-medium py-2" style={{ color: 'var(--text-muted)' }}>
                            Log In
                        </a>
                        <a href="#get-started" className="btn-tier1 justify-center w-full" onClick={() => setMobileOpen(false)}>
                            Get Started Free
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
