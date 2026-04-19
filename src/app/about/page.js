'use client';

import { useState, useEffect } from 'react';

const content = {
  en: {
    eyebrow: 'About fen',
    title: 'fen',
    subtitle: 'ފެން — water. The source of all life.',
    opening: 'We named this platform fen because water is the most fundamental element of human health. It is simple, pure, essential. And it is everywhere. In a world that has grown complicated, we believe the path back to health is found in things that are just as elemental — sunlight, whole foods, movement, rest, community, and faith.',
    s1title: 'Why fen exists',
    s1: [
      'The world is sick. Not just in the ordinary sense of disease, but in a deeper way. We live longer than our ancestors, yet we suffer more. Chronic illness, anxiety, exhaustion, and dependence on medication have become the quiet backdrop of modern life. Something has gone wrong — and most of us can feel it, even if we cannot name it.',
      'Western medicine, for all its miracles, was built around disease rather than health. It excels at treating what is already broken, but offers little for the person who wants to stay whole. It measures lifespan, but rarely healthspan — the years we live with real vitality, clarity, and strength. A long life spent tethered to pills, clinics, and fatigue is not the gift we imagine it to be. A shorter life lived in full health, able to pray, to serve, to love, to build, to be present with family and community — that is the life worth pursuing.',
    ],
    s2title: 'The life we were made for',
    s2: [
      'For most of human history, people lived differently. They moved their bodies as part of daily life. They ate what the earth and sea provided, in its natural form. They slept when the sun set and woke when it rose. They fasted. They prayed. They worked with their hands and gathered with their people. Their health was not something they managed — it was something they lived.',
      'The 21st-century human has traded this inheritance for something smaller. We sit for hours. We eat food that was manufactured, not grown. We stare at screens until late, sleep poorly, wake tired, and repeat the cycle until the body breaks down. It is a quiet form of slavery, and it is making us ill — in body, mind, and soul.',
      'A meaningful life cannot be built on a sick foundation. To serve our families, to contribute to our community, to fulfill our religious duties, to leave something behind that matters — we need health. Real, lasting, natural health.',
    ],
    s3title: 'What we offer',
    s3: [
      'fen is a space for learning how to live well again. We share information rooted in scientific evidence wherever it exists, because knowledge protects people from harm. But we also honor the wisdom of traditions — the practices our grandparents and their grandparents knew to be true, tested across generations. Not everything that works has been studied in a laboratory, and not everything studied in a laboratory is wise. We try to hold both with honesty.',
      'Here you will find writing on natural foods, herbal remedies, movement, sleep, fasting, spiritual practice, and the small daily habits that shape a whole life. Our aim is not to replace your doctor or to sell you a lifestyle. It is to help you remember something your body already knows — that you were made for a better way of living, and that way is still within reach.',
    ],
    s4title: 'An invitation',
    s4p1: 'This is not a quick fix. It is a slow return. A return to food that nourishes, to bodies that move, to minds that rest, to hearts that are close to God and to the people around us. It is the kind of health that makes a life meaningful — whether that life is long or short, whether the world notices or not.',
    s4p2: 'Welcome to fen. We are glad you are here.',
    back: '← Back to Home',
    langBtn: 'ދިވެހި',
    footer: 'Natural health · Evidence-based · Independent',
    readLink: 'Read our full story →',
  },
  dv: {
    eyebrow: 'ފެން އާ ބެހޭގޮތުން',
    title: 'ފެން',
    subtitle: 'ފެން — ހުރިހާ ދިރުމެއްގެ އަސްލު.',
    opening: 'އަޅުގަނޑުމެން މި ޕްލެޓްފޯމަށް "ފެން" މި ނަން ދިނީ، އިންސާނާގެ ދުޅަހެޔޮކަމުގެ އެންމެ އަސާސީ ބަހާއަކީ ފެން ކަމަށްވާތީއެވެ. އެއީ ސާދާ، ސާފު، އަދި ކޮންމެހެން ބޭނުންތެރި އެއްޗެކެވެ. އަދި އެއީ ކޮންމެ ތަނަކުންވެސް ފެންނަން ހުރި އެއްޗެކެވެ. އޮޅުންބޮޅުން ބޮޑުވެފައިވާ މި ދުނިޔޭގައި، އަޅުގަނޑުމެން ގަބޫލުކުރަނީ ދުޅަހެޔޮކަމަށް އެނބުރި ދެވެން އޮތް މަގަކީ ހަމަ އެފަދަ އަސާސީ ކަންކަމުގެ ތެރެއިން ކަމަށެވެ — އެއީ އިރުގެ އަލި، ގުދުރަތީ ކާނާ، ހަރަކާތްތެރިވުން، އަރާމުކުރުން، އިޖުތިމާއީ ގުޅުން، އަދި އީމާންތެރިކަމެވެ.',
    s1title: '"ފެން" އުފެދުނު ސަބަބު',
    s1: [
      'ދުނިޔެ މިއޮތީ ބަލިވެފައެވެ. ހަމައެކަނި އާދައިގެ ބަލިމަޑުކަމެއްގެ މާނައަކު ނޫނެވެ، އެއަށްވުރެ ފުން މާނައެއްގައެވެ. އަޅުގަނޑުމެންގެ ކާބަފައިންނަށްވުރެ ގިނަ ދުވަހު އަޅުގަނޑުމެން ދުނިޔޭގައި އުޅެމުއެވެ، ނަމަވެސް ތަހައްމަލުކުރަންޖެހޭ ތަދާއި ވޭން މާ ގިނައެވެ. ދާއިމީ ބަލިތަކާއި، ނުތަނަވަސްކަމާއި، ވަރުބަލިކަމާއި، އަދި ބޭހަށް ބަރޯސާވުމަކީ މި ޒަމާނުގެ ދިރިއުޅުމުގެ އާދައިގެ ކަމަކަށް ވެއްޖެއެވެ. ކޮންމެވެސް ކަމެއް ގޯސްވެއްޖެއެވެ — އަދި އެއީ ކޮން ކަމެއްކަން ބުނެދޭން ނޭނގުނަސް، އަޅުގަނޑުމެންގެ ތެރެއިން ގިނަ ބަޔަކަށް އެކަން އިހުސާސް ކުރެވެއެވެ.',
      'ހުޅަނގުގެ ބޭސްވެރިކަމަކީ، އޭގައި ހުރި އަޖައިބުކުރުވަނިވި ކުރިއެރުންތަކާއެކުވެސް، ދުޅަހެޔޮކަމަށްވުރެ ބޮޑަށް ބަލިމަޑުކަމުގެ މައްޗަށް ބިނާވެފައިވާ އެއްޗެކެވެ. ހަލާކުވެފައިވާ އެއްޗެއް މަރާމާތުކުރުމުގައި އެ ބޭސްވެރިކަން ވަރަށް ކުރިއަރާފައިވީ ނަމަވެސް، ދުޅަހެޔޮކަންމަތީ ދެމިހުންނަން ބޭނުންވާ މީހާއަށް ދެވޭ އިރުޝާދު މަދެވެ. އެއިން މިންކުރަނީ އުމުރުގެ ދިގުމިނެވެ، ނަމަވެސް "ދުުޅަހެޔޮ އުމުރު" — އެބަހީ ހަގީގީ ދިރުމާއި، ސާފު ސިކުނޑިއާއި، ވަރުގަދަކަމާއެކު އުޅެވޭ އަހަރުތައް — މިންކުރަނީ މަދު ފަހަރަކުއެވެ. ބޭސްތަކާއި، ކްލިނިކްތަކާއި، އަދި ވަރުބަލިކަމުގެ ތެރޭގައި ހޭދަކުރާ ދިގު އުމުރަކީ އަޅުގަނޑުމެން އުންމީދުކުރާ ފަދަ ހަދިޔާއެއް ނޫނެވެ. ފުރިހަމަ ދުޅަހެޔޮކަމުގައި، އަޅުކަންކުރުމާއި، ހިދުމަތްކުރުމާއި، ލޯބިވުމާއި، ބިނާކުރުމާއި، އަދި އާއިލާއާއި މުޖުތަމައާއެކު ވަގުތު ހޭދަކުރުމުގެ ގާބިލުކަން ލިބިގެންވާ ކުރު އުމުރަކީ މާ މާނަހުރި، ހޯދަން އެދެވޭ ދިރިއުޅުމެކެވެ.',
    ],
    s2title: 'އަޅުގަނޑުމެން އުޅުމަށް އުފެއްދެވި ދިރިއުޅުން',
    s2: [
      'އިންސާނީ ތާރީޚުގެ ބޮޑު ބައެއްގައި، މީހުން ދިރިއުޅުނީ ތަފާތު ގޮތަކަށެވެ. އެމީހުންގެ ދުވަހުގެ ދިރިއުޅުމުގެ ބައެއްގެ ގޮތުގައި ހަށިގަނޑު ހަރަކާތްތެރިކުރިއެވެ. އެމީހުން ކައިބޮއި އުޅުނީ ބިމުންނާއި ކަނޑުން ލިބޭ ތަކެތި، އޭގެ ގުދުރަތީ ސިފައިގައެވެ. އިރު އޮއްސުމުން ނިދައި، އިރު އެރުމުން ހޭލިއެވެ. ރޯދަ ހިފިއެވެ. ނަމާދުކޮށް ދުއާކުރިއެވެ. އަމިއްލަ އަތުން މަސައްކަތްކޮށް، މީހުންނާ ބައްދަލުވެ އުޅުނެވެ. އެމީހުންގެ ދުޅަހެޔޮކަމަކީ އެމީހުން ބަލަހައްޓަންޖެހޭ ކަމެއް ނޫނެވެ — އެއީ އެމީހުންގެ ދިރިއުޅުމުގެ ތެރޭގައި އޮތް ކަމެކެވެ.',
      '21 ވަނަ ގަރުނުގެ އިންސާނާ ވަނީ މި ވާރުތަވެފައިވާ ދިރިއުޅުން ކުޑަކުޑަ ކަމަކަށް ބަދަލުކޮށްލާފައެވެ. އަޅުގަނޑުމެން ގަޑިއިރުތަކެއް ވަންދެން އިށީނދެގެން ތިބެމުއެވެ. އަޅުގަނޑުމެން ކަނީ ހައްދާފައިވާ އެއްޗެހީގެ ބަދަލުގައި ކާރުޚާނާތަކުން އުފައްދާފައިވާ ތަކެއްޗެވެ. ދަންވަރުވަންދެން ސްކްރީންތަކަށް ބަލަން ތިބެމުއެވެ، ނިދި މަދުވެފައި، ހޭލާއިރު ހުންނަނީ ވަރުބަލިވެފައެވެ. އަދި ހަށިގަނޑު ހަލާކުވަންދެން މިކަން ތަކުރާރުކުރަމުއެވެ. މިއީ ހިމޭން އަޅުވެތިކަމެކެވެ. އަދި މީގެ ސަބަބުން އަޅުގަނޑުމެންގެ ހަށިގަނޑާއި، ސިކުނޑިއާއި، ރޫހު ބަލިވަމުންދެއެވެ.',
      'ބަލިކަށި ބިންގަލެއްގެ މައްޗަށް މާނަހުރި ދިރިއުޅުމެއް ބިނައެއް ނުކުރެވޭނެއެވެ. އާއިލާއަށް ހިދުމަތްކުރުމަށާއި، މުޖުތަމައަށް އެހީތެރިވުމަށާއި، ދީނީ ވާޖިބުތައް އަދާކުރުމަށާއި، އަދި އަގުހުރި ކަމެއް ދޫކޮށް ދިއުމަށްޓަކައި — އަޅުގަނޑުމެންނަށް ދުޅަހެޔޮކަން ބޭނުންވެއެވެ. ހަގީގީ، ދާއިމީ، ގުދުރަތީ ދުޅަހެޔޮކަމެވެ.',
    ],
    s3title: 'އަޅުގަނޑުމެން ފޯރުކޮށްދޭ ކަންތައްތައް',
    s3: [
      '"ފެން" އަކީ އަލުން ރަނގަޅަށް ދިރިއުޅެން ދަސްކޮށްދޭ ތަނެކެވެ. އަޅުގަނޑުމެން ހިއްސާކުރަނީ ސައިންސުގެ ހެކިތަކުގެ މައްޗަށް ބިނާވެފައިވާ މައުލޫމާތެވެ، ސަބަބަކީ އިލްމަކީ އިންސާނާ ގެއްލުމުން ސަލާމަތްކޮށްދޭ އެއްޗަކަށް ވާތީއެވެ. ނަމަވެސް، އަޅުގަނޑުމެން ގަދީމީ އާދަކާދަތަކުގެ ހިކުމަތަށްވެސް އިހުތިރާމްކުރަމުއެވެ — އެއީ އަޅުގަނޑުމެންގެ ކާބަފައިންނަށް އެއީ ތެދުކަން އެނގި، ޖީލުތަކެއްގެ ތަޖުރިބާއިން ސާބިތުވެފައިވާ ކަންކަމެވެ. ނަތީޖާ ފެންނަ ކޮންމެ ކަމަކީ ލެބޯޓްރީއެއްގައި ދިރާސާކުރެވިފައިވާ ކަމަކަށް ނުވެދާނެއެވެ، އަދި ލެބޯޓްރީއެއްގައި ދިރާސާކުރެވޭ ކޮންމެ ކަމަކީ ބުއްދިވެރި ކަމަކަށްވެސް ނުވެދާނެއެވެ. އަޅުގަނޑުމެން މަސައްކަތްކުރަނީ ތެދުވެރިކަމާއެކު މި ދެބައިގައިވެސް ހިފެހެއްޓުމަށެވެ.',
      'މިތަނުން ތިޔަބޭފުޅުންނަށް ފެންނާނީ ގުދުރަތީ ކާނާއާއި، ފަތްޕިލާވެލީގެ ބޭސްވެރިކަމާއި، ހަށިގަނޑުގެ ހަރަކާތްތަކާއި، ނިދުމާއި، ރޯދަހިފުމާއި، ރޫހާނީ ކަންކަމާއި، އަދި މުޅި ދިރިއުޅުން ބައްޓަންކޮށްދޭ ކުދިކުދި ދުވަހީ އާދަތަކާ ބެހޭ ލިޔުންތަކެވެ. އަޅުގަނޑުމެންގެ މަގްސަދަކީ ތިޔަބޭފުޅުންގެ ޑޮކްޓަރުގެ ބަދަލުގައި މަސައްކަތްކުރުމެއް ނޫނެވެ، ނުވަތަ ވަކި ކަހަލަ ދިރިއުޅުމުގެ ވައްޓަފާޅިއެއް ވިއްކުމެއްވެސް ނޫނެވެ. މިއީ ތިބާގެ ހަށިގަނޑަށް ކުރިންވެސް އެނގިފައިވާ ކަމެއް ހަނދާންކޮށްދިނުމަށްޓަކައެވެ. އެއީ، ތިބާ އުފައްދަވާފައިވަނީ މިއަށްވުރެ ފުރިހަމަ ދިރިއުޅުމަކަށް ކަމާއި، އެ ދިރިއުޅުން އަދިވެސް އަތްފޯރާފަށުގައިވާ ކަމެވެ.',
    ],
    s4title: 'ދައުވަތެއް',
    s4p1: 'މިއީ އަވަސް ހައްލެއް ނޫނެވެ. މިއީ މަޑުމަޑުން އަންނަ އެނބުރި އައުމެކެވެ. ހަށިގަނޑަށް ފައިދާހުރި ކާނާއަށާއި، ހަރަކާތްތެރި ހަށިގަނޑަކަށާއި، އަރާމުލިބޭ ސިކުނޑިއަކަށާއި، މާތްﷲ އާއި އަދި އަހަރެމެންގެ ވަށައިގެންވާ މީހުންނާ ގާތް ހިތްތަކަކަށް އެނބުރި އައުމެކެވެ. މިއީ ދިރިއުޅުން މާނަވީކޮށްދޭ ކަހަލަ ދުޅަހެޔޮކަމެކެވެ. އެއީ އެ ދިރިއުޅުން ދިގުވިޔަސް ނުވަތަ ކުރުވިޔަސް، އަދި ދުނިޔެ އެކަން ފާހަގަކުރިޔަސް ނުވަތަ ނުކުރިޔަސްމެއެވެ.',
    s4p2: '"ފެން" އަށް މަރުހަބާ. ތިބާ މިތަނުގައި ހުރިކަމީ އަހަރެމެން އުފާކުރާ ކަމެކެވެ.',
    back: 'ފުރަތަމަ ސަފްހާ ←',
    langBtn: 'English',
    footer: 'ޤުދުރަތީ ދުޅަހެޔޮކަން · ހެކިތަކަށް ބިނާ · މިނިވަން',
    readLink: 'fen ގެ ވާހަކަ ކިޔާ ←',
  },
};

