"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, TrendingUp, Calendar, Award } from "lucide-react"
import { RevealText } from "@/components/animations/reveal-text"
import { RevealImage } from "@/components/animations/reveal-image"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-fuh-dark pt-20">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/assets/uploaded_media_0_1769624861404.png"
            alt="FUH Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-9xl font-bold text-white mb-6"
          >
            FUH
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl text-zinc-300 font-light mb-12"
          >
            Influencer Marketing for Cannabis Brands
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/experience">
              <Button
                size="lg"
                className="bg-fuh-primary hover:bg-fuh-accent text-fuh-dark font-bold px-12 py-6 text-lg rounded-full group transition-all duration-300 hover:scale-105"
              >
                Scopri di più
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/10">
        <div className="container mx-auto px-6">
          <RevealText className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            The next big
          </RevealText>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.15}>
            {[
              { icon: Users, value: "25,000+", label: "Influencer Reach" },
              { icon: TrendingUp, value: "3,900+", label: "Engagement Rate" },
              { icon: Calendar, value: "500+", label: "Events Hosted" },
              { icon: Award, value: "65,000+", label: "Community Members" },
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="bg-emerald-950/40 border border-white/10 rounded-2xl p-8 text-center hover:border-fuh-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]"
                >
                  <stat.icon className="w-10 h-10 text-fuh-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zinc-400 text-sm">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Spannabis Experience Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <RevealText className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              We bring you to the<br />Spannabis Experience.
            </RevealText>
            <RevealText delay={0.2} className="text-xl text-zinc-300 text-center mb-16">
              Vivi una settimana esclusiva a Barcellona durante Spannabis 2025
            </RevealText>
            <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.2}>
              <StaggerItem>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-emerald-950/40 border border-white/10 rounded-3xl p-10 hover:border-fuh-primary/50 transition-all duration-300 h-full"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Chi sei?</h3>
                  <p className="text-zinc-300 mb-6">
                    Sei un influencer, content creator o professionista del settore cannabis? Unisciti a noi per un'esperienza indimenticabile.
                  </p>
                  <Link href="/experience">
                    <Button variant="outline" className="rounded-full border-white/20 hover:bg-fuh-primary hover:text-fuh-dark hover:border-fuh-primary transition-all duration-300">
                      Scopri l'Experience
                    </Button>
                  </Link>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-emerald-950/40 border border-white/10 rounded-3xl p-10 hover:border-fuh-primary/50 transition-all duration-300 h-full"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Cosa offriamo?</h3>
                  <p className="text-zinc-300 mb-6">
                    Workshop esclusivi, accesso VIP a Spannabis, networking con i top influencer europei e molto altro.
                  </p>
                  <Link href="/packages">
                    <Button variant="outline" className="rounded-full border-white/20 hover:bg-fuh-primary hover:text-fuh-dark hover:border-fuh-primary transition-all duration-300">
                      Vedi i Pacchetti
                    </Button>
                  </Link>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-24 bg-emerald-950/20">
        <div className="container mx-auto px-6">
          <RevealText className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Workshop Esclusivi
          </RevealText>
          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" staggerDelay={0.2}>
            <StaggerItem>
              <Link href="/workshops/olio-burro">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-3xl bg-emerald-950/40 border border-white/10 hover:border-fuh-primary/50 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <RevealImage
                      src="/assets/uploaded_media_0.jpg"
                      alt="Workshop Olio & Burro"
                      fill
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Workshop Olio & Burro</h3>
                    <p className="text-zinc-400 mb-4">Lunedì 10 Marzo 2025, 9:30-13:30</p>
                    <Button variant="ghost" className="text-fuh-primary hover:text-fuh-accent p-0">
                      Scopri di più <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
            <StaggerItem>
              <Link href="/workshops/terpeni">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-3xl bg-emerald-950/40 border border-white/10 hover:border-fuh-primary/50 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <RevealImage
                      src="/assets/uploaded_media_2.jpg"
                      alt="Workshop Terpeni"
                      fill
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Workshop Terpeni</h3>
                    <p className="text-zinc-400 mb-4">Mercoledì 12 marzo 2025, 9:30-13:30</p>
                    <Button variant="ghost" className="text-fuh-primary hover:text-fuh-accent p-0">
                      Scopri di più <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fuh-dark via-emerald-900/20 to-fuh-dark" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <RevealText>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Pronto per l'esperienza?
            </h2>
          </RevealText>
          <RevealText delay={0.2}>
            <p className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto">
              Non perdere l'occasione di vivere Spannabis 2025 con noi. Prenota ora il tuo posto!
            </p>
          </RevealText>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="https://flyinhigh.com" target="_blank">
              <Button
                size="lg"
                className="bg-fuh-primary hover:bg-fuh-accent text-fuh-dark font-bold px-16 py-7 text-xl rounded-full group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.5)]"
              >
                Prenota Ora su flyinhigh.com
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/assets/logo-gold.png"
              alt="FUH"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-white">FUH</span>
          </div>
          <p className="text-zinc-400 mb-4">Influencer Marketing for Cannabis Brands</p>
          <p className="text-zinc-500 text-sm">21+ Age Restriction</p>
        </div>
      </footer>
    </div>
  )
}
