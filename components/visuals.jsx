/* Inline SVG illustrations + brand mark + insurer logo cards. */

const Mark = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <rect x="2" y="2" width="36" height="36" rx="9" fill="var(--brand)"/>
    <path d="M20 8 L30 13 V21 C30 26.5 25.5 30.5 20 32 C14.5 30.5 10 26.5 10 21 V13 Z"
          fill="none" stroke="var(--accent-2)" strokeWidth="2.2" strokeLinejoin="round"/>
    <path d="M15.5 20 L19 23.5 L25 16.5" stroke="var(--accent-2)" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const Logo = ({ light = false }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <div style={{
      width: 44, height: 44, borderRadius: 10,
      background: light ? 'rgba(255,255,255,.95)' : '#fff',
      border: '1px solid ' + (light ? 'rgba(255,255,255,.2)' : 'var(--line)'),
      display: 'grid', placeItems: 'center', flex: '0 0 auto', overflow: 'hidden',
    }}>
      <img src="assets/orsini-logo.jpeg" alt="Orsini Seguros" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
    </div>
    <div style={{ lineHeight: 1 }}>
      <div style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-0.01em', color: light ? '#fff' : 'var(--ink)' }}>
        Orsini Seguros
      </div>
      <div style={{ fontSize: 11, color: light ? 'rgba(255,255,255,.7)' : 'var(--muted)', marginTop: 4, letterSpacing: '.06em', textTransform: 'uppercase' }}>
        Mat. SSN 104.304
      </div>
    </div>
  </div>
);

/* Insurer card — uses real logo image when logoSrc is provided. */
const InsurerMark = ({ name, sub, color = '#1565C0', accent = '#F6D365', shape = 'shield', logoSrc }) => (
  <div style={{
    background: '#fff', border: '1px solid var(--line)', borderRadius: 12,
    padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 14,
    minHeight: 76,
  }}>
    <div style={{
      width: 52, height: 52, borderRadius: 10,
      background: logoSrc ? '#f8fafc' : color,
      border: logoSrc ? '1px solid var(--line)' : 'none',
      display: 'grid', placeItems: 'center', flex: '0 0 auto',
      overflow: 'hidden', padding: logoSrc ? 6 : 0,
    }}>
      {logoSrc ? (
        <img src={logoSrc} alt={name} style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
      ) : (
        <>
          {shape === 'shield' && (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 3 L20 6 V12 C20 16.5 16.5 19.8 12 21 C7.5 19.8 4 16.5 4 12 V6 Z" stroke={accent} strokeWidth="2"/>
            </svg>
          )}
          {shape === 'circle' && (
            <svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke={accent} strokeWidth="2" fill="none"/><circle cx="12" cy="12" r="3" fill={accent}/></svg>
          )}
          {shape === 'mountain' && (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 19 L9 9 L13 14 L17 7 L21 19 Z" stroke={accent} strokeWidth="2" strokeLinejoin="round"/></svg>
          )}
          {shape === 'globe' && (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke={accent} strokeWidth="2"/><path d="M4 12 H20 M12 4 C15 8 15 16 12 20 M12 4 C9 8 9 16 12 20" stroke={accent} strokeWidth="1.4"/></svg>
          )}
          {shape === 'plane' && (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 14 L21 7 L17 17 L13 14 L10 18 L9 14 Z" stroke={accent} strokeWidth="1.8" strokeLinejoin="round"/></svg>
          )}
          {shape === 'compass' && (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke={accent} strokeWidth="2"/><path d="M12 7 L14 12 L12 17 L10 12 Z" fill={accent}/></svg>
          )}
        </>
      )}
    </div>
    <div style={{ lineHeight: 1.15 }}>
      <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{name}</div>
      <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, letterSpacing: '.04em', textTransform: 'uppercase' }}>{sub}</div>
    </div>
  </div>
);

/* ─── Hero illustration tiles ─── */

