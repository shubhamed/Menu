import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { TrustBar } from './TrustBar';
import { Problem } from './Problem';
import { DualExperience } from './DualExperience';
import { BeforeAfter } from './BeforeAfter';
import { HowItWorks } from './HowItWorks';
import { AIEngine } from './AIEngine';
import { Results } from './Results';
import { ROICalculator } from './ROICalculator';
import { VSDelivery } from './VSDelivery';
import { UseCases } from './UseCases';
import { SocialProof } from './SocialProof';
import { NoRiskBanner } from './NoRiskBanner';
import { Pricing } from './Pricing';
import { FAQ } from './FAQ';
import { FinalCTA } from './FinalCTA';
import { LandingFooter } from './LandingFooter';

export function MinuteMenusLanding() {
    return (
        <main className="antialiased" style={{ fontFamily: 'var(--font-primary)' }}>
            <Navbar />
            <Hero />
            <TrustBar />
            <Problem />
            <DualExperience />
            <BeforeAfter />
            <HowItWorks />
            <AIEngine />
            <Results />
            <ROICalculator />
            <VSDelivery />
            <UseCases />
            <SocialProof />
            <NoRiskBanner />
            <Pricing />
            <FAQ />
            <FinalCTA />
            <LandingFooter />
        </main>
    );
}
