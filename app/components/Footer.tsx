'use client'

export const Footer = () => {
  return (
    <footer className="overflow-hidden">
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/30" />
      <div className="h-[1px] w-[500px] bg-gradient-to-r from-transparent via-white/40 glass-animation-3" />
      <div className="flex justify-center py-8 text-sm text-white/50 bg-black/70">
        Build by&nbsp;
        <strong className="text-white/70">
          <a href="mailto:santidalmassoj@gmail.com">Santi</a>
        </strong>
      </div>
    </footer>
  )
}
