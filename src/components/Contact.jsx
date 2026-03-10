import { useState } from 'react'

const SERVICES = ['Full Stack', 'Inteligencia Artificial', 'Marketing', 'Todo lo anterior']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real deployment, connect to a form service (Formspree, Resend, etc.)
    setSent(true)
  }

  return (
    <section id="contacto" className="contact">
      <div className="contact__inner">
        <div className="contact__copy">
          <p className="section-tag">Contacto</p>
          <h2 className="section-title">¿Tienes un proyecto en mente?</h2>
          <p className="section-desc">
            Cuéntanos qué quieres construir. Respondemos en menos de 24 horas con una propuesta
            clara y sin compromiso.
          </p>
          <ul className="contact__list">
            <li>✦ Primera consulta gratuita</li>
            <li>✦ Presupuesto en 48 h</li>
            <li>✦ Sin letra pequeña</li>
          </ul>
        </div>

        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__thanks">
              <span className="contact__thanks-icon">✓</span>
              <h3>¡Recibido!</h3>
              <p>Nos pondremos en contacto contigo muy pronto.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Servicio</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Selecciona un servicio
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn--primary btn--full">
                Enviar mensaje →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
