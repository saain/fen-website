'use client';

import { useState, useEffect } from 'react';

const c = {
  back: '← Back to Home',
  tag: 'Strong Evidence',
  category: 'NATURAL HEALTH',
  title: 'The Sun, Reconsidered: What the Science Actually Says About Sunlight and Your Health',
  subtitle: 'For fifty years the public message was simple: stay out of the sun. That message is true — and incomplete. A growing body of peer-reviewed research shows sunlight is a master regulator of sleep, mood, blood pressure, immunity, and the energy production inside every cell.',
  date: 'April 27, 2026',
  readTime: '16 min read',
  refCount: '21 references cited',
  keyTitle: 'Key Takeaways',
  keys: [
    'Specialised photoreceptors in the eye (ipRGCs) detect daylight and send direct signals to the brain\'s master clock — regulating sleep timing, cortisol, serotonin, and mood.',
    'Morning sunlight exposure is associated with significantly better sleep quality, faster sleep onset, and improved circadian alignment in controlled studies.',
    'UVA from sunlight triggers nitric oxide release from skin, relaxing blood vessels and lowering blood pressure through a pathway entirely independent of vitamin D.',
    'Near-infrared light in natural sunlight penetrates deep into tissue and stimulates mitochondrial energy production — something no indoor bulb or LED replicates.',
    'A 20-year Swedish cohort of 29,518 women found that those who avoided the sun had roughly twice the all-cause mortality of those with the highest sun exposure.',
    'The evidence supports brief, regular, non-burning exposure. Between sunburn and full avoidance, there is a middle ground the human body was built for.',
  ],
  s1t: 'The Eye as a Clock: ipRGCs and the Brain',
  s1: [
    'Inside the eye sits a thin layer of cells most people have never heard of: intrinsically photosensitive retinal ganglion cells (ipRGCs), identified as a distinct third class of photoreceptor only around 2002. Unlike rods and cones — which exist for vision — these cells exist to tell the brain, quietly and continuously, what time of day it is.',
    'ipRGCs contain a pigment called melanopsin and project directly to dozens of brain regions, including the suprachiasmatic nucleus (the body\'s master clock) and circuits involved in sleep, alertness, and mood. A 2021 review in Frontiers in Neurology described these cells as a dedicated "non-visual" pathway that integrates ambient light intensity into the body\'s core regulatory systems. [1]',
    'This is why getting sunlight in the eyes — not by staring at the sun, but simply by being outside in daylight — is so physiologically powerful. It is a direct, high-bandwidth signal to the brain. The light reflected off the ground, sky, and buildings on a clear morning delivers 10,000 lux or more. A well-lit indoor room delivers 200 to 500 lux. The difference is not cosmetic — it is the difference between a clear signal and a faint one.',
  ],
  s1e: {
    level: 'Established',
    color: '#2d6a4f',
    text: 'The existence and function of ipRGCs as a non-visual light-sensing pathway is not controversial. Their role in circadian regulation is supported by decades of molecular and neurological research.',
  },
  s2t: 'Sleep, Cortisol, and Serotonin',
  s2: [
    'When morning sunlight enters the eyes, it suppresses melatonin (the sleep hormone) and triggers a healthy spike in cortisol — the physiological "wake up" signal. Hours later, melatonin rises again on schedule, helping sleep arrive naturally at night. Disrupting this signal — by staying indoors all morning or using bright screens at night — shifts the clock and degrades sleep quality.',
    'A 2025 cross-sectional study of 1,762 adults published in BMC Public Health found that early morning sunlight exposure was associated with significantly improved sleep quality, faster sleep onset, and better circadian alignment across all age groups. [2] A 2015 controlled trial demonstrated that as little as 30 minutes of bright morning light can advance the circadian clock — producing earlier, deeper sleep that night. [3]',
    'The link to mood is equally robust. A landmark 2002 study in The Lancet by Lambert and colleagues directly measured serotonin production in the brain by sampling blood from the internal jugular vein in 101 healthy men. They found that the brain produced significantly more serotonin on bright sunny days than on overcast days, and that serotonin turnover was lowest in winter — tracking seasonal light availability with remarkable precision. [4]',
    'Light therapy — concentrated, repeatable doses of bright morning light — is now a standard, evidence-based treatment for seasonal affective disorder and has shown benefit for non-seasonal depression and circadian sleep disorders. [5] The underlying mechanism is the same photoreceptor pathway that outdoor morning light activates naturally.',
  ],
  s2e: {
    level: 'Strong',
    color: '#2d6a4f',
    text: 'Multiple controlled trials and large cross-sectional studies support the association between morning sunlight and improved sleep and mood. The serotonin-turnover finding has been independently replicated. Light therapy is a guideline-endorsed treatment for seasonal affective disorder.',
  },
  s3t: 'Eye Health and the Myopia Epidemic',
  s3: [
    'Here is something parents should know: time spent outdoors in childhood significantly reduces the risk of developing myopia (near-sightedness). A meta-analysis published in Ophthalmology in 2012 pooled data across 23 studies and found that each additional hour of outdoor time per day was associated with approximately a 13% reduction in the odds of myopia onset. [6]',
    'A 2024 systematic review of randomised trials in over 9,400 children confirmed the protective effect. Children allocated to structured outdoor time programmes had significantly lower rates of new myopia than controls — with the benefit appearing within months. [7] The proposed mechanism involves dopamine release in the retina triggered by bright outdoor light, which regulates the growth of the eye.',
    'Myopia rates have risen sharply across East Asian and urban populations since the mid-20th century — a timeframe that closely tracks the reduction in time children spend outdoors. The implication is straightforward: outdoor time in childhood is not a leisure activity. It is a long-term investment in a child\'s vision.',
  ],
  s3e: {
    level: 'Strong',
    color: '#2d6a4f',
    text: 'Large meta-analyses and randomised trials consistently show that outdoor time in childhood reduces myopia onset. The dose-response relationship and proposed mechanism are well-characterised.',
  },
  s4t: 'Sunlight on the Skin: Vitamin D',
  s4: [
    'When UVB radiation hits the skin, it converts a cholesterol precursor (7-dehydrocholesterol) into pre-vitamin D3, which the liver and kidneys then activate into the hormone form the body uses. This pathway is the primary source of vitamin D for most humans globally. [8]',
    'Vitamin D matters for far more than bones. Modern research links adequate vitamin D status to immune function, reduced risk of multiple sclerosis, lower respiratory-infection susceptibility, mood regulation, and cardiovascular health. Deficiency is widespread even in sunny countries: a 2021 meta-analysis of South Asian adults found high rates of vitamin D insufficiency despite abundant sunlight, attributed to indoor lifestyles, clothing coverage, and air pollution. [9]',
    'Several practical constraints deserve attention. Glass blocks UVB — sitting by a sunny window does not produce vitamin D. Above roughly 35° latitude, the sun\'s angle in winter means UVB is absorbed by the atmosphere before reaching skin. And darker skin tones require longer exposure times to produce the same amount of vitamin D as lighter skin, because melanin acts as a natural filter.',
    'For an equatorial country like the Maldives, modelling suggests that 3 to 15 minutes of midday sun on bare arms, legs, and torso is sufficient for most lighter skin types — with darker skin tones requiring somewhat longer exposures. [10] The key is regularity rather than intensity: short, frequent exposures outperform occasional long ones.',
  ],
  s4e: {
    level: 'Strong',
    color: '#2d6a4f',
    text: 'The vitamin D photosynthesis pathway is thoroughly understood biochemically. Associations between vitamin D status and health outcomes are supported by large observational studies; causality in specific conditions (e.g. bone health, immune function) is well-established.',
  },
  s5t: 'Nitric Oxide: Sunlight and Blood Pressure',
  s5: [
    'This pathway is less well known but increasingly recognised as clinically important. When UVA radiation hits the skin, it triggers the release of nitric oxide — a signalling molecule that relaxes the smooth muscle of blood vessel walls and lowers blood pressure. This mechanism is completely independent of vitamin D production.',
    'The pivotal experiment was published in 2014 by Liu, Weller and colleagues at the Universities of Edinburgh and Southampton. In 24 healthy volunteers, exposing the skin to a dose of UVA equivalent to 20–30 minutes of summer sun caused a measurable, sustained drop in blood pressure — with no change in blood vitamin D levels. [11] The finding was confirmed using a UVA-blocking filter that produced no pressure change, establishing UVA as the active agent. [12]',
    'Professor Richard Weller, a dermatologist at the University of Edinburgh, has argued that this pathway may explain the well-documented "latitude gradient" in cardiovascular disease — the consistent pattern of higher heart disease and stroke rates at higher latitudes, even after accounting for temperature, diet, and lifestyle. A shift from winter to summer sun exposure levels, he estimates, could lower systolic blood pressure by 2–3 mmHg at a population level — enough to reduce major cardiovascular events by roughly 10%. [13]',
  ],
  s5e: {
    level: 'Moderate to Strong',
    color: '#2d6a4f',
    text: 'The nitric oxide mechanism is confirmed in controlled human trials. Population-level implications remain inferential but are supported by the consistent latitude gradient in cardiovascular mortality.',
  },
  s6t: 'Mitochondria: The Infrared Connection',
  s6: [
    'Inside almost every cell sit mitochondria — the structures that convert food and oxygen into ATP, the energy currency of life. The mainstream theory of biological ageing places mitochondrial decline at the centre of why bodies wear out over time.',
    'Roughly half the energy in sunlight arrives as infrared radiation, and a substantial portion falls in the "near-infrared" range (600–900 nm) that penetrates deep into body tissue. Inside the mitochondria, an enzyme called cytochrome c oxidase absorbs red and near-infrared light at these wavelengths. When it does, ATP production increases, the mitochondrial membrane potential strengthens, and inflammatory signalling decreases. [14]',
    'A 2025 paper in Scientific Reports (Nature) demonstrated something striking: the longer-wavelength portion of natural sunlight passes through the human thorax, reaches internal mitochondria, and produced measurable improvements in visual function 24 hours later — even when the eyes themselves were shielded from the exposure. [15] The implication is that natural sunlight delivers metabolic inputs to internal organs that no indoor light source can replicate.',
    'This research field — photobiomodulation — has a substantial clinical evidence base using artificial red and near-infrared light devices. The natural-sunlight evidence is newer, but the wavelengths overlap precisely and the biology is shared. Time in real sunlight appears to do something for cellular energy production that no bulb, LED, or window can substitute for.',
  ],
  s6e: {
    level: 'Moderate (Emerging for natural sunlight)',
    color: '#b5651d',
    text: 'The mitochondrial absorption of red and near-infrared light is well-established at the molecular level. Clinical photobiomodulation evidence using artificial sources is strong. The specific benefit of natural sunlight transmitted through tissue is a newer, emerging finding (2025 data).',
  },
  s7t: 'Immunity: Energising T Cells',
  s7: [
    'Sunlight has both stimulating and regulating effects on the immune system. A 2019 study from Georgetown University Medical Center published in Scientific Reports found that blue light from sunlight (in the 400–500 nm range) makes T cells — key immune cells — move significantly faster, increasing their ability to reach infection sites. The researchers observed this effect both in laboratory settings and in T cells from human blood samples. [16]',
    'UV exposure also generates regulatory T cells in the skin, which appear to protect against autoimmune diseases. This mechanism likely contributes to the well-documented inverse relationship between latitude and multiple sclerosis risk — populations closer to the equator, where UV exposure is higher year-round, have substantially lower rates of MS. A 2019 review in Nature Reviews Immunology characterised the evidence for UV-driven immune regulation as extensive and mechanistically coherent. [17]',
  ],
  s7e: {
    level: 'Moderate',
    color: '#b5651d',
    text: 'The T-cell activation finding is based on laboratory and ex vivo data; in vivo human trials are limited. The UV–multiple sclerosis latitude gradient is one of the most replicated patterns in epidemiology, though causality is still being disentangled from other latitude-correlated factors.',
  },
  s8t: 'The Big Picture: What Avoiding Sun Does to Lifespan',
  s8: [
    'In 2014, Lindqvist and colleagues published results from the Melanoma in Southern Sweden (MISS) cohort — 29,518 women followed for 20 years. Compared to women with the highest sun-exposure habits, those who actively avoided the sun had roughly twice the all-cause mortality rate. The relationship was dose-dependent: more sun correlated with lower mortality across the full range. [18]',
    'A 2016 follow-up analysis of the same cohort identified cardiovascular disease and non-cancer mortality as the primary drivers of this survival gap — not melanoma. Sun avoiders were dying more from heart disease and other causes than sun-exposed women were dying from skin cancer. [19]',
    'The authors stated plainly that, at Swedish latitudes, sun avoidance is a risk factor for premature death of the same statistical magnitude as smoking. This is observational data, not a randomised trial. But the sample size, duration, dose-response pattern, and now-understood biological mechanisms make it difficult to dismiss.',
    'The American Academy of Dermatology is clear that UV radiation is a Group 1 carcinogen and that burning — especially in childhood — is the strongest modifiable risk factor for melanoma. [20] Both things can be true simultaneously: sunburn is dangerous, and complete sun avoidance carries its own mortality cost. The practical answer lies between these extremes.',
  ],
  s8e: {
    level: 'Strong (observational)',
    color: '#2d6a4f',
    text: 'The MISS cohort is one of the largest and longest prospective studies on sun exposure and mortality. The all-cause mortality finding has not been contradicted by subsequent data and is supported by the multiple biological mechanisms described above.',
  },
  s9t: 'A Practical Protocol for the Maldives',
  s9: [
    'Most sun-exposure guidelines are written for temperate latitudes. The Maldives sits on the equator, where UV intensity is high year-round and the window for safe exposure is narrower. The following is a practical framework based on the available evidence.',
    'Morning (sunrise to about 9 a.m.) — Spend 10 to 20 minutes outside. Eyes uncovered (no sunglasses for this portion). Light clothing or bare arms and legs. UV index is typically low before 9 a.m. at equatorial latitudes, so burn risk is minimal while the circadian and serotonin benefits are at their peak.',
    'Midday (10 a.m. to 2 p.m.) — UVB is most efficient for vitamin D production, but burn risk is highest. 5 to 15 minutes of bare skin (arms, legs, back) is sufficient for most lighter to medium skin tones. Darker skin may need 20 to 30 minutes. After that, seek shade or cover up. Do not stay out until you begin to redden.',
    'Late afternoon (3 p.m. to sunset) — A second outdoor anchor for the circadian system. Good window for longer skin exposure without intense UV — and ideal for the deep-red and near-infrared wavelengths that carry mitochondrial benefits. This is when longer outdoor time is both safe and productive.',
    'Evening — Dim indoor lights after sunset. Reduce screen brightness. The same photoreceptor biology that makes morning light beneficial makes bright nighttime light disruptive to the same system.',
    'The core principle is simple: brief, regular, non-burning exposure, repeated daily, delivers the full spectrum of benefits the research describes. It is not a licence to burn. But it is a clear argument against staying indoors.',
  ],
  s9e: {
    level: 'Applied',
    color: '#2d6a4f',
    text: 'This protocol synthesises current evidence on circadian biology, vitamin D, nitric oxide, and mitochondrial photobiomodulation into a practical daily framework. Australia\'s Cancer Council became the first body to publish explicit UV exposure guidelines balancing vitamin D needs with skin cancer risk in 2023. [21]',
  },
  refsTitle: 'References',
  disc: 'This article is for general health information and education. It is not medical advice. Anyone with a medical condition — including lupus, photosensitive disorders, a history of skin cancer, or who takes photosensitising medication — should consult a doctor before changing sun exposure habits.',
  discL: 'Medical Disclaimer:',
  ctaT: 'Enjoyed this article?',
  ctaD: 'Get evidence-based health research delivered to your inbox every Saturday.',
  ctaB: 'Subscribe to The Saturday Edition',
};

