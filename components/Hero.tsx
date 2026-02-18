"use client";

import { useState } from "react";
import { ArrowRight, Utensils, Store, Briefcase } from "lucide-react";

const industries = [
    { id: "food", label: "Food & beverage", icon: Utensils },
    { id: "retail", label: "Retail", icon: Store },
    { id: "services", label: "Services", icon: Briefcase },
];

export function Hero() {
    const [activeIndustry, setActiveIndustry] = useState("food");

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Background Image with overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2070&q=80')`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-formula mb-6 animate-fadeInUp">
                        A Clover for every small business
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 mb-10 font-graphik animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
                        Do what you do better with the world's smartest POS system.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
                        <a href="#products" className="btn-primary text-base">
                            Get Clover
                            <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn-secondary text-base">
                            Contact sales
                            <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Industry Tabs */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex items-center justify-between bg-transparent py-4">
                        <div className="flex items-center">
                            <span className="text-white/70 text-sm mr-4 hidden md:block">Customize by</span>
                            <div className="flex gap-2">
                                {industries.map((industry) => (
                                    <button
                                        key={industry.id}
                                        type="button"
                                        onClick={() => setActiveIndustry(industry.id)}
                                        className={`flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium transition-all ${activeIndustry === industry.id
                                                ? "bg-[#b3e469] text-black"
                                                : "bg-black/30 backdrop-blur-sm text-white hover:bg-black/50"
                                            }`}
                                    >
                                        <industry.icon size={16} />
                                        <span className="hidden sm:inline">{industry.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <a
                            href="#specialists"
                            className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#b3e469] flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" className="text-black">
                                    <path
                                        d="M20 0C14.5 0 10 4.5 10 10C10 15.5 14.5 20 20 20C25.5 20 30 15.5 30 10C30 4.5 25.5 0 20 0Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M10 20C4.5 20 0 24.5 0 30C0 35.5 4.5 40 10 40C15.5 40 20 35.5 20 30C20 24.5 15.5 20 10 20Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M30 20C24.5 20 20 24.5 20 30C20 35.5 24.5 40 30 40C35.5 40 40 35.5 40 30C40 24.5 35.5 20 30 20Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="hidden md:block">
                                <p className="text-xs opacity-70 uppercase tracking-wide">Shop one-on-one with our</p>
                                <p className="text-sm font-medium uppercase">Specialists</p>
                            </div>
                            <ArrowRight size={20} className="hidden md:block" />
                        </a>
                    </div>
                </div>
                <div className="h-8 bg-gradient-to-t from-white to-transparent" />
            </div>
        </section>
    );
}
