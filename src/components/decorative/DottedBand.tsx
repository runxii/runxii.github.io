import blueDots from '@/data/img/blue-dots.png'

interface DottedBandProps {
  className?: string
}

export default function DottedBand({ className = '' }: DottedBandProps) {
  return (
    <div
      aria-hidden="true"
      className={['w-full overflow-hidden', className].join(' ')}
      style={{
        height: '250px',
        backgroundImage: `url(${blueDots.src})`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: '0 center',
        backgroundSize: 'auto 100%',
        animation: 'dotband-scroll 42s linear infinite',
        willChange: 'background-position',
      }}
    />
  )
}
