interface WaveLineProps {
  className?: string
}

export default function WaveLine({ className = '' }: WaveLineProps) {
  return (
    <div aria-hidden="true" className={`w-full overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 1200 80"
        className="h-14 w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0,42 C80,0 140,84 220,42 C300,-4 360,84 440,44 C520,4 580,84 660,42 C740,-2 800,84 880,43 C960,-6 1040,84 1120,40 C1160,10 1180,50 1200,34"
          fill="none"
          stroke="rgba(20,20,20,0.92)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
