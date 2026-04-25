'use client';

import { useState, useEffect } from 'react';

const en = {
  back: '← Home',
  tag: 'Strong Evidence',
  category: 'ESSENTIAL FATS',
  title: 'Omega-3: The Essential Fat Your Brain and Heart Cannot Make',
  subtitle: 'The average Maldivian eats more tuna than anyone on earth — yet not all tuna is equal when it comes to omega-3. Here is what the clinical evidence actually says about EPA and DHA, the fish that provide the most, and when a supplement is worth considering.',
  date: 'Apr 25, 2026',
  readTime: '14 min read',
  refCount: '15 references cited',
  keyTitle: 'Key Takeaways',
  keys: [
    'Omega-3 fatty acids EPA and DHA are essential for the human body — we cannot make them in meaningful amounts, so they must come from diet or supplements.',
    'The human body converts less than 10% of plant omega-3 (ALA) into EPA, and less than 1% into DHA. Marine sources are therefore the only practical way to get enough.',
    'Meta-analyses of over 134,000 participants show omega-3 supplementation reduces cardiovascular death and heart attack risk, with stronger effects from EPA than EPA+DHA combinations.',
    'In the Maldives, yellowfin tuna from the Indian Ocean provides roughly 190 mg of EPA + DHA per 100 g — a regular tuna-based diet meets or exceeds omega-3 recommendations.',
    'Major health authorities recommend at least 250–500 mg of combined EPA + DHA per day for healthy adults, with higher doses (1–2 g/day) for those with heart disease or elevated triglycerides.',
  ],
  s1t: 'Why Omega-3 Matters',
  s1: [
    'Omega-3 fatty acids are structural components of every cell membrane in the human body, but they are especially concentrated in the brain, retina, and heart. The three that matter most are alpha-linolenic acid (ALA), eicosapentaenoic acid (EPA), and docosahexaenoic acid (DHA). ALA is found in plant oils such as flaxseed, chia, and walnuts. EPA and DHA are found almost exclusively in fish, shellfish, and algae.',
    'ALA is classified as an essential fatty acid — meaning the human body cannot synthesise it and must obtain it through diet. The body can convert small amounts of ALA into EPA and DHA, but this conversion is strikingly inefficient. Human studies consistently find that only around 2–10% of ALA is converted to EPA, and less than 1% — often as low as 0.01% — to DHA. For practical purposes, EPA and DHA must also come from the diet.',
    'DHA is the dominant omega-3 in brain tissue and the retina. EPA plays a more prominent role in regulating inflammation, cardiovascular function, and mood. Together, they are involved in membrane fluidity, nerve signalling, the production of anti-inflammatory messengers called resolvins and protectins, and the regulation of heart rhythm.',
  ],
  s1e: {
    level: 'Established',
    color: '#5A7A5A',
    text: 'The essentiality of omega-3 fatty acids is not controversial. Conversion of plant ALA into EPA and DHA is too low to meet physiological needs from plant sources alone for most people.',
  },
  s2t: 'The Cardiovascular Evidence',
  s2: [
    'The relationship between omega-3 and heart disease is one of the most extensively studied topics in nutrition. A 2024 meta-analysis published in the European Journal of Preventive Cardiology pooled data from 18 randomised controlled trials with over 134,000 participants. Omega-3 supplementation reduced the risk of coronary revascularisation, myocardial infarction, and cardiovascular death by roughly 8 to 11 percent, even in people already taking statins.',
    'The same meta-analysis found that EPA alone produced stronger effects than EPA combined with DHA — a finding confirmed by an earlier analysis of 38 trials with 149,000 participants, which showed EPA monotherapy reduced cardiovascular mortality more than EPA+DHA formulations. This pattern has prompted several clinical guidelines to specifically endorse purified EPA for high-risk cardiovascular patients.',
    'Omega-3 also produces robust reductions in triglycerides — a blood fat strongly linked to heart disease. A dose-response meta-analysis of 90 randomised trials and over 72,000 participants found a near-linear relationship: the more omega-3 consumed, the greater the reduction in triglycerides, particularly at doses above 2 grams per day. Typical triglyceride reductions range from 15 to 30 percent.',
  ],
  s2e: {
    level: 'Strong',
    color: '#5A7A5A',
    text: 'Multiple large meta-analyses show modest but consistent cardiovascular benefit. EPA produces stronger effects than combined EPA+DHA. Triglyceride reduction is robust and dose-dependent.',
  },
  s3t: 'Brain Health and Cognition',
  s3: [
    'DHA makes up around 30 to 40 percent of the polyunsaturated fatty acids in brain grey matter and retinal membranes. A 2023 meta-analysis of 48 longitudinal studies covering more than 103,000 participants found that higher dietary intake of omega-3 — especially DHA — was associated with approximately 20 percent lower risk of all-cause dementia and cognitive decline. Each additional 0.1 g/day of DHA or EPA intake was linked to an 8 to 10 percent lower risk of cognitive decline.',
    'A 2025 systematic review and dose-response meta-analysis of 58 randomised trials found that each 2,000 mg/day increase in omega-3 supplementation significantly improved attention and perceptual speed in adults. Benefits have been most consistent in people with mild cognitive impairment, those at genetic risk (APOE4 carriers), and in populations with low baseline omega-3 intake.',
    'Results in healthy older adults without cognitive impairment have been more mixed — of 15 trials in cognitively healthy people over 55, seven showed benefit and eight did not. The pattern suggests that omega-3 is more protective than curative: adequate intake across life appears more important than supplementation once cognitive decline is already advanced.',
  ],
  s3e: {
    level: 'Moderate to Strong',
    color: '#6B7C5A',
    text: 'Observational evidence for prevention is strong. Trial evidence is strongest in people with mild impairment or low baseline omega-3 levels. Benefits in already-healthy older adults are less consistent.',
  },
  s4t: 'Depression and Mood',
  s4: [
    'Multiple meta-analyses have now examined omega-3 for depression, with reasonably consistent findings. The effect depends heavily on the ratio of EPA to DHA and the dose. A 2023 meta-analysis of ten randomised trials (1,426 participants) found that EPA-enriched formulations — where EPA made up at least 60 percent of total EPA+DHA — significantly reduced depression severity at doses of 1 to 2 grams per day. DHA-dominant formulations did not show the same benefit.',
    'A 2019 meta-analysis of 26 trials with 2,160 participants reached the same conclusion: pure EPA and EPA-majority formulations at doses at or below 1 g/day produced clinically meaningful improvements in depressive symptoms, while DHA-pure formulations did not. This has led to a fairly consistent recommendation in the literature: if omega-3 is being used to support mood, the formulation should be EPA-dominant.',
    'Omega-3 is not a replacement for clinical treatment of depression, but the evidence for adjunctive use — alongside conventional therapy — is solid, particularly in people with elevated inflammatory markers.',
  ],
  s4e: {
    level: 'Moderate',
    color: '#9B7A3A',
    text: 'EPA-dominant formulations (at least 60% EPA) at 1 to 2 g/day consistently show modest antidepressant effects. Pure DHA does not. Best evidence is as adjunctive treatment.',
  },
  s5t: 'The Maldivian Context: Tuna as Medicine',
  s5: [
    'The Maldives has the highest per capita fish consumption in the world — recent figures from the Ministry of Fisheries and Ocean Resources report around 181 kg per person per year. Tuna, mostly skipjack (Katsuwonus pelamis) and yellowfin (Thunnus albacares), accounts for approximately 85 percent of the protein consumed by Maldivians. This places the population in an almost unique dietary position globally: abundant access to the exact fish that most of the world is told to eat more of.',
    'But not all tuna is equal in omega-3 content. A peer-reviewed study analysing yellowfin tuna from the Atlantic, Indian, and Pacific Oceans found that 100 g of Indian Ocean yellowfin — the variety most commonly caught in the Maldives — provides approximately 192 mg of combined EPA and DHA. That covers roughly 77 percent of the 250 mg daily minimum recommended by major health authorities. A modest second serving in the day, or the addition of small reef fish, comfortably meets the target.',
    'Skipjack tuna, which accounts for two-thirds of the Maldivian catch, is leaner and contains somewhat less omega-3 per gram. Reef fish such as mackerel scad and small pelagics caught in Maldivian waters are generally higher in omega-3 than skipjack. Traditional preparations — garudhiya, mas huni, smoked valhomas, and freshly grilled or steamed cuts — preserve most of the omega-3 content. Deep-frying and prolonged high-heat cooking degrade it.',
    'The practical implication is that a traditional Maldivian diet, eaten regularly, likely meets or exceeds international omega-3 recommendations without supplementation for most healthy adults. The larger issue in the Maldives is not insufficient omega-3 — it is the gradual displacement of fresh fish by imported processed food, particularly in younger urban populations.',
  ],
  s5e: {
    level: 'Applied',
    color: '#5A6E7A',
    text: 'Regular consumption of locally caught Maldivian tuna and reef fish is sufficient to meet omega-3 recommendations for most healthy adults. Supplementation is mostly relevant for specific clinical conditions or those who do not eat fish regularly.',
  },
  s6t: 'When Supplements Make Sense',
  s6: [
    'For most people who regularly eat fatty fish, food is the preferred source. Fish provides not only omega-3 but also selenium, iodine, vitamin D, protein, and other nutrients in a form the body evolved to use. The US National Institutes of Health notes that 250 to 500 mg of combined EPA + DHA per day — roughly two servings of fatty fish per week — is the baseline recommendation for healthy adults.',
    'Supplementation becomes more relevant in specific situations: people who do not eat fish, vegetarians and vegans (for whom algal oil is a direct DHA source bypassing the inefficient ALA conversion), people with established cardiovascular disease, those with elevated triglycerides, and during pregnancy and lactation when DHA supports fetal brain and retinal development. Therapeutic doses for these conditions typically range from 1 to 3 grams of combined EPA + DHA daily, ideally under clinical supervision.',
    'Fish oil supplement quality is a real concern. A 2023 study from George Washington University analysed 72 popular omega-3 supplements and found that 45 percent tested positive for rancidity — oxidation that reduces nutritional value and may actively increase inflammation. Flavouring was found to mask the fishy smell and taste that would normally signal a degraded product. Look for supplements that report a TOTOX (total oxidation) value below 26, carry third-party certifications such as IFOS or USP, and are stored cool and away from light. A good fish oil should taste clean, not fishy.',
  ],
  s6e: {
    level: 'Practical',
    color: '#5A6E7A',
    text: 'Food first. Supplements are most useful for non-fish-eaters, cardiovascular patients, people with high triglycerides, and during pregnancy. Supplement quality varies significantly — around 45% of tested products in one US study were rancid.',
  },
  s7t: 'Dosage and Safety',
  s7: [
    'The US Food and Drug Administration considers intakes of up to 3 g/day of combined EPA + DHA to be Generally Recognized as Safe (GRAS). The European Food Safety Authority has set a similar tolerable upper limit. Higher therapeutic doses for triglyceride reduction are sometimes prescribed but should be taken under medical supervision.',
    'The main concern with higher doses is a small increased risk of atrial fibrillation — an irregular heart rhythm. Meta-analyses have shown a modest but statistically significant increase in atrial fibrillation with omega-3 supplementation, particularly at doses above 1 g/day. For this reason, people with existing heart rhythm problems should discuss supplementation with their doctor.',
    'Omega-3 has mild blood-thinning effects. People on anticoagulant medications, or those scheduled for surgery, should inform their clinician before taking supplements. For most people, mild digestive discomfort or a fishy aftertaste is the only side effect — both are often signs of either taking the supplement on an empty stomach or that the oil is oxidised and should be replaced.',
  ],
  s7e: {
    level: 'Well-characterised',
    color: '#5A7A5A',
    text: 'Safe for most people at recommended doses. Small increased risk of atrial fibrillation at high doses. Caution with anticoagulants.',
  },
  tTitle: 'Common Omega-3 Sources at a Glance',
  tHead: ['Source', 'EPA + DHA per 100 g', 'Notes'],
  tRows: [
    ['Atlantic salmon (farmed)', '~2,000 mg', 'One of the richest food sources'],
    ['Mackerel', '~2,500 mg', 'Very high in omega-3'],
    ['Sardines', '~1,500 mg', 'Also high in calcium and vitamin D'],
    ['Yellowfin tuna (Indian Ocean)', '~190 mg', 'Lean fish; Maldivian export staple'],
    ['Skipjack tuna', '~200–300 mg', 'The Maldivian daily staple'],
    ['Canned tuna in water', '~150–300 mg', 'Lower than fresh; processing reduces content'],
    ['Fish oil softgel (typical)', '~300 mg per capsule', 'Check label; EPA + DHA varies'],
    ['Algal oil (vegan)', '~200–300 mg DHA per serving', 'Direct plant source, no mercury'],
  ],
  refsTitle: 'References',
  disc: 'This article is for educational purposes and does not constitute medical advice. If you have a diagnosed health condition, take prescription medications (especially blood thinners), are pregnant, or have an irregular heart rhythm, consult your healthcare provider before starting any omega-3 supplement.',
  discL: 'Medical Disclaimer:',
  ctaT: 'Enjoyed this article?',
  ctaD: 'Get evidence-based health research delivered to your inbox every Saturday.',
  ctaB: 'Subscribe to The Saturday Edition',
};

