"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function OfferNeedSection() {
    const needs = [
        "Dedicated and engaged Cannabis Content Creators, each with their TOV and expertise",
        "Availability to create and post content within our collaborations",
    ]

    const provides = [
        "Luxury accommodation and access to exclusive cannabis clubs",
        "Full logistical support, including transfers and professional videographers",
        "High-value brand collaborations with pre-arranged content opportunities",
        "Networking with leading influencers in the cannabis industry",
    ]

    return (
        <section id="offer-need" className="py-32 bg-fuh-black relative overflow-hidden">
            {/* Background Asset */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/offer-need-bg.png"
                    alt="Exchange and Value"
                    fill
                    className="object-cover opacity-30"
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-fuh-black via-fuh-black/95 to-fuh-black/70" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: What We Need */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">We are looking for <span className="text-fuh-accent drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]">Excellence</span>.</h2>
                            <p className="text-zinc-400 text-lg md:text-xl font-light">We select partners who share our vision for quality and innovation.</p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-8 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-fuh-accent"></span>
                                What We Need
                            </h3>
                            <ul className="space-y-6">
                                {needs.map((item, index) => (
                                    <li key={index} className="flex gap-6 group items-start">
                                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-fuh-accent/50 group-hover:bg-fuh-accent/10 transition-colors mt-1">
                                            <ArrowRight size={18} className="text-fuh-accent" />
                                        </div>
                                        <p className="text-lg text-zinc-300 font-light pt-1 group-hover:text-white transition-colors">{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Right: What We Provide (Highlighted) */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="relative z-10 glass-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_0_50px_-20px_rgba(16,185,129,0.2)]"
                        >
                            <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                                <span className="p-3 rounded-xl bg-gradient-to-br from-fuh-primary to-fuh-dark text-white shadow-lg shadow-fuh-primary/20">
                                    <Check size={24} strokeWidth={3} />
                                </span>
                                What We Provide
                            </h3>
                            <ul className="space-y-6">
                                {provides.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-fuh-primary mt-2.5 shrink-0" />
                                        <p className="text-lg text-white font-medium">{item}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 pt-8 border-t border-white/10 text-center">
                                <p className="text-zinc-400 mb-6 font-light">
                                    Ready to join the elite?
                                </p>
                                <Button variant="glow" size="lg" className="w-full text-lg h-14" asChild>
                                    <Link href="#roster">Meet the Roster</Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
