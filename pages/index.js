export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <main style={{
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          color: '#333'
        }}>
          Welcome to MOTIMAX
        </h1>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          color: '#666',
          marginBottom: '2rem'
        }}>
          A minimal Next.js homepage
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <a 
            href="/about" 
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#0070f3',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.5rem',
              transition: 'background-color 0.2s'
            }}
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  )
}
