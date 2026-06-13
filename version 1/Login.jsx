import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication for the frontend demo
    if (email && password) {
      localStorage.setItem("isLoggedIn", "true");
      // Extract a name from the email for the welcome message
      const name = email.split('@')[0];
      localStorage.setItem("userName", name.charAt(0).toUpperCase() + name.slice(1));
      navigate("/");
    }
  };

  return (
    <>
      <style>{`
        .noise-overlay {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          pointer-events: none;
          z-index: 50;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        .auth-input {
          width: 100%;
          padding: 16px 20px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #ffffff;
          font-size: 14px;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }
        
        .auth-input:focus {
          outline: none;
          border-color: #ff4d4d;
          background: rgba(0, 0, 0, 0.6);
          box-shadow: 0 0 20px rgba(255, 77, 77, 0.15);
        }
        
        .auth-input::placeholder {
          color: #666;
        }

        .auth-submit-btn {
          width: 100%;
          padding: 16px;
          background: #ffffff;
          color: #000000;
          border: none;
          border-radius: 50px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .auth-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
        }
      `}</style>

      

      <div style={{ 
        backgroundColor: '#030303', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Deep ambient red glow */}
        <div style={{
          position: 'absolute',
          width: '60vw', height: '60vw',
          background: 'radial-gradient(circle, rgba(255, 77, 77, 0.08) 0%, transparent 60%)',
          filter: 'blur(100px)',
          zIndex: 0,
          pointerEvents: 'none'
        }}></div>

        {/* Glassmorphic Auth Card */}
        <div style={{
          background: 'rgba(15, 15, 15, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '50px',
          width: '100%',
          maxWidth: '420px',
          zIndex: 10,
          boxShadow: '0 30px 60px rgba(0,0,0,0.8)'
        }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ color: '#fff', fontSize: '32px', fontWeight: '900', letterSpacing: '-1px', margin: '0 0 10px 0' }}>
              Welcome back<span style={{ color: '#ff4d4d' }}>.</span>
            </h1>
            <p style={{ color: '#888', fontSize: '14px', margin: 0 }}>Enter your details to access your vibes.</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', color: '#a0a0a0', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Email Address
              </label>
              <input 
                type="email" 
                required
                className="auth-input"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label style={{ display: 'block', color: '#a0a0a0', fontSize: '12px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
                Password
              </label>
              <input 
                type="password" 
                required
                className="auth-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="auth-submit-btn">
              Sign In
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <p style={{ color: '#666', fontSize: '13px' }}>
              New to Sentro? <Link to="/signup" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', borderBottom: '1px solid #ff4d4d', paddingBottom: '2px' }}>Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
