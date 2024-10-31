
import './Footer.css'
export default function Footer() {
  return (
    <footer className="footer"
    
    >
      <div className="current-year">
        <p>© 2024 Hovo Tumanyan</p>
      </div>
      <div className="links">
        <a href="https://www.facebook.com/TumanyanHovo" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>{' '}
        <a
          href="https://www.linkedin.com/in/hovo-tumanyan-b50341247/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{' '}
        <a href="https://t.me/HovoTumanyan" target="_blank" rel="noopener noreferrer">
          Telegram
        </a>
      </div>

      <div className="creator">
        <p>Designed by Me (Inspired). Built by Me.</p>{' '}
      </div>
    </footer>
  );
}