/* AUTO — kept as-is, user confirmed it's fine */
const TileAuto = () => (
  <div style={tileStyles.base(linear('#1d7ad6','#2896FE'))}>
    <div style={tileStyles.sky}/>
    <div style={tileStyles.road}/>
    <svg viewBox="0 0 220 120" style={{ position:'absolute', bottom: 14, left: '50%', transform:'translateX(-50%)', width:'82%' }}>
      <defs>
        <linearGradient id="carBody" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#f6f3ec"/><stop offset="1" stopColor="#cdc6b4"/>
        </linearGradient>
      </defs>
      <ellipse cx="110" cy="105" rx="92" ry="6" fill="rgba(0,0,0,.25)"/>
      <path d="M20 80 Q30 50 70 46 L150 46 Q180 48 200 78 L200 92 L20 92 Z" fill="url(#carBody)"/>
      <path d="M62 50 L82 32 L138 32 L158 50 Z" fill="rgba(255,255,255,.55)" stroke="#2896FE" strokeWidth="1.2"/>
      <line x1="110" y1="32" x2="110" y2="50" stroke="#1d7ad6" strokeWidth="1.2"/>
      <circle cx="60" cy="92" r="13" fill="#15191f"/><circle cx="60" cy="92" r="5" fill="#6b7385"/>
      <circle cx="160" cy="92" r="13" fill="#15191f"/><circle cx="160" cy="92" r="5" fill="#6b7385"/>
      <rect x="188" y="70" width="10" height="6" rx="2" fill="#F6D365"/>
    </svg>
  </div>
);

/* MOTO — sportbike realista, fondo oscuro para contraste */
const TileMoto = () => (
  <div style={tileStyles.base('linear-gradient(180deg, #6A1B9A 0%, #8E24AA 100%)')}>
    <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 72% 18%, rgba(246,211,101,.22), transparent 50%)' }}/>
    <div style={tileStyles.road}/>
    <svg viewBox="0 0 220 128" style={{ position:'absolute', bottom: 10, left:'50%', transform:'translateX(-50%)', width:'86%' }}>
      {/* ground shadow */}
      <ellipse cx="112" cy="120" rx="84" ry="4" fill="rgba(0,0,0,.4)"/>

      {/* REAR WHEEL */}
      <circle cx="58" cy="94" r="23" fill="#111827"/>
      <circle cx="58" cy="94" r="17" fill="#1e2736"/>
      <circle cx="58" cy="94" r="10" fill="none" stroke="#374151" strokeWidth="1.8"/>
      <circle cx="58" cy="94" r="3.5" fill="#4b5563"/>
      {/* spokes */}
      <line x1="58" y1="71" x2="58" y2="117" stroke="#374151" strokeWidth="1.3"/>
      <line x1="35" y1="94" x2="81" y2="94" stroke="#374151" strokeWidth="1.3"/>
      <line x1="41.7" y1="77.7" x2="74.3" y2="110.3" stroke="#374151" strokeWidth="1"/>
      <line x1="74.3" y1="77.7" x2="41.7" y2="110.3" stroke="#374151" strokeWidth="1"/>

      {/* FRONT WHEEL */}
      <circle cx="163" cy="94" r="23" fill="#111827"/>
      <circle cx="163" cy="94" r="17" fill="#1e2736"/>
      <circle cx="163" cy="94" r="10" fill="none" stroke="#374151" strokeWidth="1.8"/>
      <circle cx="163" cy="94" r="3.5" fill="#4b5563"/>
      <line x1="163" y1="71" x2="163" y2="117" stroke="#374151" strokeWidth="1.3"/>
      <line x1="140" y1="94" x2="186" y2="94" stroke="#374151" strokeWidth="1.3"/>
      <line x1="146.7" y1="77.7" x2="179.3" y2="110.3" stroke="#374151" strokeWidth="1"/>
      <line x1="179.3" y1="77.7" x2="146.7" y2="110.3" stroke="#374151" strokeWidth="1"/>

      {/* SWINGARM */}
      <path d="M103 90 L58 94" stroke="#64748b" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M103 90 L103 84 L58 88" stroke="#475569" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* FRAME — backbone */}
      <path d="M103 88 L126 62 L148 64" stroke="#cbd5e1" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* down tube */}
      <path d="M126 62 L108 88" stroke="#94a3b8" strokeWidth="2.8" fill="none" strokeLinecap="round"/>

      {/* FRONT FORK */}
      <line x1="150" y1="65" x2="163" y2="94" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round"/>
      <line x1="145" y1="67" x2="158" y2="94" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round"/>

      {/* ENGINE BLOCK */}
      <path d="M90 88 L125 88 L128 98 L87 98 Z" fill="#1e2736" stroke="#374151" strokeWidth="1"/>
      <rect x="96" y="91" width="12" height="6" rx="1" fill="#374151"/>
      <rect x="112" y="91" width="12" height="6" rx="1" fill="#374151"/>

      {/* FAIRING — main body */}
      <path d="M103 88 L108 88 L126 62 L148 64 L156 72 L162 88 Q155 82 148 80 L130 78 L110 84 Z" fill="#e2e8f0"/>
      {/* fairing detail / panel line */}
      <path d="M120 80 Q138 72 150 74 L155 80 L140 82 Q128 84 120 80 Z" fill="#cbd5e1"/>
      {/* lower fairing */}
      <path d="M108 88 L130 78 L148 80 L155 88 L148 96 L128 96 Z" fill="#f1f5f9"/>

      {/* TANK */}
      <path d="M108 84 Q118 74 132 74 L142 76 L138 86 L110 88 Z" fill="#dde3ea"/>

      {/* SEAT */}
      <path d="M90 82 L108 80 L108 88 L88 90 Z" fill="#b0bec5"/>
      <path d="M91 83 Q99 78 107 81 L107 85 Q99 82 92 86 Z" fill="rgba(255,255,255,.12)"/>

      {/* EXHAUST PIPE */}
      <path d="M88 96 L72 106 L60 112" stroke="#6b7280" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="59" cy="113" rx="4" ry="3" fill="#4b5563" stroke="#374151" strokeWidth="1"/>

      {/* HANDLEBARS */}
      <line x1="148" y1="62" x2="165" y2="54" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="165" y1="54" x2="175" y2="59" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"/>

      {/* HEADLIGHT */}
      <path d="M155 68 Q160 58 168 60 L167 72 L157 74 Z" fill="rgba(180,220,255,.35)" stroke="rgba(255,255,255,.25)" strokeWidth=".8"/>
      <ellipse cx="164" cy="67" rx="6" ry="5" fill="#F6D365" opacity=".9"/>
      <ellipse cx="164" cy="66" rx="3" ry="2.5" fill="#fff" opacity=".5"/>

      {/* TAIL LIGHT */}
      <rect x="74" y="76" width="9" height="5" rx="1.5" fill="#F6D365" opacity=".7"/>
    </svg>
  </div>
);

