/* Forms — one per ramo, all visible (no multi-step), validates,
   builds a WhatsApp deep link with prebuilt message and opens it. */

const WHATSAPP_NUMBER = "5492216984917"; // +54 9 221 698 4917

const buildWhatsAppUrl = (mensaje) => {
  const text = encodeURIComponent(mensaje);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
};

const Field = ({ label, hint, children, span = 1, error }) => (
  <label style={{
    display: 'flex', flexDirection: 'column', gap: 6,
    gridColumn: `span ${span}`,
  }}>
    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)', letterSpacing: '.02em' }}>
      {label}
    </span>
    {children}
    {hint && !error && (
      <span style={{ fontSize: 11, color: 'var(--muted)' }}>{hint}</span>
    )}
    {error && (
      <span style={{ fontSize: 11, color: 'var(--bad)' }}>{error}</span>
    )}
  </label>
);

const inputStyle = {
  height: 44,
  padding: '0 12px',
  borderRadius: 10,
  border: '1px solid var(--line)',
  background: '#fff',
  fontSize: 14,
  color: 'var(--ink)',
  outline: 'none',
  transition: 'border-color .15s, box-shadow .15s',
  width: '100%',
};

const Input = (props) => (
  <input
    {...props}
    style={{ ...inputStyle, ...(props.style || {}) }}
    onFocus={(e) => { e.target.style.borderColor = 'var(--brand)'; e.target.style.boxShadow = '0 0 0 3px rgba(40,150,254,.15)'; }}
    onBlur={(e) => { e.target.style.borderColor = 'var(--line)'; e.target.style.boxShadow = 'none'; }}
  />
);

const Select = ({ children, ...props }) => (
  <select
    {...props}
    style={{ ...inputStyle, appearance: 'none',
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%236b7385' stroke-width='1.6' fill='none' stroke-linecap='round'/></svg>\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 12px center',
      paddingRight: 32,
      ...(props.style || {})
    }}
  >{children}</select>
);

/* ---------- Datasets ---------- */

const COMPANIAS_ACTUALES = [
  "No tengo seguro actualmente",
  "Federación Patronal", "Mercantil Andina", "Rivadavia",
  "La Caja", "Sancor", "San Cristóbal", "Allianz", "Zurich",
  "Provincia Seguros", "Mapfre", "HDI", "Otra"
];

const MARCAS_AUTO = ["Volkswagen","Ford","Chevrolet","Renault","Fiat","Peugeot","Toyota","Citroën","Honda","Nissan","Hyundai","Kia","Jeep","Otra"];
const MARCAS_MOTO = ["Honda","Yamaha","Bajaj","Motomel","Zanella","Corven","Beta","Suzuki","Kawasaki","Otra"];
const MARCAS_BICI = ["Trek","Specialized","Giant","Vairo","Venzo","SLP","Olmo","Otra"];

const TIPOS_VIVIENDA = ["Casa", "Departamento"];
const TIPOS_TECHO = ["Losa de hormigón", "Tejas", "Chapa", "Mixto"];

const yearsBack = (n) => {
  const y = new Date().getFullYear();
  return Array.from({length: n}, (_, i) => y - i);
};

/* ---------- Shared header ---------- */

const FormHeader = ({ title, sub }) => (
  <div style={{ marginBottom: 18, gridColumn: '1 / -1' }}>
    <h3 className="serif" style={{ margin: 0, fontSize: 28, lineHeight: 1.1, color: 'var(--ink)' }}>
      {title}
    </h3>
    <p style={{ margin: '6px 0 0', fontSize: 14, color: 'var(--muted)' }}>{sub}</p>
  </div>
);

const ContactoBlock = ({ values, set, errs }) => (
  <React.Fragment>
    <Field label="Nombre y apellido" error={errs.nombre}>
      <Input value={values.nombre} onChange={(e) => set('nombre', e.target.value)} placeholder="Juan Pérez" />
    </Field>
    <Field label="WhatsApp" hint="Te respondo por acá" error={errs.telefono}>
      <Input type="tel" value={values.telefono} onChange={(e) => set('telefono', e.target.value)} placeholder="221 555 5555" />
    </Field>
    <Field label="Email (opcional)" span={2}>
      <Input type="email" value={values.email} onChange={(e) => set('email', e.target.value)} placeholder="tu@email.com" />
    </Field>
  </React.Fragment>
);

