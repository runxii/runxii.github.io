import { useId } from 'react'

interface NoiseOverlayProps {
  filterId?: string
}

export default function NoiseOverlay({ filterId }: NoiseOverlayProps) {
  const generatedId = useId()
  const id = filterId || generatedId

  return (
    <svg
      className="pointer-events-none absolute h-0 w-0"
      aria-hidden="true"
    >
      <defs>
        <filter id={id}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.4"
            numOctaves="3"
            stitchTiles="stitch"
            result="noiseOut"
          />
          <feColorMatrix
            type="saturate"
            values="0"
            in="noiseOut"
            result="desaturatedNoise"
          />
          <feBlend
            in="SourceGraphic"
            in2="desaturatedNoise"
            mode="overlay"
          />
        </filter>
      </defs>
    </svg>
  )
}
