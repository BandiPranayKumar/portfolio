import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pranay-kumar-bandi.vercel.app"), // TODO: Replace with actual deployed URL
  title: "Pranay Kumar Bandi | Full Stack Developer & CSE Student",
  description: "Pranay Kumar Bandi is a Computer Science Engineering student and full-stack developer building modern web applications and AI-powered solutions.",
  alternates: {
    canonical: "https://pranay-kumar-bandi.vercel.app",
  },
  openGraph: {
    title: "Pranay Kumar Bandi | Full Stack Developer",
    description: "Portfolio of Pranay Kumar Bandi — Computer Science Engineering student, full-stack developer, and AI enthusiast.",
    url: "https://pranay-kumar-bandi.vercel.app",
    siteName: "Pranay Kumar Bandi Portfolio",
    images: [
      {
        url: "/MyImage.png",
        width: 1200,
        height: 630,
        alt: "Pranay Kumar Bandi - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranay Kumar Bandi | Full Stack Developer",
    description: "Portfolio of Pranay Kumar Bandi — Computer Science Engineering student, full-stack developer, and AI enthusiast.",
    images: ["/MyImage.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pranay Kumar Bandi",
    alternateName: "B. Pranay Kumar",
    url: "https://pranay-kumar-bandi.vercel.app",
    jobTitle: "Full Stack Developer",
    sameAs: [
      "https://www.linkedin.com/in/pranaykumarbandi/",
      "https://github.com/BandiPranayKumar"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pranay Kumar Bandi",
    url: "https://pranay-kumar-bandi.vercel.app"
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <meta name="google-site-verification" content="xkGCPzwgr5c47KNKp6zv8MBPKULLSBPMa_WkhNH4bwM" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen font-sans bg-navy text-white flex flex-col">{children}</body>
    </html>
  );
}