const articleRefs = [
  { text: 'National Institutes of Health, Office of Dietary Supplements. Omega-3 Fatty Acids: Health Professional Fact Sheet.', url: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/' },
  { text: 'Swanson D, Block R, Mousa SA. Omega-3 Fatty Acids EPA and DHA: Health Benefits Throughout Life. Advances in Nutrition. 2012;3(1):1-7.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3262608/' },
  { text: 'Dinu M, Sofi F, Lotti S, et al. Effects of omega-3 fatty acids on coronary revascularization and cardiovascular events: a meta-analysis. European Journal of Preventive Cardiology. 2024;31(15):1863-1875.', url: 'https://pubmed.ncbi.nlm.nih.gov/38869144/' },
  { text: 'Khan SU, Lone AN, Khan MS, et al. Effect of omega-3 fatty acids on cardiovascular outcomes: A systematic review and meta-analysis. eClinicalMedicine. 2021;38:100997.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8413259/' },
  { text: 'Wang T, Zhang X, Zhou N, et al. Association Between Omega-3 Fatty Acid Intake and Dyslipidemia: A Continuous Dose-Response Meta-Analysis. Journal of the American Heart Association. 2023;12(11):e029512.', url: 'https://www.ahajournals.org/doi/10.1161/JAHA.123.029512' },
  { text: 'Wei BZ, Li L, Dong CW, et al. The Relationship of Omega-3 Fatty Acids with Dementia and Cognitive Decline. American Journal of Clinical Nutrition. 2023;117(6):1096-1109.', url: 'https://www.sciencedirect.com/science/article/pii/S0002916523463204' },
  { text: 'Mohammadi H, et al. A systematic review and dose-response meta-analysis of omega-3 supplementation on cognitive function. Scientific Reports. 2025;15.', url: 'https://www.nature.com/articles/s41598-025-16129-8' },
  { text: 'Cole GM, Ma QL, Frautschy SA. Omega-3 fatty acids and cognitive function. Current Opinion in Clinical Nutrition and Metabolic Care. 2023;26(2):165-172.', url: 'https://pubmed.ncbi.nlm.nih.gov/36637075/' },
  { text: 'Kelaiditis CF, Gibson EL, Dyall SC. Effects of long-chain omega-3 polyunsaturated fatty acids on reducing anxiety and/or depression. Prostaglandins, Leukotrienes and Essential Fatty Acids. 2023;192:102572.', url: 'https://www.sciencedirect.com/science/article/pii/S0952327823000418' },
  { text: 'Liao Y, Xie B, Zhang H, et al. Efficacy of omega-3 PUFAs in depression: A meta-analysis. Translational Psychiatry. 2019;9:190.', url: 'https://pubmed.ncbi.nlm.nih.gov/31383846/' },
  { text: 'Ministry of Fisheries and Ocean Resources, Republic of Maldives. National Statement on Fisheries and Per Capita Fish Consumption.', url: 'https://www.un.org/depts/los/convention_agreements/ICSP17/ICSP17_Maldives.pdf' },
  { text: 'Pessoa RBG, et al. Evaluating the Lipid Quality of Yellowfin Tuna (Thunnus albacares) Harvested from Different Oceans by Their Fatty Acid Signatures. Foods. 2021;10(11):2772.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8620007/' },
  { text: 'RISE. Maldives Pole-and-Line Skipjack Tuna Fisheries: Livelihood Security and Nutrition.', url: 'https://riseseafood.org/maldives-pole-and-line-skipjack-tuna-fisheries-livelihood-security-and-nutrition/' },
  { text: 'Jackowski SA, Alvi AZ, Mirajkar A, et al. A Multi-Year Rancidity Analysis of 72 Marine and Microalgal Oil Omega-3 Supplements. Journal of Dietary Supplements. 2023.', url: 'https://pubmed.ncbi.nlm.nih.gov/37712532/' },
  { text: 'Harris WS, Von Schacky C. The Omega-3 Index: a new risk factor for death from coronary heart disease? Preventive Medicine. 2004;39(1):212-220.', url: 'https://pubmed.ncbi.nlm.nih.gov/15208005/' },
];

function Omega3ArticleInner() {
  const [lang, setLang] = useState('en');
  const [warm, setWarm] = useState(false);

  useEffect(() => {
    try {
      const savedLang = window.sessionStorage.getItem('fen-lang');
      if (savedLang === 'dv') setLang('dv');
      const savedWarm = window.localStorage.getItem('fen-warm');
      if (savedWarm === 'true') setWarm(true);
    } catch(e) {}
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
    try { window.sessionStorage.setItem('fen-lang', newLang); } catch(e) {}
  };

  const toggleWarm = () => {
    const next = !warm;
    setWarm(next);
    try { window.localStorage.setItem('fen-warm', String(next)); } catch(e) {}
  };

  // English only for now — Dhivehi translation coming soon
  const c = en;
  const isRtl = lang === 'dv';
  const bf = isRtl ? "'Faruma','MV Waheed',Tahoma,sans-serif" : "'DM Sans',sans-serif";
  const hf = isRtl ? "'Faruma','MV Waheed',Tahoma,sans-serif" : "'Instrument Serif',serif";
  const lh = isRtl ? 2.3 : 1.85;
  const hlh = isRtl ? 1.7 : 1.15;

  const PAGE_BG        = warm ? '#FCE4D0' : '#FAF8F4';
  const TEXT_PRIMARY   = warm ? '#1C0A06' : '#1C1C1E';
  const TEXT_BODY      = warm ? '#3D1A10' : '#3A3A3C';
  const TEXT_SECONDARY = warm ? '#6B3020' : '#555555';
  const TEXT_MUTED     = warm ? '#9C5540' : '#888888';
  const TEXT_EVIDENCE  = warm ? '#4A2010' : '#444444';
  const BORDER_SUBTLE  = warm ? 'rgba(150,50,20,0.12)' : 'rgba(0,0,0,0.07)';
  const BORDER_MED     = warm ? 'rgba(150,50,20,0.20)' : 'rgba(0,0,0,0.11)';
  const BG_TAKEAWAY    = warm ? '#F5CEBC' : '#EAF4F0';
  const BG_DISCLAIMER  = warm ? '#F0C8B8' : '#F0EDE8';
  const BG_EVIDENCE    = warm ? 'rgba(150,50,20,0.05)' : 'rgba(0,0,0,0.02)';
  const TEAL           = warm ? '#A03A18' : '#0D7A6A';

  const Sec = ({ title, ps, ev }) => (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: hf, fontSize: isRtl ? 32 : 28, fontWeight: isRtl ? 700 : 300, lineHeight: isRtl ? 1.8 : 1.2, color: TEXT_PRIMARY, marginBottom: 18, paddingBottom: 10, borderBottom: `1px solid ${BORDER_SUBTLE}` }}>
        {title}
      </h2>
      {ps.map((p, i) => (
        <p key={i} style={{ fontFamily: bf, fontSize: isRtl ? 17 : 16, lineHeight: lh, color: TEXT_BODY, marginBottom: 18, fontWeight: 300 }}>
          {p}
        </p>
      ))}
      {ev && (
        <div style={{ background: BG_EVIDENCE, border: `1px solid ${ev.color}40`, borderRadius: 8, padding: '16px 20px', marginBottom: 20, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: ev.color, marginTop: 6, flexShrink: 0 }} />
          <div>
            <span style={{ fontSize: isRtl ? 14 : 12, fontWeight: 600, color: ev.color, display: 'block', marginBottom: 4, fontFamily: bf }}>
              {ev.level}
            </span>
            <span style={{ fontSize: isRtl ? 15 : 13, lineHeight: isRtl ? 2.2 : 1.7, color: TEXT_EVIDENCE, fontWeight: 300, fontFamily: bf }}>
              {ev.text}
            </span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ fontFamily: bf, background: PAGE_BG, minHeight: '100vh', transition: 'background 0.4s ease, color 0.4s ease' }}>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div>
            <a href="/" className="logo">
              fen<span className="logo-dot">.</span>
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <a href="/" style={{ fontFamily: bf, fontSize: 13, color: 'rgba(45,53,48,0.65)', textDecoration: 'none', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
              {isRtl ? 'ފުރަތަމަ ←' : '← Home'}
            </a>
            {/* Blue Light Blocker toggle */}
            <button
              onClick={toggleWarm}
              title={warm ? 'Blue Light Blocker is active — tap to turn off' : 'Activate Blue Light Blocker for easier reading at night'}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '5px 12px 5px 6px', borderRadius: 999,
                border: warm ? '1px solid rgba(245,160,96,0.40)' : '1px solid rgba(45,53,48,0.14)',
                background: 'transparent', cursor: 'pointer',
                fontFamily: isRtl ? "'Faruma',Tahoma,sans-serif" : "'DM Sans',sans-serif",
                fontSize: isRtl ? 14 : 12, fontWeight: 500,
                color: warm ? '#8B4800' : 'rgba(45,53,48,0.65)',
                whiteSpace: 'nowrap', transition: 'all 0.2s ease',
              }}
            >
              <span style={{
                width: 30, height: 17, borderRadius: 999,
                background: warm ? '#F5A060' : 'rgba(45,53,48,0.14)',
                position: 'relative', flexShrink: 0,
                transition: 'background 0.25s', display: 'inline-block',
              }}>
                <span style={{
                  width: 13, height: 13, borderRadius: '50%',
                  background: 'white', position: 'absolute',
                  top: 2, left: warm ? 15 : 2,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.22)',
                  transition: 'left 0.25s cubic-bezier(0.34,1.56,0.64,1)',
                  display: 'inline-block',
                }} />
              </span>
              <span className="toggle-label">{isRtl ? 'ނޫ އަލި ހުރަސް' : 'Blue Light Blocker'}</span>
            </button>
            {/* Lang toggle */}
            <button
              onClick={() => changeLang(lang === 'en' ? 'dv' : 'en')}
              style={{ fontFamily: lang === 'en' ? "'Faruma',Tahoma" : "'DM Sans',sans-serif", fontSize: 13, background: 'none', border: '1px solid rgba(45,53,48,0.20)', borderRadius: 4, padding: '6px 12px', cursor: 'pointer', color: '#2D3530', whiteSpace: 'nowrap' }}
            >
              {lang === 'en' ? 'ދިވެހި' : 'English'}
            </button>
          </div>
        </div>
      </nav>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: isRtl ? '140px 24px 120px' : '100px 24px 100px', background: PAGE_BG, transition: 'background 0.4s ease' }}>

        {/* Dhivehi coming soon notice */}
        {isRtl && (
          <div style={{ background: 'rgba(123,109,62,0.08)', border: '1px solid rgba(123,109,62,0.20)', borderRadius: 10, padding: '12px 18px', marginBottom: '2rem', fontFamily: bf, fontSize: 14, color: 'rgba(45,53,48,0.60)', lineHeight: 2 }}>
            ދިވެހި ތަރުޖަމާ އަންނަނީ. / Dhivehi translation coming soon.
          </div>
        )}

        {/* Header */}
        <div style={{ marginBottom: isRtl ? 48 : 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            <span className="evidence-tag" style={{ background: '#5A7A5A', fontFamily: bf }}>
              {c.tag}
            </span>
            <span style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: TEXT_MUTED, fontWeight: 500, fontFamily: bf }}>
              {c.category}
            </span>
          </div>
          <h1 style={{ fontFamily: hf, fontSize: isRtl ? 52 : 44, fontWeight: isRtl ? 700 : 400, lineHeight: isRtl ? '76px' : hlh, letterSpacing: isRtl ? 0 : '-0.02em', color: TEXT_PRIMARY, marginBottom: 20 }}>
            {c.title}
          </h1>
          <p style={{ fontSize: isRtl ? 18 : 17, lineHeight: lh, color: TEXT_SECONDARY, fontWeight: 300, marginBottom: 20, fontFamily: bf }}>
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

        {/* Key Takeaways */}
        <div style={{ background: BG_TAKEAWAY, borderRadius: 8, padding: 28, marginBottom: 40, borderLeft: isRtl ? 'none' : `4px solid ${TEAL}`, borderRight: isRtl ? `4px solid ${TEAL}` : 'none' }}>
          <h3 style={{ fontFamily: hf, fontSize: 22, marginBottom: 14, color: TEAL }}>
            {c.keyTitle}
          </h3>
          <ul style={{ paddingLeft: isRtl ? 0 : 20, paddingRight: isRtl ? 20 : 0, listStyle: 'disc' }}>
            {c.keys.map((k, i) => (
              <li key={i} style={{ fontSize: isRtl ? 16 : 14, lineHeight: isRtl ? 2.4 : 1.8, color: TEXT_BODY, marginBottom: 8, fontFamily: bf }}>
                {k}
              </li>
            ))}
          </ul>
        </div>

        {/* Content sections */}
        <Sec title={c.s1t} ps={c.s1} ev={c.s1e} />
        <Sec title={c.s2t} ps={c.s2} ev={c.s2e} />
        <Sec title={c.s3t} ps={c.s3} ev={c.s3e} />
        <Sec title={c.s4t} ps={c.s4} ev={c.s4e} />
        <Sec title={c.s5t} ps={c.s5} ev={c.s5e} />
        <Sec title={c.s6t} ps={c.s6} ev={c.s6e} />
        <Sec title={c.s7t} ps={c.s7} ev={c.s7e} />

        {/* Sources table */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: hf, fontSize: 28, fontWeight: 300, lineHeight: 1.2, color: TEXT_PRIMARY, marginBottom: 18, paddingBottom: 10, borderBottom: `1px solid ${BORDER_SUBTLE}` }}>
            {c.tTitle}
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, fontFamily: bf }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${TEAL}50` }}>
                  {c.tHead.map((h, i) => (
                    <th key={i} style={{ textAlign: 'left', padding: '10px 12px', fontWeight: 500, color: TEAL }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.tRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${BORDER_SUBTLE}`, background: i % 2 === 0 ? 'transparent' : `rgba(0,0,0,0.015)` }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '10px 12px', color: j === 0 ? TEXT_PRIMARY : TEXT_SECONDARY, fontWeight: j === 0 ? 500 : 300, lineHeight: 1.5 }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* References */}
        <div style={{ marginTop: 60, paddingTop: 32, borderTop: `2px solid ${BORDER_MED}` }}>
          <h3 style={{ fontFamily: hf, fontSize: 26, marginBottom: 20, color: TEXT_PRIMARY }}>
            {c.refsTitle}
          </h3>
          <ol style={{ paddingLeft: 24, fontFamily: "'DM Sans',sans-serif" }}>
            {articleRefs.map((r, i) => (
              <li key={i} style={{ fontSize: 13, lineHeight: 1.7, color: TEXT_SECONDARY, marginBottom: 12, fontWeight: 300, wordBreak: 'break-word', direction: 'ltr', textAlign: 'left' }}>
                {r.text}{' '}
                <a href={r.url} target="_blank" rel="noopener noreferrer" style={{ color: TEAL, wordBreak: 'break-all' }}>
                  {r.url}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: 40, padding: 20, background: BG_DISCLAIMER, border: `1px solid ${BORDER_SUBTLE}`, borderRadius: 8, fontSize: 13, lineHeight: 1.7, color: TEXT_SECONDARY, fontStyle: 'italic', fontFamily: bf }}>
          <strong style={{ fontStyle: 'normal', color: TEXT_PRIMARY }}>
            {c.discL}{' '}
          </strong>
          {c.disc}
        </div>

        {/* CTA */}
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
            fen<span style={{ color: '#D4A84B' }}>.</span>
          </span>
        </div>
      </footer>

    </div>
  );
}

export default function Omega3Article() {
  return <Omega3ArticleInner />;
}
