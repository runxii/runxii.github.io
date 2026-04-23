type DottedBandProps = {
  className?: string;
};

export default function DottedBand({ className = "" }: DottedBandProps) {
  return (
    <div aria-hidden="true" className={`relative ${className}`}>
      <div className="flex flex-col gap-2">
        <div className="h-3 rounded-full bg-[radial-gradient(circle,_rgba(115,217,228,0.95)_2.5px,_transparent_3px)] bg-[length:14px_14px] bg-repeat-x" />
        <div className="h-3 rounded-full bg-[radial-gradient(circle,_rgba(115,217,228,0.9)_2.5px,_transparent_3px)] bg-[length:14px_14px] bg-repeat-x opacity-90" />
        <div className="h-3 rounded-full bg-[radial-gradient(circle,_rgba(115,217,228,0.82)_2.5px,_transparent_3px)] bg-[length:14px_14px] bg-repeat-x opacity-80" />
      </div>
    </div>
  );
}