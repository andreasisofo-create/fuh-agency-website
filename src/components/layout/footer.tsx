import Link from "next/link"
import Image from "next/image"

export function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-black/40 py-16 backdrop-blur-xl">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/assets/logo-gold.png"
                                alt="FUH Agency"
                                width={40}
                                height={40}
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            />
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">FUH</span>
                                <span className="text-[10px] tracking-[0.3em] text-fuh-primary font-bold uppercase leading-none mt-1">Agency</span>
                            </div>
                        </Link>
                        <p className="text-zinc-500 text-sm max-w-xs text-center md:text-left">
                            The first luxury cannabis influencer agency in Europe. Redefining the high-end experience.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex gap-8">
                            <Link href="/experience" className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Experience</Link>
                            <Link href="/packages" className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Packages</Link>
                            <Link href="https://flyinhigh.com" target="_blank" className="text-zinc-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold">Contact</Link>
                        </div>
                        <p className="text-zinc-600 text-xs">
                            © 2025 FUH Agency • Barcelona & Europe • High-End Cannabis Culture
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
