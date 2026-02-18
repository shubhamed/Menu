"use client";

import { ArrowRight, BarChart3, Users, Globe, Heart } from "lucide-react";

const features = [
    {
        icon: BarChart3,
        title: "See top-performing dishes",
        description: "Track your bestsellers and optimize your menu with real-time analytics.",
    },
    {
        icon: Users,
        title: "Manage staff, payroll, and scheduling",
        description: "Keep your team organized with integrated employee management.",
    },
    {
        icon: Globe,
        title: "Keep online orders on one platform",
        description: "Consolidate all your delivery and pickup orders in a single dashboard.",
    },
    {
        icon: Heart,
        title: "Turn first-time guests into regulars",
        description: "Build loyalty with customer profiles and personalized engagement.",
    },
];

export function Features() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Grid */}
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16 items-start">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-formula text-black leading-tight">
                            Keep things flowing with the all-in-one restaurant POS
                        </h2>
                        <div className="pt-2">
                            <p className="text-lg text-gray-600 mb-8 font-graphik leading-relaxed">
                                Transform your restaurant business with Clover's integrated software solution, designed to streamline operations, enhance guest experiences, and boost profitability through insights.
                            </p>
                            <a
                                href="#food-beverage"
                                className="btn-primary"
                            >
                                Explore Food & Beverage
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={feature.title}
                                className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 hover:bg-[#b3e469] transition-all duration-300 cursor-pointer border border-gray-100/50"
                            >
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <feature.icon
                                        size={32}
                                        className="text-black"
                                    />
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-black font-graphik normal-case not-italic">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-600 group-hover:text-black/80 transition-colors font-graphik leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
