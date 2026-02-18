"use client";

import { useState } from "react";
import { ArrowRight, Smartphone, Monitor, Tablet, LayoutGrid } from "lucide-react";

const devices = [
    {
        id: "flex",
        name: "Clover Flex",
        description: "A mobile POS for orders tableside. Accept payments anywhere in your business.",
        icon: Smartphone,
        color: "from-green-400 to-emerald-600",
    },
    {
        id: "mini",
        name: "Clover Mini",
        description: "Compact countertop solution perfect for small spaces.",
        icon: Tablet,
        color: "from-blue-400 to-indigo-600",
    },
    {
        id: "station-duo",
        name: "Station Duo",
        description: "Full-featured dual-screen system for high-volume businesses.",
        icon: Monitor,
        color: "from-purple-400 to-violet-600",
    },
    {
        id: "pos-family",
        name: "POS Family",
        description: "Complete POS system setup with all the hardware you need.",
        icon: LayoutGrid,
        color: "from-orange-400 to-red-500",
    },
];

export function Hardware() {
    const [activeDevice, setActiveDevice] = useState(0);
    const ActiveIcon = devices[activeDevice].icon;

    return (
        <section className="py-20 md:py-32 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-formula mb-8 text-black uppercase italic leading-none">
                            Restaurant-grade hardware that hustles as hard as you do
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#shop" className="btn-primary px-10">
                                Shop devices
                                <ArrowRight size={20} />
                            </a>
                            <a href="#explore" className="btn-secondary !text-black !border-black hover:!bg-black/5 px-10">
                                Explore Flex
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Cinematic Showcase */}
                    <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[40px] overflow-hidden mb-12 shadow-2xl group">
                        {/* active Background Image */}
                        <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-105">
                            <img
                                src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=2070&q=80"
                                alt="Clover Flex on Table"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>

                        {/* Overlay Content */}
                        <div className="absolute bottom-12 left-12 z-10 text-white max-w-lg">
                            <h3 className="text-3xl md:text-5xl font-formula mb-4 italic uppercase">
                                {devices[activeDevice].name}
                            </h3>
                            <p className="text-lg opacity-90 font-graphik leading-relaxed">
                                {devices[activeDevice].description}
                            </p>
                        </div>
                    </div>

                    {/* Thumbnail Selector */}
                    <div className="flex justify-center gap-4 px-4 overflow-x-auto no-scrollbar pb-4">
                        {devices.map((device, index) => (
                            <button
                                key={device.id}
                                onClick={() => setActiveDevice(index)}
                                className={`flex-shrink-0 w-32 md:w-40 aspect-square rounded-2xl overflow-hidden border-2 transition-all p-2 bg-gray-50 ${activeDevice === index ? "border-[#b3e469] scale-105 shadow-lg" : "border-transparent opacity-60 hover:opacity-100"
                                    }`}
                            >
                                <div className="w-full h-full bg-white rounded-xl flex items-center justify-center p-4">
                                    <device.icon size={48} className="text-black/20" />
                                </div>
                                <p className="text-[10px] font-bold uppercase tracking-wider mt-2 text-center text-black">
                                    {device.name.replace("Clover ", "")}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
