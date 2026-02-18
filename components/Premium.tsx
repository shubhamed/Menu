"use client";

import { ArrowRight } from "lucide-react";

export function Premium() {
    return (
        <section className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                <div className="container mx-auto px-4 md:px-8 py-20 md:py-32">
                    <div className="max-w-xl">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-formula text-white mb-4">
                                Go premium with Clover Hospitality
                            </h2>
                            <p className="text-white/80 mb-8 font-graphik">
                                Clover Hospitality delivers an upgraded POS solution for bars and restaurants with extra features like advanced table management, enhanced customer profiles, and omnichannel capabilities.
                            </p>
                            <a
                                href="#hospitality"
                                className="btn-primary inline-flex"
                            >
                                Get in contact
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Marquee Banner */}
                <div className="bg-[#b3e469] py-4 overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...Array(10)].map((_, i) => (
                            <span key={i} className="flex items-center mx-8">
                                <span className="font-formula text-black text-lg md:text-xl">
                                    Clover for hospitality
                                </span>
                                <ArrowRight size={20} className="mx-4 text-black" />
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
