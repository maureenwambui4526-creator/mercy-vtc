import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTABanner() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground mb-6">
            <Sparkles className="h-4 w-4" />
            Transform Your Future
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Start Your Skill Journey Today
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Don&apos;t wait for opportunities – create them. Join hundreds of
            successful graduates who started their journey at Our Lady of Mercy
            College and are now thriving in their careers. Your future starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2 text-lg"
            >
              <Link href="#admissions">
                Apply for January 2025
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="#contact">Talk to Admissions</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
