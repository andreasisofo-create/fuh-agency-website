"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"
import { RevealText } from "@/components/animations/reveal-text"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"

const packages = [
    {
        name: "Pacchetto Platinum",
        icon: "🍃",
        color: "bg-zinc-600",
        duration: "4 giorni / 3 notti",
        description: "Villa con piscina nei pressi di Barcellona",
        features: [
            { title: "Soggiorno", desc: "4 giorni / 3 notti in villa" },
            { title: "Workshop", desc: "x2 cucina cannabica + Ticket Spannabis" },
            { title: "Cena", desc: "x1 Cena infusa con cannabis" },
            { title: "Ingressi", desc: "Accesso ai migliori Cannabis Club" },
            { title: "Networking", desc: "Contatto diretto con top influencer" },
            { title: "Transport", desc: "Trasferimenti locali inclusi" },
        ],
        note: "Posto letto in zona condivisa. Soggiorno 9-11 o 11-13 Marzo.",
        highlight: false
    },
    {
        name: "Pacchetto Diamond",
        icon: "💎",
        color: "bg-fuh-primary",
        duration: "9 giorni / 8 notti",
        description: "L'esperienza completa Spannabis 2025",
        features: [
            { title: "Soggiorno", desc: "9 giorni / 8 notti in villa" },
            { title: "Workshop", desc: "x3 cucina cannabica" },
            { title: "Cena", desc: "x2 Cene infuse con cannabis" },
            { title: "Ingressi", desc: "Accesso Spannabis Full (3 Giorni)" },
            { title: "Welcome Kit", desc: "Premium Welcome Kit incluso" },
            { title: "Networking", desc: "Full networking con top creator" },
        ],
        note: "Garantiamo il posto letto (camera condivisa) 9-17 Marzo.",
        highlight: true
    },
    {
        name: "Pacchetto Gold",
        icon: "⭐",
        color: "bg-yellow-600",
        duration: "2 giorni / 1 notte",
        description: "Soggiorno rapido ma intenso",
        features: [
            { title: "Soggiorno", desc: "2 giorni / 1 notte in villa" },
            { title: "Workshop", desc: "x1 cucina + Ticket Spannabis" },
            { title: "Ingressi", desc: "Accesso Cannabis Club" },
            { title: "Welcome Kit", desc: "Incluso kit di benvenuto" },
            { title: "Transport", desc: "Trasferimenti locali inclusi" },
            { title: "Networking", desc: "2 giorni con top influencer" },
        ],
        note: "Posto letto in zona condivisa. Soggiorno flessibile.",
        highlight: false
    },
]

export default function PackagesPage() {
    return (
        <div className="min-h-screen bg-fuh-dark pt-20">

            {/* Main Content */}
            <main className="container mx-auto px-6 py-24">
                <div className="max-w-7xl mx-auto">
                    {/* Title */}
                    <div className="text-center mb-24">
                        <RevealText className="text-5xl md:text-8xl font-bold text-white mb-6">
                            Scegli il tuo Piano
                        </RevealText>
                        <RevealText delay={0.2} className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            Pacchetti esclusivi pensati per influencer e brand che vogliono vivere Spannabis da protagonisti.
                        </RevealText>
                    </div>

                    {/* Packages Grid */}
                    <StaggerContainer className="grid lg:grid-cols-3 gap-8 mb-20" staggerDelay={0.15}>
                        {packages.map((pkg, index) => (
                            <StaggerItem key={index}>
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className={`relative flex flex-col h-full bg-emerald-950/20 border ${pkg.highlight ? 'border-fuh-primary/50 shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)]' : 'border-white/10'} rounded-[2.5rem] p-10 transition-all duration-300`}
                                >
                                    {pkg.highlight && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-fuh-primary text-fuh-dark text-xs font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                                            Most Popular
                                        </div>
                                    )}

                                    {/* Header */}
                                    <div className="mb-10 text-center">
                                        <div className="text-6xl mb-6">{pkg.icon}</div>
                                        <h2 className="text-3xl font-bold text-white mb-2">{pkg.name}</h2>
                                        <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-fuh-primary text-sm font-semibold mb-4">
                                            {pkg.duration}
                                        </div>
                                        <p className="text-zinc-400 text-sm">{pkg.description}</p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-6 mb-10 flex-grow">
                                        {pkg.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-4">
                                                <div className="p-1 rounded-full bg-fuh-primary/10 mt-0.5">
                                                    <Check className="w-4 h-4 text-fuh-primary" />
                                                </div>
                                                <div>
                                                    <p className="text-white font-bold text-sm leading-tight">{feature.title}</p>
                                                    <p className="text-zinc-500 text-xs mt-1">{feature.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Note */}
                                    <div className="bg-fuh-dark/40 rounded-2xl p-5 mb-8 border border-white/5">
                                        <p className="text-zinc-500 text-[11px] leading-relaxed italic">{pkg.note}</p>
                                    </div>

                                    {/* CTA */}
                                    <Link href="https://flyinhigh.com" target="_blank" className="mt-auto">
                                        <Button className={`w-full ${pkg.highlight ? 'bg-fuh-primary hover:bg-fuh-accent shadow-lg shadow-fuh-primary/20' : 'bg-white/10 hover:bg-white/20 text-white'} text-fuh-dark font-black py-7 rounded-full text-lg uppercase tracking-wider group transition-all duration-300`}>
                                            Prenota Ora
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        </Button>
                                    </Link>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center bg-emerald-950/20 border border-white/5 rounded-[3rem] p-16"
                    >
                        <h3 className="text-4xl font-bold text-white mb-6">Cerchi qualcosa di su misura?</h3>
                        <p className="text-zinc-400 mb-10 max-w-2xl mx-auto text-lg">
                            Se hai esigenze specifiche o sei un'azienda che vuole sponsorizzare l'evento, contattaci per una proposta personalizzata.
                        </p>
                        <Link href="https://flyinhigh.com" target="_blank">
                            <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/5 px-16 py-8 text-xl group">
                                Contattaci per un preventivo
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </main>

        </div>
    )
}
