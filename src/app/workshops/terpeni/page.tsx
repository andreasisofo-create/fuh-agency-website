"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TerpeniWorkshop() {
    return (
        <div className="min-h-screen bg-fuh-dark pt-20">

            {/* Main Content */}
            <main className="container mx-auto px-6 py-16">
                <div className="max-w-5xl mx-auto">
                    {/* Title Section */}
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            WorkShop Terpeni
                        </h1>
                        <p className="text-2xl text-zinc-300 font-light">
                            Corso di Cucina con Cannabis E Cannabinoidi
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* Left Column */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Cosa Imparerai</h2>
                            <ul className="space-y-3 text-zinc-300 text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="text-fuh-primary mt-1">•</span>
                                    <span>Introduzione ai terpeni e al loro metodi di utilizzo.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-fuh-primary mt-1">•</span>
                                    <span>Scelta della strain ideale e abbinamenti in cucina.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-fuh-primary mt-1">•</span>
                                    <span>Preparazione pratica di una ricetta personalizzata.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Right Column */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Dove e Quando</h2>
                            <div className="space-y-4 text-zinc-300 text-lg">
                                <p>
                                    <span className="font-semibold text-white">Data:</span> Mercoledì 12 marzo 2025.
                                </p>
                                <p>
                                    <span className="font-semibold text-white">Orario:</span> Dalle 9:30 alle 13:30.
                                </p>
                                <p>
                                    <span className="font-semibold text-white">Location:</span> In Villa oppure comodamente online su Zoom.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative h-96 rounded-3xl overflow-hidden mb-16">
                        <Image
                            src="/assets/uploaded_media_2.jpg"
                            alt="Terpeni workshop"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Presenter Section */}
                    <div className="bg-emerald-950/40 border border-white/10 rounded-3xl p-8 mb-12">
                        <div className="flex items-center gap-6">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-fuh-primary">
                                <Image
                                    src="/assets/uploaded_media_0.jpg"
                                    alt="Matteo Quoiani"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-zinc-400 text-sm mb-1">Presentato da</p>
                                <h3 className="text-2xl font-bold text-white">Matteo Quoiani</h3>
                            </div>
                        </div>
                    </div>

                    {/* Age Restriction */}
                    <div className="flex justify-end">
                        <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
                            <span className="text-white font-bold text-xl">21+</span>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-12">
                        <Link href="https://flyinhigh.com" target="_blank">
                            <Button size="lg" className="bg-fuh-primary hover:bg-fuh-accent text-fuh-dark font-bold px-12 py-6 text-lg rounded-full">
                                Prenota Ora
                            </Button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}
