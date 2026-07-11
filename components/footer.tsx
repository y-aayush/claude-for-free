"use client"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full px-4 md:px-12 py-12 border-t border-border bg-background">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-1 md:col-span-8">
          <h2 className="font-serif text-4xl mb-4">In Her Presence</h2>
          <p className="text-muted-foreground max-w-xl">
            Some souls shine brighter than others—and hers illuminates every frame. With effortless elegance and quiet magnetism, she captures the essence of beauty in its purest form. Every moment with her is a reminder that true enchantment exists in the real world.
          </p>
        </div>
      </div>

      <div className="mt-24 flex justify-between items-end">
        <span className="text-[10vw] font-serif leading-none opacity-5 select-none pointer-events-none">BEAUTY</span>
        <div className="flex flex-col items-end gap-4">
          <button
            onClick={scrollToTop}
            className="text-xs uppercase tracking-widest hover:text-primary transition-colors cursor-pointer"
            type="button"
          >
            Back to Top ↑
          </button>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
