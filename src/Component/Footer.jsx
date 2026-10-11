import './Footer.css';

function Footer() {
  return (
    <footer className="trekmate-footer">
      <div className="trekmate-footer-cta">
        <span>THE OUTDOORS IS CALLING</span>
        <h2>See you somewhere on the trail.</h2>
        <p>Discover your next adventure with TrekMate.</p>
      </div>

      <div className="trekmate-copyright">
        © {new Date().getFullYear()} TrekMate. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;