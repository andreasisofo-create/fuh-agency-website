"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function ExperienceSection() {
    const items = [
        {
            title: "Who are we?",
            text: "Fuh Agency created Spannabis Influencer Week to bridge the gap between brands and cannabis enthusiasts.",
        },
        {
            title: "What do we offer?",
            text: "An exclusive networking and content creation experience.",
        },
        {
            title: "Where?",
            text: "In Barcelona's most luxurious villas.",
        },
        {
            title: "When?",
            text: "During Spannabis 2025 week.",
        },
        {
            title: "Why?",
            text: "To position brands at the center of the cannabis sector's stage.",
        },
        {
            title: "How?",
            text: "Through workshops, live events, and high-quality digital content.",
        },
    ]

    return (
        <section id="experience" className="py-32 bg-fuh-black relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/experience-bg.png"
                    alt="Exclusive Nightlife Event"
                    fill
                    className="object-cover opacity-50"
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fuh-black via-fuh-black/90 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-fuh-black via-transparent to-transparent opacity-80" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20 items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                            We bring you into the <span className="text-fuh-primary drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">Spannabis Experience.</span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-fuh-primary to-transparent rounded-full" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-xl text-zinc-300 font-light leading-relaxed text-balance"
                    >
                        Immerse yourself in a curated journey designed for the cannabis elite. Access exclusive parties, VIP networking, and the heart of Barcelona's nightlife.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-2xl p-8 min-h-[300px] flex flex-col justify-end border border-white/10 bg-zinc-900/80 backdrop-blur-md hover:bg-zinc-800/80 hover:border-fuh-primary/30 transition-all duration-500
                                ${index === 0 ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-fuh-primary/10 to-transparent" : ""}
                            `}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:rotate-12 group-hover:scale-110 origin-top-right">
                                {/* Decorative Icon or Number could go here */}
                                <span className="text-8xl font-black text-white/5 select-none">0{index + 1}</span>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-fuh-accent transition-colors">{item.title}</h3>
                                <p className="text-zinc-400 group-hover:text-zinc-200 transition-colors leading-relaxed">{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
