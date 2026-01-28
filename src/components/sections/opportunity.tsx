"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, BadgeCheck, Store, Instagram } from "lucide-react"

export function OpportunitySection() {
    const stats = [
        {
            label: "Enthusiastic attendees",
            value: "25,000+",
            icon: Users,
        },
        {
            label: "Accredited professionals",
            value: "3,900+",
            icon: BadgeCheck,
        },
        {
            label: "Leading industry exhibitors",
            value: "500+",
            icon: Store,
        },
        {
            label: "Instagram followers",
            value: "65,000+",
            icon: Instagram,
        },
    ]

    return (
        <section id="opportunity" className="py-32 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/opportunity-bg.png"
                    alt="Abstract Business Growth"
                    fill
                    className="object-cover opacity-60"
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-fuh-black via-fuh-black/80 to-fuh-black" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuh-primary/5 via-transparent to-transparent opacity-40" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-20 md:text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-4 py-1 rounded-full border border-fuh-primary/20 bg-fuh-primary/5 text-fuh-accent text-sm font-medium tracking-wider uppercase backdrop-blur-sm"
                    >
                        Projected Impact
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-sans font-bold mb-8 text-white tracking-tight leading-tight"
                    >
                        The next big <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuh-primary to-fuh-accent drop-shadow-sm">opportunity</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed text-balance"
                    >
                        <span className="text-white font-medium">Spannabis 2025</span> marks a new milestone. Join the industry's elite in an immersive environment designed for connection, growth, and impact.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 + (index * 0.1) }}
                            className="group"
                        >
                            <div className="relative h-full p-8 rounded-2xl flex flex-col items-center justify-center text-center overflow-hidden border border-white/10 bg-zinc-900/80 backdrop-blur-md hover:bg-zinc-800/80 hover:border-fuh-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_-5px_var(--fuh-primary-500)] shadow-none">
                                {/* Hover Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-fuh-primary/0 via-fuh-primary/0 to-fuh-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-fuh-dark/50 to-fuh-black/50 border border-white/5 text-fuh-accent mb-6 group-hover:scale-110 group-hover:text-fuh-primary transition-all duration-300 shadow-inner">
                                        <stat.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-5xl font-bold text-white mb-2 tracking-tighter tabular-nums group-hover:text-fuh-accent transition-colors duration-300">{stat.value}</h3>
                                    <p className="text-sm text-zinc-400 font-medium uppercase tracking-widest group-hover:text-zinc-300 transition-colors">{stat.label}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
