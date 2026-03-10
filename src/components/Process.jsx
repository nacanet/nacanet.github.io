const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Entendemos tu negocio, tus objetivos y el problema real a resolver. Sin tecnicismos, sin rodeos.',
  },
  {
    num: '02',
    title: 'Estrategia',
    desc: 'Definimos el stack tecnológico, el alcance del proyecto y los KPIs que vamos a mover.',
  },
  {
    num: '03',
    title: 'Ejecución',
    desc: 'Sprints semanales, demos en vivo y comunicación constante. Tú ves el progreso en tiempo real.',
  },
  {
    num: '04',
    title: 'Lanzamiento',
    desc: 'Deploy en producción, onboarding de tu equipo y soporte post-lanzamiento incluido.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="process">
      <div className="section-header">
        <p className="section-tag">Cómo trabajamos</p>
        <h2 className="section-title">Simple. Rápido. Sin sorpresas.</h2>
        <p className="section-desc">
          Un proceso probado que lleva ideas a producción en semanas, no en meses.
        </p>
      </div>

      <div className="process__steps">
        {steps.map((step, i) => (
          <div key={step.num} className="process__step">
            <div className="process__step-num">{step.num}</div>
            <div className="process__step-body">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
            {i < steps.length - 1 && <div className="process__step-line" />}
          </div>
        ))}
      </div>
    </section>
  )
}
