'use client';

import { useState, useEffect, useRef } from 'react';

const t = {
  en: {
    dir: 'ltr',
    langLabel: 'ދިވެހި',
    navItems: ['Articles', 'Evidence Library', 'About', 'Newsletter'],
    heroLabel: 'Natural Health · Evidence-Based · Independent',
    heroTitle1: 'Health knowledge',
    heroTitle2: 'rooted in evidence',
    heroSubtitle: 'We examine supplements, herbal remedies, teas, and wellness practices through the lens of peer-reviewed research — so you can make informed choices about your health, not guesses.',
    emailPlaceholder: 'your@email.com',
    joinBtn: 'Join the newsletter',
    subscribedBtn: '✓ Subscribed',
    heroMeta: 'Free weekly edition · No spam · Unsubscribe anytime',
    tickerItems: ['Supplements', 'Herbal Medicine', 'Nutrition Science', 'Functional Teas', 'Movement', 'Gut Health', 'Adaptogens'],
    featuredLabel: 'Latest',
    featuredTitle: 'Featured Research',
    featuredImageText: 'Featured Article',
    readBtn: 'Read Article →',
    archiveLabel: 'Archive',
    archiveTitle: 'Recent Articles',
    viewAll: 'View all articles →',
    exploreLabel: 'Explore',
    exploreTitle: 'What We Cover',
    exploreSubtitle: 'Every article is graded by evidence quality — from strong (multiple RCTs) to emerging (early-stage research). No hype. No pseudoscience.',
    methodLabel: 'Our Standard',
    methodTitle: 'How We Rate Evidence',
    newsletterTitle: 'The Saturday Edition',
    newsletterDesc: 'One email per week. The latest evidence on supplements, herbal remedies, nutrition, and wellness — curated, graded, and explained in plain language. No product pushing. No spam. Just research you can use.',
    subscribeBtn: 'Subscribe free',
    subscribedBtnAlt: "✓ You're in",
    newsletterMeta: 'Join 0 readers · Free forever · Unsubscribe in one click',
    aboutLabel: 'Why This Exists',
    aboutTitle: 'About fen',
    aboutP1: 'fen — water. The source of all life. We named this platform fen because water is the most fundamental element of human health. Simple, pure, essential. In a world that has grown complicated, we believe the path back to health is found in things that are just as elemental — sunlight, whole foods, movement, rest, community, and faith.',
    aboutP2: 'We are not a supplement shop. We are not a diet program. We are a space for honest, evidence-grounded writing about how to live well — and why so many of us have drifted so far from it.',
    aboutP3: '',
    aboutLink: 'Read our full story →',
    footerTagline: 'Evidence-based natural health education.\nIndependent. Transparent. Free.',
    footerExplore: 'Explore',
    footerExploreLinks: ['Articles', 'Evidence Library', 'Newsletter Archive', 'Start Here'],
    footerTopics: 'Topics',
    footerTopicLinks: ['Supplements', 'Herbal Remedies', 'Teas & Coffees', 'Fitness', 'Gut Health'],
    footerConnect: 'Connect',
    footerConnectLinks: ['Instagram', 'YouTube', 'X / Twitter', 'About', 'Contact'],
    footerDisclaimer: 'Content is for educational purposes only and does not constitute medical advice. Always consult a qualified healthcare provider for personal medical decisions.',
    footerCopy: '',
    articles: [
      { id: 1, category: 'SUPPLEMENTS', tag: 'Strong Evidence', tagColor: '#5A7A5A', title: 'Magnesium: The Most Underrated Mineral in Modern Nutrition', excerpt: "Over 50% of adults don't get enough magnesium. Here's what 34 clinical trials reveal about supplementation, dosage, and the forms that actually work.", date: 'Apr 7, 2026', readTime: '12 min read' },
      { id: 2, category: 'HERBAL REMEDIES', tag: 'Moderate Evidence', tagColor: '#9B7A3A', title: 'Turmeric vs. Curcumin Supplements: A Bioavailability Breakdown', excerpt: 'The golden spice has thousands of studies behind it — but most supplements fail at one critical thing.', date: 'Apr 4, 2026', readTime: '9 min read' },
      { id: 3, category: 'FUNCTIONAL BEVERAGES', tag: 'Emerging Research', tagColor: '#5A6E7A', title: "Lion's Mane Coffee: Cognitive Hype or Genuine Nootropic?", excerpt: "Mushroom coffee is everywhere. We examined 12 studies on lion's mane and neurogenesis to separate marketing from science.", date: 'Apr 1, 2026', readTime: '8 min read' },
      { id: 4, category: 'NUTRITION SCIENCE', tag: 'Strong Evidence', tagColor: '#5A7A5A', title: 'The Omega-3 Index: Why This Blood Test Matters More Than Cholesterol', excerpt: "Your omega-3 index may be one of the strongest predictors of cardiovascular health.", date: 'Mar 28, 2026', readTime: '11 min read' },
      { id: 5, category: 'MOVEMENT', tag: 'Strong Evidence', tagColor: '#5A7A5A', title: 'Walking 7,000 Steps: The New Threshold Backed by Mortality Data', excerpt: 'Forget 10,000 steps. A 2024 meta-analysis of 47 studies found the sweet spot may be lower than you think.', date: 'Mar 25, 2026', readTime: '7 min read' },
      { id: 6, category: 'GUT HEALTH', tag: 'Moderate Evidence', tagColor: '#9B7A3A', title: 'Probiotics After Antibiotics: Timing, Strains, and What Actually Helps', excerpt: 'We reviewed 22 RCTs to find which probiotic protocols have real evidence behind them.', date: 'Mar 21, 2026', readTime: '10 min read' },
    ],
    pillars: [
      { name: 'Herbal Remedies', desc: 'Traditional botanicals examined through modern research', icon: '🪷' },
      { name: 'Supplements', desc: 'Evidence ratings for vitamins, minerals, and compounds', icon: '✦' },
      { name: 'Teas & Coffees', desc: 'Functional beverages and their therapeutic profiles', icon: '🫖' },
      { name: 'Fitness & Movement', desc: 'Exercise science distilled into practical protocols', icon: '🌊' },
      { name: 'Mind & Wellness', desc: 'Sleep, stress, fasting, and the gut-brain axis', icon: '🌙' },
    ],
    evidence: [
      { level: 'Strong', color: '#5A7A5A', desc: 'Multiple randomised controlled trials or meta-analyses with consistent results across diverse populations.' },
      { level: 'Moderate', color: '#9B7A3A', desc: 'Limited RCTs or observational studies with plausible mechanisms. Promising but needs more research.' },
      { level: 'Emerging', color: '#5A6E7A', desc: 'Preliminary findings from animal studies, in vitro research, or small pilot trials. Early-stage only.' },
      { level: 'Insufficient', color: '#8A6070', desc: 'Anecdotal, traditional use only, or contradictory findings. We include it but flag the uncertainty.' },
    ],
  },
  dv: {
    dir: 'rtl',
    langLabel: 'English',
    navItems: ['ލިޔުންތައް', 'ހެކި ލައިބްރަރީ', 'އަޅުގަނޑުމެން', 'ނިއުސްލެޓަރ'],
    heroLabel: 'ޤުދުރަތީ ޞިއްޙަތު · ހެއްކަށް ބިނާކޮށް · މިނިވަން',
    heroTitle1: 'ޞިއްޙީ މަޢުލޫމާތު',
    heroTitle2: 'ހެއްކާއެކު ބިންވަޅު ނެގިފައި',
    heroSubtitle: 'އަޅުގަނޑުމެން ސަޕްލިމެންޓްސް، ފަތްޕިލާވެލީގެ ބޭސް، ސައި، އަދި ދުޅަހެޔޮ ޞިއްޙަތާ ގުޅޭ އާދަކާދަތައް ދިރާސާކުރަނީ ޕިއަރ-ރިވިއުޑް ދިރާސާތަކުގެ އެހީގައި — ތިބާއަށް ޞިއްޙީ ކަންކަމުގައި ރަނގަޅު ނިންމުން ނިންމޭނެ ގޮތަށް.',
    emailPlaceholder: 'your@email.com',
    joinBtn: 'ނިއުސްލެޓަރާ ގުޅޭ',
    subscribedBtn: '✓ ސަބްސްކްރައިބް ވެއްޖެ',
    heroMeta: 'ހިލޭ ހަފްތާ އެޑިޝަން · ސްޕޭމް ނެތް · ކޮންމެ ވަގުތެއްގައި ވެސް އަންސަބްސްކްރައިބް ކުރެވޭނެ',
    tickerItems: ['ސަޕްލިމެންޓްސް', 'ފަތްޕިލާވެލީގެ ބޭސް', 'ނިއުޓްރިޝަން ސައިންސް', 'ބުއިންތައް', 'ކަސްރަތު', 'ގޮހޮރުގެ ޞިއްޙަތު', 'އެޑެޕްޓޮޖެންސް'],
    featuredLabel: 'އެންމެ ފަހުގެ',
    featuredTitle: 'ފީޗަރޑް ދިރާސާ',
    featuredImageText: 'ފީޗަރޑް ލިޔުން',
    readBtn: 'ލިޔުން ކިޔާ ←',
    archiveLabel: 'އާކައިވް',
    archiveTitle: 'ފަހުގެ ލިޔުންތައް',
    viewAll: 'ހުރިހާ ލިޔުންތައް ބަލާ ←',
    exploreLabel: 'ހޯދާ',
    exploreTitle: 'އަޅުގަނޑުމެން ކަވަރުކުރާ ދާއިރާތައް',
    exploreSubtitle: 'ކޮންމެ ލިޔުމެއްގެ ހެކީގެ ފެންވަރު ގްރޭޑް ކުރެވިފައިވޭ — ވަރުގަދަ (ގިނަ ރެންޑަމައިޒްޑް ޓްރައަލް) އިން ފެށިގެން އުފެދެމުންދާ (ކުރީކޮޅު ދިރާސާ) އާ ހަމައަށް.',
    methodLabel: 'އަޅުގަނޑުމެންގެ މިންގަނޑު',
    methodTitle: 'ހެކި ރޭޓްކުރާ ގޮތް',
    newsletterTitle: 'ހޮނިހިރު އެޑިޝަން',
    newsletterDesc: 'ހަފްތާއަކު އެއް އީމެއިލް. ސަޕްލިމެންޓްސް، ފަތްޕިލާވެލީގެ ބޭސް، ނިއުޓްރިޝަން، އަދި ދުޅަހެޔޮ ޞިއްޙަތާ ގުޅޭ އެންމެ ފަހުގެ ހެކި — ކިޔައިދޭ ފަސޭހަ ބަހުން.',
    subscribeBtn: 'ހިލޭ ސަބްސްކްރައިބް ކުރޭ',
    subscribedBtnAlt: '✓ ގުޅިއްޖެ',
    newsletterMeta: '0 ކިޔުންތެރިންނާ ގުޅޭ · އަބަދަށް ހިލޭ · އެއް ކްލިކުން އަންސަބްސްކްރައިބް',
    aboutLabel: 'މިކަން އޮތީ ކީއްވެ',
    aboutTitle: 'fen އާ ބެހޭ',
    aboutP1: 'އަޅުގަނޑުމެން މި ޕްލެޓްފޯމަށް "ފެން" މި ނަން ދިނީ، އިންސާނާގެ ދުޅަހެޔޮކަމުގެ އެންމެ އަސާސީ ބަހާއަކީ ފެން ކަމަށްވާތީއެވެ. ސާދާ، ސާފު، ކޮންމެހެން ބޭނުންތެރި. ދުޅަހެޔޮކަމަށް އެނބުރި ދެވެން އޮތް މަގަކީ ހަމަ ފެންފަދަ އަސާސީ ކަންތައްތަކެވެ — އިރުގެ އަލި، ގުދުރަތީ ކާނާ، ހަރަކާތް، އަރާމު، ގުޅުން، އަދި އީމާންތެރިކަން.',
    aboutP2: '"ފެން" އަކީ ސަޕްލިމެންޓް ވިއްކާ ތަނެއް ނޫނެވެ. ހެކިތަކަށް ބިނާ ތެދުވެރި ލިޔުންތަކެއް ހިމެނޭ، ރަނގަޅަށް ދިރިއުުޅެން ދަސްކޮށްދޭ ތަނެކެވެ.',
    aboutP3: '',
    aboutLink: 'fen ގެ ވާހަކަ ކިޔާ ←',
    footerTagline: 'ހެއްކަށް ބިނާކޮށް ޤުދުރަތީ ޞިއްޙީ ތަޢުލީމު.\nމިނިވަން. ދެފުށް ފެންނަ. ހިލޭ.',
    footerExplore: 'ހޯދާ',
    footerExploreLinks: ['ލިޔުންތައް', 'ހެކި ލައިބްރަރީ', 'ނިއުސްލެޓަރ އާކައިވް', 'ފަށާ'],
    footerTopics: 'މައުޟޫޢުތައް',
    footerTopicLinks: ['ސަޕްލިމެންޓްސް', 'ފަތްޕިލާވެލީ ބޭސް', 'ސައި އާއި ކޮފީ', 'ކަސްރަތު', 'ގޮހޮރުގެ ޞިއްޙަތު'],
    footerConnect: 'ގުޅާ',
    footerConnectLinks: ['އިންސްޓަގްރާމް', 'ޔޫޓިއުބް', 'އެކްސް / ޓްވިޓަރ', 'އަޅުގަނޑުމެން', 'ގުޅޭ'],
    footerDisclaimer: 'މި ކޮންޓެންޓަކީ ތަޢުލީމީ ބޭނުމަށް އެކަނި ތައްޔާރުކޮށްފައިވާ އެއްޗެކެވެ. ޞިއްޙީ ލަފާ ދިނުމެއް ނޫނެވެ.',
    footerCopy: '',
    articles: [
      { id: 1, category: 'ސަޕްލިމެންޓްސް', tag: 'ވަރުގަދަ ހެކި', tagColor: '#5A7A5A', title: 'މެގްނީޒިއަމް: ޒަމާނީ ނިއުޓްރިޝަންގައި އެންމެ ދަށް އަގު ކުރެވޭ މިނެރަލް', excerpt: 'ބޮޑެތި މީހުންގެ 50% އަށް ވުރެ ގިނައިން އެކަށީގެންވާ މެގްނީޒިއަމް ނުލިބޭ. 34 ކްލިނިކަލް ޓްރައަލް އިން ހާމަވާ ގޮތް.', date: 'އެޕްރީލް 7، 2026', readTime: '12 މިނެޓް' },
      { id: 2, category: 'ފަތްޕިލާވެލީ ބޭސް', tag: 'މެދުމިނުގެ ހެކި', tagColor: '#9B7A3A', title: 'ރީނދޫ vs. ކާކިއުމިން ސަޕްލިމެންޓްސް: ބަޔޯއެވެއިލަބިލިޓީ', excerpt: 'ރަން ހަވާދުގައި އެތައް ހާސް ދިރާސާއެއް — ގިނަ ސަޕްލިމެންޓްތައް ފެއިލްވަނީ އެއް ކަމެއްގައި.', date: 'އެޕްރީލް 4، 2026', readTime: '9 މިނެޓް' },
      { id: 3, category: 'ބުއިންތައް', tag: 'އުފެދެމުންދާ ދިރާސާ', tagColor: '#5A6E7A', title: 'ލަޔަންސް މެއިން ކޮފީ: ސިކުނޑީގެ ހައިޕް ނޫނީ ޙަޤީޤީ ނޫޓްރޮޕިކް؟', excerpt: 'މަޝްރޫމް ކޮފީ ކޮންމެ ތަނެއްގައި. 12 ދިރާސާ ބެލީމެވެ — މާކެޓިން އާއި ސައިންސް ވަކިކުރަން.', date: 'އެޕްރީލް 1، 2026', readTime: '8 މިނެޓް' },
      { id: 4, category: 'ނިއުޓްރިޝަން ސައިންސް', tag: 'ވަރުގަދަ ހެކި', tagColor: '#5A7A5A', title: 'އޮމެގާ-3 އިންޑެކްސް: ކޮލެސްޓްރޯލަށް ވުރެ މުހިންމު ޓެސްޓެއް', excerpt: 'އޮމެގާ-3 އިންޑެކްސް އަކީ ހިތުގެ ޞިއްޙަތުގެ އެންމެ ވަރުގަދަ ލަފާކުރާ.', date: 'މާރިޗް 28، 2026', readTime: '11 މިނެޓް' },
      { id: 5, category: 'ކަސްރަތު', tag: 'ވަރުގަދަ ހެކި', tagColor: '#5A7A5A', title: '7,000 ފިޔަވަޅު ހިނގުން: މަރުގެ ޑާޓާއިން ސާބިތުވާ އައު ތެރެޝޯލްޑް', excerpt: '10,000 ފިޔަވަޅު ހަނދާން ނެތިގެން. 47 ދިރާސާގެ މެޓާ-އެނާލިސިސް.', date: 'މާރިޗް 25، 2026', readTime: '7 މިނެޓް' },
      { id: 6, category: 'ގޮހޮރުގެ ޞިއްޙަތު', tag: 'މެދުމިނުގެ ހެކި', tagColor: '#9B7A3A', title: 'އެންޓިބައޮޓިކަށް ފަހު ޕްރޯބައޮޓިކްސް: ޓައިމިން އާއި ސްޓްރެއިންސް', excerpt: '22 ރެންޑަމައިޒްޑް ޓްރައަލް ބެލީ ޙަޤީޤީ ހެކި ހުރި ޕްރޮޓޮކޯލް ހޯދަން.', date: 'މާރިޗް 21، 2026', readTime: '10 މިނެޓް' },
    ],
    pillars: [
      { name: 'ފަތްޕިލާވެލީ ބޭސް', desc: 'ޒަމާނީ ދިރާސާއިން ބެލޭ ގަސްގަހާގެ ބޭސް', icon: '🪷' },
      { name: 'ސަޕްލިމެންޓްސް', desc: 'ވިޓަމިންސް، މިނެރަލްސް ގެ ހެކީ ރޭޓިން', icon: '✦' },
      { name: 'ސައި އާއި ކޮފީ', desc: 'ފަންކްޝަނަލް ބުއިންތަކުގެ ބޭސްވެރި ޕްރޮފައިލް', icon: '🫖' },
      { name: 'ކަސްރަތު', desc: 'ޢަމަލީ ޕްރޮޓޮކޯލްތަކަށް ބަދަލުކޮށްފައިވާ ކަސްރަތު ސައިންސް', icon: '🌊' },
      { name: 'ސިކުނޑި އާއި ދުޅަހެޔޮކަން', desc: 'ނިދި، ސްޓްރެސް، ރޯދަ، ގޮހޮރު-ސިކުނޑި ގުޅުން', icon: '🌙' },
    ],
    evidence: [
      { level: 'ވަރުގަދަ', color: '#5A7A5A', desc: 'ގިނަ ރެންޑަމައިޒްޑް ކޮންޓްރޯލްޑް ޓްރައަލް ނުވަތަ މެޓާ-އެނާލިސިސް، ތަފާތު މީހުންގެ ތެރޭގައި އެއް ގޮތް ނަތީޖާ.' },
      { level: 'މެދުމިން', color: '#9B7A3A', desc: 'މަދު ޓްރައަލް ނުވަތަ ބެލުންތެރި ދިރާސާ. އުންމީދީ ނަމަވެސް އިތުރު ދިރާސާ ބޭނުންވޭ.' },
      { level: 'އުފެދެމުންދާ', color: '#5A6E7A', desc: 'ޖަނަވާރު ދިރާސާ، ލެބޯޓަރީ ދިރާސާ، ނުވަތަ ކުދި ޕައިލެޓް ޓްރައަލް.' },
      { level: 'ނުފުދޭ', color: '#8A6070', desc: 'އެނެކްޑޯޓަލް، ޒަމާނީ ބޭނުމެއް އެކަނި، ނުވަތަ ފުށުއެރުން ހޯދުން.' },
    ],
  },
};

