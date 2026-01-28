"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Beaker } from "lucide-react"

export default function TerpeniWorkshop() {
    return (
        <main className="min-h-screen bg-black text-white pt-32 pb-20 selection:bg-accent selection:text-black">
            <div className="container mx-auto px-6">
                <Link href="/" className="inline-flex items-center text-accent font-black uppercase tracking-widest text-xs mb-10 group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    TORNA ALLA HOME
                </Link>

                <header className="mb-20">
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter leading-[0.85] mb-6"
                    >
                        SCIENCE OF<br />
                        <span className="text-accent">TERPENES</span>
                    </motion.h1>
                    <p className="text-2xl font-bold italic uppercase tracking-tighter text-zinc-400 max-w-2xl">
                        Esplora il profilo aromatico e terapeutico dei terpeni. Un workshop sensoriale unico.
                    </p>
                </header>

                <div className="grid lg:grid-cols-2 gap-10 mb-32">
                    <div className="relative aspect-square grayscale hover:grayscale-0 transition-all duration-700 bg-zinc-900 border-[20px] border-black overflow-hidden">
                        <Image
                            src="/assets/social-event.png"
                            alt="Terpenes Science"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="space-y-12">
                            <div className="p-10 border-l-8 border-accent">
                                <h3 className="text-accent font-black uppercase text-xs tracking-widest mb-4">DETTAGLI</h3>
                                <div className="space-y-2">
                                    <p className="text-3xl font-black italic uppercase tracking-tighter">12 Marzo 2025</p>
                                    <p className="text-xl font-bold italic uppercase text-zinc-400">Barcelona / Private Lounge</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { t: "ESTRAZIONE", d: "Tecniche avanzate" },
                                    { t: "PAIRING", d: "Abbinamenti culinari" },
                                    { t: "EFFETTI", d: "Sinergia CBD/THC" },
                                    { t: "PRATICA", d: "Creazione miscele" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-zinc-900 p-6">
                                        <p className="text-accent font-black uppercase text-[10px] tracking-widest">{item.t}</p>
                                        <p className="text-sm font-bold uppercase">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Link href="https://flyinhigh.com" target="_blank" className="mt-10">
                            <Button className="h-20 w-full rounded-none bg-accent text-black font-black uppercase text-2xl hover:bg-white transition-colors">
                                PARTECIPA AL WORKSHOP
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
