"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  FileText,
  Phone,
  CheckCircle,
  ArrowRight,
  Download,
} from "lucide-react"

const intakes = [
  { month: "January", status: "Closed", deadline: "December 15" },
  { month: "May", status: "Open", deadline: "April 30" },
  { month: "September", status: "Coming Soon", deadline: "August 15" },
]

const steps = [
  {
    step: 1,
    title: "Download Form",
    description: "Get the application form from our website or office.",
  },
  {
    step: 2,
    title: "Fill & Submit",
    description: "Complete the form and submit with required documents.",
  },
  {
    step: 3,
    title: "Pay Fees",
    description: "Complete the registration fee payment.",
  },
  {
    step: 4,
    title: "Start Learning",
    description: "Join your class and begin your journey.",
  },
]

const requirements = [
  "KCPE or KCSE Certificate (or equivalent)",
  "Birth Certificate or National ID",
  "2 Passport-size Photos",
  "Application Fee",
]

export function AdmissionsSection() {
  const router = useRouter()

  // Apply Now button action
  const handleApplyNow = () => {
    router.push("/apply")
  }

  // Download Form button action
  const handleDownloadForm = async () => {
    try {
      const response = await fetch('/api/generate-form-pdf')
      if (!response.ok) throw new Error('Failed to generate PDF')
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'application-form.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download error:', error)
      alert('Failed to download the application form. Please try again.')
    }
  }

  return (
    <section id="admissions" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-2">Admissions</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Begin Your Journey Today
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Our admission process is simple and straightforward. We welcome
            students from all backgrounds who are ready to learn and grow.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Intakes Card */}
          <Card className="lg:col-span-1 border-border/20 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calendar className="h-5 w-5 text-primary" />
                Intake Dates
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {intakes.map((intake) => (
                <div
                  key={intake.month}
                  className="p-4 rounded-lg bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {intake.month}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Deadline: {intake.deadline}
                      </p>
                    </div>
                    <Badge
                      variant={intake.status === "Open" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {intake.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* How to Apply Card */}
          <Card className="lg:col-span-2 border-border/20 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="h-5 w-5 text-primary" />
                How to Apply
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="gap-2 flex-1 h-11 font-semibold"
                  onClick={handleApplyNow}
                >
                  <ArrowRight className="h-4 w-4" />
                  Apply Now
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 flex-1 h-11 font-semibold"
                  onClick={handleDownloadForm}
                >
                  <Download className="h-4 w-4" />
                  Download Form
                </Button>

                <Button
                  variant="ghost"
                  size="lg"
                  className="gap-2 flex-1 h-11 font-semibold"
                  asChild
                >
                  <Link href="#contact">
                    <Phone className="h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
              </div>

              {/* Application steps */}
              <div className="pt-2">
                <p className="text-sm font-semibold text-foreground mb-3">Application Steps:</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {steps.map((step) => (
                    <div key={step.step} className="flex flex-col items-center text-center">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2">
                        {step.step}
                      </div>
                      <p className="text-xs font-semibold text-foreground leading-tight">
                        {step.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Requirements Section */}
        <Card className="border-border/20 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Required Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {requirements.map((requirement, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-foreground/80">{requirement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
