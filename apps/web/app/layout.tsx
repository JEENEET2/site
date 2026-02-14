import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ToastProvider } from '@/components/providers/toast-provider';
import { AuthProvider } from '@/components/providers/auth-provider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'NEET/JEE Preparation Platform',
    template: '%s | NEET/JEE Prep',
  },
  description: 'India\'s most structured free NEET/JEE preparation platform. Practice PYQs, take mock tests, track progress, and ace your exams.',
  keywords: ['NEET', 'JEE', 'JEE Main', 'JEE Advanced', 'Medical', 'Engineering', 'Preparation', 'Mock Tests', 'PYQ'],
  authors: [{ name: 'NEET/JEE Prep Team' }],
  creator: 'NEET/JEE Prep',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jeeneet.com',
    siteName: 'NEET/JEE Preparation Platform',
    description: 'India\'s most structured free NEET/JEE preparation platform.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEET/JEE Preparation Platform',
    description: 'India\'s most structured free NEET/JEE preparation platform.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <ToastProvider>
              {children}
            </ToastProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
