"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, TrendingUp, Calendar, Award } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-fuh-dark pt-20">

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/assets/uploaded_media_0_1769624861404.png"
            alt="FUH Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            FUH
          </h1>
          <p className="text-2xl md:text-4xl text-zinc-300 font-light mb-12">
            Influencer Marketing for Cannabis Brands
          </p>
          <Link href="/experience">
            <Button size="lg" className="bg-fuh-primary hover:bg-fuh-accent text-fuh-dark font-bold px-12 py-6 text-lg rounded-full">
              Scopri di più
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            The next big
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "25,000+", label: "Influencer Reach" },
              { icon: TrendingUp, value: "3,900+", label: "Engagement Rate" },
              { icon: Calendar, value: "500+", label: "Events Hosted" },
              { icon: Award, value: "65,000+", label: "Community Members" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-emerald-950/40 border border-white/10 rounded-2xl p-8 text-center hover:border-fuh-primary/50 transition-all duration-300"
              >
                <stat.icon className="w-10 h-10 text-fuh-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spannabis Experience Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              We bring you to the<br />Spannabis Experience.
            </h2>
            <p className="text-xl text-zinc-300 text-center mb-16">
              Vivi una settimana esclusiva a Barcellona durante Spannabis 2025
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-950/40 border border-white/10 rounded-3xl p-10 hover:border-fuh-primary/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Chi sei?</h3>
                <p className="text-zinc-300 mb-6">
                  Sei un influencer, content creator o professionista del settore cannabis? Unisciti a noi per un'esperienza indimenticabile.
                </p>
                <Link href="/experience">
                  <Button variant="outline" className="rounded-full border-white/20 hover:bg-white/10">
                    Scopri l'Experience
                  </Button>
                </Link>
              </div>
              <div className="bg-emerald-950/40 border border-white/10 rounded-3xl p-10 hover:border-fuh-primary/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Cosa offriamo?</h3>
                <p className="text-zinc-300 mb-6">
                  Workshop esclusivi, accesso VIP a Spannabis, networking con i top influencer europei e molto altro.
                </p>
                <Link href="/packages">
                  <Button variant="outline" className="rounded-full border-white/20 hover:bg-white/10">
                    Vedi i Pacchetti
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Workshop Esclusivi
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link href="/workshops/olio-burro" className="group">
              <div className="bg-emerald-950/40 border border-white/10 rounded-3xl overflow-hidden hover:border-fuh-primary/50 transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src="/assets/uploaded_media_0.jpg"
                    alt="Workshop Olio & Burro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-fuh-primary transition-colors">
                    WorkShop Olio & Burro
                  </h3>
                  <p className="text-zinc-300 mb-4">
                    Corso di Cucina con Cannabis E Cannabinoidi
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Lunedì 10 Marzo 2025 • 9:30-13:30
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/workshops/terpeni" className="group">
              <div className="bg-emerald-950/40 border border-white/10 rounded-3xl overflow-hidden hover:border-fuh-primary/50 transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src="/assets/uploaded_media_2.jpg"
                    alt="Workshop Terpeni"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-fuh-primary transition-colors">
                    WorkShop Terpeni
                  </h3>
                  <p className="text-zinc-300 mb-4">
                    Corso di Cucina con Cannabis E Cannabinoidi
                  </p>
                  <p className="text-zinc-400 text-sm">
                    Mercoledì 12 marzo 2025 • 9:30-13:30
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto per l'esperienza?
          </h2>
          <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
            Non perdere l'occasione di vivere Spannabis 2025 con noi. Posti limitati!
          </p>
          <Link href="https://flyinhigh.com" target="_blank">
            <Button size="lg" className="bg-fuh-primary hover:bg-fuh-accent text-fuh-dark font-bold px-12 py-6 text-lg rounded-full">
              Prenota Ora su flyinhigh.com
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-white mb-4">FUH</div>
          <p className="text-zinc-400 text-sm mb-6">
            Influencer Marketing for Cannabis Brands
          </p>
          <div className="flex justify-center items-center gap-2 text-zinc-500 text-xs">
            <span>© 2025 FUH Agency</span>
            <span>•</span>
            <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
              <span className="text-white font-bold text-sm">21+</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
