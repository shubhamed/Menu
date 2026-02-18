import React from 'react';
import { Play, ShoppingCart } from 'lucide-react';

const dishes = [
    { name: 'Wagyu Smash Burger', price: '$24', color: '#FF6B35', bgImage: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)' },
    { name: 'Truffle Fries', price: '$14', color: '#F7C948', bgImage: 'linear-gradient(135deg, #F7C948 0%, #FFD700 100%)' },
    { name: 'Lobster Mac & Cheese', price: '$28', color: '#FF8C42', bgImage: 'linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%)' },
];

interface DeviceMockupProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export function DeviceMockup({ className = '', size = 'md' }: DeviceMockupProps) {
    const widths = { sm: 220, md: 280, lg: 320 };
    const w = widths[size];

    return (
        <div
            className={`relative ${className}`}
            style={{ width: w, animation: 'float 4s ease-in-out infinite' }}
        >
            {/* Phone Frame */}
            <div
                className="relative rounded-[40px] overflow-hidden"
                style={{
                    background: '#1a1a1a',
                    border: '3px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)',
                    aspectRatio: '9/19.5',
                }}
            >
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20" style={{ width: '40%', height: 28, background: '#1a1a1a', borderRadius: '0 0 20px 20px' }} />

                {/* Screen */}
                <div className="absolute inset-[4px] rounded-[36px] overflow-hidden" style={{ background: '#0a0a0a' }}>
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 pt-3 pb-1 relative z-10">
                        <span className="text-[10px] font-bold text-white/60">9:41</span>
                        <div className="flex gap-1 items-center">
                            <div className="w-3 h-2 rounded-sm border border-white/60" />
                        </div>
                    </div>

                    {/* Feed */}
                    <div className="relative h-[calc(100%-80px)] overflow-hidden">
                        <div style={{ animation: 'feedScroll 9s ease-in-out infinite' }}>
                            {dishes.map((dish, i) => (
                                <div key={i} className="relative" style={{ height: 'calc((100vw * 0.6) * 0.8)', minHeight: 320 }}>
                                    {/* Gradient placeholder for food image */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: dish.bgImage,
                                            opacity: 0.4,
                                        }}
                                    />
                                    {/* Pattern overlay for texture */}
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.1) 0%, transparent 60%)',
                                        }}
                                    />
                                    {/* Bottom overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.9))' }}>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-white font-bold text-sm leading-tight mb-1">{dish.name}</p>
                                                <p className="font-bold text-base" style={{ color: 'var(--brand-orange)' }}>{dish.price}</p>
                                            </div>
                                            <button className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}>
                                                <Play size={14} fill="white" color="white" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Scroll indicator */}
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 z-10">
                            {dishes.map((_, i) => (
                                <div key={i} className="w-1 rounded-full" style={{ height: i === 0 ? 20 : 8, background: i === 0 ? 'var(--brand-orange)' : 'rgba(255,255,255,0.3)' }} />
                            ))}
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div
                        className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-2 px-3"
                        style={{ background: 'rgba(10,10,10,0.95)', borderTop: '1px solid rgba(255,255,255,0.08)' }}
                    >
                        <div className="flex flex-col items-center gap-0.5">
                            <div className="w-4 h-4 rounded-full" style={{ background: 'var(--brand-orange)' }} />
                            <span className="text-[8px] font-bold" style={{ color: 'var(--brand-orange)' }}>Menu</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                            <div className="w-4 h-4 rounded-full bg-white/20" />
                            <span className="text-[8px]" style={{ color: 'var(--text-muted)' }}>Order</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                            <ShoppingCart size={14} style={{ color: 'var(--text-muted)' }} />
                            <span className="text-[8px]" style={{ color: 'var(--text-muted)' }}>Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
