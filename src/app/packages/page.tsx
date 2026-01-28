"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Zap } from "lucide-react"

export default function Packages() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20 selection:bg-accent selection:text-black">
            <div className="container mx-auto px-6">
                <Link href="/" className="inline-flex items-center text-accent font-black uppercase tracking-widest text-xs mb-10 group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    TORNA ALLA HOME
                </Link>

                <header className="mb-20">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter leading-[0.85] mb-6"
                    >
                        OFFERTA<br />ESCLUSIVA
                    </motion.h1>
                    <p className="text-2xl font-bold italic uppercase tracking-tighter text-zinc-400 max-w-2xl">
                        Scegli il livello di accesso alla Spannabis Experience 2025. Posti limitati.
                    </p>
                </header>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* DIAMOND PACKAGE */}
                    <div className="bg-accent p-12 text-black flex flex-col justify-between">
                        <div className="space-y-8">
                            <div className="flex justify-between items-start">
                                <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none">DIAMOND</h2>
                                <Zap className="w-10 h-10" />
                            </div>
                            <p className="text-xl font-bold uppercase tracking-tighter">L'esperienza definitiva senza limiti.</p>
                            <ul className="space-y-4">
                                {[
                                    "Villa Full Access (All-Inclusive)",
                                    "Accesso VIP a tutti i Workshop",
                                    "Networking privato con Top Talent",
                                    "Trasferimenti privati e concierge 24/7",
                                    "Kit Omaggio Supreme Edition"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 font-black italic uppercase">
                                        <div className="w-2 h-2 bg-black rotate-45" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-20">
                            <Link href="https://flyinhigh.com" target="_blank">
                                <Button className="h-20 w-full bg-black text-white rounded-none font-black uppercase text-2xl hover:bg-white hover:text-black transition-colors">
                                    PRENOTA ORA
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* BRONZE PACKAGE */}
                    <div className="border-[10px] border-accent p-12 flex flex-col justify-between">
                        <div className="space-y-8">
                            <div className="flex justify-between items-start">
                                <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none">BRONZE</h2>
                            </div>
                            <p className="text-xl font-bold uppercase tracking-tighter text-zinc-400">Accesso ai workshop e networking.</p>
                            <ul className="space-y-4">
                                {[
                                    "Accesso ai Workshop (Olio o Terpeni)",
                                    "Networking Session Pomeridiana",
                                    "Q&A con Expert Speaker",
                                    "Kit Benvenuto Standard",
                                    "Documentazione Tecnica Digitale"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 font-bold italic uppercase text-zinc-400">
                                        <div className="w-2 h-2 bg-accent rotate-45" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-20">
                            <Link href="https://flyinhigh.com" target="_blank">
                                <Button className="h-20 w-full bg-accent text-black rounded-none font-black uppercase text-2xl hover:bg-white transition-colors">
                                    INFO & PRENOTAZIONE
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
