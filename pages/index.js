import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Head>
        <title>🚀 MOTIMAX — Elevate Life. Master Mindset. Achieve Success</title>
        <meta name="description" content="AI‑powered superapp for personal growth, mental wellness, inspiration and productive living — designed for Gen Z and welcoming to every age and gender." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🚀 <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">MOTIMAX</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Elevate Life. Master Mindset. Achieve Success
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              AI‑powered superapp for personal growth, mental wellness, inspiration and productive living — 
              designed for Gen Z and welcoming to every age and gender.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="https://motimax.vercel.app/" 
                 className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                🚀 Launch App
              </a>
              <Link href="/learn" 
                    className="bg-white hover:bg-gray-50 text-purple-600 px-8 py-3 rounded-lg font-semibold border-2 border-purple-600 transition-colors">
                📚 Learn More
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Learning</h3>
              <p className="text-gray-600">Personalized lessons with AI Avatars, interactive dialogues, and adaptive content.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Mindful Growth</h3>
              <p className="text-gray-600">Science-backed methods for mental wellness, reflection, and mindfulness.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Goal Achievement</h3>
              <p className="text-gray-600">Turn ideas into daily actions with structured sessions and progress tracking.</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-center mb-6">🛠 Built with Modern Tech</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel', 'MiniMax AI'].map((tech) => (
                <span key={tech} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
