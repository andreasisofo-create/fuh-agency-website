"use client"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

// Defines the shape of our influencer data
type Influencer = {
    name: string
    role: string
    bio: string
    instagram: string
    tiktok?: string
    image: string
    originData: { label: string; value: number; color: string }[]
    ageData: { label: string; value: number; color: string }[]
}

const influencers: Influencer[] = [
    {
        name: "Matteo Quoiani",
        role: "Cannalier",
        bio: "The bridge between gourmet cuisine and cannabis. Private chef for high-profile clients and Secret Sesh Cup 2022 winner.",
        instagram: "201K",
        tiktok: "1.9K",
        image: "/assets/uploaded_media_0.jpg", // Mapping based on order, assuming 0 is Matteo
        originData: [
            { label: "Italy", value: 47.6, color: "#2d5a27" },
            { label: "USA", value: 11.9, color: "#1a3d1a" },
            { label: "S.amer", value: 25.7, color: "#4ade80" },
            { label: "Others", value: 14.8, color: "#888888" },
        ],
        ageData: [
            { label: "18-24", value: 64, color: "#2d5a27" },
            { label: "25-34", value: 33, color: "#4ade80" },
            { label: "35+", value: 3, color: "#1a3d1a" },
        ],
    },
    {
        name: "The Smoking Duo",
        role: "Vincenzo & Carlotta",
        bio: "A couple sharing their daily cannabis experiences and infused Italian cuisine. Fresh, engaging, and authentic.",
        instagram: "256K",
        image: "/assets/uploaded_media_1.jpg",
        originData: [
            { label: "Other", value: 50, color: "#888888" },
            { label: "Italy", value: 14, color: "#2d5a27" },
            { label: "Brazil", value: 9.9, color: "#4ade80" },
            { label: "USA", value: 7.5, color: "#1a3d1a" },
        ],
        ageData: [
            { label: "18-24", value: 36, color: "#2d5a27" },
            { label: "25-34", value: 56, color: "#4ade80" },
            { label: "35+", value: 8, color: "#1a3d1a" },
        ],
    },
    {
        name: "Jolle e Parole",
        role: "Gessica",
        bio: "Joints and conversations. Psychiatrist, marketing consultant, and founder of FlyingHigh travel agency.",
        instagram: "N/A",
        tiktok: "27K",
        image: "/assets/uploaded_media_2.jpg",
        originData: [
            { label: "Italy", value: 77, color: "#2d5a27" },
            { label: "Europe", value: 3.8, color: "#4ade80" },
            { label: "Other", value: 19.2, color: "#888888" },
        ],
        ageData: [
            { label: "18-24", value: 42, color: "#2d5a27" },
            { label: "25-34", value: 35, color: "#4ade80" },
            { label: "35+", value: 23, color: "#1a3d1a" },
        ],
    },
    {
        name: "Giusesso il Maestro",
        role: "Giuseppe",
        bio: "The Maestro of cannabis content. Navigating the digital space skillfully with unique humor and deep understanding.",
        tiktok: "60K",
        instagram: "N/A",
        image: "/assets/uploaded_media_3.jpg",
        originData: [
            { label: "Italy", value: 70, color: "#2d5a27" },
            { label: "Europe", value: 11.8, color: "#4ade80" },
            { label: "Other", value: 18.2, color: "#888888" },
        ],
        ageData: [
            { label: "18-24", value: 53, color: "#2d5a27" },
            { label: "25-34", value: 26, color: "#4ade80" },
            { label: "35+", value: 21, color: "#1a3d1a" },
        ],
    },
]

