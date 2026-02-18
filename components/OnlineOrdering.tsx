"use client";

import { ArrowRight, Layers, Globe, CreditCard, Truck } from "lucide-react";

const features = [
    {
        icon: Layers,
        title: "Third-party integrations",
        description: "Connect to leading online ordering platforms and streamline your sales processes for maximum efficiency.",
    },
    {
        icon: Globe,
        title: "Custom website",
        description: "Add online ordering to your website with zero hassle for integrated menu management, order processing, and inventory tracking.",
    },
    {
        icon: CreditCard,
        title: "Hosted checkout",
        description: "Power smooth transactions with a secure, customizable, and mobile-friendly checkout page.",
    },
    {
        icon: Truck,
        title: "Pickup and delivery",
        description: "Streamline operations with a single system for online ordering, menu management, and order processing.",
    },
];

export function OnlineOrdering() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Grid */}
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16 items-start text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-formula text-black leading-tight uppercase italic">
                            All of your online orders, in one place
                        </h2>
                        <div className="pt-2">
                            <p className="text-lg text-gray-600 mb-8 font-graphik leading-relaxed">
                                Drive revenue and deliver more to customers with commission-free online ordering, delivery management, and easy integration with third-party delivery apps.
                            </p>
                            <a
                                href="#online-ordering"
                                className="btn-primary"
                            >
                                Explore Online Ordering
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group p-1 bg-white"
                            >
                                <div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden relative border border-gray-100 group-hover:border-[#b3e469] transition-colors">
                                    <div className="absolute inset-0 flex items-center justify-center p-8">
                                        <feature.icon
                                            size={64}
                                            className="text-black/10 group-hover:text-[#b3e469]/30 transition-colors"
                                        />
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        {/* Mockup elements placeholder */}
                                        <div className="h-1 lg:h-1.5 w-full bg-black/5 rounded-full mb-1" />
                                        <div className="h-1 lg:h-1.5 w-2/3 bg-black/5 rounded-full" />
                                    </div>
                                </div>
                                <h3 className="text-base font-bold text-black font-graphik normal-case not-italic mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-600 font-graphik leading-relaxed">
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
