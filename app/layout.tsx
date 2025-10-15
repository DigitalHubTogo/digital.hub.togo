import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  metadataBase: new URL('https://digital-hub-togo.vercel.app/'),
  title: "Digital Hub Togo - Services et Conseil en Informatique",
  description:
    "Masterclasses, cours de soutien en informatique et services de conseil IT au Togo. Rejoignez notre communauté tech.",
  authors: [
    {
      url: 'digital.hub.togo@gmail.com',
      name: "Digital Hub Togo"
    }, 
    {
      url: 'abdoulmalikkondi8@gmail.com',
      name: "Abdoul Malik KONDI"
    },
  ],
  openGraph: {
    title: "Digital Hub Togo - Services et Conseil en Informatique",
    description: 'Welcome to My Site',
    url: '',
    siteName: "Digital Hub Togo",
    images: [{ url: './logo.webp' }],
    locale: "en_FR",
    type: "website",
  },
  icons: {
    icon: './logo.webp',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Toaster />
        <ThemeProvider defaultTheme="system" storageKey="digital-hub-theme">
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
