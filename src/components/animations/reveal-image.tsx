"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

interface RevealImageProps {
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
    delay?: number
    fill?: boolean
}

export function RevealImage({
    src,
    alt,
    width,
    height,
    className = "",
    delay = 0,
    fill = false
}: RevealImageProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.1 }}
            transition={{
                duration: 1,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className={`overflow-hidden ${className}`}
        >
            {fill ? (
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                />
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="object-cover"
                />
            )}
        </motion.div>
    )
}
