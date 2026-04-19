'use client';

import { useState } from 'react';

const P = ({ children, style = {} }) => (
  <p style={{ fontSize: 16, lineHeight: 1.78, color: 'rgba(45,53,48,0.80)', marginBottom: '1.3rem', ...style }}>
    {children}
  </p>
);

const SectionHeading = ({ children, font }) => (
  <h3 style={{
    fontFamily: font, fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
    fontWeight: 500, letterSpacing: '-0.01em', color: '#2D3530',
    marginBottom: '1rem', marginTop: '3rem',
  }}>
    {children}
  </h3>
);

export default function AboutPage() {
  const [lang, setLang] = useState('en');
  const isRtl = lang === 'dv';

  const bodyFont = isRtl
    ? "'Faruma', 'MV Waheed', 'MV Boli', Tahoma, sans-serif"
    : "'Inter', 'DM Sans', sans-serif";
  const headingFont = isRtl
    ? "'Faruma', 'MV Waheed', 'MV Boli', Tahoma, serif"
    : "'Cormorant Garamond', 'Instrument Serif', Georgia, serif";

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ fontFamily: bodyFont, background: '#EDF1EC', minHeight: '100vh', color: '#2D3530' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(237,241,236,0.92)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(45,53,48,0.10)',
        padding: '0 28px', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{
          fontFamily: headingFont, fontSize: '1.4rem', fontWeight: 400,
          letterSpacing: '-0.02em', color: '#2D3530', textDecoration: 'none', lineHeight: 1.2,
        }}>
          fen<span style={{ color: '#7B6D3E' }}>.</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="/" style={{
            fontFamily: bodyFont, fontSize: 13, color: 'rgba(45,53,48,0.55)',
            textDecoration: 'none', letterSpacing: '0.01em',
          }}>
            {isRtl ? 'ފުރަތަމަ ސަފްހާ ←' : '← Back to Home'}
          </a>
          <button
            onClick={() => setLang(lang === 'en' ? 'dv' : 'en')}
            style={{
              fontFamily: lang === 'en' ? "'Faruma','MV Waheed',Tahoma" : "'Inter','DM Sans',sans-serif",
              fontSize: 12, background: 'none',
              border: '1px solid rgba(45,53,48,0.22)', borderRadius: 999,
              padding: '6px 16px', cursor: 'pointer',
              color: 'rgba(45,53,48,0.70)', letterSpacing: '0.06em',
              textTransform: 'uppercase', lineHeight: '1.2',
            }}
          >
            {lang === 'en' ? 'ދިވެހި' : 'English'}
          </button>
        </div>
      </nav>

      {/* MAIN */}
      <main style={{ maxWidth: 700, margin: '0 auto', padding: isRtl ? '120px 28px 100px' : '100px 28px 100px' }}>

        {/* Eyebrow */}
        <p style={{
          fontFamily: bodyFont, fontSize: 11, fontWeight: 600,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#7B6D3E', marginBottom: '1.2rem',
        }}>
          {isRtl ? 'fen އާ ބެހޭ' : 'About fen'}
        </p>

        {/* Display title */}
        <h1 style={{
          fontFamily: headingFont, fontWeight: 500,
          fontSize: 'clamp(2.6rem, 6vw, 4rem)', lineHeight: 0.95,
          letterSpacing: '-0.025em', color: '#2D3530', marginBottom: '0.6rem',
        }}>
          {isRtl ? 'fen' : 'fen'}
        </h1>
        <h2 style={{
          fontFamily: headingFont, fontStyle: 'italic', fontWeight: 400,
          fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)', lineHeight: 1.3,
          color: '#7B6D3E', marginBottom: '2.8rem', letterSpacing: '-0.01em',
        }}>
          {isRtl ? 'ފެން — ހުރިހާ ދިރިތި ތަކެތީގެ ހުތުރު.' : 'ފެން — water. The source of all life.'}
        </h2>

        {/* Rule */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(123,109,62,0.40), transparent)', marginBottom: '2.8rem' }} />

        {/* Dhivehi coming soon banner */}
        {isRtl && (
          <div style={{
            background: 'rgba(123,109,62,0.08)', border: '1px solid rgba(123,109,62,0.20)',
            borderRadius: 10, padding: '12px 18px', marginBottom: '2rem',
            fontFamily: bodyFont, fontSize: 13, color: 'rgba(45,53,48,0.60)',
            lineHeight: 2,
          }}>
            ދިވެހި ތަރުޖަމާ އަންނަނީ. / Dhivehi translation coming soon.
          </div>
        )}

        {/* Opening paragraph */}
        <P style={{ fontSize: 17, lineHeight: 1.80, fontFamily: bodyFont }}>
          We named this platform fen because water is the most fundamental element of human health. It is simple, pure, essential. And it is everywhere. In a world that has grown complicated, we believe the path back to health is found in things that are just as elemental — sunlight, whole foods, movement, rest, community, and faith.
        </P>

        {/* Section: Why fen exists */}
        <SectionHeading font={headingFont}>Why fen exists</SectionHeading>
        <P style={{ fontFamily: bodyFont }}>
          The world is sick. Not just in the ordinary sense of disease, but in a deeper way. We live longer than our ancestors, yet we suffer more. Chronic illness, anxiety, exhaustion, and dependence on medication have become the quiet backdrop of modern life. Something has gone wrong — and most of us can feel it, even if we cannot name it.
        </P>
        <P style={{ fontFamily: bodyFont }}>
          Western medicine, for all its miracles, was built around disease rather than health. It excels at treating what is already broken, but offers little for the person who wants to stay whole. It measures lifespan, but rarely healthspan — the years we live with real vitality, clarity, and strength. A long life spent tethered to pills, clinics, and fatigue is not the gift we imagine it to be. A shorter life lived in full health, able to pray, to serve, to love, to build, to be present with family and community — that is the life worth pursuing.
        </P>

        {/* Section: The life we were made for */}
        <SectionHeading font={headingFont}>The life we were made for</SectionHeading>
        <P style={{ fontFamily: bodyFont }}>
          For most of human history, people lived differently. They moved their bodies as part of daily life. They ate what the earth and sea provided, in its natural form. They slept when the sun set and woke when it rose. They fasted. They prayed. They worked with their hands and gathered with their people. Their health was not something they managed — it was something they lived.
        </P>
        <P style={{ fontFamily: bodyFont }}>
          The 21st-century human has traded this inheritance for something smaller. We sit for hours. We eat food that was manufactured, not grown. We stare at screens until late, sleep poorly, wake tired, and repeat the cycle until the body breaks down. It is a quiet form of slavery, and it is making us ill — in body, mind, and soul.
        </P>
        <P style={{ fontFamily: bodyFont }}>
          A meaningful life cannot be built on a sick foundation. To serve our families, to contribute to our community, to fulfill our religious duties, to leave something behind that matters — we need health. Real, lasting, natural health.
        </P>

        {/* Diamond divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '2.5rem 0', color: '#7B6D3E' }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(123,109,62,0.35))' }} />
          <span style={{ fontSize: 13 }}>✦</span>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(123,109,62,0.35), transparent)' }} />
        </div>

        {/* Section: What we offer */}
        <SectionHeading font={headingFont}>What we offer</SectionHeading>
        <P style={{ fontFamily: bodyFont }}>
          fen is a space for learning how to live well again. We share information rooted in scientific evidence wherever it exists, because knowledge protects people from harm. But we also honor the wisdom of traditions — the practices our grandparents and their grandparents knew to be true, tested across generations. Not everything that works has been studied in a laboratory, and not everything studied in a laboratory is wise. We try to hold both with honesty.
        </P>
        <P style={{ fontFamily: bodyFont }}>
          Here you will find writing on natural foods, herbal remedies, movement, sleep, fasting, spiritual practice, and the small daily habits that shape a whole life. Our aim is not to replace your doctor or to sell you a lifestyle. It is to help you remember something your body already knows — that you were made for a better way of living, and that way is still within reach.
        </P>

        {/* Section: An invitation — styled card */}
        <div style={{
          background: 'rgba(123,109,62,0.07)', border: '1px solid rgba(123,109,62,0.22)',
          borderRadius: 14, padding: 'clamp(1.5rem, 3vw, 2.5rem)', marginTop: '3rem',
        }}>
          <h3 style={{
            fontFamily: headingFont, fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(1.2rem, 2.5vw, 1.55rem)', letterSpacing: '-0.01em',
            color: '#2D3530', marginBottom: '1rem',
          }}>
            An invitation
          </h3>
          <p style={{ fontFamily: bodyFont, fontSize: 16, lineHeight: 1.78, color: 'rgba(45,53,48,0.78)', marginBottom: '1.2rem' }}>
            This is not a quick fix. It is a slow return. A return to food that nourishes, to bodies that move, to minds that rest, to hearts that are close to God and to the people around us. It is the kind of health that makes a life meaningful — whether that life is long or short, whether the world notices or not.
          </p>
          <p style={{ fontFamily: bodyFont, fontSize: 16, lineHeight: 1.78, color: '#2D3530', fontWeight: 500, marginBottom: 0 }}>
            Welcome to fen. We are glad you are here.
          </p>
        </div>

      </main>

      {/* FOOTER */}
      <footer style={{
        background: '#232C28', padding: '2.5rem 28px', textAlign: 'center',
        fontFamily: bodyFont,
      }}>
        <a href="/" style={{
          fontFamily: headingFont, fontSize: '1.1rem', fontWeight: 400,
          color: '#EDF1EC', textDecoration: 'none', letterSpacing: '-0.02em',
        }}>
          fen<span style={{ color: '#7B6D3E' }}>.</span>
        </a>
        <p style={{ marginTop: '0.6rem', color: 'rgba(237,241,236,0.40)', fontSize: 12, fontFamily: bodyFont }}>
          {isRtl ? 'ޤުދުރަތީ ދުޅަހެޔޮކަން · ހެކިތަކަށް ބިނާ · މިނިވަން' : 'Natural health · Evidence-based · Independent'}
        </p>
      </footer>

    </div>
  );
}
