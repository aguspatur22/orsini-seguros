/* Standalone sections: aseguradoras strip, how it works, savings calc,
   testimonials, FAQ, tips, contact, footer. */

const Container = ({ children, style, className }) => (
  <div className={className} style={{
    width: '100%', maxWidth: 1440, margin: '0 auto',
    padding: '0 40px', ...style
  }}>{children}</div>
);

const SectionTitle = ({ eyebrow, title, sub, align = 'left' }) => (
  <div style={{ textAlign: align, marginBottom: 36, maxWidth: align === 'center' ? 720 : '100%', marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>
    {eyebrow && (
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>
        {eyebrow}
      </div>
    )}
    <h2 className="serif" style={{ margin: 0, fontSize: 'clamp(32px, 4vw, 46px)', lineHeight: 1.05, color: 'var(--ink)', letterSpacing: '-0.02em' }}>
      {title}
    </h2>
    {sub && (
      <p style={{ margin: '14px 0 0', fontSize: 16, lineHeight: 1.55, color: 'var(--muted)', maxWidth: 620, marginLeft: align === 'center' ? 'auto' : 0, marginRight: align === 'center' ? 'auto' : 0 }}>
        {sub}
      </p>
    )}
  </div>
);

/* ---------- Aseguradoras strip ---------- */

const Aseguradoras = () => (
  <section className="section-pad" style={{ padding: '52px 0', background: 'var(--bg-2)' }}>
    <Container className="container-pad">
      <div className="aseg-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 280px) 1fr', gap: 40, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>
            Compañías
          </div>
          <h3 className="serif" style={{ margin: 0, fontSize: 26, lineHeight: 1.1, color: 'var(--ink)' }}>
            Trabajo con las aseguradoras más sólidas del país
          </h3>
        </div>
        <div className="aseg-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          <InsurerMark name="Federación Patronal" sub="Vehículos · Hogar" logoSrc="assets/fed-patronal-logo.png" />
          <InsurerMark name="Mercantil Andina" sub="Vehículos · Hogar" logoSrc="assets/mercantil-andina-logo.png" />
          <InsurerMark name="Rivadavia Seguros" sub="Vehículos · Bici" logoSrc="assets/rivadavia-seguros-logo.jpg" />
        </div>
      </div>

      <div style={{ height: 1, background: 'var(--line)', margin: '36px 0' }}/>

      <div className="aseg-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 280px) 1fr', gap: 40, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 10 }}>
            Asistencia al viajero
          </div>
          <h3 className="serif" style={{ margin: 0, fontSize: 26, lineHeight: 1.1, color: 'var(--ink)' }}>
            Las mejores asistencias para tu próximo viaje
          </h3>
        </div>
        <div className="aseg-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          <InsurerMark name="GO! Assistance" sub="Latam y mundo" logoSrc="assets/go-assistance-logo.png" />
          <InsurerMark name="Universal Assistance" sub="Cobertura premium" logoSrc="assets/universal-assistance-logo.webp" />
          <InsurerMark name="Assist Card" sub="Atención 24/7" logoSrc="assets/assist-card-logo.png" />
        </div>
      </div>
    </Container>
  </section>
);

/* ---------- Cómo funciona ---------- */

const ComoFunciona = () => {
  const steps = [
    { n: '01', t: 'Completás el formulario', d: 'En menos de un minuto. Te pido sólo lo necesario para cotizar bien.' },
    { n: '02', t: 'Comparo entre compañías', d: 'Federación Patronal, Mercantil Andina y Rivadavia. Sin costo para vos.' },
    { n: '03', t: 'Te paso la mejor opción', d: 'Te respondo por WhatsApp con propuesta clara: precio + cobertura.' },
  ];
  return (
    <section id="como-funciona" className="section-pad" style={{ padding: '88px 0', background: '#fff' }}>
      <Container className="container-pad">
        <SectionTitle eyebrow="Cómo funciona" title={<span>Tres pasos. <em style={{ fontStyle: 'italic', color: 'var(--muted)' }}>Sin vueltas.</em></span>} />
        <div className="three-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {steps.map(s => (
            <div key={s.n} style={{
              background: 'var(--card)', border: '1px solid var(--line)',
              borderRadius: 16, padding: 28, position: 'relative', minHeight: 220
            }}>
              <div className="serif" style={{ fontSize: 56, lineHeight: 1, color: 'var(--accent)', letterSpacing: '-0.04em' }}>{s.n}</div>
              <h4 style={{ margin: '20px 0 8px', fontSize: 20, color: 'var(--ink)', fontWeight: 700, letterSpacing: '-0.01em' }}>{s.t}</h4>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--muted)' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------- Calculadora de ahorro estimado ---------- */

const Calculadora = () => {
  const [pago, setPago] = React.useState(100000);
  const ahorroPct = 0.32;
  const nuevoPago = Math.round(pago * (1 - ahorroPct));
  const ahorroMensual = pago - nuevoPago;
  const ahorroAnual = ahorroMensual * 12;
  const fmt = (n) => new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(n);

  return (
    <section id="ahorro" className="section-pad" style={{ padding: '88px 0', background: 'var(--brand)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, opacity: .07,
        backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)',
        backgroundSize: '24px 24px',
      }}/>
      <Container style={{ position: 'relative' }} className="container-pad">
        <div className="calc-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--accent-2)', marginBottom: 12 }}>
              Calculadora de ahorro
            </div>
            <h2 className="serif" style={{ margin: 0, fontSize: 'clamp(34px, 4vw, 48px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
              ¿Cuánto podrías estar ahorrando hoy?
            </h2>
            <p style={{ margin: '16px 0 0', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.75)' }}>
              Mové el deslizador con tu cuota actual. Esta es una estimación basada en lo que ahorran mis clientes al cambiarse de compañía.
            </p>

            <div style={{ marginTop: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,.7)' }}>Lo que pagás hoy por mes</span>
                <span style={{ fontSize: 22, fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{fmt(pago)}</span>
              </div>
              <input
                type="range" min="20000" max="500000" step="5000" value={pago}
                onChange={(e) => setPago(parseInt(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-2)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(255,255,255,.5)', marginTop: 4 }}>
                <span>$20.000</span><span>$500.000</span>
              </div>
            </div>
          </div>

          <div className="calc-card" style={{
            background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.15)',
            borderRadius: 18, padding: 32, backdropFilter: 'blur(8px)',
          }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', marginBottom: 6 }}>Tu nueva cuota estimada</div>
            <div className="serif calc-amount" style={{ fontSize: 64, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--accent-2)' }}>
              {fmt(nuevoPago)}
            </div>
            <div style={{ height: 1, background: 'rgba(255,255,255,.15)', margin: '24px 0' }}/>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>Ahorro por mes</div>
                <div style={{ fontSize: 22, fontWeight: 700, marginTop: 4, fontVariantNumeric: 'tabular-nums' }}>{fmt(ahorroMensual)}</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)' }}>Ahorro por año</div>
                <div style={{ fontSize: 22, fontWeight: 700, marginTop: 4, color: 'var(--accent-2)', fontVariantNumeric: 'tabular-nums' }}>{fmt(ahorroAnual)}</div>
              </div>
            </div>
            <button
              onClick={() => {
                const msg = `Hola Julian! Vi la calculadora de ahorro y quiero cotizar mi seguro. Hoy pago ${fmt(pago)} por mes. ¿Me podés pasar opciones?`;
                window.open(buildWhatsAppUrl(msg), '_blank');
              }}
              style={{
                marginTop: 24, width: '100%', height: 50, borderRadius: 12,
                background: 'var(--accent-2)', color: 'var(--ink)', border: 'none',
                fontWeight: 800, fontSize: 14, cursor: 'pointer', letterSpacing: '.01em'
              }}
            >Quiero ahorrar →</button>
            <p style={{ fontSize: 11, color: 'rgba(255,255,255,.5)', textAlign: 'center', margin: '12px 0 0' }}>
              Ahorro promedio observado: 32%. Cotización real sin compromiso.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ---------- Testimonios ---------- */

const Testimonios = () => {
  const items = [
    { n:'Marina G.', loc:'La Plata', t:'Cambié mi seguro del auto y bajé casi $40.000 por mes. Julian respondió todo en el día y me hizo el trámite sin que mueva un dedo.', tipo:'Auto · Renault Sandero', photo:'https://randomuser.me/api/portraits/women/44.jpg' },
    { n:'Pablo R.', loc:'Berisso', t:'Tenía la moto sin asegurar hace años. Me pasó tres opciones, elegí una y al otro día ya tenía la póliza. Súper claro todo.', tipo:'Moto · Honda Wave', photo:'https://randomuser.me/api/portraits/men/32.jpg' },
    { n:'Sofía M.', loc:'Ensenada', t:'Asesoramiento real, no un call center. Me explicó la diferencia entre todo riesgo y terceros completo y elegí lo que me servía.', tipo:'Auto · VW Gol Trend', photo:'https://randomuser.me/api/portraits/women/68.jpg' },
    { n:'Diego L.', loc:'City Bell', t:'Aseguré la casa por primera vez. Cobertura amplia y un precio mucho mejor del que esperaba. Ya recomendé a varios.', tipo:'Hogar · 95m²', photo:'https://randomuser.me/api/portraits/men/75.jpg' },
  ];

  return (
    <section id="testimonios" className="section-pad" style={{ padding: '88px 0', background: 'var(--bg-2)' }}>
      <Container className="container-pad">
        <SectionTitle
          eyebrow="Testimonios"
          title={<span>Clientes que ya están <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>pagando menos</em></span>}
        />
        <div className="testi-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
          {items.map((it, i) => (
            <figure key={i} style={{
              background: 'var(--card)', border: '1px solid var(--line)',
              borderRadius: 16, padding: 28, margin: 0
            }}>
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none" style={{ marginBottom: 16 }}>
                <path d="M0 22V12C0 5.4 4.5 0 11 0V4C7.4 4 4.4 7 4.4 11H10V22H0Z M16 22V12C16 5.4 20.5 0 27 0V4C23.4 4 20.4 7 20.4 11H26V22H16Z" fill="#2896FE"/>
              </svg>
              <blockquote style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: 'var(--ink)', fontWeight: 500, letterSpacing: '-0.005em' }}>
                {it.t}
              </blockquote>
              <figcaption style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
                <img
                  src={it.photo}
                  alt={it.n}
                  style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--line)', flexShrink: 0 }}
                />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{it.n} · {it.loc}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{it.tipo}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------- Consejos ---------- */

const Consejos = () => {
  const tips = [
    { t: 'Renovás en el mismo mes', d: 'No esperes a que se venza la póliza. Cotizá 30 días antes para tener margen.' },
    { t: 'Compará cobertura, no sólo precio', d: 'La cuota más baja a veces deja afuera granizo o RC linderos. Mirá la letra chica.' },
    { t: 'Patente y datos del titular', d: 'Tener los datos a mano acelera la cotización. Patente, DNI, modelo y año exactos.' },
    { t: 'Disyuntor en el hogar', d: 'Casas con disyuntor diferencial cotizan mejor en muchas compañías. Si lo tenés, decilo.' },
    { t: 'Asistencia al viajero por edad', d: 'Es importante informar preexistencias antes del momento del viaje y detallar la edad al momento del viaje.' },
  ];
  return (
    <section id="consejos" className="section-pad" style={{ padding: '88px 0', background: '#fff' }}>
      <Container className="container-pad">
        <SectionTitle eyebrow="Consejos del productor" title="Lo que conviene saber antes de cotizar" />
        <div className="tips-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {tips.map((tip, i) => (
            <div key={i} style={{
              padding: '24px 22px', borderRadius: 14,
              background: 'var(--bg-2)', border: '1px solid var(--line)'
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8, background: 'var(--brand)',
                color: '#fff', display: 'grid', placeItems: 'center',
                fontSize: 13, fontWeight: 700, marginBottom: 12
              }}>{i + 1}</div>
              <h4 style={{ margin: '0 0 6px', fontSize: 16, color: 'var(--ink)', fontWeight: 700 }}>{tip.t}</h4>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--muted)' }}>{tip.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ---------- FAQ ---------- */

const FAQItem = ({ q, a, defaultOpen }) => {
  const [open, setOpen] = React.useState(!!defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid var(--line)' }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', textAlign: 'left', padding: '22px 4px', background: 'none', border: 'none',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16
      }}>
        <span style={{ fontSize: 17, fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: '50%', background: open ? 'var(--brand)' : 'var(--bg-2)',
          color: open ? '#fff' : 'var(--ink)', display: 'grid', placeItems: 'center',
          fontSize: 18, lineHeight: 1, transition: 'all .15s', flex: '0 0 auto'
        }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div style={{ padding: '0 4px 22px', fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: 720 }}>
          {a}
        </div>
      )}
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="section-pad" style={{ padding: '88px 0', background: 'var(--bg-2)' }}>
    <Container className="container-pad">
      <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60, alignItems: 'start' }}>
        <SectionTitle eyebrow="Preguntas" title="Lo que más me preguntan" />
        <div>
          <FAQItem defaultOpen q="¿Cuánto cuesta tu asesoramiento?" a="Nada. Mi trabajo lo paga la compañía aseguradora cuando contratás la póliza. Para vos es gratis. Mi trabajo es que tengas una cobertura acorde a tu bien y a lo que necesitás, sin pagar de más." />
          <FAQItem q="¿Cómo se hace el cambio si ya tengo seguro?" a="Me mandás los datos, cotizo y elegimos juntos la mejor opción. Una vez realizado, te explico cómo dar de baja tu póliza actual y realizar la emisión con nosotros." />
          <FAQItem q="¿En qué zonas trabajás?" a={<>Somos de la ciudad de La Plata, pero hoy todo el manejo del seguro se hace de manera digital: emisión de póliza, pagos, modificaciones, denuncias y seguimiento.<br /><br />Más allá de la distancia, lo importante es que tengas una persona que te responda y te acompañe cuando lo necesites.</>} />
          <FAQItem q="¿Qué pasa si tengo un siniestro?" a="Me llamás directamente a mí. Te acompaño en toda la gestión: denuncia, peritaje, taller. Vas a hablar con una persona, no con un 0800." />
          <FAQItem q="¿Qué métodos de pago aceptan las compañías?" a="Débito automático con tarjeta o CBU. Algunas aceptan también efectivo o transferencia mensual. Te paso las opciones cuando elijamos compañía." />
          <FAQItem q="¿Aseguran autos importados / 0km?" a="Sí. Cualquier vehículo patentado en Argentina. Para 0km podés contratar antes de patentar usando el número de chasis." />
        </div>
      </div>
    </Container>
  </section>
);

/* ---------- Footer / Contacto ---------- */

const FooterContacto = () => (
  <footer id="contacto" style={{ background: '#0B2347', color: '#fff', padding: '40px 0 24px' }}>
    <Container className="container-pad">
      <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,.1)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 }}>
            <img src="assets/julian.jpg" alt="Julian Orsini" style={{ width: 56, height: 56, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,.15)' }}/>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>Julian Orsini</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.6)', marginTop: 3 }}>Productor Asesor · Matrícula SSN 104.304</div>
            </div>
          </div>
          <p style={{ marginTop: 18, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,.65)', maxWidth: 380 }}>
            Productor Asesor de Seguros matriculado. Comparo entre las principales compañías del país para conseguirte mejor precio y cobertura, sin costo de gestión.
          </p>
          <button
            onClick={() => window.open(buildWhatsAppUrl('Hola Julian, quiero hacerte una consulta.'), '_blank')}
            style={{
              marginTop: 16, height: 44, padding: '0 18px', borderRadius: 12,
              background: '#25D366', color: '#fff', border: 'none',
              fontWeight: 700, fontSize: 14, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3.5C17.8 1.3 14.9 .1 11.9 .1 5.7 .1 .7 5.1 .7 11.3c0 2 .5 3.9 1.5 5.6L.5 23l6.3-1.6c1.6.9 3.4 1.4 5.2 1.4 6.2 0 11.2-5 11.2-11.2 0-3-1.2-5.9-3.2-8z"/></svg>
            Hablar por WhatsApp
          </button>
        </div>

        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: 16 }}>
            Cotizar
          </div>
          {['Auto','Moto','Hogar','Bici','Asistencia al viajero'].map(it => (
            <a key={it} href="#cotizar" style={{ display: 'block', padding: '6px 0', fontSize: 14, color: '#fff', textDecoration: 'none' }}>{it}</a>
          ))}
        </div>

        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.4)', marginBottom: 16 }}>
            Contacto
          </div>
          <div style={{ fontSize: 14, color: '#fff', marginBottom: 8 }}>+54 9 221 698 4917</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', marginBottom: 16 }}>Lunes a viernes · 9 a 19 hs</div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', lineHeight: 1.6 }}>
            La Plata, Buenos Aires<br/>
            Argentina
          </div>
        </div>
      </div>

      <div style={{ paddingTop: 28, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}>
          © {new Date().getFullYear()} Orsini Seguros · Matrícula SSN 104.304
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)' }}>
          Información publicitaria. Las coberturas dependen de cada compañía.
        </div>
      </div>
    </Container>
  </footer>
);

Object.assign(window, {
  Container, SectionTitle,
  Aseguradoras, ComoFunciona, Calculadora, Testimonios, Consejos, FAQ, FooterContacto,
});
