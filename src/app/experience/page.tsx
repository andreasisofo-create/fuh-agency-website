"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BarcellonaExperience() {
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
                <div className="max-w-6xl mx-auto">
                    {/* Title Section */}
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Barcellona Influencer Experience
                        </h1>
                        <p className="text-2xl md:text-3xl text-zinc-300 font-light">
                            Vivi una settimana esclusiva nella villa più mozzafiato di Barcellona!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column - What's Included */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-8">Cosa Include</h2>
                            <ul className="space-y-4 text-zinc-300 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-fuh-primary mt-1 text-xl">•</span>
                                    <span>Soggiorno in una villa di lusso, ideale per rilassarsi e creare contenuti unici.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-fuh-primary mt-1 text-xl">•</span>
                                    <span>Accesso alla fiera di Spannabis, l'evento più importante del settore.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-fuh-primary mt-1 text-xl">•</span>
                                    <span>Workshop esclusivi con i migliori influencer del settore cannabis.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-fuh-primary mt-1 text-xl">•</span>
                                    <span>Ingresso ai migliori Cannabis Social Club di Barcellona.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-fuh-primary mt-1 text-xl">•</span>
                                    <span>Eventi privati e degustazioni tematiche esclusive.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-fuh-primary mt-1 text-xl">•</span>
                                    <span>Momenti indimenticabili con creator e professionisti di successo.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Right Column - Event Poster */}
                        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/uploaded_media_3.jpg"
                                alt="Spannabis Barcelona 2025"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="bg-emerald-950/40 border border-white/10 rounded-3xl p-10 mb-12">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">Quando</h3>
                                <p className="text-zinc-300 text-lg">
                                    Date: Dal 9 al 17 marzo 2025.
                                </p>
                                <p className="text-zinc-400 text-sm mt-2">
                                    Posti limitati, non perdere l'occasione!
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">Prezzo</h3>
                                <p className="text-fuh-primary text-3xl font-bold">
                                    €420
                                </p>
                                <p className="text-zinc-400 text-sm mt-2">
                                    (volo escluso)
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center">
                                    <span className="text-white font-bold text-2xl">21+</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="/packages">
                            <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/10 px-12 py-6 text-lg">
                                Vedi Pacchetti
                            </Button>
                        </Link>
                        <Link href="https://flyinhigh.com" target="_blank">
                            <Button size="lg" className="bg-fuh-primary hover:bg-fuh-accent text-fuh-dark font-bold px-12 py-6 text-lg rounded-full">
                                Spannabis Week
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
