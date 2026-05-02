"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChefHat,
  Scissors,
  Sparkles,
  Monitor,
  Zap,
  Cpu,
  Cable,
  Clock,
  Award,
} from "lucide-react"

const mainCourses = [
  {
    icon: ChefHat,
    title: "Food & Beverage Production",
    description: "Learn culinary arts, food preparation, and beverage service skills for the hospitality industry.",
    duration: "6 Months",
    certification: "Artisan/Craft",
    image: "/images/workshop.jpg",
  },
  {
    icon: Scissors,
    title: "Garment Making",
    description: "Master the art of creating garments from pattern cutting to final finishing.",
    duration: "6 Months",
    certification: "Artisan/Craft",
    image: "/images/workshop.jpg",
  },
  {
    icon: Scissors,
    title: "Dressmaking & Tailoring",
    description: "Develop skills in designing, cutting, and sewing various clothing items.",
    duration: "6 Months",
    certification: "Artisan/Craft",
    image: "/images/workshop.jpg",
  },
  {
    icon: Sparkles,
    title: "Hairdressing & Beauty Therapy",
    description: "Comprehensive training in hair styling, skincare, and beauty treatments.",
    duration: "6 Months",
    certification: "Artisan/Craft",
    image: "/images/beauty-therapy.jpg",
  },
  {
    icon: Monitor,
    title: "Information & Communication Technology",
    description: "Gain essential computer skills and IT knowledge for the digital age.",
    duration: "6 Months",
    certification: "Artisan/Craft",
    image: "/images/ict-lab.jpg",
  },
  {
    icon: Zap,
    title: "Electrical Installation",
    description: "Learn residential and commercial electrical wiring and installation.",
    duration: "6 Months",
    certification: "Artisan/Craft",
    image: "/images/hero-students.jpg",
  },
  {
    icon: Cpu,
    title: "Electrical & Electronic Engineering",
    description: "Study electronics, circuit design, and electrical systems maintenance.",
    duration: "6 Months",
    certification: "Artisan/Craft",
    image: "/images/hero-students.jpg",
  },
  {
    icon: Cable,
    title: "Knitting",
    description: "Master hand and machine knitting techniques for textile production.",
    duration: "6 Months",
    certification: "Artisan",
    image: "/images/workshop.jpg",
  },
]

const shortCourses = [
  {
    icon: Monitor,
    title: "Computer Packages",
    description: "Microsoft Office, internet, and basic computer operations.",
    duration: "6 Months",
  },
  {
    icon: Cpu,
    title: "Computer Repair & Maintenance",
    description: "Hardware troubleshooting and software installation.",
    duration: "6 Months",
  },
  {
    icon: ChefHat,
    title: "Cake Making & Decoration",
    description: "Baking and decorating cakes for all occasions.",
    duration: "6 Months",
  },
  {
    icon: ChefHat,
    title: "Pastry & Baking",
    description: "Professional pastry and bread making skills.",
    duration: "6 Months",
  },
  {
    icon: Sparkles,
    title: "Beauty & Hair Services",
    description: "Quick certification in beauty and hair treatments.",
    duration: "6 Months",
  },
]

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">Our Programs</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Discover Your Path to Success
          </h2>
          <p className="text-muted-foreground text-pretty">
            Choose from a wide range of vocational courses designed to equip you
            with practical skills for employment or self-employment.
          </p>
        </div>

        {/* Certification Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge variant="outline" className="gap-2 py-2 px-4">
            <Award className="h-4 w-4" />
            NITA Certified
          </Badge>
          <Badge variant="outline" className="gap-2 py-2 px-4">
            <Award className="h-4 w-4" />
            KNEC Certified
          </Badge>
          <Badge variant="outline" className="gap-2 py-2 px-4">
            <Award className="h-4 w-4" />
            CDACC Accredited
          </Badge>
        </div>

        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="main">Main Courses</TabsTrigger>
            <TabsTrigger value="short">Short Courses</TabsTrigger>
          </TabsList>

          <TabsContent value="main">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mainCourses.map((course) => (
                <Card
                  key={course.title}
                  className="group overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground">
                        <course.icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </span>
                      <Badge variant="secondary">{course.certification}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="short">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {shortCourses.map((course) => (
                <Card key={course.title} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 shrink-0">
                        <course.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {course.description}
                        </p>
                        <span className="text-xs text-primary flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {course.duration}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <a href="#admissions">View Full Course Catalog</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
