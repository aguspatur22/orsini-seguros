/* Main app — navbar, hero with ramo switcher, assembly. */

const RAMOS = [
  { id: 'auto',    label: 'Auto',                 short: 'Auto' },
  { id: 'moto',    label: 'Moto',                 short: 'Moto' },
  { id: 'hogar',   label: 'Hogar',                short: 'Hogar' },
  { id: 'bici',    label: 'Bici',                 short: 'Bici' },
  { id: 'viajero', label: 'Asistencia al viajero', short: 'Viajero' },
];

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(238,244,255,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'saturate(140%) blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'background .18s, border-color .18s',
    }}>
      <Container style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }} className="container-pad">
        <a href="#top" style={{ textDecoration: 'none' }}><Logo /></a>
        <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {[
            ['Cotizar', '#cotizar'],
            ['Cómo funciona', '#como-funciona'],
            ['Ahorro', '#ahorro'],
            ['Testimonios', '#testimonios'],
            ['FAQ', '#faq'],
          ].map(([l, h]) => (
            <a key={l} href={h} style={{ fontSize: 14, color: 'var(--ink-2)', textDecoration: 'none', fontWeight: 500 }}>{l}</a>
          ))}
          <button
            className="nav-cta"
            onClick={() => window.open(buildWhatsAppUrl('Hola Julian, quiero cotizar mi seguro.'), '_blank')}
            style={{
              height: 40, padding: '0 16px', borderRadius: 999,
              background: 'var(--brand)', color: '#fff', border: 'none',
              fontWeight: 600, fontSize: 13, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80' }}/>
            WhatsApp
          </button>
        </nav>
      </Container>
    </header>
  );
};

const RamoSwitch = ({ active, onChange }) => (
  <div className="ramo-switch" style={{
    display: 'flex', gap: 6, padding: 6,
    background: 'rgba(15,20,30,.05)', border: '1px solid var(--line)',
    borderRadius: 999, width: '100%', maxWidth: '100%',
    overflowX: 'auto', overflowY: 'hidden',
    scrollbarWidth: 'none',
  }}>
    {RAMOS.map(r => {
      const on = r.id === active;
      return (
        <button key={r.id} onClick={() => onChange(r.id)} style={{
          height: 38, padding: '0 16px', borderRadius: 999,
          background: on ? 'var(--brand)' : 'transparent',
          color: on ? '#fff' : 'var(--ink-2)',
          border: 'none', cursor: 'pointer',
          fontSize: 13, fontWeight: 600, letterSpacing: '.01em',
          transition: 'all .15s',
          flex: '0 0 auto', whiteSpace: 'nowrap',
        }}>
          <span className="ramo-label-full">{r.label}</span>
          <span className="ramo-label-short" style={{ display: 'none' }}>{r.short}</span>
        </button>
      );
    })}
  </div>
);

