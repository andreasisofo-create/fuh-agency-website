"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RevealText } from "@/components/animations/reveal-text"
import { RevealImage } from "@/components/animations/reveal-image"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, ArrowLeft, CheckCircle2, Beaker } from "lucide-react"

export default function TerpeniWorkshop() {
    return (
        <div className="min-h-screen bg-fuh-dark pt-20 text-white">

            {/* Main Content */}
            <main className="container mx-auto px-6 py-20">
                <div className="max-w-6xl mx-auto">

                    <Link href="/" className="inline-flex items-center text-fuh-primary hover:text-fuh-accent transition-colors mb-12 group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Torna alla Home
                    </Link>

                    {/* Header Section */}
                    <div className="mb-20">
                        <RevealText className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase">
                            WorkShop<br />
                            <span className="text-yellow-500">Terpeni</span>
                        </RevealText>
                        <RevealText delay={0.2} className="text-2xl md:text-3xl text-zinc-300 font-light max-w-3xl">
                            Scopri l'anima delle piante: come utilizzare i terpeni per elevare le tue creazioni culinarie.
                        </RevealText>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 mb-24">
                        {/* Left Column - Details */}
                        <div className="space-y-12">
                            <StaggerContainer className="grid sm:grid-cols-2 gap-8" staggerDelay={0.1}>
                                <StaggerItem>
                                    <div className="p-8 rounded-[2rem] bg-emerald-950/20 border border-white/5 space-y-4">
                                        <Calendar className="w-8 h-8 text-yellow-500" />
                                        <h3 className="text-xl font-bold">Data</h3>
                                        <p className="text-zinc-400">Mercoledì 12 Marzo 2025</p>
                                    </div>
                                </StaggerItem>
                                <StaggerItem>
                                    <div className="p-8 rounded-[2rem] bg-emerald-950/20 border border-white/5 space-y-4">
                                        <Clock className="w-8 h-8 text-yellow-500" />
                                        <h3 className="text-xl font-bold">Orario</h3>
                                        <p className="text-zinc-400">09:30 - 13:30</p>
                                    </div>
                                </StaggerItem>
                                <StaggerItem>
                                    <div className="p-8 rounded-[2rem] bg-emerald-950/20 border border-white/5 space-y-4">
                                        <MapPin className="w-8 h-8 text-yellow-500" />
                                        <h3 className="text-xl font-bold">Location</h3>
                                        <p className="text-zinc-400">In Villa / Online Zoom</p>
                                    </div>
                                </StaggerItem>
                            </StaggerContainer>

                            <div className="space-y-6">
                                <RevealText className="text-3xl font-bold mb-6">Programma del corso</RevealText>
                                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                                    {[
                                        "Introduzione scientifica ai terpeni",
                                        "Metodi di estrazione e utilizzo sicuro",
                                        "Scelta delle strain e abbinamenti aromatici",
                                        "Creazione di una ricetta terpenica personalizzata"
                                    ].map((item, idx) => (
                                        <StaggerItem key={idx}>
                                            <div className="flex items-center gap-3">
                                                <Beaker className="w-5 h-5 text-yellow-500" />
                                                <span className="text-zinc-300 text-lg">{item}</span>
                                            </div>
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="relative aspect-square md:aspect-auto md:h-full rounded-[3rem] overflow-hidden shadow-2xl group">
                            <RevealImage
                                src="/assets/uploaded_media_2.jpg"
                                alt="Terpeni workshop immersion"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-fuh-dark via-transparent to-transparent opacity-40" />
                        </div>
                    </div>

                    {/* Presenter Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-emerald-950/40 border border-white/10 rounded-[3rem] p-12 mb-20 flex flex-col md:flex-row items-center gap-10"
                    >
                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-yellow-500/30 flex-shrink-0 shadow-2xl">
                            <Image
                                src="/assets/uploaded_media_0.jpg"
                                alt="Matteo Quoiani"
                                fill
                                className="object-cover scale-150"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-yellow-500 font-black uppercase tracking-widest text-sm mb-2">Expert Speaker</p>
                            <h3 className="text-4xl font-black mb-4">Matteo Quoiani</h3>
                            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
                                Con anni di esperienza nell'estrazione e nell'utilizzo dei terpeni, Matteo ti svelerà i segreti per trasformare ogni piatto in un'esperienza multisensoriale.
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <div className="text-center py-10">
                        <Link href="https://flyinhigh.com" target="_blank">
                            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-black px-20 py-10 text-2xl rounded-full group transition-all duration-500 shadow-[0_0_50px_-10px_rgba(234,179,8,0.4)] hover:scale-105">
                                Prenota il tuo posto
                                <ArrowLeft className="ml-3 w-6 h-6 rotate-180 group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </Link>
                        <p className="text-zinc-500 mt-8 text-sm uppercase tracking-widest font-bold">21+ Event • Science & Flavour immersion</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
