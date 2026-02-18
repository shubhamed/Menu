"use client";

const stats = [
    {
        value: "4M+",
        label: "Devices shipped",
        description: "Used by small businesses across restaurants, retail, and the service industry.",
    },
    {
        value: "#1",
        label: "POS provider",
        description: "Named \"Best in Class\" by Javelin's 2025 Small-Business Point-of-Sale System Scorecard.",
    },
    {
        value: "$337B+",
        label: "Annualized processing volume",
        description: "A testament to Clover's robust and reliable processing capabilities.",
    },
];

export function Stats() {
    return (
        <section className="py-20 md:py-28 bg-[#b3e469]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-formula text-center mb-16 text-black">
                        Run the numbers
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 md:gap-4">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`text-center px-6 ${index < stats.length - 1 ? "md:border-r border-black/20" : ""
                                    }`}
                            >
                                <p className="text-5xl md:text-6xl lg:text-7xl font-formula mb-4 text-black">
                                    {stat.value}
                                </p>
                                <h3 className="text-lg font-semibold mb-2 text-black font-graphik normal-case not-italic">
                                    {stat.label}
                                </h3>
                                <p className="text-sm text-black/70 font-graphik">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