const Hero = () => {
  const [ramo, setRamo] = React.useState('auto');

  const renderForm = () => {
    if (ramo === 'auto')    return <FormVehiculo tipo="auto" />;
    if (ramo === 'moto')    return <FormVehiculo tipo="moto" />;
    if (ramo === 'hogar')   return <FormHogar />;
    if (ramo === 'bici')    return <FormBici />;
    if (ramo === 'viajero') return <FormViajero />;
    return null;
  };

  return (
    <section id="cotizar" style={{ paddingTop: 24, paddingBottom: 80, position: 'relative' }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background:
          'radial-gradient(800px 400px at 80% -10%, rgba(21,101,192,.08), transparent 60%),' +
          'radial-gradient(700px 500px at 0% 30%, rgba(40,150,254,.06), transparent 60%)'
      }}/>
      <Container style={{ position: 'relative' }} className="container-pad">
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 580px)', gap: 48, alignItems: 'start', paddingTop: 40 }}>
          {/* Left: copy + tiles */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              height: 30, padding: '0 12px', borderRadius: 999,
              background: 'rgba(40,150,254,.08)', border: '1px solid rgba(40,150,254,.18)',
              fontSize: 12, color: 'var(--ink-2)', fontWeight: 600
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--good)' }}/>
              Atención personalizada · Respuesta el mismo día
            </div>

            <h1 className="serif hero-title" style={{
              margin: '24px 0 0', fontSize: 'clamp(44px, 6vw, 72px)',
              lineHeight: 0.98, letterSpacing: '-0.025em', color: 'var(--ink)',
              textWrap: 'balance'
            }}>
              Cotizá tu seguro y <em style={{ fontStyle: 'italic', color: 'var(--accent-2)' }}>pagá menos</em>.
            </h1>
            <p style={{
              margin: '20px 0 0', fontSize: 18, lineHeight: 1.55, color: 'var(--ink-2)',
              maxWidth: 520
            }}>
              Comparo entre Federación Patronal, Mercantil Andina y Rivadavia para conseguirte mejor precio y cobertura. Decime cuánto pagás y te digo si puedo mejorarlo.
            </p>

            {/* Tile grid: visual cue per ramo */}
            <div className="ramo-tiles" style={{
              marginTop: 36,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              maxWidth: 540,
              justifyContent: 'flex-start',
            }}>
              {RAMOS.map(r => (
                <button key={r.id} onClick={() => setRamo(r.id)} style={{
                  position: 'relative', padding: 0, border: 'none', background: 'none',
                  cursor: 'pointer', textAlign: 'left',
                  width: 100, flex: '0 0 100px',
                }}>
                  <div style={{
                    border: ramo === r.id ? '2px solid var(--brand)' : '2px solid transparent',
                    borderRadius: 16, padding: 4,
                    transition: 'all .15s',
                  }}>
                    <Tile ramo={r.id} />
                  </div>
                  <div style={{
                    marginTop: 8, fontSize: 12, fontWeight: 600,
                    color: ramo === r.id ? 'var(--brand)' : 'var(--ink-2)',
                    textAlign: 'center', letterSpacing: '.01em'
                  }}>
                    {r.short}
                  </div>
                </button>
              ))}
            </div>

            {/* Trust line */}
            <div className="hero-trust" style={{
              marginTop: 32, display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap',
              fontSize: 13, color: 'var(--muted)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="var(--good)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Sin costo de gestión
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="var(--good)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Productor matriculado SSN 104.304
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="var(--good)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Hablás siempre conmigo
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div className="hero-form-card" style={{
            background: 'var(--card)', border: '1px solid var(--line)',
            borderRadius: 20, padding: 28, boxShadow: 'var(--shadow)',
            position: 'sticky', top: 96
          }}>
            <div style={{ marginBottom: 20 }}>
              <RamoSwitch active={ramo} onChange={setRamo} />
            </div>
            {renderForm()}
          </div>
        </div>
      </Container>
    </section>
  );
};

/* Sticky WhatsApp FAB */
const WhatsAppFab = () => (
  <button
    onClick={() => window.open(buildWhatsAppUrl('Hola Julian, quiero cotizar mi seguro.'), '_blank')}
    aria-label="Hablar por WhatsApp"
    style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 60,
      width: 60, height: 60, borderRadius: '50%',
      background: '#25D366', color: '#fff', border: 'none', cursor: 'pointer',
      display: 'grid', placeItems: 'center',
      boxShadow: '0 10px 30px rgba(37,211,102,.4), 0 4px 8px rgba(0,0,0,.1)',
    }}>
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3.5C17.8 1.3 14.9 .1 11.9 .1 5.7 .1 .7 5.1 .7 11.3c0 2 .5 3.9 1.5 5.6L.5 23l6.3-1.6c1.6.9 3.4 1.4 5.2 1.4 6.2 0 11.2-5 11.2-11.2 0-3-1.2-5.9-3.2-8zm-8.1 17.2c-1.6 0-3.2-.4-4.6-1.3l-.3-.2-3.7.9.9-3.6-.2-.3a9.2 9.2 0 0 1-1.4-4.9c0-5.1 4.1-9.2 9.2-9.2 2.5 0 4.8 1 6.5 2.7s2.7 4 2.7 6.5c0 5.1-4.1 9.4-9.1 9.4zm5.2-7c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3z"/></svg>
  </button>
);

/* App root */
const App = () => (
  <div id="top">
    <Nav />
    <Hero />
    <Aseguradoras />
    <ComoFunciona />
    <Calculadora />
    <Testimonios />
    <Consejos />
    <FAQ />
    <FooterContacto />
    <WhatsAppFab />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
