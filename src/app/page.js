'use client';

import { useState, useEffect, useRef } from 'react';

const ARTICLES = [
  {
    id: 1, category: 'SUPPLEMENTS', tag: 'Strong Evidence', tagColor: '#2d6a4f',
    title: 'Magnesium: The Most Underrated Mineral in Modern Nutrition',
    excerpt: 'Over 50% of adults don\'t get enough magnesium. Here\'s what 34 clinical trials reveal about supplementation, dosage, and the forms that actually work.',
    date: 'Apr 7, 2026', readTime: '12 min read', featured: true,
  },
  {
    id: 2, category: 'HERBAL REMEDIES', tag: 'Moderate Evidence', tagColor: '#b5651d',
    title: 'Turmeric vs. Curcumin Supplements: A Bioavailability Breakdown',
    excerpt: 'The golden spice has thousands of studies behind it — but most supplements fail at one critical thing. We reviewed the evidence on absorption and efficacy.',
    date: 'Apr 4, 2026', readTime: '9 min read',
  },
  {
    id: 3, category: 'FUNCTIONAL BEVERAGES', tag: 'Emerging Research', tagColor: '#6c757d',
    title: "Lion's Mane Coffee: Cognitive Hype or Genuine Nootropic?",
    excerpt: "Mushroom coffee is everywhere. We examined 12 studies on lion's mane and neurogenesis to separate marketing claims from what the science actually supports.",
    date: 'Apr 1, 2026', readTime: '8 min read',
  },
  {
    id: 4, category: 'NUTRITION SCIENCE', tag: 'Strong Evidence', tagColor: '#2d6a4f',
    title: 'The Omega-3 Index: Why This Blood Test Matters More Than Cholesterol',
    excerpt: 'Emerging research suggests your omega-3 index is one of the strongest predictors of cardiovascular health. Here\'s what to aim for and how to get there.',
    date: 'Mar 28, 2026', readTime: '11 min read',
  },
  {
    id: 5, category: 'MOVEMENT', tag: 'Strong Evidence', tagColor: '#2d6a4f',
    title: 'Walking 7,000 Steps: The New Threshold Backed by Mortality Data',
    excerpt: 'Forget 10,000 steps. A landmark 2024 meta-analysis of 47 studies found the sweet spot may be lower than you think — with diminishing returns above it.',
    date: 'Mar 25, 2026', readTime: '7 min read',
  },
  {
    id: 6, category: 'GUT HEALTH', tag: 'Moderate Evidence', tagColor: '#b5651d',
    title: 'Probiotics After Antibiotics: Timing, Strains, and What Actually Helps',
    excerpt: 'The gut microbiome takes months to recover from antibiotics. We reviewed 22 RCTs to find which probiotic protocols have real evidence behind them.',
    date: 'Mar 21, 2026', readTime: '10 min read',
  },
];

const PILLARS = [
  { name: 'Herbal Remedies', desc: 'Traditional botanicals examined through modern research', icon: '🌿' },
  { name: 'Supplements', desc: 'Evidence ratings for vitamins, minerals, and compounds', icon: '💊' },
  { name: 'Teas & Coffees', desc: 'Functional beverages and their therapeutic profiles', icon: '🍵' },
  { name: 'Fitness & Movement', desc: 'Exercise science distilled into practical protocols', icon: '🏃' },
  { name: 'Mind & Wellness', desc: 'Sleep, stress, fasting, and the gut-brain axis', icon: '🧠' },
];

