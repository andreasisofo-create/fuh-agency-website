"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const packages = [
    {
        name: "Pacchetto Platinum",
        icon: "🍃",
        color: "from-zinc-600 to-zinc-700",
        duration: "4 giorni / 3 notti in villa con piscina nei pressi di Barcellona",
        features: [
            { title: "Soggiorno", desc: "4 giorni / 3 notti in villa con piscina nei pressi di barcellona" },
            { title: "Workshop", desc: "x2 di cucina cannabica e ticket x3 giorni Spannabis (a seconda del tuo piano)" },
            { title: "Cena", desc: "x1 infusi con cannabis" },
            { title: "Ingressi", desc: "Nei migliori cannabis Club del settore" },
            { title: "Networking", desc: "x4 giorni a contatto con i top cannabis influencer europei" },
            { title: "Trasferimenti", desc: "Tutti i transfer da/per l'aeroporto, villa-fiera-centro tranne i da/per l'aeroporto" },
        ],
        note: "Garantiamo il posto letto in zone condivise con altri forniremo in loco sacca e pelo in comodato d'uso. Soggiorno di 3 notti a scelta tra 9-11 Marzo o 11-13 Marzo. Meeting Point in Villa per chi arriva prima. In Villa per chi arriva tra il 9 e il 13 Marzo.",
    },
    {
        name: "Pacchetto Diamond",
        icon: "💎",
        color: "from-emerald-600 to-emerald-700",
        duration: "9 giorni / 8 notti in villa con piscina nei pressi di Barcellona",
        features: [
            { title: "Soggiorno", desc: "9 giorni / 8 notti in villa con piscina nei pressi di Barcellona" },
            { title: "Workshop", desc: "x3 di cucina cannabica" },
            { title: "Cena", desc: "x2 infusi con cannabis" },
            { title: "Ingressi", desc: "Accesso Spannabis x3 Giorni" },
            { title: "Welcome Kit", desc: "Incluso con welcome kit e benvenuto" },
            { title: "Trasferimenti", desc: "Tutti i transfer per/da/per villa-fiera-centro tranne i da/per l'aeroporto" },
            { title: "Networking", desc: "Nei migliori cannabis club e ai principali eventi del settore" },
            { title: "Networking", desc: "9 giorni a contatto con i top cannabis influencer europei" },
        ],
        note: "Garantiamo il posto letto ma NON la camera ad uso esclusivo con soggiorno di 8 notti a partire dal 9-17 Marzo.",
    },
    {
        name: "Pacchetto Gold",
        icon: "⭐",
        color: "from-yellow-600 to-yellow-700",
        duration: "x2 giorni / 1 notte in villa con piscina nei pressi di barcellona",
        features: [
            { title: "Soggiorno", desc: "x2 giorni / 1 notte in villa con piscina nei pressi di barcellona" },
            { title: "Workshop", desc: "x1 di cucina e ticket x1 giorno Spannabis (a seconda del tuo piano)" },
            { title: "Ingressi", desc: "Nei migliori cannabis club" },
            { title: "Welcome Kit", desc: "Incluso benvenuto" },
            { title: "Trasferimenti", desc: "Tutti i transfer da gruppo villa-fiera-centro tranne i da/per l'aeroporto" },
            { title: "Networking", desc: "2 giorni a contatto con i top cannabis influencer europei" },
        ],
        note: "Garantiamo il posto letto in zone condivise con altri forniremo in loco sacca e pelo in comodato d'uso. Soggiorno di 1 notte a scelta tra 9 e 11 Marzo o 11 e 13 Marzo. Meeting Point in Villa per chi arriva tra il 9 e il 13 Marzo e il 9 e il 16 Marzo.",
    },
]

export default function PackagesPage() {
    return (
        <div className="min-h-screen bg-fuh-dark">
            {/* Header */}
            <header className="border-b border-white/10 py-6">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="text-2xl font-bold text-white">FUH</div>
                        <span className="text-sm text-zinc-300">Fuh Agency</span>
                    </div>
                    <Link href="https://flyinhigh.com" target="_blank">
                        <Button variant="outline" className="rounded-full border-white/20 hover:bg-white/10">
                            Book on flyinhigh.com
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    {/* Title */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Scopri i Pacchetti Disponibili
                        </h1>
                        <p className="text-xl text-zinc-300">
                            Scegli l'esperienza perfetta per te
                        </p>
                    </div>

                    {/* Packages Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className="bg-emerald-950/40 border border-white/10 rounded-3xl p-8 hover:border-fuh-primary/50 transition-all duration-300"
                            >
                                {/* Header */}
                                <div className="text-center mb-8">
                                    <div className="text-6xl mb-4">{pkg.icon}</div>
                                    <h2 className="text-3xl font-bold text-white mb-3">{pkg.name}</h2>
                                    <p className="text-zinc-400 text-sm">{pkg.duration}</p>
                                </div>

                                {/* Features */}
                                <div className="space-y-4 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-fuh-primary shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-white font-semibold text-sm">{feature.title}</p>
                                                <p className="text-zinc-400 text-xs">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Note */}
                                <div className="bg-fuh-dark/50 rounded-2xl p-4 mb-6">
                                    <p className="text-zinc-400 text-xs leading-relaxed">{pkg.note}</p>
                                </div>

                                {/* CTA */}
                                <Link href="https://flyinhigh.com" target="_blank" className="block">
                                    <Button className="w-full bg-fuh-primary hover:bg-fuh-accent text-fuh-dark font-bold py-6 rounded-full">
                                        Prenota Ora
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center">
                        <p className="text-zinc-400 mb-6">
                            Non sei sicuro quale pacchetto scegliere? Contattaci per una consulenza personalizzata.
                        </p>
                        <Link href="https://flyinhigh.com" target="_blank">
                            <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/10 px-12 py-6">
                                Contattaci
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