function useIntersectionObserver() {
  const [visible, setVisible] = useState(new Set());
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    Object.values(refs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return { visible, refs };
}

export default function Home() {
  const [lang, setLang] = useState('en');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { visible, refs } = useIntersectionObserver();

  const changeLang = (newLang) => {
    setLang(newLang);
    try { window.sessionStorage.setItem('fen-lang', newLang); } catch (e) {}
  };

  useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem('fen-lang');
      if (saved === 'dv') setLang('dv');
    } catch (e) {}
  }, []);

  const c = t[lang];
  const isRtl = c.dir === 'rtl';
  const isVisible = (id) => visible.has(id);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const bodyFont = isRtl
    ? "'Faruma', 'MV Waheed', 'MV Boli', Tahoma, sans-serif"
    : "'Inter', 'DM Sans', sans-serif";
  const headingFont = isRtl
    ? "'Faruma', 'MV Waheed', 'MV Boli', Tahoma, serif"
    : "'Cormorant Garamond', 'Instrument Serif', Georgia, serif";

  // Nav item index → section id OR page url
  // navItems: ['Articles','Evidence Library','About','Newsletter']
  const navSectionMap = ['articles', 'method', null, 'newsletter'];
  const scrollToSection = (i) => {
    if (i === 2) { window.location.href = '/about'; return; } // About → dedicated page
    const id = navSectionMap[i];
    const el = refs.current[id];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div dir={c.dir} style={{ fontFamily: bodyFont }}>

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="logo">
            fen<span className="logo-dot">.</span>
          </a>
          <div className="nav-links">
            {c.navItems.map((item, i) => (
              <a key={i} className="nav-link" href="#" onClick={(e) => { e.preventDefault(); scrollToSection(i); }} style={{ fontFamily: bodyFont }}>
                {item}
              </a>
            ))}
            <button
              onClick={() => changeLang(lang === 'en' ? 'dv' : 'en')}
              style={{
                fontFamily: lang === 'en' ? "'Faruma','MV Waheed',Tahoma" : "'Inter','DM Sans',sans-serif",
                fontSize: 12,
                background: 'none',
                border: '1px solid rgba(45,53,48,0.22)',
                borderRadius: 999,
                padding: '6px 16px',
                cursor: 'pointer',
                color: 'rgba(45,53,48,0.70)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                lineHeight: '1.2',
                transition: 'all 0.2s',
              }}
            >
              {c.langLabel}
            </button>
          </div>
          {/* Mobile row */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button
              onClick={() => changeLang(lang === 'en' ? 'dv' : 'en')}
              className="mobile-toggle"
              style={{
                fontFamily: lang === 'en' ? "'Faruma','MV Waheed',Tahoma" : "'Inter',sans-serif",
                fontSize: 12,
                background: 'none',
                border: '1px solid rgba(45,53,48,0.22)',
                borderRadius: 999,
                padding: '4px 12px',
                cursor: 'pointer',
                color: 'rgba(45,53,48,0.70)',
              }}
            >
              {c.langLabel}
            </button>
            <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {c.navItems.map((item, i) => (
              <a key={i} href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToSection(i); }} style={{ fontFamily: bodyFont }}>
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO — CINEMATIC FULL SCREEN ── */}
      {/*
        TO ADD YOUR PHOTO LATER:
        1. Drop your image at public/images/hero.jpg
        2. Add className="hero-cinematic has-photo" below
        That's it — the overlay handles the dark gradient automatically.
      */}
      <section
        className="hero-cinematic has-photo"
        data-section="hero"
        ref={(el) => (refs.current['hero'] = el)}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <p
            className={`hero-label fade-up ${isVisible('hero') ? 'visible' : ''}`}
            style={{ fontFamily: bodyFont }}
          >
            {c.heroLabel}
          </p>
          <h1
            className={`hero-title fade-up stagger-1 ${isVisible('hero') ? 'visible' : ''}`}
            style={{ fontFamily: headingFont }}
          >
            {c.heroTitle1}
            <br />
            <em style={{ fontFamily: headingFont }}>{c.heroTitle2}</em>
          </h1>
          <p
            className={`hero-subtitle fade-up stagger-2 ${isVisible('hero') ? 'visible' : ''}`}
            style={{ fontFamily: bodyFont, lineHeight: isRtl ? 2 : undefined }}
          >
            {c.heroSubtitle}
          </p>
          <form
            onSubmit={handleSubscribe}
            className={`hero-form fade-up stagger-3 ${isVisible('hero') ? 'visible' : ''}`}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={c.emailPlaceholder}
              required
              style={{ direction: 'ltr', textAlign: isRtl ? 'right' : 'left' }}
            />
            <button type="submit" className="cta-btn" style={{ fontFamily: bodyFont }}>
              {subscribed ? c.subscribedBtn : c.joinBtn}
            </button>
          </form>
          <p
            className={`hero-meta fade-up stagger-4 ${isVisible('hero') ? 'visible' : ''}`}
            style={{ fontFamily: bodyFont }}
          >
            {c.heroMeta}
          </p>
        </div>
        {/* Scroll indicator */}
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="ticker">
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="ticker-slide">
              {c.tickerItems.map((item, j) => (
                <span key={`${i}-${j}`}>
                  <span className="ticker-item" style={{ fontFamily: headingFont }}>{item}</span>
                  <span className="ticker-dot" style={{ margin: '0 16px' }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURED — EDITORIAL MOMENT ── */}
      <section
        className="section"
        data-section="featured"
        ref={(el) => (refs.current['featured'] = el)}
      >
        <div className="container">
          <div className="section-header">
            <p
              className={`section-label fade-up ${isVisible('featured') ? 'visible' : ''}`}
              style={{ fontFamily: bodyFont }}
            >
              {c.featuredLabel}
            </p>
            <h2
              className={`section-title fade-up stagger-1 ${isVisible('featured') ? 'visible' : ''}`}
              style={{ fontFamily: headingFont }}
            >
              {c.featuredTitle}
            </h2>
          </div>

          <div className={`featured-editorial fade-up stagger-2 ${isVisible('featured') ? 'visible' : ''}`}>
            <div className="featured-editorial-number">01</div>
            <div className="featured-editorial-content">
              <div className="featured-meta">
                <span
                  className="evidence-tag"
                  style={{ background: c.articles[0].tagColor, fontFamily: bodyFont }}
                >
                  {c.articles[0].tag}
                </span>
                <span className="category-label" style={{ fontFamily: bodyFont }}>
                  {c.articles[0].category}
                </span>
              </div>
              <h3
                className="featured-title"
                style={{ fontFamily: headingFont, lineHeight: isRtl ? 1.7 : undefined }}
              >
                {c.articles[0].title}
              </h3>
              <p
                className="featured-excerpt"
                style={{ fontFamily: bodyFont, lineHeight: isRtl ? 2 : undefined }}
              >
                {c.articles[0].excerpt}
              </p>
              <div className="featured-footer">
                <span className="date-text" style={{ fontFamily: bodyFont }}>{c.articles[0].date}</span>
                <span style={{ color: 'rgba(45,53,48,0.25)' }}>·</span>
                <span className="date-text" style={{ fontFamily: bodyFont }}>{c.articles[0].readTime}</span>
              </div>
              <a href="/articles/magnesium" className="cta-btn" style={{ fontFamily: bodyFont }}>
                {c.readBtn}
              </a>
            </div>
            <div className="featured-editorial-image">
              <img src="/images/featured.jpg" alt={c.articles[0].title} />
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLES — EDITORIAL LIST ── */}
      <section
        className="section section-alt"
        data-section="articles"
        ref={(el) => (refs.current['articles'] = el)}
      >
        <div className="container">
          <div className="section-header">
            <p
              className={`section-label fade-up ${isVisible('articles') ? 'visible' : ''}`}
              style={{ fontFamily: bodyFont }}
            >
              {c.archiveLabel}
            </p>
            <h2
              className={`section-title fade-up stagger-1 ${isVisible('articles') ? 'visible' : ''}`}
              style={{ fontFamily: headingFont }}
            >
              {c.archiveTitle}
            </h2>
          </div>

          <div className="articles-editorial">
            {c.articles.slice(1).map((article, i) => (
              <div
                key={article.id}
                className={`article-editorial-item fade-up stagger-${i + 1} ${isVisible('articles') ? 'visible' : ''}`}
              >
                <div className="article-editorial-index">
                  {String(i + 2).padStart(2, '0')}
                </div>
                <div className="article-editorial-body">
                  <div className="article-editorial-meta">
                    <span
                      className="evidence-tag evidence-tag-sm"
                      style={{ background: article.tagColor, fontFamily: bodyFont }}
                    >
                      {article.tag}
                    </span>
                    <span className="article-category" style={{ fontFamily: bodyFont }}>
                      {article.category}
                    </span>
                  </div>
                  <h3
                    className="article-title"
                    style={{ fontFamily: headingFont, lineHeight: isRtl ? 1.7 : undefined }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="article-excerpt"
                    style={{ fontFamily: bodyFont, lineHeight: isRtl ? 2 : undefined }}
                  >
                    {article.excerpt}
                  </p>
                  <div className="article-footer" style={{ fontFamily: bodyFont }}>
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <div className="article-thumbnail">
                  <img src={`/images/article-${article.id}.jpg`} alt={article.title} />
                </div>
              </div>
            ))}
          </div>

          <div className={`view-all fade-up stagger-6 ${isVisible('articles') ? 'visible' : ''}`}>
            <a href="#" className="cta-btn" style={{ fontFamily: bodyFont }}>
              {c.viewAll}
            </a>
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section
        className="section"
        data-section="pillars"
        ref={(el) => (refs.current['pillars'] = el)}
      >
        <div className="container">
          <div className="section-header">
            <p
              className={`section-label fade-up ${isVisible('pillars') ? 'visible' : ''}`}
              style={{ fontFamily: bodyFont }}
            >
              {c.exploreLabel}
            </p>
            <h2
              className={`section-title fade-up stagger-1 ${isVisible('pillars') ? 'visible' : ''}`}
              style={{ fontFamily: headingFont }}
            >
              {c.exploreTitle}
            </h2>
            <p
              className={`section-subtitle fade-up stagger-2 ${isVisible('pillars') ? 'visible' : ''}`}
              style={{ fontFamily: bodyFont, lineHeight: isRtl ? 2 : undefined }}
            >
              {c.exploreSubtitle}
            </p>
          </div>
          <div className="pillars-grid">
            {c.pillars.map((pillar, i) => (
              <div
                key={i}
                className={`pillar-card fade-up stagger-${i + 1} ${isVisible('pillars') ? 'visible' : ''}`}
              >
                <span className="pillar-icon">{pillar.icon}</span>
                <h3 className="pillar-name" style={{ fontFamily: headingFont }}>{pillar.name}</h3>
                <p className="pillar-desc" style={{ fontFamily: bodyFont }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section
        className="section section-dark"
        data-section="method"
        ref={(el) => (refs.current['method'] = el)}
      >
        <div className="container">
          <div className="section-header">
            <p
              className={`section-label fade-up ${isVisible('method') ? 'visible' : ''}`}
              style={{ fontFamily: bodyFont }}
            >
              {c.methodLabel}
            </p>
            <h2
              className={`section-title fade-up stagger-1 ${isVisible('method') ? 'visible' : ''}`}
              style={{ fontFamily: headingFont }}
            >
              {c.methodTitle}
            </h2>
          </div>
          <div className={`method-grid fade-up stagger-2 ${isVisible('method') ? 'visible' : ''}`}>
            {c.evidence.map((item) => (
              <div key={item.level} className="method-card">
                <div className="method-dot" style={{ background: item.color }} />
                <h4 className="method-level" style={{ fontFamily: headingFont }}>{item.level}</h4>
                <p className="method-desc" style={{ fontFamily: bodyFont, lineHeight: isRtl ? 2 : undefined }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section
        className="section section-green"
        data-section="newsletter"
        ref={(el) => (refs.current['newsletter'] = el)}
      >
        <div className="container">
          <div className={`newsletter-inner fade-up ${isVisible('newsletter') ? 'visible' : ''}`}>
            <h2 className="newsletter-title" style={{ fontFamily: headingFont }}>
              {c.newsletterTitle}
            </h2>
            <p
              className="newsletter-desc"
              style={{ fontFamily: bodyFont, lineHeight: isRtl ? 2 : undefined }}
            >
              {c.newsletterDesc}
            </p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={c.emailPlaceholder}
                required
                style={{ direction: 'ltr', textAlign: isRtl ? 'right' : 'left' }}
              />
              <button type="submit" className="newsletter-btn" style={{ fontFamily: bodyFont }}>
                {subscribed ? c.subscribedBtnAlt : c.subscribeBtn}
              </button>
            </form>
            <p className="newsletter-meta" style={{ fontFamily: bodyFont }}>{c.newsletterMeta}</p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        className="section section-alt"
        data-section="about"
        ref={(el) => (refs.current['about'] = el)}
      >
        <div className="container" style={{ maxWidth: 700 }}>
          <div className="section-header">
            <p
              className={`section-label fade-up ${isVisible('about') ? 'visible' : ''}`}
              style={{ fontFamily: bodyFont }}
            >
              {c.aboutLabel}
            </p>
            <h2
              className={`section-title fade-up stagger-1 ${isVisible('about') ? 'visible' : ''}`}
              style={{ fontFamily: headingFont }}
            >
              {c.aboutTitle}
            </h2>
          </div>
          <div className={`fade-up stagger-2 ${isVisible('about') ? 'visible' : ''}`}>
            <p className="about-text" style={{ fontFamily: bodyFont, lineHeight: isRtl ? 2.2 : undefined }}>{c.aboutP1}</p>
            <p className="about-text" style={{ fontFamily: bodyFont, lineHeight: isRtl ? 2.2 : undefined }}>{c.aboutP2}</p>
            <a href="/about" style={{
              display: 'inline-block', marginTop: '1.2rem',
              fontFamily: bodyFont, fontSize: 14, fontWeight: 500,
              color: '#7B6D3E', textDecoration: 'none',
              borderBottom: '1px solid rgba(123,109,62,0.35)',
              paddingBottom: 2,
              letterSpacing: '0.01em',
              transition: 'color 0.2s, border-color 0.2s',
            }}>
              {c.aboutLink}
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <span className="footer-logo">
                fen<span style={{ color: '#7B6D3E' }}>.</span>
              </span>
              <p
                className="footer-tagline"
                style={{ fontFamily: bodyFont, whiteSpace: 'pre-line', lineHeight: isRtl ? 2 : undefined }}
              >
                {c.footerTagline}
              </p>
            </div>
            <div>
              <h4 className="footer-heading" style={{ fontFamily: bodyFont }}>{c.footerExplore}</h4>
              {c.footerExploreLinks.map((link, i) => (
                <a key={i} href="#" style={{ fontFamily: bodyFont }}>{link}</a>
              ))}
            </div>
            <div>
              <h4 className="footer-heading" style={{ fontFamily: bodyFont }}>{c.footerTopics}</h4>
              {c.footerTopicLinks.map((link, i) => (
                <a key={i} href="#" style={{ fontFamily: bodyFont }}>{link}</a>
              ))}
            </div>
            <div>
              <h4 className="footer-heading" style={{ fontFamily: bodyFont }}>{c.footerConnect}</h4>
              {c.footerConnectLinks.map((link, i) => (
                <a key={i} href="#" style={{ fontFamily: bodyFont }}>{link}</a>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <p
              className="footer-disclaimer"
              style={{ fontFamily: bodyFont, lineHeight: isRtl ? 2 : undefined }}
            >
              {c.footerDisclaimer}
            </p>
            <p className="footer-copy" style={{ fontFamily: bodyFont }}>{c.footerCopy}</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
