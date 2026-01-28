"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, Star, MapPin, Calendar } from "lucide-react"

export default function Experience() {
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
                        THE<br />EXPERIENCE
                    </motion.h1>
                    <p className="text-2xl font-bold italic uppercase tracking-tighter text-zinc-400 max-w-2xl">
                        Una settimana esclusiva nel cuore pulsante di Barcellona durante la Spannabis 2025.
                    </p>
                </header>

                <div className="grid lg:grid-cols-2 gap-20 mb-32">
                    <div className="relative aspect-square grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden bg-zinc-900">
                        <Image
                            src="/assets/influencer.png"
                            alt="Experience Visual"
                            fill
                            className="object-cover scale-110 hover:scale-100 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 border-[20px] border-black pointer-events-none" />
                    </div>
                    <div className="space-y-12 flex flex-col justify-center">
                        <section className="space-y-6">
                            <h2 className="text-4xl font-black italic uppercase tracking-tighter text-accent">COSA TI ASPETTA</h2>
                            <div className="space-y-4">
                                {[
                                    { title: "NETWORKING", desc: "Accesso ai VIP party e cene esclusive con i top influencer europei." },
                                    { title: "KNOWLEDGE", desc: "Workshop tecnici su estrazioni, terpeni e marketing digitale." },
                                    { title: "LUXURY", desc: "Soggiorno in una villa privata con ogni comfort e servizio personalizzato." }
                                ].map((item, idx) => (
                                    <div key={idx} className="border-l-4 border-accent pl-6 py-2">
                                        <h3 className="text-xl font-black italic uppercase">{item.title}</h3>
                                        <p className="text-zinc-500 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <Button className="h-16 px-10 rounded-none bg-accent text-black font-black uppercase text-xl hover:bg-white transition-colors">
                            SCOPRI I PACCHETTI
                        </Button>
                    </div>
                </div>

                {/* STATS / DETAILS */}
                <div className="grid md:grid-cols-3 gap-1 px-1 bg-white/5 border border-white/5">
                    {[
                        { label: "LOCATION", val: "BARCELONA VILLA" },
                        { label: "DATE", val: "10-15 MARZO 2025" },
                        { label: "ACCESS", val: "ULTRA EXCLUSIVE" }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-black p-10 space-y-2">
                            <p className="text-accent font-black uppercase text-xs tracking-widest">{stat.label}</p>
                            <p className="text-3xl font-black italic uppercase tracking-tighter">{stat.val}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
