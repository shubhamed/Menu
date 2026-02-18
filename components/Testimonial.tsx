"use client";

export function Testimonial() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2074&q=80')`,
                    }}
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 h-full min-h-[600px] flex flex-col justify-center">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Quote Mark */}
                    <div className="text-[#b3e469] text-5xl md:text-7xl mb-8 font-graphik font-bold opacity-80">
                        “
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-formula text-white mb-16 leading-tight uppercase italic">
                        I consider Clover our third arm ... allowing us to focus on business not paperwork.
                    </h2>

                    {/* Author Card - Overlay Bottom Left */}
                    <div className="absolute bottom-12 left-12 md:left-24 bg-black/40 backdrop-blur-md p-6 rounded-3xl border border-white/10 flex items-center gap-5 shadow-2xl">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-zinc-800">
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                                alt="Robert Cucco"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="text-left">
                            <p className="text-white font-bold text-lg font-graphik">Robert Cucco</p>
                            <p className="text-white/60 text-sm font-graphik tracking-wide">Table 87</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
