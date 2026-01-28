"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram, Linkedin, Twitter, PlayCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-black">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 container mx-auto min-h-screen flex flex-col justify-center">
        <div className="relative z-10 space-y-2">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="text-6xl md:text-[10rem] font-black italic uppercase tracking-tighter leading-[0.85]"
          >
            WE ARE A
          </motion.h1>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "circOut" }}
            className="inline-block bg-accent px-4 py-2"
          >
            <h1 className="text-6xl md:text-[10rem] font-black italic uppercase tracking-tighter leading-[0.85] text-black">
              SOCIALLY-LED
            </h1>
          </motion.div>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "circOut" }}
            className="text-6xl md:text-[10rem] font-black italic uppercase tracking-tighter leading-[0.85]"
          >
            CREATIVE
          </motion.h1>
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "circOut" }}
            className="text-6xl md:text-[10rem] font-black italic uppercase tracking-tighter leading-[0.85]"
          >
            AGENCY
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-1/3 aspect-[4/5] opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <Image
            src="/assets/agency-team.png"
            alt="Creative Team"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* WE ARE SOCIAL SECTION */}
      <section className="py-32 px-6 container mx-auto border-t border-white/10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="absolute -left-10 top-10 bottom-10 right-20 bg-accent origin-left"
            />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[9/16] w-64 md:w-80 mx-auto rounded-[3rem] overflow-hidden border-8 border-black shadow-2xl"
            >
              <Image
                src="/assets/influencer.png"
                alt="Social Content"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter">
              WE ARE SOCIAL
            </h2>
            <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-xl">
              Viviamo e respiriamo la cultura digitale. Non creiamo solo contenuti, creiamo conversazioni che definiscono il mercato della cannabis in Europa.
            </p>
            <Button className="h-16 px-10 rounded-none bg-accent text-black font-black uppercase text-xl hover:bg-white transition-colors group">
              I Nostri Servizi
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* COSA FACCIAMO SECTION */}
      <section className="py-32 bg-accent text-black">
        <div className="container mx-auto px-6">
          <h2 className="text-6xl md:text-[8rem] font-black italic uppercase tracking-tighter mb-20 leading-none">
            COSA<br />FACCIAMO
          </h2>
          <div className="grid md:grid-cols-3 gap-10 border-t border-black pt-10">
            <div className="space-y-4">
              <h3 className="text-3xl font-black italic uppercase">STRATEGY</h3>
              <p className="font-bold text-lg opacity-80">
                Analisi dei trend, posizionamento brand e data-intelligence per dominare la nicchia.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black italic uppercase">CREATIVE</h3>
              <p className="font-bold text-lg opacity-80">
                Produzione visiva di altissimo livello coordinata per social, eventi e campagne offline.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black italic uppercase">INFLUENCE</h3>
              <p className="font-bold text-lg opacity-80">
                La più grande rete di talenti nel settore cannabis in Europa, pronti a dare voce al tuo brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* I NOSTRI LAVORI */}
      <section className="py-32 px-6 container mx-auto">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter">
            I NOSTRI LAVORI
          </h2>
          <Link href="#" className="hidden md:block text-accent font-black uppercase tracking-widest text-sm hover:underline">
            VEDI TUTTI
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="group relative aspect-video bg-zinc-900 overflow-hidden cursor-pointer"
          >
            <Image
              src="/assets/social-event.png"
              alt="Spannabis Event"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-accent font-black uppercase tracking-widest text-xs mb-2">Events & Production</p>
              <h4 className="text-3xl font-black italic uppercase">Spannabis Experience</h4>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="group relative aspect-video bg-zinc-900 overflow-hidden cursor-pointer"
          >
            <Image
              src="/assets/strategy.png"
              alt="Brand Launch"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-accent font-black uppercase tracking-widest text-xs mb-2">Strategy & Data</p>
              <h4 className="text-3xl font-black italic uppercase">Haze Launch 2025</h4>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LET'S BE SOCIAL SECTION */}
      <section className="py-32 px-6 bg-accent">
        <div className="container mx-auto">
          <h2 className="text-6xl md:text-[9rem] font-black italic uppercase tracking-tighter text-black leading-none mb-20">
            LET'S BE<br />SOCIAL
          </h2>
          <form className="max-w-4xl space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <input
                type="text"
                placeholder="NOME"
                className="bg-transparent border-b-4 border-black p-4 text-3xl font-black uppercase placeholder:text-black/30 outline-none focus:border-white transition-colors"
              />
              <input
                type="email"
                placeholder="EMAIL"
                className="bg-transparent border-b-4 border-black p-4 text-3xl font-black uppercase placeholder:text-black/30 outline-none focus:border-white transition-colors"
              />
            </div>
            <textarea
              rows={3}
              placeholder="PARLACI DEL TUO PROGETTO"
              className="w-full bg-transparent border-b-4 border-black p-4 text-3xl font-black uppercase placeholder:text-black/30 outline-none focus:border-white transition-colors"
            />
            <Button className="h-24 w-full bg-black text-white rounded-none font-black uppercase text-3xl hover:bg-white hover:text-black transition-colors">
              INVIA RICHIESTA
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}
