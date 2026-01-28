import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-black py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-baseline gap-2">
                            <span className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-accent leading-none">
                                FUN
                            </span>
                            <span className="text-xl font-bold italic uppercase tracking-tighter text-white leading-none">
                                FUH Agency
                            </span>
                        </Link>
                        <p className="text-zinc-500 text-xl font-medium max-w-sm leading-relaxed">
                            Definiamo la cultura digitale nel settore cannabis. Creatività senza compromessi.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                            <p className="text-accent font-black uppercase text-xs tracking-widest">NAVIGAZIONE</p>
                            <nav className="flex flex-col gap-2">
                                <Link href="/experience" className="text-zinc-400 hover:text-white transition-colors font-bold uppercase text-sm">Experience</Link>
                                <Link href="/packages" className="text-zinc-400 hover:text-white transition-colors font-bold uppercase text-sm">Packages</Link>
                                <Link href="/workshops/olio-burro" className="text-zinc-400 hover:text-white transition-colors font-bold uppercase text-sm">Workshop</Link>
                            </nav>
                        </div>
                        <div className="space-y-4">
                            <p className="text-accent font-black uppercase text-xs tracking-widest">SOCIAL</p>
                            <nav className="flex flex-col gap-2">
                                <Link href="#" className="text-zinc-400 hover:text-white transition-colors font-bold uppercase text-sm">Instagram</Link>
                                <Link href="#" className="text-zinc-400 hover:text-white transition-colors font-bold uppercase text-sm">Linkedin</Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between text-zinc-600 text-xs font-bold uppercase tracking-widest">
                    <p>© 2025 FUN FUH Agency • BARCELONA</p>
                    <p>ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </footer>
    )
}
