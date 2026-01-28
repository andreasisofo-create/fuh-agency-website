import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-fuh-black/50 py-8 backdrop-blur-sm">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight text-white">FUH</span>
                    <span className="text-sm text-gray-400">AGENCY</span>
                </div>

                <p className="text-center text-sm text-gray-500 md:text-right">
                    © 2025 FUH Agency. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
