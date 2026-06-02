import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userName = localStorage.getItem("userName");
  // The new Module 7 logic (Paste this here!)
  const [recentVibes, setRecentVibes] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("sentro_recent_vibes")) || [];
    setRecentVibes(history);
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .noise-overlay {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          pointer-events: none;
          z-index: 50;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .chrome-text {
          background: linear-gradient(to bottom right, #ffffff 0%, #b0b0b0 50%, #e0e0e0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .awwwards-btn {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        
        .awwwards-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: all 0.5s ease;
        }

        .awwwards-btn:hover::before {
          left: 100%;
        }

        .awwwards-btn:hover {
          background: #ffffff;
          color: #000000;
          border-color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255,255,255,0.15);
        }

        .sentiment-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .sentiment-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.7) contrast(1.1);
          transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1), filter 0.8s ease;
        }

        .sentiment-card:hover .sentiment-image {
          transform: scale(1.08);
          filter: brightness(1) contrast(1.05);
        }

        .sentiment-label {
          position: absolute;
          bottom: 20px;
          left: 24px;
          color: #ffffff;
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          z-index: 10;
          transition: all 0.4s ease;
        }

        .sentiment-card:hover .sentiment-label {
          letter-spacing: 4px;
          transform: translateY(-5px);
          color: #ff4d4d;
        }

        .sentiment-gradient {
          position: absolute;
          bottom: 0; left: 0; width: 100%; height: 60%;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%);
          z-index: 5;
        }
      `}</style>

     

      <div style={{ 
        backgroundColor: '#030303', 
        color: '#ffffff',
        minHeight: '100vh', 
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px' 
      }}>
        
        <div style={{
          position: 'absolute',
          top: '20%', left: '-10%',
          width: '50vw', height: '50vw',
          background: 'radial-gradient(circle, rgba(255, 77, 77, 0.08) 0%, transparent 60%)',
          filter: 'blur(100px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        <div style={{ 
          position: 'absolute', 
          top: '25%', 
          left: 0, 
          whiteSpace: 'nowrap', 
          opacity: 0.02, 
          fontSize: 'clamp(80px, 12vw, 150px)', 
          fontWeight: '900', 
          pointerEvents: 'none',
          animation: 'marquee 40s linear infinite',
          zIndex: 0
        }}>
          SENTIMENT DISCOVERY ENGINE — SENTIMENT DISCOVERY ENGINE — 
        </div>

        <div style={{ width: '100%', padding: '0 5vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
          
          <div style={{ flex: '1.2', position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '4px', color: '#ff4d4d', marginBottom: '24px', fontWeight: '700' }}>
              {isLoggedIn ? `Welcome back, ${userName}` : 'The New Era of E-Commerce'}
            </h2>
            
           <h1 style={{ 
            fontFamily: "'Inter', -apple-system, 'Helvetica Neue', Helvetica, sans-serif",
              fontSize: 'clamp(60px, 8vw, 120px)', 
              fontWeight: '900', 
              lineHeight: '0.9', 
              letterSpacing: '-3px',
              margin: '0 0 40px 0',
              textTransform: 'uppercase'
            }}>
              Shop <br />
              <span style={{ color: '#555' }}>Your</span> <br />
              <span style={{ fontStyle: 'italic', letterSpacing: '-1px' }}>Feelings.</span>
            </h1>

            <p style={{ fontSize: '16px', color: '#888', maxWidth: '420px', lineHeight: '1.7', marginBottom: '50px', fontWeight: '400' }}>
              We killed the search bar. Tell us your vibe, your mood, or your moment. We’ll curate the aesthetic.
            </p>
            
            <div style={{ display: 'flex', gap: '20px' }}>
              <Link to="/Login" className="awwwards-btn" style={{ 
                textDecoration: 'none', 
                padding: '20px 48px', 
                borderRadius: '50px', 
                fontWeight: '700', 
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                backdropFilter: 'blur(10px)'
              }}>
                Enter Experience
              </Link>
              {/* MODULE 7: RECENT VIBES TRACKER UI */}
          {recentVibes.length > 0 && (
            <div style={{ marginTop: '50px', animation: 'fadeIn 1s ease 1.5s both' }}>
              <p style={{ color: '#555', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '16px' }}>
                Your Recent Vibes
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {recentVibes.map((vibe) => (
                  <Link key={vibe} to="/products" style={{
                    padding: '8px 20px', 
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)', 
                    borderRadius: '50px',
                    color: '#a0a0a0', 
                    textDecoration: 'none', 
                    fontSize: '11px', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.target.style.color = '#fff'; e.target.style.borderColor = '#444'; }}
                  onMouseLeave={(e) => { e.target.style.color = '#a0a0a0'; e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  >
                    {vibe}
                  </Link>
                ))}
              </div>
            </div>
          )}
            </div>
          </div>

          <div style={{ flex: '1', display: 'flex', justifyContent: 'center', position: 'relative' }}>
            
            <div style={{
              position: 'absolute',
              width: '100%', height: '100%',
              background: 'rgba(255, 77, 77, 0.25)',
              filter: 'blur(100px)',
              zIndex: 1,
              top: '5%',
              transform: 'scale(0.85)'
            }}></div>

            <div style={{ 
              width: '100%',
              maxWidth: '450px',
              height: '600px',
              borderRadius: '200px 200px 20px 20px', 
              zIndex: 2,
              boxShadow: '0 50px 100px rgba(0,0,0,0.9), inset 0 1px 2px rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.1)', 
              animation: 'float 8s ease-in-out infinite',
              overflow: 'hidden', 
              display: 'grid',
              gridTemplateColumns: '1fr 1fr', 
              gridTemplateRows: '55% 45%',    
              gap: '4px',                     
              backgroundColor: '#111'
            }}>
              
              {/* Sentiment 1: EUPHORIA (High-Energy Product: Vibrant Red Sneaker) */}
              <div className="sentiment-card" style={{ gridColumn: '1 / span 2', background: '#2a2a2a' }}>
                <div className="sentiment-gradient"></div>
                <div className="sentiment-label">Euphoria</div>
                <img 
                  className="sentiment-image"
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop" 
                  alt="Vibrant Red Sneaker" 
                  onError={(e) => e.target.style.display = 'none'} 
                />
              </div>
              
              {/* Sentiment 2: SERENITY (Calming Product: Minimalist Skincare/Candle) */}
              <div className="sentiment-card" style={{ background: '#1f1f1f' }}>
                <div className="sentiment-gradient"></div>
                <div className="sentiment-label">Serenity</div>
                <img 
                  className="sentiment-image"
                  src="https://i0.wp.com/talesandturbans.com/wp-content/uploads/2019/09/products2.jpg?resize=595%2C593&ssl=1" 
                  alt="Aesthetic Skincare" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              
              {/* Sentiment 3: EDGE/CONFIDENCE (Bold Product: Sharp Sunglasses) */}
              <div className="sentiment-card" style={{ background: '#333' }}>
                <div className="sentiment-gradient"></div>
                <div className="sentiment-label">Confidence</div>
                <img 
                  className="sentiment-image"
                  src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=500&auto=format&fit=crop" 
                  alt="Fierce Sunglasses" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;