/* HOGAR — casa con detalles */
const TileHogar = () => (
  <div style={tileStyles.base('linear-gradient(180deg, #FFF9E6 0%, #FFE082 44%, #66BB6A 44%, #2E7D32 100%)')}>
    <div style={{...tileStyles.sky, background:'radial-gradient(ellipse at 50% -10%, rgba(255,200,60,.35), transparent 55%)'}}/>
    <svg viewBox="0 0 220 150" style={{ position:'absolute', bottom: 0, left:'50%', transform:'translateX(-50%)', width:'100%', height:'100%' }}>
      {/* ground */}
      <rect x="0" y="128" width="220" height="22" fill="#0a3d62"/>
      {/* shrubs */}
      <ellipse cx="46" cy="128" rx="18" ry="11" fill="#1a6640"/>
      <ellipse cx="55" cy="122" rx="12" ry="9" fill="#1f7a4d"/>
      <ellipse cx="174" cy="128" rx="18" ry="11" fill="#1a6640"/>
      <ellipse cx="165" cy="122" rx="12" ry="9" fill="#1f7a4d"/>
      {/* house body */}
      <rect x="50" y="74" width="120" height="54" fill="#f0f4f8"/>
      {/* roof */}
      <path d="M36 76 L110 24 L184 76 Z" fill="#e2e8f0"/>
      <path d="M36 76 L110 24 L184 76" stroke="#2896FE" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
      {/* chimney */}
      <rect x="142" y="36" width="13" height="26" fill="#d4dce8"/>
      <rect x="140" y="33" width="17" height="6" rx="1" fill="#c5d0de"/>
      {/* door */}
      <rect x="95" y="90" width="30" height="38" rx="3" fill="#1565C0"/>
      <path d="M95 90 Q110 85 125 90" fill="rgba(255,255,255,.15)"/>
      <circle cx="121" cy="110" r="2.5" fill="#F6D365"/>
      {/* left window */}
      <rect x="58" y="84" width="24" height="20" rx="2" fill="#2896FE" opacity=".75"/>
      <line x1="70" y1="84" x2="70" y2="104" stroke="rgba(255,255,255,.5)" strokeWidth="1.5"/>
      <line x1="58" y1="94" x2="82" y2="94" stroke="rgba(255,255,255,.5)" strokeWidth="1.5"/>
      {/* right window */}
      <rect x="138" y="84" width="24" height="20" rx="2" fill="#2896FE" opacity=".75"/>
      <line x1="150" y1="84" x2="150" y2="104" stroke="rgba(255,255,255,.5)" strokeWidth="1.5"/>
      <line x1="138" y1="94" x2="162" y2="94" stroke="rgba(255,255,255,.5)" strokeWidth="1.5"/>
      {/* front path */}
      <rect x="104" y="128" width="12" height="22" fill="#b0bec5" opacity=".6"/>
    </svg>
  </div>
);