const EVIDENCE_LEVELS = [
  { level: 'Strong', color: '#2d6a4f', desc: 'Multiple randomised controlled trials or meta-analyses with consistent results across diverse populations.' },
  { level: 'Moderate', color: '#b5651d', desc: 'Limited RCTs or observational studies with plausible mechanisms. Promising but needs more research.' },
  { level: 'Emerging', color: '#6c757d', desc: 'Preliminary findings from animal studies, in vitro research, or small pilot trials. Early-stage only.' },
  { level: 'Insufficient', color: '#9e2a2b', desc: 'Anecdotal, traditional use only, or contradictory findings. We include it but flag the uncertainty.' },
];

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
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { visible, refs } = useIntersectionObserver();

  const isVisible = (id) => visible.has(id);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <>
      {/* NAVIGATION */}
      <nav className="nav">
        <div className="nav-inner">
          <div>
            <a href="/" className="logo">fen<span className="logo-dot">.</span></a>
          </div>
          <div className="nav-links">
            {['Articles', 'Evidence Library', 'About', 'Newsletter'].map((item) => (
              <a key={item} className="nav-link" href={`#${item.toLowerCase().replace(' ', '-')}`}>{item}</a>
            ))}
          </div>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {['Articles', 'Evidence Library', 'About', 'Newsletter'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="hero" data-section="hero" ref={(el) => (refs.current['hero'] = el)}>
        <div className="hero-inner">
          <p className={`hero-label fade-up ${isVisible('hero') ? 'visible' : ''}`}>
            Natural Health · Evidence-Based · Independent
          </p>
          <h1 className={`hero-title fade-up stagger-1 ${isVisible('hero') ? 'visible' : ''}`}>
            Health knowledge<br /><em>rooted in evidence</em>
          </h1>
          <p className={`hero-subtitle fade-up stagger-2 ${isVisible('hero') ? 'visible' : ''}`}>
            We examine supplements, herbal remedies, teas, and wellness practices through
            the lens of peer-reviewed research — so you can make informed choices about
            your health, not guesses.
          </p>
          <form onSubmit={handleSubscribe}
            className={`hero-form fade-up stagger-3 ${isVisible('hero') ? 'visible' : ''}`}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com" required />
            <button type="submit" className="cta-btn">
              {subscribed ? '✓ Subscribed' : 'Join the newsletter'}
            </button>
          </form>
          <p className={`hero-meta fade-up stagger-4 ${isVisible('hero') ? 'visible' : ''}`}>
            Free weekly edition · No spam · Unsubscribe anytime
          </p>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-track">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="ticker-slide">
              {['Supplements', 'Herbal Medicine', 'Nutrition Science', 'Functional Teas', 'Movement', 'Gut Health', 'Adaptogens'].map((item) => (
                <span key={`${i}-${item}`}>
                  <span className="ticker-item">{item}</span>
                  <span className="ticker-dot" style={{ margin: '0 12px' }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED ARTICLE */}
      <section className="section" id="articles" data-section="featured"
        ref={(el) => (refs.current['featured'] = el)}>
        <div className="container">
          <div className="section-header">
            <p className={`section-label fade-up ${isVisible('featured') ? 'visible' : ''}`}>Latest</p>
            <h2 className={`section-title fade-up stagger-1 ${isVisible('featured') ? 'visible' : ''}`}>
              Featured Research
            </h2>
          </div>
          <div className={`featured-grid fade-up stagger-2 ${isVisible('featured') ? 'visible' : ''}`}>
            <div>
              <div className="featured-image">
                <span style={{ fontSize: 48 }}>🧪</span>
                <span className="featured-image-text">Featured Article</span>
              </div>
            </div>
            <div>
              <div className="featured-meta">
                <span className="evidence-tag" style={{ background: ARTICLES[0].tagColor }}>
                  {ARTICLES[0].tag}
                </span>
                <span className="category-label">{ARTICLES[0].category}</span>
              </div>
              <h3 className="featured-title">{ARTICLES[0].title}</h3>
              <p className="featured-excerpt">{ARTICLES[0].excerpt}</p>
              <div className="featured-footer">
                <span className="date-text">{ARTICLES[0].date}</span>
                <span style={{ color: '#ccc' }}>·</span>
                <span className="date-text">{ARTICLES[0].readTime}</span>
              </div>
              <a href="#" className="cta-btn">Read Article →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="section section-alt" data-section="articles"
        ref={(el) => (refs.current['articles'] = el)}>
        <div className="container">
          <div className="section-header">
            <p className={`section-label fade-up ${isVisible('articles') ? 'visible' : ''}`}>Archive</p>
            <h2 className={`section-title fade-up stagger-1 ${isVisible('articles') ? 'visible' : ''}`}>
              Recent Articles
            </h2>
          </div>
          <div className="articles-grid">
            {ARTICLES.slice(1).map((article, i) => (
              <div key={article.id}
                className={`article-card fade-up stagger-${i + 1} ${isVisible('articles') ? 'visible' : ''}`}>
                <div className="article-card-inner">
                  <span className="evidence-tag evidence-tag-sm" style={{ background: article.tagColor }}>
                    {article.tag}
                  </span>
                  <span className="article-category">{article.category}</span>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <div className="article-footer">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`view-all fade-up stagger-6 ${isVisible('articles') ? 'visible' : ''}`}>
            <a href="#" className="nav-link">View all articles →</a>
          </div>
        </div>
      </section>

      {/* CONTENT PILLARS */}
      <section className="section" data-section="pillars"
        ref={(el) => (refs.current['pillars'] = el)}>
        <div className="container">
          <div className="section-header">
            <p className={`section-label fade-up ${isVisible('pillars') ? 'visible' : ''}`}>Explore</p>
            <h2 className={`section-title fade-up stagger-1 ${isVisible('pillars') ? 'visible' : ''}`}>
              What We Cover
            </h2>
            <p className={`section-subtitle fade-up stagger-2 ${isVisible('pillars') ? 'visible' : ''}`}>
              Every article is graded by evidence quality — from strong (multiple RCTs) to
              emerging (early-stage research). No hype. No pseudoscience.
            </p>
          </div>
          <div className="pillars-grid">
            {PILLARS.map((pillar, i) => (
              <div key={pillar.name}
                className={`pillar-card fade-up stagger-${i + 1} ${isVisible('pillars') ? 'visible' : ''}`}>
                <span className="pillar-icon">{pillar.icon}</span>
                <h3 className="pillar-name">{pillar.name}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVIDENCE METHODOLOGY */}
      <section className="section section-dark" id="evidence-library" data-section="method"
        ref={(el) => (refs.current['method'] = el)}>
        <div className="container">
          <div className="section-header">
            <p className={`section-label fade-up ${isVisible('method') ? 'visible' : ''}`}>Our Standard</p>
            <h2 className={`section-title fade-up stagger-1 ${isVisible('method') ? 'visible' : ''}`}>
              How We Rate Evidence
            </h2>
          </div>
          <div className={`method-grid fade-up stagger-2 ${isVisible('method') ? 'visible' : ''}`}>
            {EVIDENCE_LEVELS.map((item) => (
              <div key={item.level} className="method-card">
                <div className="method-dot" style={{ background: item.color }} />
                <h4 className="method-level">{item.level}</h4>
                <p className="method-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="section section-green" id="newsletter" data-section="newsletter"
        ref={(el) => (refs.current['newsletter'] = el)}>
        <div className="container">
          <div className={`newsletter-inner fade-up ${isVisible('newsletter') ? 'visible' : ''}`}>
            <h2 className="newsletter-title">The Saturday Edition</h2>
            <p className="newsletter-desc">
              One email per week. The latest evidence on supplements, herbal remedies,
              nutrition, and wellness — curated, graded, and explained in plain language.
              No product pushing. No spam. Just research you can use.
            </p>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com" required />
              <button type="submit" className="newsletter-btn">
                {subscribed ? '✓ You\'re in' : 'Subscribe free'}
              </button>
            </form>
            <p className="newsletter-meta">
              Join 0 readers · Free forever · Unsubscribe in one click
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about" data-section="about"
        ref={(el) => (refs.current['about'] = el)}>
        <div className="container" style={{ maxWidth: 680 }}>
          <div className="section-header">
            <p className={`section-label fade-up ${isVisible('about') ? 'visible' : ''}`}>Why This Exists</p>
            <h2 className={`section-title fade-up stagger-1 ${isVisible('about') ? 'visible' : ''}`}>
              About fen
            </h2>
          </div>
          <div className={`fade-up stagger-2 ${isVisible('about') ? 'visible' : ''}`}>
            <p className="about-text">
              The natural health space is full of noise — miracle cures, influencer endorsements,
              and marketing dressed up as medicine. We started <em>fen</em> because we believe
              people deserve better.
            </p>
            <p className="about-text">
              Every article we publish cites peer-reviewed research. Every supplement, herb,
              and practice gets an honest evidence rating. We don&apos;t sell products — we help
              you understand what the science actually says, so you can make your own decisions.
            </p>
            <p className="about-text">
              <em>fen</em> is named after natural wetland ecosystems — places where diverse life
              thrives in balance. That&apos;s what we believe health should be: grounded, diverse,
              and rooted in nature&apos;s own evidence.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <span className="footer-logo">fen<span style={{ color: '#52b788' }}>.</span></span>
              <p className="footer-tagline">
                Evidence-based natural health education.<br />Independent. Transparent. Free.
              </p>
            </div>
            <div>
              <h4 className="footer-heading">Explore</h4>
              {['Articles', 'Evidence Library', 'Newsletter Archive', 'Start Here'].map((link) => (
                <a key={link} href="#">{link}</a>
              ))}
            </div>
            <div>
              <h4 className="footer-heading">Topics</h4>
              {['Supplements', 'Herbal Remedies', 'Teas & Coffees', 'Fitness', 'Gut Health'].map((link) => (
                <a key={link} href="#">{link}</a>
              ))}
            </div>
            <div>
              <h4 className="footer-heading">Connect</h4>
              {['Instagram', 'YouTube', 'X / Twitter', 'About', 'Contact'].map((link) => (
                <a key={link} href="#">{link}</a>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-disclaimer">
              Content is for educational purposes only and does not constitute medical advice.
              Always consult a qualified healthcare provider for personal medical decisions.
            </p>
            <p className="footer-copy">© 2026 fen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
