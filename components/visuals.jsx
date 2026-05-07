/* Inline SVG illustrations + brand mark + insurer pseudo-logos.
   All hand-built, no external assets, original — not branded. */

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

/* Original wordmark cards for insurers — not real logos. */
const InsurerMark = ({ name, sub, color = '#0b2545', accent = '#e8a93a', shape = 'shield' }) => (
  <div style={{
    background: '#fff', border: '1px solid var(--line)', borderRadius: 12,
    padding: '18px 18px', display: 'flex', alignItems: 'center', gap: 14,
    minHeight: 76,
  }}>
    <div style={{
      width: 44, height: 44, borderRadius: 10, background: color,
      display: 'grid', placeItems: 'center', flex: '0 0 auto'
    }}>
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
    </div>
    <div style={{ lineHeight: 1.15 }}>
      <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)' }}>{name}</div>
      <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, letterSpacing: '.04em', textTransform: 'uppercase' }}>{sub}</div>
    </div>
  </div>
);

/* Hero illustration tiles — stylized scenes with CSS gradients + simple SVG. */

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
      <path d="M62 50 L82 32 L138 32 L158 50 Z" fill="rgba(255,255,255,.55)" stroke="#FF4B99" strokeWidth="1.2"/>
      <line x1="110" y1="32" x2="110" y2="50" stroke="#1d7ad6" strokeWidth="1.2"/>
      <circle cx="60" cy="92" r="13" fill="#15191f"/><circle cx="60" cy="92" r="5" fill="#6b7385"/>
      <circle cx="160" cy="92" r="13" fill="#15191f"/><circle cx="160" cy="92" r="5" fill="#6b7385"/>
      <rect x="188" y="70" width="10" height="6" rx="2" fill="#F6D365"/>
    </svg>
  </div>
);

const TileMoto = () => (
  <div style={tileStyles.base(linear('#FF4B99','#d63d80'))}>
    <div style={{...tileStyles.sky, background:'radial-gradient(ellipse at 70% 30%, #F6D36588, transparent 60%)'}}/>
    <div style={tileStyles.road}/>
    <svg viewBox="0 0 220 130" style={{ position:'absolute', bottom: 12, left:'50%', transform:'translateX(-50%)', width:'78%' }}>
      <ellipse cx="110" cy="115" rx="90" ry="5" fill="rgba(0,0,0,.25)"/>
      <circle cx="58" cy="98" r="20" fill="#15191f"/><circle cx="58" cy="98" r="9" fill="none" stroke="#6b7385" strokeWidth="1.5"/>
      <circle cx="166" cy="98" r="20" fill="#15191f"/><circle cx="166" cy="98" r="9" fill="none" stroke="#6b7385" strokeWidth="1.5"/>
      <path d="M60 96 L100 70 L130 70 L168 96" stroke="#F6D365" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M100 70 Q115 55 135 60 L150 50" stroke="#f6f3ec" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <rect x="92" y="62" width="40" height="14" rx="4" fill="#f6f3ec"/>
      <circle cx="150" cy="50" r="6" fill="#1d7ad6" stroke="#F6D365" strokeWidth="1.5"/>
    </svg>
  </div>
);

const TileBici = () => (
  <div style={tileStyles.base(linear('#1f7a4d','#2f9c66'))}>
    <div style={{...tileStyles.sky, background:'radial-gradient(ellipse at 30% 30%, #ffffff55, transparent 60%)'}}/>
    <div style={{...tileStyles.road, background:'linear-gradient(180deg, transparent, #15633a 70%)'}}/>
    <svg viewBox="0 0 220 130" style={{ position:'absolute', bottom: 12, left:'50%', transform:'translateX(-50%)', width:'78%' }}>
      <ellipse cx="110" cy="115" rx="85" ry="4" fill="rgba(0,0,0,.25)"/>
      <circle cx="58" cy="92" r="22" fill="none" stroke="#f6f3ec" strokeWidth="3"/>
      <circle cx="162" cy="92" r="22" fill="none" stroke="#f6f3ec" strokeWidth="3"/>
      <path d="M58 92 L100 92 L120 60 L162 92 M100 92 L130 60" stroke="#F6D365" strokeWidth="3" fill="none"/>
      <circle cx="100" cy="92" r="4" fill="#F6D365"/>
      <path d="M120 60 L116 50 L132 50" stroke="#f6f3ec" strokeWidth="3" fill="none"/>
    </svg>
  </div>
);