/* BICI — bicicleta de ruta */
const TileBici = () => (
  <div style={tileStyles.base(linear('#1f7a4d','#2f9c66'))}>
    <div style={{...tileStyles.sky, background:'radial-gradient(ellipse at 30% 25%, rgba(255,255,255,.35), transparent 55%)'}}/>
    <div style={{...tileStyles.road, background:'linear-gradient(180deg, transparent, #15633a 70%)'}}/>
    <svg viewBox="0 0 220 130" style={{ position:'absolute', bottom: 12, left:'50%', transform:'translateX(-50%)', width:'82%' }}>
      <ellipse cx="110" cy="118" rx="82" ry="3.5" fill="rgba(0,0,0,.25)"/>
      {/* rear wheel */}
      <circle cx="60" cy="90" r="24" fill="none" stroke="#f0f4f8" strokeWidth="3"/>
      <circle cx="60" cy="90" r="3.5" fill="#f0f4f8"/>
      <line x1="60" y1="66" x2="60" y2="114" stroke="#cdd8e4" strokeWidth="1.2" opacity=".6"/>
      <line x1="36" y1="90" x2="84" y2="90" stroke="#cdd8e4" strokeWidth="1.2" opacity=".6"/>
      <line x1="43" y1="73" x2="77" y2="107" stroke="#cdd8e4" strokeWidth="1" opacity=".5"/>
      <line x1="77" y1="73" x2="43" y2="107" stroke="#cdd8e4" strokeWidth="1" opacity=".5"/>
      {/* front wheel */}
      <circle cx="160" cy="90" r="24" fill="none" stroke="#f0f4f8" strokeWidth="3"/>
      <circle cx="160" cy="90" r="3.5" fill="#f0f4f8"/>
      <line x1="160" y1="66" x2="160" y2="114" stroke="#cdd8e4" strokeWidth="1.2" opacity=".6"/>
      <line x1="136" y1="90" x2="184" y2="90" stroke="#cdd8e4" strokeWidth="1.2" opacity=".6"/>
      <line x1="143" y1="73" x2="177" y2="107" stroke="#cdd8e4" strokeWidth="1" opacity=".5"/>
      <line x1="177" y1="73" x2="143" y2="107" stroke="#cdd8e4" strokeWidth="1" opacity=".5"/>
      {/* main frame triangle */}
      <path d="M60 90 L100 90 L118 58 Z" stroke="#F6D365" strokeWidth="3" fill="none" strokeLinejoin="round" strokeLinecap="round"/>
      {/* seat tube */}
      <line x1="100" y1="90" x2="112" y2="54" stroke="#F6D365" strokeWidth="3" strokeLinecap="round"/>
      {/* fork */}
      <path d="M118 58 L144 76 L160 90" stroke="#f0f4f8" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* top tube */}
      <line x1="118" y1="58" x2="112" y2="54" stroke="#F6D365" strokeWidth="2.5" strokeLinecap="round"/>
      {/* handlebar stem */}
      <line x1="136" y1="68" x2="136" y2="52" stroke="#f0f4f8" strokeWidth="3" strokeLinecap="round"/>
      {/* handlebars */}
      <path d="M126 52 L148 52 L150 55" stroke="#f0f4f8" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M126 52 L124 55" stroke="#f0f4f8" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* seat post */}
      <line x1="112" y1="54" x2="112" y2="42" stroke="#f0f4f8" strokeWidth="2.5" strokeLinecap="round"/>
      {/* saddle */}
      <path d="M103 42 L123 42" stroke="#e8edf2" strokeWidth="4" strokeLinecap="round"/>
      {/* pedal crank */}
      <circle cx="100" cy="90" r="4.5" fill="#F6D365"/>
      <line x1="94" y1="86" x2="106" y2="94" stroke="#d4a800" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  </div>
);

