export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__badge">Disponible para nuevos proyectos ✦</div>
      <h1 className="hero__headline">
        Construimos productos
        <br />
        <span className="gradient-text">digitales que escalan.</span>
      </h1>
      <p className="hero__sub">
        Full Stack · Inteligencia Artificial · Marketing Digital
        <br />
        Todo lo que necesitas para crecer en un solo equipo.
      </p>
      <div className="hero__actions">
        <a href="#contacto" className="btn btn--primary">
          Empezar proyecto
        </a>
        <a href="#servicios" className="btn btn--ghost">
          Ver servicios
        </a>
      </div>
      <div className="hero__stats">
        <div className="hero__stat">
          <strong>50+</strong>
          <span>proyectos entregados</span>
        </div>
        <div className="hero__stat-divider" />
        <div className="hero__stat">
          <strong>5 años</strong>
          <span>de experiencia</span>
        </div>
        <div className="hero__stat-divider" />
        <div className="hero__stat">
          <strong>100%</strong>
          <span>satisfacción garantizada</span>
        </div>
      </div>
    </section>
  )
}
