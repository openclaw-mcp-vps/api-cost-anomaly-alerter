import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Cost Anomaly Alerter — Stop Surprise Bills',
  description: 'Monitor API usage patterns across OpenAI, Anthropic, AWS and more. ML-powered anomaly detection sends alerts before your bill spikes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d19340ea-781b-47c6-8d7d-426e02fda3b8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