/* VIAJERO — playa, palmeras y atardecer anaranjado */
const TileViajero = () => (
  <div style={tileStyles.base('linear-gradient(180deg, #FFB347 0%, #FF7043 48%, #2196A6 48%, #1565C0 100%)')}>
    {/* sol */}
    <div style={{ position:'absolute', top: 14, left: '50%', transform:'translateX(-50%)', width: 52, height: 52, borderRadius: '50%', background:'radial-gradient(circle, #fff9e6, #FFD54F 55%, transparent 72%)' }}/>
    {/* rayos del sol */}
    <svg viewBox="0 0 220 140" style={{ position:'absolute', inset:0, width:'100%', height:'100%' }}>
      {/* reflejo en el agua */}
      <path d="M75 75 Q110 68 145 75" stroke="rgba(255,255,255,.35)" strokeWidth="2" fill="none"/>
      <path d="M85 82 Q110 76 135 82" stroke="rgba(255,255,255,.25)" strokeWidth="1.5" fill="none"/>

      {/* olas */}
      <path d="M0 72 Q28 66 55 72 T110 72 T165 72 T220 72" stroke="rgba(255,255,255,.55)" strokeWidth="1.8" fill="none"/>
      <path d="M0 82 Q28 76 55 82 T110 82 T165 82 T220 82" stroke="rgba(255,255,255,.35)" strokeWidth="1.4" fill="none"/>
      <path d="M0 92 Q28 86 55 92 T110 92 T165 92 T220 92" stroke="rgba(255,255,255,.2)" strokeWidth="1.2" fill="none"/>

      {/* PALMERA IZQUIERDA — tronco */}
      <path d="M22 140 Q24 108 32 82" stroke="#1c2a1c" strokeWidth="5" fill="none" strokeLinecap="round"/>
      {/* palmera izq — hojas */}
      <path d="M32 82 Q12 70 2 76" stroke="#1b5e20" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M32 82 Q18 62 8 56" stroke="#2e7d32" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M32 82 Q36 60 50 54" stroke="#388e3c" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M32 82 Q44 70 58 72" stroke="#2e7d32" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* cocos */}
      <circle cx="30" cy="85" r="4" fill="#795548"/>
      <circle cx="36" cy="82" r="3.5" fill="#6d4c41"/>

      {/* PALMERA DERECHA — tronco */}
      <path d="M196 140 Q194 104 188 78" stroke="#1c2a1c" strokeWidth="5" fill="none" strokeLinecap="round"/>
      {/* palmera der — hojas */}
      <path d="M188 78 Q206 64 220 70" stroke="#1b5e20" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M188 78 Q200 56 214 50" stroke="#2e7d32" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M188 78 Q178 56 166 52" stroke="#388e3c" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M188 78 Q174 68 160 72" stroke="#2e7d32" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* cocos */}
      <circle cx="190" cy="81" r="4" fill="#795548"/>
      <circle cx="185" cy="79" r="3.5" fill="#6d4c41"/>

      {/* AVIÓN */}
      <g transform="translate(118,34) rotate(-14)">
        <path d="M0 0 L38 -3 L46 -7 L56 -7 L49 0 L56 7 L46 7 L38 3 L0 0 Z" fill="#fff" opacity=".92"/>
        <path d="M13 -1 L7 -11 L16 -9 Z" fill="#f5f5f5"/>
        <path d="M13 1 L7 11 L16 9 Z" fill="#f5f5f5"/>
      </g>
    </svg>
  </div>
);

/* helpers */
const linear = (a,b) => `linear-gradient(180deg, ${a}, ${b})`;
const tileStyles = {
  base: (bg) => ({
    position: 'relative',
    width: '100%',
    aspectRatio: '4 / 3',
    borderRadius: 14,
    overflow: 'hidden',
    background: bg,
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.06)',
  }),
  sky: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(ellipse at 50% 0%, #ffffff28, transparent 60%)',
  },
  road: {
    position: 'absolute', left: 0, right: 0, bottom: 0, height: '38%',
    background: 'linear-gradient(180deg, transparent, rgba(0,0,0,.35) 70%, rgba(0,0,0,.55))',
  },
};

const Tile = ({ ramo }) => {
  const map = { auto: <TileAuto/>, moto: <TileMoto/>, bici: <TileBici/>, hogar: <TileHogar/>, viajero: <TileViajero/> };
  return map[ramo] || null;
};

Object.assign(window, { Mark, Logo, InsurerMark, Tile, TileAuto, TileMoto, TileBici, TileHogar, TileViajero });
