export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#" className="navbar__logo footer__logo">
          naca<span>net</span>
        </a>
        <p className="footer__copy">
          © {year} NacaNet. Construido con ❤ y mucho café.
        </p>
        <div className="footer__links">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