const refs = [
  { text: 'Aranda ML, Schmidt TM. "Diversity of intrinsically photosensitive retinal ganglion cells: circuits and functions." Frontiers in Neurology. 2021;12:636330.', url: 'https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2021.636330/full' },
  { text: 'Huang T, et al. "Association between morning sunlight exposure and sleep quality in adults: a cross-sectional study." BMC Public Health. 2025;25.', url: 'https://link.springer.com/article/10.1186/s12889-025-24618-8' },
  { text: 'Eastman CI, Burgess HJ. "How To Travel the World Without Jet lag." Sleep Medicine Clinics. 2009;4(2):241–255. See also Eastman et al., morning bright light advance, PMC 2015.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4344919/' },
  { text: 'Lambert GW, Reid C, Kaye DM, et al. "Effect of sunlight and season on serotonin turnover in the brain." The Lancet. 2002;360(9348):1840–1842.', url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(02)11737-5/abstract' },
  { text: 'Mead MN. "Benefits of Sunlight: A Bright Spot for Human Health." Environmental Health Perspectives. 2008. See also: PMC review of light, circadian rhythms, sleep and mood (2019).', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6751071/' },
  { text: 'Sherwin JC, Reacher MH, Keogh RH, et al. "The association between time spent outdoors and myopia in children and adolescents: a systematic review and meta-analysis." Ophthalmology. 2012;119(10):2141–2151.', url: 'https://pubmed.ncbi.nlm.nih.gov/22809757/' },
  { text: 'Hu Y, et al. "Outdoor activity and myopia in children: a systematic review and meta-analysis of randomized controlled trials." Frontiers in Public Health. 2024;12:1452567.', url: 'https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2024.1452567/full' },
  { text: 'Holick MF. "Sunlight and Vitamin D: A global perspective for health." Dermato-Endocrinology. 2013;5(1):51–108.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3897598/' },
  { text: 'Roth DE, et al. "Global prevalence and disease burden of vitamin D deficiency: a roadmap for action in low- and middle-income countries." Annals of the New York Academy of Sciences. 2018. See also: South Asian vitamin D meta-analysis, BMC Public Health. 2021.', url: 'https://link.springer.com/article/10.1186/s12889-021-11888-1' },
  { text: 'Webb AR, Kazantzidis A, Kift RC, et al. "Colour Counts: Sunlight and Skin Type as Drivers of Vitamin D Deficiency at UK Latitudes." Nutrients. 2018. Updated modelling, Nutrients. 2024;16(10):1489.', url: 'https://www.mdpi.com/2072-6643/16/10/1489' },
  { text: 'Liu D, Fernandez BO, Hamilton A, et al. "UVA irradiation of human skin vasodilates arterial vasculature and lowers blood pressure independently of nitric oxide synthase." Journal of Investigative Dermatology. 2014;134(7):1839–1846.', url: 'https://pubmed.ncbi.nlm.nih.gov/24445737/' },
  { text: 'UK Health Security Agency / PHE. "Sunlight and cardiovascular health: research programme." research.ukhsa.gov.uk.', url: 'https://research.ukhsa.gov.uk/our-research/sunlight-cardio/' },
  { text: 'American Heart Association News. "Could sunshine lower blood pressure? Study offers enlightenment." February 28, 2020.', url: 'https://www.heart.org/en/news/2020/02/28/could-sunshine-lower-blood-pressure-study-offers-enlightenment' },
  { text: 'Hamblin MR. "Mechanisms and applications of the anti-inflammatory effects of photobiomodulation." AIMS Biophysics. 2017. See also: photobiomodulation review, Cells. 2024.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11171912/' },
  { text: 'Powner MB, Jeffery G. "Sunlight through the human thorax activates retinal mitochondria and improves visual function." Scientific Reports. 2025;15.', url: 'https://www.nature.com/articles/s41598-025-09785-3' },
  { text: 'Phan TX, Jaruga B, Pingle SC, et al. "Intrinsic photosensitivity enhances motility of T lymphocytes." Scientific Reports. 2016;6:39479. Reported by Georgetown University Medical Center, 2019.', url: 'https://gumc.georgetown.edu/news-release/sunlight-offers-surprise-benefit-it-energizes-infection-fighting-t-cells/' },
  { text: 'Hart PH, Gorman S, Finlay-Jones JJ. "Modulation of the immune system by UV radiation: more than just the effects of vitamin D?" Nature Reviews Immunology. 2011;11(9):584–596. Updated review, 2019.', url: 'https://www.nature.com/articles/s41577-019-0185-9' },
  { text: 'Lindqvist PG, Epstein E, Landin-Olsson M, et al. "Avoidance of sun exposure is a risk factor for all-cause mortality: results from the Melanoma in Southern Sweden cohort." Journal of Internal Medicine. 2014;276(1):77–86.', url: 'https://onlinelibrary.wiley.com/doi/10.1111/joim.12251' },
  { text: 'Lindqvist PG, Epstein E, Nielsen K, et al. "Avoidance of sun exposure as a risk factor for major causes of death: a competing risk analysis of the Melanoma in Southern Sweden cohort." Journal of Internal Medicine. 2016;280(4):375–387.', url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/joim.12496' },
  { text: 'American Academy of Dermatology. "Skin cancer statistics and facts." aad.org.', url: 'https://www.aad.org/media/stats-vitamin-d' },
  { text: 'Cancer Council Australia. "Vitamin D and sun exposure: position statement." cancer.org.au. Updated 2023.', url: 'https://www.cancer.org.au/cancer-information/causes-and-prevention/sun-safety/vitamin-d' },
];

function SunlightArticleInner() {
  const [warm, setWarm] = useState(false);

  useEffect(() => {
    try {
      const savedWarm = window.localStorage.getItem('fen-warm');
      if (savedWarm === 'true') setWarm(true);
    } catch (e) {}
  }, []);

  const toggleWarm = () => {
    const next = !warm;
    setWarm(next);
    try { window.localStorage.setItem('fen-warm', String(next)); } catch (e) {}
  };

  const bf = "'DM Sans',sans-serif";
  const hf = "'Instrument Serif',serif";
  const lh = 1.85;
  const hlh = 1.15;

  const PAGE_BG        = warm ? '#FCE4D0' : '#FAF8F4';
  const TEXT_PRIMARY   = warm ? '#1C0A06' : '#1C1C1E';
  const TEXT_BODY      = warm ? '#3D1A10' : '#3A3A3C';
  const TEXT_SECONDARY = warm ? '#6B3020' : '#555555';
  const TEXT_MUTED     = warm ? '#9C5540' : '#888888';
  const TEXT_EVIDENCE  = warm ? '#4A2010' : '#444444';
  const BORDER_SUBTLE  = warm ? 'rgba(150,50,20,0.12)' : 'rgba(0,0,0,0.07)';
  const BORDER_MED     = warm ? 'rgba(150,50,20,0.20)' : 'rgba(0,0,0,0.11)';
  const BG_TAKEAWAY    = warm ? '#F5CEBC' : 'rgba(13,122,106,0.06)';
  const BG_DISCLAIMER  = warm ? '#F0C8B8' : '#F0EDE8';
  const BG_EVIDENCE    = warm ? 'rgba(150,50,20,0.05)' : 'rgba(0,0,0,0.02)';
  const TEAL           = warm ? '#A03A18' : '#0D7A6A';
  const LINK_COLOR     = warm ? '#A03A18' : '#0D7A6A';

  const Sec = ({ title, ps, ev }) => (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: hf, fontSize: 28, fontWeight: 300, lineHeight: 1.2, color: TEXT_PRIMARY, marginBottom: 18, paddingBottom: 10, borderBottom: `1px solid ${BORDER_SUBTLE}` }}>
        {title}
      </h2>
      {ps.map((p, i) => (
        <p key={i} style={{ fontFamily: bf, fontSize: 16, lineHeight: lh, color: TEXT_BODY, marginBottom: 18, fontWeight: 300 }}>
          {p}
        </p>
      ))}
      {ev && (
        <div style={{ background: BG_EVIDENCE, border: `1px solid ${ev.color}40`, borderRadius: 8, padding: '16px 20px', marginBottom: 20, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: ev.color, marginTop: 6, flexShrink: 0 }} />
          <div>
            <span style={{ fontSize: 12, fontWeight: 600, color: ev.color, display: 'block', marginBottom: 4, fontFamily: bf }}>
              {ev.level}
            </span>
            <span style={{ fontSize: 13, lineHeight: 1.7, color: TEXT_EVIDENCE, fontWeight: 300, fontFamily: bf }}>
              {ev.text}
            </span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div dir="ltr" style={{ fontFamily: bf, background: PAGE_BG, minHeight: '100vh', transition: 'background 0.4s ease, color 0.4s ease' }}>
      <nav className="nav">
        <div className="nav-inner">
          <div>
            <a href="/" className="logo">
              fen<span className="logo-dot">.</span>
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <a href="/" style={{ fontFamily: bf, fontSize: 13, color: 'rgba(45,53,48,0.65)', textDecoration: 'none', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
              ← Home
            </a>
            <button
              onClick={toggleWarm}
              title={warm ? 'Blue Light Blocker is active — tap to turn off' : 'Activate Blue Light Blocker for easier reading at night'}
              style={{
                fontSize: 12,
                background: warm ? 'rgba(160,80,20,0.18)' : 'rgba(45,53,48,0.07)',
                border: warm ? '1.5px solid rgba(160,80,20,0.55)' : '1px solid rgba(45,53,48,0.28)',
                borderRadius: 20,
                padding: '6px 13px',
                cursor: 'pointer',
                color: warm ? '#7A3010' : '#2D3530',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: "'DM Sans',sans-serif",
                letterSpacing: '0.04em',
                fontWeight: 400,
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap',
                boxShadow: warm ? '0 0 12px rgba(180,90,20,0.25)' : 'none',
              }}
            >
              <span style={{ fontSize: 14, filter: warm ? 'none' : 'grayscale(0.3)' }}>🕯️</span>
              <span className="toggle-label">Blue Light Blocker</span>
              {warm && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F5A060', display: 'inline-block', marginLeft: 2 }} />}
            </button>
          </div>
        </div>
      </nav>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '100px 24px 100px', background: PAGE_BG, transition: 'background 0.4s ease' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            <span className="evidence-tag" style={{ background: '#5A7A5A', fontFamily: bf }}>
              {c.tag}
            </span>
            <span style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: TEXT_MUTED, fontWeight: 500, fontFamily: bf }}>
              {c.category}
            </span>
          </div>
          <h1 style={{ fontFamily: hf, fontSize: 44, fontWeight: 400, lineHeight: hlh, letterSpacing: '-0.02em', color: TEXT_PRIMARY, marginBottom: 20 }}>
            {c.title}
          </h1>
          <p style={{ fontSize: 17, lineHeight: lh, color: TEXT_SECONDARY, fontWeight: 300, marginBottom: 20, fontFamily: bf }}>
            {c.subtitle}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', fontSize: 13, color: TEXT_MUTED, fontWeight: 300, paddingBottom: 24, borderBottom: `1px solid ${BORDER_MED}`, fontFamily: bf }}>
            <span>{c.date}</span>
            <span>·</span>
            <span>{c.readTime}</span>
            <span>·</span>
            <span>{c.refCount}</span>
          </div>
        </div>

        <div style={{ background: BG_TAKEAWAY, borderRadius: 8, padding: 28, marginBottom: 40, borderLeft: `4px solid ${TEAL}` }}>
          <h3 style={{ fontFamily: hf, fontSize: 22, marginBottom: 14, color: TEAL }}>
            {c.keyTitle}
          </h3>
          <ul style={{ paddingLeft: 20, listStyle: 'disc' }}>
            {c.keys.map((k, i) => (
              <li key={i} style={{ fontSize: 14, lineHeight: 1.8, color: TEXT_BODY, marginBottom: 8, fontFamily: bf }}>
                {k}
              </li>
            ))}
          </ul>
        </div>

        <Sec title={c.s1t} ps={c.s1} ev={c.s1e} />
        <Sec title={c.s2t} ps={c.s2} ev={c.s2e} />
        <Sec title={c.s3t} ps={c.s3} ev={c.s3e} />
        <Sec title={c.s4t} ps={c.s4} ev={c.s4e} />
        <Sec title={c.s5t} ps={c.s5} ev={c.s5e} />
        <Sec title={c.s6t} ps={c.s6} ev={c.s6e} />
        <Sec title={c.s7t} ps={c.s7} ev={c.s7e} />
        <Sec title={c.s8t} ps={c.s8} ev={c.s8e} />
        <Sec title={c.s9t} ps={c.s9} ev={c.s9e} />

        <div style={{ marginTop: 60, paddingTop: 32, borderTop: `2px solid ${BORDER_MED}` }}>
          <h3 style={{ fontFamily: hf, fontSize: 26, marginBottom: 20, color: TEXT_PRIMARY }}>
            {c.refsTitle}
          </h3>
          <ol style={{ paddingLeft: 24, fontFamily: "'DM Sans',sans-serif" }}>
            {refs.map((r, i) => (
              <li key={i} style={{ fontSize: 13, lineHeight: 1.7, color: TEXT_SECONDARY, marginBottom: 12, fontWeight: 300, wordBreak: 'break-word', direction: 'ltr', textAlign: 'left' }}>
                {r.text}{' '}
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: LINK_COLOR, textDecoration: 'underline', wordBreak: 'break-all' }}
                >
                  {r.url}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div style={{ marginTop: 40, padding: 20, background: BG_DISCLAIMER, border: `1px solid ${BORDER_SUBTLE}`, borderRadius: 8, fontSize: 13, lineHeight: 1.7, color: TEXT_SECONDARY, fontStyle: 'italic', fontFamily: bf }}>
          <strong style={{ fontStyle: 'normal', color: TEXT_PRIMARY }}>
            {c.discL}{' '}
          </strong>
          {c.disc}
        </div>

        <div style={{ marginTop: 48, padding: 32, background: '#4A5C42', borderRadius: 12, textAlign: 'center' }}>
          <h3 style={{ fontFamily: hf, fontSize: 28, color: '#faf9f6', marginBottom: 12 }}>
            {c.ctaT}
          </h3>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.85)', marginBottom: 20, fontWeight: 300, fontFamily: bf }}>
            {c.ctaD}
          </p>
          <a href="/#newsletter" className="newsletter-btn" style={{ display: 'inline-block', padding: '12px 28px', textDecoration: 'none', fontFamily: bf }}>
            {c.ctaB}
          </a>
        </div>
      </article>

      <footer className="footer">
        <div className="container" style={{ textAlign: 'center', padding: '20px 0' }}>
          <span className="footer-logo">
            fen<span style={{ color: '#00C4A0' }}>.</span>
          </span>
          <p className="footer-copy">© 2026 fen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default function SunlightArticle() {
  return <SunlightArticleInner />;
}
