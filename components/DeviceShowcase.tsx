"use client";

export function DeviceShowcase() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Device Image Container */}
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200 p-8 md:p-16">
                        {/* Wood texture overlay */}
                        <div
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                            {/* Left - Wine and device image */}
                            <div className="flex-1 flex items-center justify-center">
                                <div className="relative">
                                    {/* Device */}
                                    <div className="relative bg-white rounded-2xl shadow-2xl p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                        <div className="w-48 md:w-64 aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden">
                                            {/* Screen content */}
                                            <div className="h-full flex flex-col">
                                                {/* Status bar */}
                                                <div className="bg-gray-800 px-3 py-2 flex justify-between items-center">
                                                    <span className="text-green-400 text-xs">L12</span>
                                                    <div className="flex gap-1">
                                                        <div className="w-8 h-1.5 bg-green-400 rounded" />
                                                        <div className="w-8 h-1.5 bg-green-400/50 rounded" />
                                                    </div>
                                                </div>

                                                {/* Main content */}
                                                <div className="flex-1 bg-gray-900 p-4 text-white">
                                                    <p className="text-lg font-semibold mb-4">Sarah Bennett</p>
                                                    <div className="flex gap-2 mb-4">
                                                        <span className="px-2 py-1 bg-green-600 rounded text-xs">VIP</span>
                                                        <span className="px-2 py-1 bg-orange-600 rounded text-xs">Repeat Diner</span>
                                                    </div>

                                                    <p className="text-sm text-gray-400 mb-2">Order again</p>
                                                    <div className="space-y-2 mb-4">
                                                        <div className="flex justify-between text-sm">
                                                            <span>Tuna Tartare</span>
                                                            <span>$18.00</span>
                                                        </div>
                                                        <div className="flex justify-between text-sm">
                                                            <span>Filet Mignon</span>
                                                            <span>$32.00</span>
                                                        </div>
                                                    </div>

                                                    <div className="border-t border-gray-700 pt-4 mt-4">
                                                        <p className="text-sm text-gray-400">Reservation Details</p>
                                                        <p className="text-xs mt-1">Seating Time: 12:00 pm</p>
                                                    </div>
                                                </div>

                                                {/* Bottom nav */}
                                                <div className="bg-gray-800 px-4 py-3 flex justify-between">
                                                    <span className="text-xs text-gray-400">Diner</span>
                                                    <span className="text-xs text-gray-400">Order</span>
                                                    <span className="text-xs text-orange-400">Check</span>
                                                    <span className="text-xs text-gray-400">Pay</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Clover branding */}
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-200 px-4 py-1 rounded-full flex items-center gap-1">
                                            <svg width="12" height="12" viewBox="0 0 40 40" fill="none" className="text-black">
                                                <path d="M20 0C14.5 0 10 4.5 10 10C10 15.5 14.5 20 20 20C25.5 20 30 15.5 30 10C30 4.5 25.5 0 20 0Z" fill="currentColor" />
                                                <path d="M10 20C4.5 20 0 24.5 0 30C0 35.5 4.5 40 10 40C15.5 40 20 35.5 20 30C20 24.5 15.5 20 10 20Z" fill="currentColor" />
                                                <path d="M30 20C24.5 20 20 24.5 20 30C20 35.5 24.5 40 30 40C35.5 40 40 35.5 40 30C40 24.5 35.5 20 30 20Z" fill="currentColor" />
                                            </svg>
                                            <span className="text-[10px] font-semibold text-black">clover</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Description */}
                            <div className="flex-1 text-center lg:text-left">
                                <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">Table-side ordering</p>
                                <h3 className="text-2xl md:text-3xl font-formula text-black mb-4">
                                    Know your guests before they sit down
                                </h3>
                                <p className="text-gray-600 font-graphik">
                                    Access guest profiles, order history, and preferences instantly. Deliver personalized service that keeps customers coming back.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