const SubmitRow = ({ label = "Enviar y cotizar por WhatsApp", note }) => (
  <div className="submit-row" style={{
    gridColumn: '1 / -1', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', gap: 16, marginTop: 6, flexWrap: 'wrap'
  }}>
    <p style={{ margin: 0, fontSize: 12, color: 'var(--muted)', maxWidth: 360 }}>
      {note || "Al enviar abrimos WhatsApp con tus datos pre-cargados. Te respondo personalmente con la mejor opción."}
    </p>
    <button type="submit" style={{
      height: 50, padding: '0 22px', borderRadius: 12,
      background: 'var(--brand)', color: '#fff', border: 'none',
      fontWeight: 700, fontSize: 14, letterSpacing: '.01em',
      cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10,
      boxShadow: '0 6px 20px rgba(40,150,254,.30)',
    }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 3.5C17.8 1.3 14.9 .1 11.9 .1 5.7 .1 .7 5.1 .7 11.3c0 2 .5 3.9 1.5 5.6L.5 23l6.3-1.6c1.6.9 3.4 1.4 5.2 1.4 6.2 0 11.2-5 11.2-11.2 0-3-1.2-5.9-3.2-8zm-8.1 17.2c-1.6 0-3.2-.4-4.6-1.3l-.3-.2-3.7.9.9-3.6-.2-.3a9.2 9.2 0 0 1-1.4-4.9c0-5.1 4.1-9.2 9.2-9.2 2.5 0 4.8 1 6.5 2.7s2.7 4 2.7 6.5c0 5.1-4.1 9.4-9.1 9.4zm5.2-7c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3z"/></svg>
      {label}
    </button>
  </div>
);

const FormShell = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit} className="form-grid" style={{
    display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 14,
  }}>
    {children}
  </form>
);

/* ---------- Auto / Moto (mismos campos) ---------- */

const FormVehiculo = ({ tipo = 'auto' }) => {
  const [v, setV] = React.useState({
    nombre: '', telefono: '', email: '',
    companiaActual: '', pagaActual: '',
    localidad: '', marca: '', modelo: '', motor: '', anio: '',
    patente: '',
  });
  const [errs, setErrs] = React.useState({});
  const set = (k, val) => setV(s => ({ ...s, [k]: val }));

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!v.nombre) er.nombre = 'Necesito tu nombre';
    if (!v.telefono || v.telefono.replace(/\D/g,'').length < 8) er.telefono = 'Teléfono inválido';
    if (!v.localidad) er.localidad = 'Ingresá tu localidad';
    if (!v.marca) er.marca = 'Elegí marca';
    if (!v.modelo) er.modelo = 'Ingresá el modelo';
    if (!v.anio) er.anio = 'Ingresá el año';
    setErrs(er);
    if (Object.keys(er).length) return;

    const ramoLabel = tipo === 'auto' ? 'AUTO' : 'MOTO';
    const msg =
