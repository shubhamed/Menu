import React from 'react';
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DeviceShowcase } from "@/components/DeviceShowcase";
import { Features } from "@/components/Features";
import { Hardware } from "@/components/Hardware";
import { Stats } from "@/components/Stats";
import { Testimonial } from "@/components/Testimonial";
import { OnlineOrdering } from "@/components/OnlineOrdering";
import { Premium } from "@/components/Premium";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <DeviceShowcase />
            <Features />
            <Hardware />
            <Stats />
            <Testimonial />
            <OnlineOrdering />
            <Premium />
            <Footer />
        </main>
    );
}