// Simple Donut Chart Component using SVG
const DonutChart = ({ data }: { data: { label: string; value: number; color: string }[] }) => {
    let cumulativePercent = 0

    const slices = data.map((slice) => {
        const startAngle = (cumulativePercent * 360) / 100
        const sliceAngle = (slice.value * 360) / 100
        cumulativePercent += slice.value

        // Calculate SVG path for slice
        const x1 = 50 + 50 * Math.cos(Math.PI * startAngle / 180)
        const y1 = 50 + 50 * Math.sin(Math.PI * startAngle / 180)
        const x2 = 50 + 50 * Math.cos(Math.PI * (startAngle + sliceAngle) / 180)
        const y2 = 50 + 50 * Math.sin(Math.PI * (startAngle + sliceAngle) / 180)

        const largeArcFlag = sliceAngle > 180 ? 1 : 0

        const d = [
            `M 50 50`,
            `L ${x1} ${y1}`,
            `A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            `Z`
        ].join(' ')

        return <path d={d} fill={slice.color} key={slice.label} />
    })

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-24 h-24">
                <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    {slices}
                </svg>
                {/* Inner circle for Donut effect */}
                <div className="absolute inset-0 m-auto w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm" />
            </div>
            <div className="mt-2 text-xs text-gray-400 grid grid-cols-2 gap-x-2">
                {data.map(d => <div key={d.label} className="flex items-center gap-1"><div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />{d.label}</div>)}
            </div>
        </div>
    )
}

export function RosterSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <section id="roster" className="py-24 bg-fuh-dark relative overflow-hidden">
            {/* Background Asset */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/roster-bg.png"
                    alt="Talent Roster Background"
                    fill
                    className="object-cover opacity-20"
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-fuh-black via-fuh-black/95 to-fuh-black/90" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-2 leading-tight">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuh-primary to-fuh-accent">Roster</span></h2>
                        <p className="text-zinc-400 uppercase tracking-widest text-sm font-medium">Talent & Influence</p>
                    </div>

                    <div className="flex gap-3">
                        <Button size="icon" variant="outline" onClick={scrollPrev} className="rounded-full border-white/10 bg-white/5 hover:bg-fuh-primary hover:border-fuh-primary hover:text-fuh-black transition-all duration-300">
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button size="icon" variant="outline" onClick={scrollNext} className="rounded-full border-white/10 bg-white/5 hover:bg-fuh-primary hover:border-fuh-primary hover:text-fuh-black transition-all duration-300">
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-6 pb-12">
                        {influencers.map((influencer, index) => (
                            <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6" key={index}>
                                <div className="h-full group relative hover:-translate-y-2 transition-transform duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-fuh-primary/0 via-fuh-primary/0 to-fuh-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <Card className="h-full bg-white/5 border-white/5 overflow-hidden flex flex-col rounded-3xl backdrop-blur-md shadow-xl">
                                        <div className="relative h-72 w-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors duration-500">
                                            {/* Image Placeholder - using placeholder asset for all for now, or the specific image if available */}
                                            <Image
                                                src={influencer.image.includes("uploaded") ? "/assets/avatar-placeholder.png" : influencer.image}
                                                alt={influencer.name}
                                                fill
                                                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transition-transform"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />

                                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                                <div className="w-12 h-1 bg-fuh-primary mb-4 rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                                <h3 className="text-3xl font-bold text-white mb-1 leading-none">{influencer.name}</h3>
                                                <p className="text-fuh-accent text-sm font-medium tracking-wide uppercase">{influencer.role}</p>
                                            </div>
                                        </div>

                                        <CardContent className="p-6 flex-1 flex flex-col bg-zinc-950/30">
                                            <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-4">
                                                {influencer.bio}
                                            </p>

                                            <div className="mb-6 grid grid-cols-2 gap-3">
                                                <div className="bg-white/5 border border-white/5 p-3 rounded-2xl text-center group-hover:border-white/10 transition-colors">
                                                    <Instagram className="w-4 h-4 mx-auto text-zinc-500 mb-1" />
                                                    <span className="block text-xl font-bold text-white tabular-nums">{influencer.instagram}</span>
                                                    <span className="text-[10px] text-zinc-500 uppercase font-medium tracking-wider">Followers</span>
                                                </div>
                                                <div className="bg-white/5 border border-white/5 p-3 rounded-2xl text-center group-hover:border-white/10 transition-colors">
                                                    <svg className="w-4 h-4 mx-auto text-zinc-500 mb-1 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                                                    <span className="block text-xl font-bold text-white tabular-nums">{influencer.tiktok || "-"}</span>
                                                    <span className="text-[10px] text-zinc-500 uppercase font-medium tracking-wider">Followers</span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
                                                <div className="flex flex-col items-center">
                                                    <h4 className="text-[9px] uppercase text-zinc-500 mb-3 font-semibold tracking-wider">Audience Origin</h4>
                                                    <DonutChart data={influencer.originData} />
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <h4 className="text-[9px] uppercase text-zinc-500 mb-3 font-semibold tracking-wider">Age Group</h4>
                                                    <DonutChart data={influencer.ageData} />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
