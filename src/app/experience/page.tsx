"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RevealText } from "@/components/animations/reveal-text"
import { RevealImage } from "@/components/animations/reveal-image"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"
import { CheckCircle2, Calendar, MapPin, Users } from "lucide-react"

export default function BarcellonaExperience() {
    return (
        <div className="min-h-screen bg-fuh-dark pt-20">

            {/* Main Content */}
            <main className="container mx-auto px-6 py-16">
                <div className="max-w-6xl mx-auto">
                    {/* Title Section */}
                    <div className="mb-20 text-center md:text-left">
                        <RevealText className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight">
                            Barcellona Influencer Experience
                        </RevealText>
                        <RevealText delay={0.2} className="text-2xl md:text-3xl text-zinc-300 font-light max-w-3xl">
                            Vivi una settimana esclusiva nella villa più mozzafiato di Barcellona durante Spannabis 2025.
                        </RevealText>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                        {/* Left Column - What's Included */}
                        <div>
                            <RevealText className="text-3xl font-bold text-white mb-10">
                                Cosa Include l'Experience
                            </RevealText>
                            <StaggerContainer className="space-y-6" staggerDelay={0.1}>
                                {[
                                    "Soggiorno in una villa di lusso, ideale per rilassarsi e creare contenuti unici.",
                                    "Accesso alla fiera di Spannabis, l'evento più importante del settore.",
                                    "Workshop esclusivi con i migliori influencer del settore cannabis.",
                                    "Ingresso ai migliori Cannabis Social Club di Barcellona.",
                                    "Eventi privati e degustazioni tematiche esclusive.",
                                    "Momenti indimenticabili con creator e professionisti di successo."
                                ].map((item, index) => (
                                    <StaggerItem key={index}>
                                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-950/20 border border-white/5 hover:border-fuh-primary/30 transition-colors">
                                            <CheckCircle2 className="text-fuh-primary mt-1 w-6 h-6 shrink-0" />
                                            <span className="text-zinc-300 text-lg leading-relaxed">{item}</span>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>

                        {/* Right Column - Event Poster */}
                        <div className="space-y-8">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
                                <RevealImage
                                    src="/assets/uploaded_media_3.jpg"
                                    alt="Spannabis Barcelona 2025"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-fuh-dark/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                            <Calendar className="w-4 h-4 text-fuh-primary" />
                                            <span className="text-white text-sm font-medium">9-17 Marzo 2025</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                            <MapPin className="w-4 h-4 text-fuh-primary" />
                                            <span className="text-white text-sm font-medium">Barcellona, Spagna</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-emerald-950/40 border border-white/10 rounded-[3rem] p-12 mb-20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-fuh-primary/5 blur-[100px]" />
                        <div className="grid md:grid-cols-3 gap-12 items-center relative z-10">
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 justify-center md:justify-start">
                                    <Calendar className="w-5 h-5 text-fuh-primary" />
                                    Quando
                                </h3>
                                <p className="text-zinc-300 text-2xl font-medium mb-2">9 - 17 Marzo 2025</p>
                                <p className="text-zinc-400 text-sm">Posti limitati, prenota subito il tuo posto.</p>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white mb-4">Investimento</h3>
                                <div className="flex items-baseline justify-center gap-2">
                                    <span className="text-fuh-primary text-6xl font-black">€420</span>
                                </div>
                                <p className="text-zinc-400 text-sm mt-3 uppercase tracking-widest font-semibold">Volo escluso</p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-4">
                                <div className="w-24 h-24 rounded-full border border-white/10 bg-white/5 flex flex-col items-center justify-center shadow-inner">
                                    <span className="text-white font-black text-3xl">21+</span>
                                    <span className="text-zinc-500 text-[10px] uppercase font-bold">Only</span>
                                </div>
                                <p className="text-zinc-400 text-xs text-center">Vietato ai minori di 21 anni</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center py-10">
                        <Link href="/packages">
                            <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/5 px-16 py-8 text-xl group transition-all duration-300">
                                Vedi i Pacchetti
                            </Button>
                        </Link>
                        <Link href="https://flyinhigh.com" target="_blank">
                            <Button size="lg" className="bg-fuh-primary hover:bg-fuh-accent text-fuh-dark font-bold px-16 py-8 text-xl rounded-full group transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:scale-105">
                                Prenota ora su flyinhigh.com
                                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>

        </div>
    )
}

function ArrowRight(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
