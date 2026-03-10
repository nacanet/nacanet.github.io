const services = [
  {
    id: 'fullstack',
    icon: '⬡',
    category: 'Full Stack',
    headline: 'Aplicaciones web que funcionan de verdad.',
    description:
      'Diseñamos y desarrollamos productos digitales end-to-end — desde la UI hasta la infraestructura cloud — con las tecnologías más demandadas del mercado.',
    items: [
      'Web Apps con React & Next.js 15',
      'APIs REST y GraphQL con Node.js / Python',
      'Bases de datos SQL y NoSQL (PostgreSQL, MongoDB)',
      'Despliegue en Vercel, AWS y Google Cloud',
      'Arquitectura serverless y microservicios',
      'CI/CD y DevOps con GitHub Actions',
    ],
  },
  {
    id: 'ia',
    icon: '◈',
    category: 'Inteligencia Artificial',
    headline: 'IA que genera valor, no solo ruido.',
    description:
      'Integramos los modelos de IA más avanzados en tu negocio para automatizar procesos, reducir costes y abrir nuevas líneas de ingresos.',
    items: [
      'Agentes IA con LangChain & LangGraph',
      'Integración de LLMs: GPT-4o, Claude 3.5, Gemini',
      'RAG (Retrieval-Augmented Generation) sobre tus datos',
      'Chatbots y asistentes conversacionales',
      'Automatización de flujos con IA (n8n, Make)',
      'Fine-tuning de modelos para casos de uso específicos',
    ],
  },
  {
    id: 'marketing',
    icon: '◎',
    category: 'Marketing Digital',
    headline: 'Crecimiento predecible y medible.',
    description:
      'Estrategias de marketing data-driven que convierten visitas en clientes. Combinamos SEO técnico, paid media y contenido para maximizar tu ROI.',
    items: [
      'SEO técnico y posicionamiento orgánico',
      'Google Ads y Meta Ads con IA',
      'Email marketing y automatización (Brevo, Klaviyo)',
      'Copywriting y estrategia de contenidos',
      'Analítica avanzada con GA4 y Looker Studio',
      'CRO y optimización de embudos de conversión',
    ],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="section-header">
        <p className="section-tag">Lo que hacemos</p>
        <h2 className="section-title">
          Un equipo, tres superpoderes.
        </h2>
        <p className="section-desc">
          No somos una agencia generalista. Somos expertos en tres disciplinas que se potencian mutuamente.
        </p>
      </div>

      <div className="services__grid">
        {services.map((svc) => (
          <div key={svc.id} className="service-card">
            <div className="service-card__icon">{svc.icon}</div>
            <p className="service-card__category">{svc.category}</p>
            <h3 className="service-card__headline">{svc.headline}</h3>
            <p className="service-card__desc">{svc.description}</p>
            <ul className="service-card__list">
              {svc.items.map((item) => (
                <li key={item}>
                  <span className="list-bullet">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contacto" className="service-card__cta">
              Solicitar servicio →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
