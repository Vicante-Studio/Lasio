// import type { CarouselImageProps } from '@/types/UiTypes'
import { useState, useEffect, useRef } from 'react'

interface CrossfadeImageProps {
    src: string
    alt: string
}

const CrossfadeImage = ({ src, alt }: CrossfadeImageProps) => {
    const [currentSrc, setCurrentSrc] = useState(src)
    const [prevSrc, setPrevSrc] = useState<string | null>(null)
    const [loaded, setLoaded] = useState(false)
    const timeoutRef = useRef<number | null>(null)

    useEffect(() => {
        if (src === currentSrc) return

        // keep the old image visible underneath while the new one loads/fades in
        setPrevSrc(currentSrc)
        setCurrentSrc(src)
        setLoaded(false)

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [src])

    const markLoaded = () => {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setLoaded(true)
                // drop the old image after the transition duration finishes
                timeoutRef.current = window.setTimeout(() => {
                    setPrevSrc(null)
                }, 700) // match your duration-700
            })
        })
    }

    return (
        <div className="relative w-full h-full">
            {prevSrc && (
                <img
                    src={prevSrc}
                    alt={alt}
                    className="absolute inset-0 object-cover w-full h-full"
                />
            )}
            <img
                key={currentSrc}
                src={currentSrc}
                alt={alt}
                onLoad={markLoaded}
                ref={(img) => { if (img?.complete) markLoaded(); }}
                className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-[2000ms] ease-in-out ${
                    loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
            />
        </div>
    )
}

export default CrossfadeImage