`Hola Julian, quiero cotizar un seguro de ${ramoLabel}.

Nombre: ${v.nombre}
Tel: ${v.telefono}${v.email ? `\nEmail: ${v.email}` : ''}
Localidad: ${v.localidad}

Vehículo: ${v.marca} ${v.modelo}${v.motor ? ` ${v.motor}` : ''} (${v.anio})${v.patente ? `\nPatente: ${v.patente}` : ''}

${v.companiaActual ? `Compañía actual: ${v.companiaActual}` : ''}
${v.pagaActual ? `Pago actual: $${v.pagaActual}` : ''}`;

    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  const marcas = tipo === 'auto' ? MARCAS_AUTO : MARCAS_MOTO;

  return (
    <FormShell onSubmit={submit}>
      <FormHeader
        title={tipo === 'auto' ? 'Cotizá tu seguro de auto' : 'Cotizá tu seguro de moto'}
        sub="Completá una sola vez. Comparo entre Federación Patronal, Mercantil Andina y Rivadavia."
      />

      <Field label="Localidad" error={errs.localidad}>
        <Input value={v.localidad} onChange={(e) => set('localidad', e.target.value)} placeholder="La Plata, Buenos Aires" />
      </Field>
      <Field label="Marca" error={errs.marca}>
        <Select value={v.marca} onChange={(e) => set('marca', e.target.value)}>
          <option value="">Elegí una marca</option>
          {marcas.map(m => <option key={m} value={m}>{m}</option>)}
        </Select>
      </Field>
      <Field label="Modelo" error={errs.modelo}>
        <Input value={v.modelo} onChange={(e) => set('modelo', e.target.value)} placeholder={tipo === 'auto' ? 'Gol Trend' : 'CG 150 Titan'} />
      </Field>
      <Field label="Motor / versión">
        <Input value={v.motor} onChange={(e) => set('motor', e.target.value)} placeholder={tipo === 'auto' ? '1.6 16V' : '150cc'} />
      </Field>
      <Field label="Año" error={errs.anio}>
        <Select value={v.anio} onChange={(e) => set('anio', e.target.value)}>
          <option value="">Año</option>
          {yearsBack(35).map(y => <option key={y} value={y}>{y}</option>)}
        </Select>
      </Field>
      <Field label="Patente (opcional)">
        <Input value={v.patente} onChange={(e) => set('patente', e.target.value.toUpperCase())} placeholder="AB123CD" />
      </Field>

      <Field label="Compañía actual" span={2}>
        <Select value={v.companiaActual} onChange={(e) => set('companiaActual', e.target.value)}>
          <option value="">Elegí una opción</option>
          {COMPANIAS_ACTUALES.map(c => <option key={c} value={c}>{c}</option>)}
        </Select>
      </Field>
      <Field label="¿Cuánto pagás hoy? (mensual)" hint="En pesos. Si no tenés seguro, dejalo vacío.">
        <Input value={v.pagaActual} onChange={(e) => set('pagaActual', e.target.value.replace(/[^\d]/g,''))} placeholder="100000" inputMode="numeric" />
      </Field>
      <Field label="Cobertura buscada">
        <Select defaultValue="">
          <option value="">Recomendame vos</option>
          <option>Responsabilidad civil</option>
          <option>Terceros completo</option>
          <option>Todo riesgo con franquicia</option>
        </Select>
      </Field>

      <div className="form-contact-grid" style={{ gridColumn: '1 / -1', borderTop: '1px dashed var(--line)', paddingTop: 14, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
        <ContactoBlock values={v} set={set} errs={errs} />
      </div>

      <SubmitRow />
    </FormShell>
  );
};

/* ---------- Bici ---------- */

const FormBici = () => {
  const [v, setV] = React.useState({
    nombre:'', telefono:'', email:'',
    localidad:'', rodado:'', marca:'', anio:'', valor:''
  });
  const [errs, setErrs] = React.useState({});
  const set = (k, val) => setV(s => ({ ...s, [k]: val }));

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!v.nombre) er.nombre = 'Necesito tu nombre';
    if (!v.telefono) er.telefono = 'Teléfono requerido';
    if (!v.localidad) er.localidad = 'Localidad requerida';
    if (!v.rodado) er.rodado = 'Indicá el rodado';
    if (!v.valor) er.valor = 'Indicá el valor de mercado';
    setErrs(er);
    if (Object.keys(er).length) return;

    const msg =
`Hola Julian, quiero cotizar un seguro de BICICLETA.

Nombre: ${v.nombre}
Tel: ${v.telefono}${v.email ? `\nEmail: ${v.email}` : ''}
Localidad: ${v.localidad}

Bici: ${v.marca} rodado ${v.rodado}${v.anio ? ` (${v.anio})` : ''}
Valor en el mercado: $${v.valor}`;
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <FormShell onSubmit={submit}>
      <FormHeader title="Cotizá tu seguro de bici" sub="Cobertura por robo, daño y RC. Cotización personalizada." />

      <Field label="Localidad" error={errs.localidad}>
        <Input value={v.localidad} onChange={(e) => set('localidad', e.target.value)} placeholder="La Plata" />
      </Field>
      <Field label="Rodado" error={errs.rodado}>
        <Select value={v.rodado} onChange={(e) => set('rodado', e.target.value)}>
          <option value="">Elegí rodado</option>
          {[20,24,26,27.5,29].map(r => <option key={r} value={r}>{r}"</option>)}
        </Select>
      </Field>
      <Field label="Marca">
        <Select value={v.marca} onChange={(e) => set('marca', e.target.value)}>
          <option value="">Elegí marca</option>
          {MARCAS_BICI.map(m => <option key={m} value={m}>{m}</option>)}
        </Select>
      </Field>
      <Field label="Año">
        <Select value={v.anio} onChange={(e) => set('anio', e.target.value)}>
          <option value="">Año</option>
          {yearsBack(15).map(y => <option key={y} value={y}>{y}</option>)}
        </Select>
      </Field>
      <Field label="Valor de mercado" hint="¿Por cuánto se vende hoy?" error={errs.valor} span={2}>
        <Input value={v.valor} onChange={(e) => set('valor', e.target.value.replace(/[^\d]/g,''))} placeholder="800000" inputMode="numeric" />
      </Field>

      <div className="form-contact-grid" style={{ gridColumn: '1 / -1', borderTop: '1px dashed var(--line)', paddingTop: 14, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
        <ContactoBlock values={v} set={set} errs={errs} />
      </div>
      <SubmitRow />
    </FormShell>
  );
};

/* ---------- Hogar ---------- */

const FormHogar = () => {
  const [v, setV] = React.useState({
    nombre:'', telefono:'', email:'',
    localidad:'', metros:'', disyuntor:'', tipoVivienda:'Casa', piso:'', tenencia:'Propietario', techo:''
  });
  const [errs, setErrs] = React.useState({});
  const set = (k, val) => setV(s => ({ ...s, [k]: val }));

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!v.nombre) er.nombre = 'Nombre requerido';
    if (!v.telefono) er.telefono = 'Teléfono requerido';
    if (!v.localidad) er.localidad = 'Localidad requerida';
    if (!v.metros) er.metros = 'Indicá los m² cubiertos';
    if (!v.techo) er.techo = 'Indicá el tipo de techo';
    setErrs(er);
    if (Object.keys(er).length) return;

    const msg =
`Hola Julian, quiero cotizar un seguro de HOGAR.

Nombre: ${v.nombre}
Tel: ${v.telefono}${v.email ? `\nEmail: ${v.email}` : ''}
Localidad: ${v.localidad}

M² cubiertos: ${v.metros}
Tipo de vivienda: ${v.tipoVivienda}${v.tipoVivienda === 'Departamento' && v.piso ? ` (piso ${v.piso})` : ''}
Tenencia: ${v.tenencia}
Tipo de techo: ${v.techo}
Disyuntor: ${v.disyuntor || 'no especificado'}`;
    window.open(buildWhatsAppUrl(msg), '_blank');
  };

  return (
    <FormShell onSubmit={submit}>
      <FormHeader title="Cotizá tu seguro de hogar" sub="Incendio, robo, daños por agua y RC linderos." />

      <Field label="Localidad" error={errs.localidad}>
        <Input value={v.localidad} onChange={(e) => set('localidad', e.target.value)} placeholder="La Plata" />
      </Field>
      <Field label="Metros² cubiertos" error={errs.metros}>
        <Input value={v.metros} onChange={(e) => set('metros', e.target.value.replace(/[^\d]/g,''))} placeholder="80" inputMode="numeric" />
      </Field>
      <Field label="Tipo de vivienda">
        <Select value={v.tipoVivienda} onChange={(e) => set('tipoVivienda', e.target.value)}>
          {TIPOS_VIVIENDA.map(t => <option key={t}>{t}</option>)}
        </Select>
      </Field>
      <Field label={v.tipoVivienda === 'Departamento' ? 'Piso' : 'Piso (no aplica)'}>
        <Input
          value={v.piso}
          disabled={v.tipoVivienda !== 'Departamento'}
          onChange={(e) => set('piso', e.target.value)}
          placeholder="3"
          style={{ opacity: v.tipoVivienda === 'Departamento' ? 1 : .5 }}
        />
      </Field>
      <Field label="Tenencia">
        <Select value={v.tenencia} onChange={(e) => set('tenencia', e.target.value)}>
          <option>Propietario</option>
          <option>Inquilino</option>
        </Select>
      </Field>
      <Field label="Tipo de techo" error={errs.techo}>
        <Select value={v.techo} onChange={(e) => set('techo', e.target.value)}>
          <option value="">Elegí una opción</option>
          {TIPOS_TECHO.map(t => <option key={t}>{t}</option>)}
        </Select>
      </Field>
      <Field label="¿Tenés disyuntor?" span={2}>
        <div style={{ display: 'flex', gap: 8 }}>
          {['Sí','No','No sé'].map(opt => (
            <button key={opt} type="button" onClick={() => set('disyuntor', opt)} style={{
              flex: 1, height: 44, borderRadius: 10,
              border: '1px solid ' + (v.disyuntor === opt ? 'var(--brand)' : 'var(--line)'),
              background: v.disyuntor === opt ? 'rgba(40,150,254,.08)' : '#fff',
              color: 'var(--ink)', fontWeight: 600, fontSize: 14, cursor: 'pointer',
            }}>{opt}</button>
          ))}
        </div>
      </Field>

      <div className="form-contact-grid" style={{ gridColumn: '1 / -1', borderTop: '1px dashed var(--line)', paddingTop: 14, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 14 }}>
        <ContactoBlock values={v} set={set} errs={errs} />
      </div>
      <SubmitRow />
    </FormShell>
  );
};

/* ---------- Asistencia al viajero ---------- */

const ASISTENCIAS = [
  { id: 'go', name: 'GO! Assistance', tag: 'Cobertura amplia · Latam y mundo', url: '#go-assistance', shape:'globe' },
  { id: 'universal', name: 'Universal Assistance', tag: 'Líder regional · Cobertura premium', url: '#universal-assistance', shape:'plane' },
  { id: 'assist', name: 'Assist Card', tag: 'Marca histórica · Atención 24/7', url: '#assist-card', shape:'compass' },
];

const FormViajero = () => {
  const [v, setV] = React.useState({
    nombre:'', telefono:'', email:'',
    origen:'Argentina', destino:'', desde:'', hasta:'', pasajeros: 1, edades: ['']
  });
  const set = (k, val) => setV(s => ({ ...s, [k]: val }));

  const setPasajeros = (n) => {
    const num = Math.max(1, Math.min(10, parseInt(n) || 1));
    const edades = [...v.edades];
    while (edades.length < num) edades.push('');
    edades.length = num;
    setV(s => ({ ...s, pasajeros: num, edades }));
  };
  const setEdad = (i, val) => {
    const edades = [...v.edades];
    edades[i] = val.replace(/[^\d]/g,'');
    setV(s => ({ ...s, edades }));
  };

  return (
    <div>
      <FormHeader
        title="Asistencia al viajero"
        sub="Elegí una compañía y cotizá al instante. O dejame tus datos y te paso la mejor opción."
      />

      <div className="viajero-trip-grid" style={{
        display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14,
        marginBottom: 18,
      }}>
        <Field label="Origen">
          <Input value={v.origen} onChange={(e) => set('origen', e.target.value)} />
        </Field>
        <Field label="Destino">
          <Input value={v.destino} onChange={(e) => set('destino', e.target.value)} placeholder="Brasil, España, ..." />
        </Field>
        <Field label="Desde">
          <Input type="date" value={v.desde} onChange={(e) => set('desde', e.target.value)} />
        </Field>
        <Field label="Hasta">
          <Input type="date" value={v.hasta} onChange={(e) => set('hasta', e.target.value)} />
        </Field>
        <Field label="Pasajeros">
          <Select value={v.pasajeros} onChange={(e) => setPasajeros(e.target.value)}>
            {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
          </Select>
        </Field>
        <Field label="Edades de pasajeros" hint="Edad al momento del viaje">
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {v.edades.map((ed, i) => (
              <Input
                key={i}
                value={ed}
                onChange={(e) => setEdad(i, e.target.value)}
                placeholder={`P${i+1}`}
                style={{ width: 56, textAlign: 'center', padding: '0 6px' }}
                inputMode="numeric"
              />
            ))}
          </div>
        </Field>
      </div>

      <div className="viajero-cards" style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>
        {ASISTENCIAS.map((a) => (
          <a key={a.id} href={a.url} target="_blank" rel="noopener" className="viajero-card" style={{
            display: 'flex', alignItems: 'center', gap: 14, minWidth: 0,
            textDecoration: 'none', color: 'inherit',
            background: '#fff', border: '1px solid var(--line)', borderRadius: 12,
            padding: 14, transition: 'transform .15s, box-shadow .15s, border-color .15s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; e.currentTarget.style.borderColor = 'var(--brand)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'var(--line)'; }}
          >
            <div style={{
              width: 40, height: 40, borderRadius: 10, background: 'var(--brand)',
              display: 'grid', placeItems: 'center', flex: '0 0 auto'
            }}>
              {a.shape === 'globe' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#F6D365" strokeWidth="2"/><path d="M4 12 H20 M12 4 C15 8 15 16 12 20 M12 4 C9 8 9 16 12 20" stroke="#F6D365" strokeWidth="1.4"/></svg>
              )}
              {a.shape === 'plane' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 14 L21 7 L17 17 L13 14 L10 18 L9 14 Z" stroke="#F6D365" strokeWidth="1.8" strokeLinejoin="round"/></svg>
              )}
              {a.shape === 'compass' && (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="#F6D365" strokeWidth="2"/><path d="M12 7 L14 12 L12 17 L10 12 Z" fill="#F6D365"/></svg>
              )}
            </div>
            <div className="viajero-card-text" style={{ flex: 1, minWidth: 0, lineHeight: 1.2 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.name}</div>
              <div className="viajero-card-tag" style={{ fontSize: 11, color: 'var(--muted)', marginTop: 3, letterSpacing: '.04em', textTransform: 'uppercase', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{a.tag}</div>
            </div>
            <div className="viajero-card-cta" style={{
              flex: '0 0 auto', height: 36, padding: '0 14px', borderRadius: 9,
              background: 'var(--brand)', color: '#fff',
              display: 'inline-flex', alignItems: 'center', fontWeight: 700, fontSize: 12,
            }}>
              Cotizar →
            </div>
          </a>
        ))}
      </div>

      <div style={{
        background: 'var(--bg-2)', border: '1px solid var(--line)',
        borderRadius: 12, padding: 16, display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap'
      }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>¿No sabés cuál elegir?</div>
          <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 3 }}>
            Decime tu destino y fechas, te recomiendo la mejor cobertura.
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            const msg =
`Hola Julian, quiero asesoramiento para ASISTENCIA AL VIAJERO.

${v.nombre ? `Nombre: ${v.nombre}\n` : ''}${v.telefono ? `Tel: ${v.telefono}\n` : ''}Origen: ${v.origen}
Destino: ${v.destino || '-'}
Fechas: ${v.desde || '-'} a ${v.hasta || '-'}
Pasajeros: ${v.pasajeros}
Edades: ${v.edades.filter(Boolean).join(', ') || '-'}`;
            window.open(buildWhatsAppUrl(msg), '_blank');
          }}
          style={{
            height: 44, padding: '0 18px', borderRadius: 10,
            background: 'var(--brand)', color: '#fff', border: 'none',
            fontWeight: 700, fontSize: 13, cursor: 'pointer'
          }}
        >Asesorame por WhatsApp</button>
      </div>
    </div>
  );
};

Object.assign(window, {
  WHATSAPP_NUMBER, buildWhatsAppUrl,
  FormVehiculo, FormBici, FormHogar, FormViajero,
});
