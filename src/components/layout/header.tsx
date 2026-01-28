"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Experience", href: "/experience" },
        { name: "Pacchetti", href: "/packages" },
        { name: "Workshop Olio", href: "/workshops/olio-burro" },
        { name: "Workshop Terpeni", href: "/workshops/terpeni" },
    ]

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-fuh-dark/95 backdrop-blur-md transition-all duration-300">
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="text-2xl font-bold text-white">FUH</div>
                    <span className="hidden sm:inline-block text-sm text-zinc-300">Fuh Agency</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link href="https://flyinhigh.com" target="_blank">
                        <Button variant="outline" className="rounded-full border-white/20 hover:bg-white/10 text-white">
                            Book on flyinhigh.com
                        </Button>
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-white/10 bg-fuh-dark/95 backdrop-blur-md"
                    >
                        <div className="flex flex-col space-y-4 p-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-zinc-300 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link href="https://flyinhigh.com" target="_blank" onClick={() => setIsOpen(false)}>
                                <Button className="w-full rounded-full bg-fuh-primary hover:bg-fuh-accent text-fuh-dark font-bold">
                                    Book on flyinhigh.com
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
