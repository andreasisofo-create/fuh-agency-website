"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    // Parallax effects
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden bg-fuh-black">
            {/* Background Image with Overlay */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/assets/aurora-bg.png"
                    alt="Abstract Aurora Background"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuh-black/20 to-fuh-black" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    {/* Logo Placeholder - Text for now, replace with Image if found */}
                    <h1 className="text-8xl font-bold tracking-tighter text-white md:text-[10rem] drop-shadow-[0_0_30px_rgba(45,90,39,0.5)]">
                        FUH
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="rounded-full border border-white/20 bg-white/5 px-4 py-1 backdrop-blur-md">
                        <span className="text-sm font-medium text-fuh-accent uppercase tracking-widest">Spannabis 2025</span>
                    </div>

                    <h2 className="max-w-3xl text-3xl font-light leading-relaxed text-gray-200 md:text-5xl font-serif">
                        Influencer Marketing <span className="italic text-fuh-primary">for</span> Cannabis Brands
                    </h2>

                    <div className="mt-8 flex gap-4">
                        <Button variant="glow" size="lg">Explore Options</Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
                    <div className="h-10 w-[1px] bg-gradient-to-b from-white to-transparent" />
                </div>
            </motion.div>
        </section>
    )
}