export default function AboutPage() {
  const [lang, setLang] = useState('en');
  const isRtl = lang === 'dv';

  // Read ?lang= from URL on first load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    if (urlLang === 'dv') setLang('dv');
  }, []);
  const c = content[lang];

  const bodyFont = isRtl
    ? "'Faruma', 'MV Waheed', 'MV Boli', Tahoma, sans-serif"
    : "'Inter', 'DM Sans', sans-serif";
  const headingFont = isRtl
    ? "'Faruma', 'MV Waheed', 'MV Boli', Tahoma, serif"
    : "'Cormorant Garamond', 'Instrument Serif', Georgia, serif";

  const pStyle = {
    fontFamily: bodyFont,
    fontSize: 16,
    lineHeight: isRtl ? 2.2 : 1.78,
    color: 'rgba(45,53,48,0.80)',
    marginBottom: '1.3rem',
  };

  const h3Style = {
    fontFamily: headingFont,
    fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
    fontWeight: 500,
    letterSpacing: '-0.01em',
    color: '#2D3530',
    marginBottom: '1rem',
    marginTop: '3rem',
  };

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
          <a href={`/?lang=${lang}`} style={{
            fontFamily: bodyFont, fontSize: 13, color: 'rgba(45,53,48,0.55)',
            textDecoration: 'none', letterSpacing: '0.01em',
          }}>
            {c.back}
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
            {c.langBtn}
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
          {c.eyebrow}
        </p>

        {/* Display title */}
        <h1 style={{
          fontFamily: headingFont, fontWeight: 500,
          fontSize: 'clamp(2.6rem, 6vw, 4rem)', lineHeight: 0.95,
          letterSpacing: '-0.025em', color: '#2D3530', marginBottom: '0.6rem',
        }}>
          {c.title}
        </h1>
        <h2 style={{
          fontFamily: headingFont, fontStyle: 'italic', fontWeight: 400,
          fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)', lineHeight: isRtl ? 1.8 : 1.3,
          color: '#7B6D3E', marginBottom: '2.8rem', letterSpacing: '-0.01em',
        }}>
          {c.subtitle}
        </h2>

        {/* Rule */}
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(123,109,62,0.40), transparent)', marginBottom: '2.8rem' }} />

        {/* Opening */}
        <p style={{ ...pStyle, fontSize: 17, lineHeight: isRtl ? 2.2 : 1.80 }}>
          {c.opening}
        </p>

        {/* Section 1 */}
        <h3 style={h3Style}>{c.s1title}</h3>
        {c.s1.map((p, i) => <p key={i} style={pStyle}>{p}</p>)}

        {/* Section 2 */}
        <h3 style={h3Style}>{c.s2title}</h3>
        {c.s2.map((p, i) => <p key={i} style={pStyle}>{p}</p>)}

        {/* Diamond divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '2.5rem 0', color: '#7B6D3E' }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(123,109,62,0.35))' }} />
          <span style={{ fontSize: 13 }}>✦</span>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(123,109,62,0.35), transparent)' }} />
        </div>

        {/* Section 3 */}
        <h3 style={{ ...h3Style, marginTop: 0 }}>{c.s3title}</h3>
        {c.s3.map((p, i) => <p key={i} style={pStyle}>{p}</p>)}

        {/* Section 4 — invitation card */}
        <div style={{
          background: 'rgba(123,109,62,0.07)', border: '1px solid rgba(123,109,62,0.22)',
          borderRadius: 14, padding: 'clamp(1.5rem, 3vw, 2.5rem)', marginTop: '3rem',
        }}>
          <h3 style={{
            fontFamily: headingFont, fontStyle: 'italic', fontWeight: 400,
            fontSize: 'clamp(1.2rem, 2.5vw, 1.55rem)', letterSpacing: '-0.01em',
            color: '#2D3530', marginBottom: '1rem', lineHeight: isRtl ? 1.8 : 1.2,
          }}>
            {c.s4title}
          </h3>
          <p style={pStyle}>{c.s4p1}</p>
          <p style={{ ...pStyle, color: '#2D3530', fontWeight: 500, marginBottom: 0 }}>{c.s4p2}</p>
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
          {c.footer}
        </p>
      </footer>

    </div>
  );
}
