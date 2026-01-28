"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Experience", href: "/experience" },
        { name: "Pacchetti", href: "/packages" },
        { name: "Workshop Olio", href: "/workshops/olio-burro" },
        { name: "Workshop Terpeni", href: "/workshops/terpeni" },
    ]

    return (
        <motion.header
            initial={{ backgroundColor: "rgba(6, 78, 59, 0)" }}
            animate={{
                backgroundColor: isScrolled ? "rgba(6, 78, 59, 0.95)" : "rgba(6, 78, 59, 0)",
                height: isScrolled ? "60px" : "80px"
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur-md"
        >
            <div className="container mx-auto flex h-full items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <motion.div
                        animate={{ scale: isScrolled ? 0.9 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-baseline gap-1"
                    >
                        <span className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-accent leading-none">
                            FUN
                        </span>
                        <span className="text-lg md:text-xl font-bold italic uppercase tracking-tighter text-white leading-none">
                            FUH Agency
                        </span>
                    </motion.div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fuh-primary group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                    <Link href="https://flyinhigh.com" target="_blank">
                        <Button
                            variant="outline"
                            className="rounded-full border-white/20 hover:bg-fuh-primary hover:text-fuh-dark hover:border-fuh-primary text-white transition-all duration-300"
                        >
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
        </motion.header>
    )
}
