import { NextRequest, NextResponse } from 'next/server'
import jsPDF from 'jspdf'

export async function GET(request: NextRequest) {
  try {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    })

    // Colors (matching your color scheme)
    const primaryColor = '#1e40af'
    const textColor = '#1f2937'
    const lightGray = '#f3f4f6'

    // Set font
    doc.setFont('helvetica')

    // Header
    doc.setFillColor(30, 64, 175) // Primary blue
    doc.rect(0, 0, 210, 40, 'F')

    // Title
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(24)
    doc.text('APPLICATION FORM', 105, 20, { align: 'center' })

    doc.setFontSize(12)
    doc.text('Our Lady of Mercy Vocational Training Centre', 105, 30, { align: 'center' })

    // Reset text color
    doc.setTextColor(31, 41, 55)

    // Form header text
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text('Personal Information', 20, 55)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)

    // Helper function to create form fields
    const createField = (label: string, xPos: number, yPos: number, width: number = 90) => {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(9)
      doc.text(label + ':', xPos, yPos)
      
      doc.setFont('helvetica', 'normal')
      doc.setDrawColor(100, 100, 100)
      doc.rect(xPos, yPos + 2, width, 6)
    }

    // Form fields
    createField('Full Name', 20, 65)
    createField('Email Address', 20, 80)
    createField('Phone Number', 20, 95)
    createField('Date of Birth', 110, 65)
    createField('ID Number', 110, 80)

    // Program Selection
    doc.setFont('helvetica', 'bold')
    doc.text('Program Selection', 20, 115)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)

    const programs = ['Food & Beverage', 'Dressmaking', 'Hairdressing', 'ICT', 'Electrical']
    let programY = 122

    programs.forEach((program, index) => {
      doc.text(`☐ ${program}`, 25, programY)
      if (index === 2) {
        programY = 122
        doc.text(`☐ ${program}`, 110, programY)
      } else if (index > 2) {
        programY += 7
        doc.text(`☐ ${program}`, 110, programY)
      } else {
        programY += 7
      }
    })

    // Documents section
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.text('Required Documents', 20, 160)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    const documents = [
      'KCPE or KCSE Certificate (or equivalent)',
      'Birth Certificate or National ID',
      '2 Passport-size Photographs',
      'Application Fee Receipt'
    ]

    let docY = 168
    documents.forEach((doc_item) => {
      doc.text(`☐ ${doc_item}`, 25, docY)
      docY += 7
    })

    // Admission info box
    doc.setDrawColor(30, 64, 175)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text('Admission Information', 20, 205)

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.text('Intake Dates: January, May, September', 20, 215)
    doc.text('Application Deadline: 30 days before intake', 20, 222)
    doc.text('Contact: ourladyofmercycollege@gmail.com | +254 700 000 000', 20, 229)

    // Footer
    doc.setFontSize(7)
    doc.setTextColor(150, 150, 150)
    doc.text('For office use only', 105, 285, { align: 'center' })
    doc.text(`Generated on ${new Date().toLocaleDateString()}`, 105, 290, { align: 'center' })

    // Generate PDF and return
    const pdfBuffer = doc.output('arraybuffer')
    
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="application-form.pdf"'
      }
    })
  } catch (error) {
    console.error('PDF generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    )
  }
}
