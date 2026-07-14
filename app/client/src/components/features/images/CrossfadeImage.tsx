import type { CrossfadeImageProps } from '@/types/UiTypes'
import { useState, useEffect, useRef } from 'react'

const CrossfadeImage = ({ src, alt }: CrossfadeImageProps) => {
    const [currentSrc, setCurrentSrc] = useState(src)
    const [prevSrc, setPrevSrc] = useState<string | null>(null)
    const [loaded, setLoaded] = useState(false)
    const timeoutRef = useRef<number | null>(null)

    useEffect(() => {
        if (src === currentSrc) return
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
                timeoutRef.current = window.setTimeout(() => {
                    setPrevSrc(null)
                }, 1000) // match duration below
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
                className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ease-out ${
                    loaded ? 'opacity-100' : 'opacity-0'
                }`}
            />
        </div>
    )
}

export default CrossfadeImage