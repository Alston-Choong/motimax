import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About - Motimax</title>
        <meta name="description" content="About Motimax - Your motivation companion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">About Motimax</h1>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-lg mb-6">
            Motimax is your personal motivation companion designed to help you stay 
            focused and achieve your goals. Built for the modern hackathon experience.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Goal tracking and progress monitoring</li>
            <li>Daily motivation quotes and challenges</li>
            <li>Community support and engagement</li>
            <li>Analytics and insights</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4">Mission</h2>
          <p className="text-lg">
            To empower individuals to unlock their full potential through 
            consistent motivation and goal-oriented actions.
          </p>
        </div>
      </main>
    </div>
  );
}
