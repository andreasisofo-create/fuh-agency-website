"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { RevealText } from "@/components/animations/reveal-text"
import { RevealImage } from "@/components/animations/reveal-image"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"
import { Calendar, MapPin, Clock, ArrowLeft, CheckCircle2 } from "lucide-react"

export default function OlioBurroWorkshop() {
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
                            <span className="text-fuh-primary">Olio & Burro</span>
                        </RevealText>
                        <RevealText delay={0.2} className="text-2xl md:text-3xl text-zinc-300 font-light max-w-3xl">
                            Corso intensivo di cucina con cannabis e cannabinoidi: dalla teoria alla pratica.
                        </RevealText>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 mb-24">
                        {/* Left Column - Details */}
                        <div className="space-y-12">
                            <StaggerContainer className="grid sm:grid-cols-2 gap-8" staggerDelay={0.1}>
                                <StaggerItem>
                                    <div className="p-8 rounded-[2rem] bg-emerald-950/20 border border-white/5 space-y-4">
                                        <Calendar className="w-8 h-8 text-fuh-primary" />
                                        <h3 className="text-xl font-bold">Data</h3>
                                        <p className="text-zinc-400">Lunedì 10 Marzo 2025</p>
                                    </div>
                                </StaggerItem>
                                <StaggerItem>
                                    <div className="p-8 rounded-[2rem] bg-emerald-950/20 border border-white/5 space-y-4">
                                        <Clock className="w-8 h-8 text-fuh-primary" />
                                        <h3 className="text-xl font-bold">Orario</h3>
                                        <p className="text-zinc-400">09:30 - 13:30</p>
                                    </div>
                                </StaggerItem>
                                <StaggerItem>
                                    <div className="p-8 rounded-[2rem] bg-emerald-950/20 border border-white/5 space-y-4">
                                        <MapPin className="w-8 h-8 text-fuh-primary" />
                                        <h3 className="text-xl font-bold">Location</h3>
                                        <p className="text-zinc-400">In Villa / Online Zoom</p>
                                    </div>
                                </StaggerItem>
                            </StaggerContainer>

                            <div className="space-y-6">
                                <RevealText className="text-3xl font-bold mb-6">Cosa imparerai</RevealText>
                                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                                    {[
                                        "Metodi avanzati di Decarbossilazione",
                                        "Chiarificazione ed estrazione professionale",
                                        "Metodi di infusione bilanciati",
                                        "Gestione dei dosaggi e sicurezza"
                                    ].map((item, idx) => (
                                        <StaggerItem key={idx}>
                                            <div className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-fuh-primary" />
                                                <span className="text-zinc-300 text-lg">{item}</span>
                                            </div>
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>
                            </div>
                        </div>

                        {/* Right Column - Images */}
                        <div className="space-y-8">
                            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                <RevealImage
                                    src="/assets/uploaded_media_0.jpg"
                                    alt="Cannabis butter preparation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                                <RevealImage
                                    src="/assets/uploaded_media_1.jpg"
                                    alt="Cannabis oil extraction"
                                    fill
                                    delay={0.2}
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Presenter Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-emerald-950/40 border border-white/10 rounded-[3rem] p-12 mb-20 flex flex-col md:flex-row items-center gap-10"
                    >
                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-fuh-primary/30 flex-shrink-0 shadow-2xl">
                            <Image
                                src="/assets/uploaded_media_0.jpg"
                                alt="Matteo Quoiani"
                                fill
                                className="object-cover scale-150"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-fuh-primary font-black uppercase tracking-widest text-sm mb-2">Speaker & Host</p>
                            <h3 className="text-4xl font-black mb-4">Matteo Quoiani</h3>
                            <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
                                Maestro nella cucina cannabica, Matteo ti guiderà passo dopo passo nella creazione di basi perfette per i tuoi prodotti o ricette casalinghe.
                            </p>
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <div className="text-center py-10">
                        <Link href="https://flyinhigh.com" target="_blank">
                            <Button size="lg" className="bg-fuh-primary hover:bg-fuh-accent text-fuh-dark font-black px-20 py-10 text-2xl rounded-full group transition-all duration-500 shadow-[0_0_50px_-10px_rgba(16,185,129,0.4)] hover:scale-105">
                                Prenota il tuo posto
                                <ArrowLeft className="ml-3 w-6 h-6 rotate-180 group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </Link>
                        <p className="text-zinc-500 mt-8 text-sm uppercase tracking-widest font-bold">Vietato ai minori di 21 anni • Spannabis 2025</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