const TileHogar = () => (
  <div style={tileStyles.base(linear('#1d7ad6','#2896FE'))}>
    <div style={{...tileStyles.sky, background:'radial-gradient(ellipse at 50% 0%, #F6D36588, transparent 65%)'}}/>
    <svg viewBox="0 0 220 140" style={{ position:'absolute', bottom: 0, left:'50%', transform:'translateX(-50%)', width:'92%' }}>
      <rect x="0" y="120" width="220" height="20" fill="#0e3a66"/>
      <path d="M40 70 L110 25 L180 70 L180 120 L40 120 Z" fill="#f6f3ec"/>
      <path d="M30 72 L110 18 L190 72" stroke="#FF4B99" strokeWidth="3" fill="none" strokeLinejoin="round"/>
      <rect x="95" y="85" width="30" height="35" fill="#1d7ad6"/>
      <rect x="55" y="80" width="22" height="22" fill="#F6D365"/>
      <rect x="143" y="80" width="22" height="22" fill="#F6D365"/>
      <line x1="55" y1="91" x2="77" y2="91" stroke="#1d7ad6" strokeWidth="1.2"/>
      <line x1="66" y1="80" x2="66" y2="102" stroke="#1d7ad6" strokeWidth="1.2"/>
      <line x1="143" y1="91" x2="165" y2="91" stroke="#1d7ad6" strokeWidth="1.2"/>
      <line x1="154" y1="80" x2="154" y2="102" stroke="#1d7ad6" strokeWidth="1.2"/>
    </svg>
  </div>
);

const TileViajero = () => (
  <div style={tileStyles.base('linear-gradient(180deg, #ffd089 0%, #ff9a6c 55%, #2a8fb8 55%, #1f6e93 100%)')}>
    <div style={{ position:'absolute', top: 18, left: '50%', transform:'translateX(-50%)', width: 56, height: 56, borderRadius: '50%', background:'radial-gradient(circle, #fff5cc, #ffcf6c 70%, transparent 72%)' }}/>
    <svg viewBox="0 0 220 140" style={{ position:'absolute', bottom: 0, left: 0, width: '100%' }}>
      <path d="M20 140 Q22 105 30 80" stroke="#1c2a1c" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M30 80 Q10 70 0 78 M30 80 Q15 60 5 55 M30 80 Q35 60 50 55 M30 80 Q40 70 55 75" stroke="#1f5135" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M195 140 Q193 100 188 78" stroke="#1c2a1c" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <path d="M188 78 Q205 65 220 70 M188 78 Q200 55 215 50 M188 78 Q180 55 168 52 M188 78 Q175 70 160 76" stroke="#1f5135" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M0 95 Q30 90 60 95 T120 95 T180 95 T240 95" stroke="#ffffff66" strokeWidth="1.5" fill="none"/>
      <path d="M0 110 Q30 105 60 110 T120 110 T180 110 T240 110" stroke="#ffffff44" strokeWidth="1.5" fill="none"/>
      <g transform="translate(120,38) rotate(-12)">
        <path d="M0 0 L40 -4 L48 -8 L60 -8 L52 0 L60 8 L48 8 L40 4 L0 0 Z" fill="#fff" stroke="#1d7ad6" strokeWidth="1.2"/>
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
    background: 'radial-gradient(ellipse at 50% 0%, #ffffff33, transparent 60%)',
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
