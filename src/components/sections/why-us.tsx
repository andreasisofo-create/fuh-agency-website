"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function WhyUsSection() {
    const schedule = [
        { day: "Sunday 9th", morning: "", afternoon: "Arrival", evening: "Arrival" },
        { day: "Monday 10th", morning: "Workshop", afternoon: "Club Visit/Content Creation", evening: "Club Visit" },
        { day: "Tuesday 11th - Thursday 13th", morning: "Workshop", afternoon: "Club Visit/Content Creation", evening: "Club Visit" },
        { day: "Friday 14th - Sunday 16th", morning: "Expo Spannabis", afternoon: "Visiting Branded Stands", evening: "Club Visit" },
        { day: "Monday 17th", morning: "Departure", afternoon: "", evening: "" },
    ]

    const brands = ["Raw", "Graveda", "Puffco", "CannabisJob"]
    const clubs = ["Cookies", "Native", "Terpy", "Bulldog BCN"]

    return (
        <section id="why-us" className="py-24 bg-fuh-black relative text-white overflow-hidden">
            {/* Background Asset */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/why-us-bg.png"
                    alt="Strategic Uniqueness"
                    fill
                    className="object-cover opacity-20"
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-fuh-black via-fuh-black/90 to-fuh-black/60" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column: Text & Strategy */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                                Why this <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuh-primary to-fuh-accent">opportunity?</span>
                            </h2>
                            <p className="text-lg text-zinc-300 font-light leading-relaxed mb-12">
                                Our Influencer House is designed to unite top content creators with leading cannabis brands in a seamless and immersive environment. This exclusive space fosters creativity, collaboration, and unforgettable experiences, allowing brands to be showcased in an authentic and engaging way.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:border-fuh-primary/20 transition-colors"
                            >
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-fuh-accent">
                                    <span className="w-2 h-2 bg-fuh-primary rounded-full"></span>
                                    Targeted Brands
                                </h3>
                                <ul className="space-y-3">
                                    {brands.map((brand) => (
                                        <li key={brand} className="flex items-center gap-3 text-gray-400 text-sm">
                                            <CheckCircle2 className="text-fuh-primary w-4 h-4" />
                                            {brand}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:border-fuh-primary/20 transition-colors"
                            >
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-fuh-accent">
                                    <span className="w-2 h-2 bg-fuh-primary rounded-full"></span>
                                    Exclusive Clubs
                                </h3>
                                <ul className="space-y-3">
                                    {clubs.map((club) => (
                                        <li key={club} className="flex items-center gap-3 text-gray-400 text-sm">
                                            <CheckCircle2 className="text-fuh-primary w-4 h-4" />
                                            {club}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Schedule */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="glass-card p-1 rounded-2xl border border-white/5 bg-fuh-black/50 overflow-hidden">
                            <div className="p-6 border-b border-white/5 bg-fuh-primary/5">
                                <h3 className="text-2xl font-bold text-white">Event Schedule</h3>
                            </div>
                            <div className="divide-y divide-white/5">
                                {schedule.map((row, index) => (
                                    <div key={index} className="p-6 hover:bg-white/5 transition-colors group">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                                            <span className="text-fuh-accent font-medium uppercase tracking-wider text-sm">{row.day}</span>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-zinc-400">
                                            {row.morning && <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>{row.morning}</div>}
                                            {row.afternoon && <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500/50"></div>{row.afternoon}</div>}
                                            {row.evening && <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500/50"></div>{row.evening}</div>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
