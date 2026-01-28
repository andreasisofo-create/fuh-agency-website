"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Opportunity", href: "#opportunity" },
        { name: "Experience", href: "#experience" },
        { name: "Roster", href: "#roster" },
    ]

    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-fuh-black/50 backdrop-blur-xl transition-all duration-300">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold tracking-tighter text-white">FUH</span>
                    <span className="sr-only">FUH Agency</span>
                    {/* We can replace this with Image component once we identify the logo file in public/assets */}
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button variant="glow" size="sm" asChild>
                        <Link href="#contact">Join Now</Link>
                    </Button>
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
                        className="md:hidden border-b border-white/10 bg-fuh-black/95 backdrop-blur-xl"
                    >
                        <div className="flex flex-col space-y-4 p-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-gray-300 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button variant="glow" className="w-full" asChild onClick={() => setIsOpen(false)}>
                                <Link href="#contact">Join Now</Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
