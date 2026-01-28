"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Beaker, Clock, Calendar, MapPin } from "lucide-react"

export default function OlioBurroWorkshop() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20 selection:bg-accent selection:text-black">
            <div className="container mx-auto px-6">
                <Link href="/" className="inline-flex items-center text-accent font-black uppercase tracking-widest text-xs mb-10 group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    TORNA ALLA HOME
                </Link>

                <header className="mb-20">
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter leading-[0.85] mb-6"
                    >
                        WORKSHOP<br />
                        <span className="text-accent">OLIO & BURRO</span>
                    </motion.h1>
                    <p className="text-2xl font-bold italic uppercase tracking-tighter text-zinc-400 max-w-2xl">
                        Corso intensivo di cucina con cannabis: dalla decarbossilazione all'infusione perfetta.
                    </p>
                </header>

                <div className="grid lg:grid-cols-12 gap-1 mb-32 bg-white/5 border border-white/5">
                    <div className="lg:col-span-4 bg-black p-12 space-y-8">
                        <div>
                            <p className="text-accent font-black uppercase text-xs tracking-widest mb-2">QUANDO</p>
                            <p className="text-2xl font-black italic uppercase">10 Mar 2025</p>
                            <p className="text-zinc-500 font-bold">09:30 - 13:30</p>
                        </div>
                        <div>
                            <p className="text-accent font-black uppercase text-xs tracking-widest mb-2">DOVE</p>
                            <p className="text-2xl font-black italic uppercase">Villa Privata</p>
                            <p className="text-zinc-500 font-bold">Barcelona</p>
                        </div>
                        <Button className="h-16 w-full rounded-none bg-accent text-black font-black uppercase text-xl hover:bg-white transition-colors">
                            PRENOTA POSTO
                        </Button>
                    </div>
                    <div className="lg:col-span-8 relative aspect-video grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="/assets/strategy.png"
                            alt="Workshop"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-20">
                    <section className="space-y-10">
                        <h2 className="text-5xl font-black italic uppercase tracking-tighter">PROGRAMMA</h2>
                        <div className="space-y-6">
                            {[
                                "DECARBOSSILAZIONE PROFESSIONALE",
                                "CHIARIFICAZIONE DEI GRASSI",
                                "INFUSIONE CONTROLLATA",
                                "GESTIONE DEI DOSAGGI E CBT"
                            ].map((topic, idx) => (
                                <div key={idx} className="flex gap-6 items-center group">
                                    <span className="text-accent text-4xl font-black italic">0{idx + 1}</span>
                                    <p className="text-2xl font-black italic uppercase border-b-2 border-white/10 group-hover:border-accent transition-colors pb-2 flex-grow">{topic}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="bg-zinc-900 p-12 space-y-8">
                        <div className="w-32 h-32 rounded-none border-4 border-accent overflow-hidden grayscale">
                            <Image
                                src="/assets/agency-team.png"
                                alt="Matteo Quoiani"
                                width={128}
                                height={128}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-accent font-black uppercase text-xs tracking-widest mb-2">HOST</p>
                            <h3 className="text-3xl font-black italic uppercase">Matteo Quoiani</h3>
                            <p className="text-zinc-400 font-medium leading-relaxed mt-4">
                                Maestro nella cucina cannabica, ti guiderà passo dopo passo nella creazione di basi perfette per ogni ricetta.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}
