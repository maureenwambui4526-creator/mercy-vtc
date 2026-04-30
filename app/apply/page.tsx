"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import analytics from "@/lib/analytics"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle, ArrowLeft } from "lucide-react"

const programs = ["Food & Beverage", "Dressmaking", "Hairdressing", "ICT", "Electrical"]

export default function ApplyPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [program, setProgram] = useState("")
  const [phone, setPhone] = useState("")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const validate = () => {
    const e: Record<string, string> = {}
    if (!name.trim()) e.name = "Name is required"
    if (!email.trim()) e.email = "Email is required"
    else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(email)) e.email = "Email is invalid"
    if (!program) e.program = "Please choose a program"
    if (phone && !/^\+?[0-9 \-]{7,15}$/.test(phone)) e.phone = "Phone number is invalid"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus("submitting")

    // Track analytics event
    analytics.trackEvent("application_submitted", { email, program })

    // Simulate submission (replace with real API call if available)
    try {
      await new Promise((res) => setTimeout(res, 700))
      setStatus("success")
      // optionally clear form
      setName("")
      setEmail("")
      setProgram("")
      setPhone("")
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
      setStatus("idle")
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Header */}
      <div className="border-b border-border/10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Section - Benefits */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
                  Start Your Journey
                </h1>
                <p className="text-muted-foreground text-lg">
                  Join Our Lady of Mercy VTC and transform your future with quality vocational training.
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {[
                  "Expert instructors with industry experience",
                  "Hands-on practical training",
                  "Job placement assistance",
                  "Flexible program schedules",
                  "Affordable fees with payment plans"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/20 shadow-lg">
              <CardHeader className="space-y-2 pb-6">
                <CardTitle className="text-2xl">Application Form</CardTitle>
                <CardDescription>Fill in your details to apply for a program</CardDescription>
              </CardHeader>

              <CardContent>
                {status === "success" ? (
                  <div className="py-12 text-center">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Application Submitted!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for your application. Our admissions team will review your details and contact you within 2-3 business days.
                    </p>
                    <Button onClick={() => setStatus("idle")} variant="outline">
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-semibold">Full Name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(v) => setName(v.target.value)}
                        placeholder="Your full name"
                        className={cn(
                          "h-11 text-base",
                          errors.name && "border-destructive focus:ring-destructive"
                        )}
                      />
                      {errors.name && <p className="text-sm text-destructive flex items-center gap-1"><span>•</span> {errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-semibold">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(v) => setEmail(v.target.value)}
                        placeholder="your.email@example.com"
                        className={cn(
                          "h-11 text-base",
                          errors.email && "border-destructive focus:ring-destructive"
                        )}
                      />
                      {errors.email && <p className="text-sm text-destructive flex items-center gap-1"><span>•</span> {errors.email}</p>}
                    </div>

                    {/* Program Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="program" className="text-base font-semibold">Select Program</Label>
                      <select
                        id="program"
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                        className={cn(
                          "w-full h-11 rounded-md border border-input bg-background px-3 py-2 text-base font-medium transition-colors hover:border-ring focus:outline-none focus:ring-2 focus:ring-ring/50",
                          errors.program && "border-destructive focus:ring-destructive/50"
                        )}
                      >
                        <option value="">Choose a program...</option>
                        {programs.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                      {errors.program && <p className="text-sm text-destructive flex items-center gap-1"><span>•</span> {errors.program}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-semibold">Phone Number <span className="text-muted-foreground font-normal">(optional)</span></Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(v) => setPhone(v.target.value)}
                        placeholder="+254 700 000 000"
                        className={cn(
                          "h-11 text-base",
                          errors.phone && "border-destructive focus:ring-destructive"
                        )}
                      />
                      {errors.phone && <p className="text-sm text-destructive flex items-center gap-1"><span>•</span> {errors.phone}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={status === "submitting"}
                        size="lg"
                        className="w-full h-11 text-base font-semibold"
                      >
                        {status === "submitting" ? (
                          <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          "Submit Application"
                        )}
                      </Button>
                    </div>

                    {/* Additional Info */}
                    <p className="text-xs text-muted-foreground text-center pt-2">
                      By submitting this form, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
