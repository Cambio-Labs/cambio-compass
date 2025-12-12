import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight, ClipboardList, Cpu, Rocket } from 'lucide-react';

// --- Constants ---

const STEPS = [
    {
        icon: <ClipboardList className="w-8 h-8 text-brand" />,
        title: 'Share Your Profile',
        description: 'Answer a few quick questions about your business stage, goals, and needs'
    },
    {
        icon: <Cpu className="w-8 h-8 text-brand" />,
        title: 'Get Matched',
        description: 'Our engine instantly filters through hundreds of resources to find your best fits'
    },
    {
        icon: <Rocket className="w-8 h-8 text-brand" />,
        title: 'Access Opportunities',
        description: 'Connect directly with funding, programs, and support tailored to you'
    }
];

const PARTNERS = [
    {
        name: 'NYCHA',
        logo: 'https://www.nyc.gov/assets/nycha/images/content/header/logo.png',
        height: 'h-12'
    },
    {
        name: 'NYC Boss Up',
        logo: 'https://images.squarespace-cdn.com/content/v1/63c04b0861841b657201e426/9f0a1171-3fb0-4724-b1e3-5763fe98cd82/NYCBOSSUP_LOGO_DG%3ALG%3AHO.png',
        height: 'h-10'
    },
    {
        name: 'SBS Connect',
        logo: 'https://sbsconnect.nyc.gov/images/logo.png',
        height: 'h-12'
    },
    {
        name: 'Brooklyn Public Library',
        logo: 'https://www.bklynlibrary.org/themes/custom/bklyn/bpl_logo.svg',
        height: 'h-10'
    },
    {
        name: 'Start Small Think Big',
        logo: 'https://www.startsmallthinkbig.org/themes/sstb_bootstrap/logo.svg',
        height: 'h-10'
    }
];

// --- Sub-Components ---

interface HeroProps {
    onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
    return (
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-brand-light/20 rounded-full blur-3xl opacity-50 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand/10 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="max-w-5xl mx-auto px-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight"
                >
                    Navigate Your Business <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-light">
                        Growth Journey
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Cambio Compass is a fast, personalized matching tool designed to empower low-income entrepreneurs in NYC. The tool simplifies the confusing landscape of business resources by guiding users through a brief, tailored survey. Through a short survey, Cambio Compass instantly curates and filters relevant funding, educational programs, and support opportunities that match both eligibility criteria and specific growth needs.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={onStart}
                        className="group relative bg-brand hover:bg-brand-dark text-white text-lg font-bold px-8 py-4 rounded-xl shadow-xl shadow-brand/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
                    >
                        <span className="relative z-10">Find My Resources</span>
                        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </button>

                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium px-4 py-2">
                        <Compass className="w-4 h-4" />
                        <span>Takes less than 2 minutes</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const HowItWorks: React.FC = () => {
    return (
        <section className="py-12 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How Cambio Compass Works</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We simplify the search for business support so you can focus on what matters most: growing your business
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-light/20 via-brand-light to-brand-light/20 -z-10" />

                    {STEPS.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group"
                        >
                            <div className="w-16 h-16 bg-brand-light/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Partners: React.FC = () => {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Partner Organizations</h3>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {PARTNERS.map((partner, index) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center justify-center"
                        >
                            <img
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                className={`${partner.height} w-auto object-contain max-w-[150px]`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Main Component ---

interface LandingPageProps {
    onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    return (
        <div className="flex-1">
            <Hero onStart={onStart} />
            <HowItWorks />
            <Partners />
        </div>
    );
};

export default LandingPage;
