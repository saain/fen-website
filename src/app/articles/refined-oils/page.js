'use client';

import { useState, useEffect } from 'react';

const en = {
  back: '← Back to Home',
  tag: 'Moderate Evidence',
  category: 'NUTRITION SCIENCE',
  title: 'The Oils on Your Shelf: Why It\'s Time to Rethink Refined Vegetable and Seed Oils',
  subtitle: 'A hundred years ago, almost nobody cooked with sunflower, soybean, corn, or canola oil. Today these industrial oils dominate our kitchens, restaurants, and packaged foods. The peer-reviewed evidence on how they are made, what happens when they are heated, and how they have reshaped our diet deserves a careful look.',
  date: 'May 6, 2026',
  readTime: '13 min read',
  refCount: '14 references cited',
  keyTitle: 'Key Takeaways',
  keys: [
    'Most refined "vegetable" oils — soybean, corn, canola, sunflower, safflower, cottonseed, grapeseed, rice bran — are extracted using hexane, a petroleum-derived solvent, then bleached and deodorized at 180–260 °C.',
    'The deodorization step generates small but measurable trans fats in every refined vegetable oil, including those marketed as "0 g trans fat" — a fact confirmed by Harvard\'s own nutrition source.',
    'Linoleic acid intake from these oils has risen roughly tenfold in a century. The link to chronic disease is genuinely disputed, but the safest interpretation is that historically unprecedented amounts may not be benign.',
    'When polyunsaturated oils are heated — especially when reused in fryers — they generate toxic aldehydes (4-HNE, acrolein, decadienal) linked to oxidative stress, cancer, and neurodegeneration. This is the strongest single argument against using them for cooking.',
    'Refined seed oils are the dominant fat in ultra-processed foods. Eliminating them automatically eliminates most UPFs — a powerful health intervention everyone agrees on.',
    'Extra virgin olive oil, ghee, virgin coconut oil, refined avocado oil, and grass-fed butter are well-supported traditional alternatives. EVOO has the strongest randomized evidence of any cooking fat.',
  ],
  s1t: 'What Are Refined Seed and Vegetable Oils, Really?',
  s1: [
    'The eight oils most commonly grouped under the term "industrial seed oils" are soybean, corn, canola (rapeseed), sunflower, safflower, cottonseed, grapeseed, and rice bran. Together with refined palm oil, they dominate the global cooking-oil market and serve as the default fat in nearly all packaged snacks, fried foods, baked goods, salad dressings, mayonnaise, and restaurant fryers.',
    'Most are produced through a process called RBD — Refined, Bleached, Deodorized. According to peer-reviewed reviews of edible oil processing, a typical industrial flow involves mechanical pressing followed by solvent extraction, where the remaining seed cake is bathed in hexane, a petroleum-derived solvent, to extract the rest of the oil. The crude oil is then degummed (water and acid), neutralized with sodium hydroxide (lye), bleached using bleaching clays, and finally deodorized at 180–260 °C under vacuum. [1]',
    'Hexane is recognized as neurotoxic to humans in occupational exposures and has been listed as a cause of occupational disease in several European countries since the 1970s. The amount remaining in the final oil is typically below 1 mg/kg, and regulators consider this acceptable. The U.S. FDA does not require hexane to be listed on the label because it is classified as a "processing aid," not an ingredient. Whether you find this acceptable in your daily cooking oil is a personal judgment. [2]',
    'A century ago, none of this existed at scale. Households cooked with what they had always cooked with — olive oil, ghee, butter, coconut oil, lard, tallow. Industrial seed oils are a 20th-century arrival, and their dominance of the global food supply is one of the largest dietary shifts in human history.',
  ],
  s1e: {
    level: 'Established',
    color: '#2d6a4f',
    text: 'The RBD process and use of hexane as the standard solvent in modern industrial oilseed extraction are documented in peer-reviewed engineering and food-science literature. Hexane neurotoxicity in occupational exposure is well-characterized.',
  },
  s2t: 'The Trans Fat Problem Most People Don\'t Know About',
  s2: [
    'The deodorization step at 180–260 °C is not just a cosmetic finishing touch. It produces small amounts of trans fats in the final oil. Harvard\'s Nutrition Source confirms this directly, stating that canola oil contains very low levels of trans fat, "as do all oils that have been deodorized" — and that deodorization is the final step in refining all vegetable oils. [3]',
    'A University of Florida study cited by independent researchers found trans fat levels as high as 4.6% in some commercial liquid vegetable oils. These are not listed on the label, because U.S. regulations allow products with under 0.5 g of trans fat per serving to be labeled as "0 grams trans fat." The result: a household that thinks it is avoiding trans fats by reading labels can still be consuming them daily.',
    'There is no safe level of industrially produced trans fat. The World Health Organization has called for global elimination of industrially produced trans fats from the food supply. The trans fats in refined vegetable oils are a smaller dose than those in old-style hydrogenated margarines, but they are present, they are measurable, and they are present by design — a side effect of how the oils are made.',
  ],
  s2e: {
    level: 'Strong',
    color: '#2d6a4f',
    text: 'Trans fat formation during oil deodorization is not a contested claim — it is acknowledged by mainstream nutrition authorities including Harvard. The lack of label disclosure for trace amounts is a well-documented regulatory gap.',
  },
  s3t: 'The Linoleic Acid Question',
  s3: [
    'Most refined seed oils are very high in linoleic acid (LA), an omega-6 polyunsaturated fatty acid. Soybean, corn, sunflower, and safflower oils are over 50% linoleic acid. Linoleic acid is essential — your body cannot make it — but the minimum requirement is around 1–2% of total calories. The problem is the amount in the modern diet.',
    'Since the 1960s, the average daily linoleic acid intake in Western countries has risen significantly, from around 2.7 g to approximately 4.9–21.0 g daily, contributing 4–10% of total dietary calories. The standard American diet now contains 14 to 25 times more omega-6 fatty acids than omega-3 fatty acids — a ratio without precedent in human history. [4]',
    'A 2023 narrative review in Nutrients warned that as LA consumption rises, the potential for OXLAM formation — oxidized linoleic acid metabolites — also rises. OXLAMs have been associated in research with cardiovascular disease, cancer, and Alzheimer\'s disease. [4]',
    'Here the article needs to be honest: the link between linoleic acid intake and heart disease is disputed. A 2014 meta-analysis of prospective cohort studies and a 2021 review in Nutrients both report that higher LA intake is associated with lower risk of coronary heart disease. Harvard, Johns Hopkins, MSK Cancer Center, and the American Heart Association take this position. [5]',
    'On the other side, the Sydney Diet Heart Study — a randomized controlled trial whose original data was recovered in 2013 — found that men who replaced saturated fat with linoleic acid from safflower oil had higher rates of death from heart disease, all-cause mortality, and cardiovascular disease than the control group. The same researchers re-analyzed the Minnesota Coronary Experiment with similar findings. [6] A 2024 narrative synthesis concluded that excessive consumption of LA-rich seed oils may have been a significant, under-recognized contributor to the 20th-century coronary heart disease epidemic. [7]',
    'The honest summary: moderate linoleic acid intake from whole foods like nuts and seeds appears beneficial. The concern is the historically unprecedented amount we now consume from refined industrial oils.',
  ],
  s3e: {
    level: 'Disputed',
    color: '#b5651d',
    text: 'This is a genuinely contested area in nutrition science. Mainstream institutions and a subset of trial-based and historical-cohort evidence point in opposite directions. The safest interpretation is to be cautious about historically unprecedented intake levels rather than picking a side.',
  },
  s4t: 'What Actually Happens When You Heat These Oils',
  s4: [
    'This is where the evidence is least disputed and most worrying. When polyunsaturated oils — soybean, sunflower, corn, canola, safflower — are heated, particularly when reused as in restaurant fryers, they undergo thermo-oxidative degradation that produces a set of compounds linked to disease.',
    'A 2025 review in Food Chemistry: X identified the major toxic aldehydes generated during high-temperature cooking of vegetable oils: acrolein (respiratory irritation, DNA damage), 4-hydroxynonenal or 4-HNE (oxidative stress, atherosclerosis, neurodegeneration), 4-hydroxyhexenal (endothelial damage, inflammation), trans,trans-2,4-decadienal (cytotoxicity, mutagenicity), and formaldehyde and acetaldehyde (IARC Group 1 and 2B carcinogens). [8]',
    'A laboratory study at 180 °C for 90 minutes — typical of frying conditions — found that polyunsaturated-rich oils such as sunflower, corn, and canola produced substantially more of these toxic aldehydes than monounsaturated-rich oils like extra virgin olive oil. [9] A separate 2025 study using high-field NMR spectroscopy found significant generation of genotoxic and cytotoxic alpha,beta-unsaturated aldehydes in olive, rapeseed, sunflower, sesame, and peanut oils after just 10–60 minutes of frying — and explicitly linked these compounds to cancer, Alzheimer\'s, and Parkinson\'s disease.',
    'The takeaway is straightforward: the more polyunsaturated fat an oil contains, and the more times it is reused at high heat, the more harmful compounds end up in your food. This is the strongest single argument against using refined seed oils for frying.',
  ],
  s4e: {
    level: 'Strong',
    color: '#2d6a4f',
    text: 'Thermo-oxidative degradation of polyunsaturated cooking oils into toxic aldehydes is a well-replicated finding in food chemistry. The link between specific aldehydes (4-HNE, acrolein) and cellular damage is also well-characterized. The translation to human disease risk in real-world diets is supported by mechanism and observational data.',
  },
  s5t: 'The Ultra-Processed Food Connection',
  s5: [
    'There is one point where almost everyone agrees — Harvard, the Cleveland Clinic, and skeptics of the "seed oil bad" narrative alike. Refined seed oils are the dominant fat in ultra-processed foods (UPFs) — packaged snacks, instant noodles, fried fast food, mayonnaise, cookies, frozen meals, restaurant fried foods. Whether the oils themselves are the problem or just a marker of UPF consumption, the result is the same: people who eat a lot of these foods have worse health outcomes.',
    'A 2025 review in Metabolites summarized the evidence, finding that high UPF intake is consistently associated with reduced diet quality, increased energy density, faster eating rates, and activation of reward pathways — facilitating excessive energy intake, adiposity, metabolic dysregulation, chronic low-grade inflammation, hormonal disturbances, and gut microbiome shifts. [10] UPFs are linked to obesity, type 2 diabetes, cardiovascular disease, depression, and increased mortality across dozens of large cohort studies.',
    'If you eliminate refined seed oils, you automatically eliminate most ultra-processed food. That alone is a powerful health intervention — regardless of which side of the linoleic acid debate is right.',
  ],
  s5e: {
    level: 'Strong',
    color: '#2d6a4f',
    text: 'The link between ultra-processed food intake and chronic disease is one of the most robust associations in modern nutrition epidemiology. Refined seed oils are the dominant fat source in this food category, making elimination of one largely an elimination of the other.',
  },
  s6t: 'The Traditional Fats — Evidence Reviewed',
  s6: [
    'Extra virgin olive oil (EVOO) has the strongest evidence base of any cooking fat. The landmark PREDIMED trial — 7,477 participants at high cardiovascular risk, randomized — found that a Mediterranean diet supplemented with EVOO produced a 30% reduction in major cardiovascular events compared to a low-fat diet. [11] A 2025 outcome-wide analysis of the same cohort confirmed that high consumption of EVOO is associated with substantial reductions in cardiovascular events, while common (refined) olive oil — which lacks polyphenols — showed weaker associations. [12] Always buy extra virgin, ideally from a single origin, in a dark bottle, with a recent harvest date.',
    'Coconut oil deserves an honest picture. A 2020 systematic review in Circulation analyzing 16 randomized trials found that coconut oil raises LDL cholesterol more than non-tropical vegetable oils. A 2023 review in Current Atherosclerosis Reports concluded that virgin coconut oil improves HDL and triglycerides while raising LDL. [13] A 2025 analysis of 26 studies and 984 lipid datasets found coconut oil consumption gives variable total and LDL cholesterol values, but HDL rises and triglycerides fall — and concluded coconut oil does not pose a heart-disease risk. The honest summary: virgin coconut oil raises LDL but also raises HDL and lowers triglycerides; whether the net cardiovascular effect is harmful, neutral, or beneficial is unsettled. It is, however, highly stable for high-heat cooking because it is over 90% saturated fat — producing far fewer toxic aldehydes than seed oils when heated.',
    'Cow ghee — clarified butter, essentially pure milk fat — contains butyric acid (which fuels colon cells), conjugated linoleic acid (especially from grass-fed cows), and fat-soluble vitamins A, D, E, and K2. Its smoke point is around 250 °C, making it one of the most heat-stable cooking fats available. A 2025 review in the Journal of Nutrition, Metabolism and Health Sciences summarized animal and human studies showing dose-dependent decreases in serum total cholesterol, LDL, VLDL, and triglycerides with ghee consumption, while noting more high-quality human RCTs are needed. [14] One to two tablespoons of pure cow ghee per day — preferably grass-fed — is supported by traditional use and reasonable evidence.',
    'Avocado oil is roughly 70% monounsaturated fat with a very high smoke point and is rich in vitamin E and lutein. The catch: it is among the most adulterated oils on the global market — a 2020 UC Davis study found that 82% of commercial avocado oils were either oxidized or adulterated. Buy from reputable, third-party tested brands.',
    'Butter is not the villain it was made out to be. Recent meta-analyses do not show a clear association between butter consumption and cardiovascular disease in modest amounts. It is also not a license to eat unlimited saturated fat. Used in moderation — particularly grass-fed butter for its K2 content — it is reasonable. For high-heat cooking, ghee is better because the milk solids in butter burn.',
  ],
  s6e: {
    level: 'Strong (EVOO) to Mixed (others)',
    color: '#2d6a4f',
    text: 'EVOO is the most evidence-supported cooking fat in nutrition science, anchored by the PREDIMED randomized trial. Coconut oil and butter sit in genuinely mixed evidence territory. Ghee, avocado oil, and grass-fed butter are supported by traditional use and emerging research, particularly for cooking stability.',
  },
  s7t: 'A Practical Cooking Guide and Bottom Line',
  s7: [
    'Match the oil to the cooking method. For raw use, dressings, and drizzling — extra virgin olive oil. For light sauté and gentle cooking up to 180 °C — EVOO or butter. For medium-high heat, roasting at 180–220 °C — ghee or refined avocado oil. For deep frying at 170–190 °C — virgin coconut oil, ghee, or refined avocado oil; their high saturation means low oxidation. For baking — butter, ghee, EVOO, or coconut oil all work depending on flavor.',
    'What to stop buying: soybean oil (often labeled simply "vegetable oil"), corn oil, canola or rapeseed oil, sunflower oil, safflower oil, cottonseed oil, grapeseed oil, rice bran oil, margarine and "buttery spreads," and most commercial mayonnaise, salad dressings, and fried snacks. Read ingredient labels — if "vegetable oil," "soybean oil," "canola oil," or "sunflower oil" appears, it is almost certainly hexane-extracted and RBD-refined.',
    'What to stock instead: extra virgin olive oil for daily use, dressings, and light cooking; pure cow ghee (preferably grass-fed) for high-heat cooking; virgin coconut oil for frying and tropical baking; refined avocado oil from a reputable brand for neutral high-heat use; grass-fed butter for flavor and low-heat use.',
    'A note of honesty in closing. Mainstream public-health institutions including Harvard, Johns Hopkins, the American Heart Association, and Memorial Sloan Kettering currently disagree with parts of this article\'s position. They point to large epidemiological studies showing that replacing saturated fat with polyunsaturated fat — including from seed oils — is associated with lower cardiovascular mortality. Both positions have evidence behind them.',
    'The areas where the evidence is least disputed are these: industrially produced trans fats are harmful, and refined oils contain small amounts as a byproduct of deodorization. Reused frying oil produces toxic aldehydes — and the more polyunsaturated the oil, the more it produces. Ultra-processed foods are linked to chronic disease, and refined seed oils are the dominant fat in those foods. Extra virgin olive oil reduces cardiovascular risk — supported by the strongest randomized evidence in nutrition science. Whole, traditional, minimally processed foods are protective. If you act only on the points everyone agrees on, you will eliminate refined seed oils from your kitchen, cook with traditional fats, eat whole foods, and avoid ultra-processed products. That alone will likely improve your health more than any debate about omega-6 ratios.',
  ],
  s7e: {
    level: 'Applied',
    color: '#2d6a4f',
    text: 'This guide synthesizes current evidence on industrial oil processing, oxidation chemistry, polyphenol biology, and traditional fat composition into a practical kitchen framework. Where evidence is contested, the recommendations align with the points of agreement across both sides of the debate.',
  },
  refsTitle: 'References',
  disc: 'This article is for general informational purposes and is not medical advice. People with cardiovascular disease, familial hypercholesterolemia, diabetes, or other chronic conditions should discuss dietary fat choices with their physician before making significant changes.',
  discL: 'Medical Disclaimer:',
  ctaT: 'Enjoyed this article?',
  ctaD: 'Get evidence-based health research delivered to your inbox every Saturday.',
  ctaB: 'Subscribe to The Saturday Edition',
};

const dv = en;

const refs = [
  { text: 'OCL — Oilseeds and fats, Crops and Lipids. "Hexane in industrial oilseed processing: a review." OCL Journal. 2025.', url: 'https://www.ocl-journal.org/articles/ocl/full_html/2025/01/ocl240054/ocl240054.html' },
  { text: 'Cravotto C, et al. "Towards Substitution of Hexane as Extraction Solvent of Food Products and Ingredients with No Regrets." Foods. 2022;11(21):3412.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9655691/' },
  { text: 'Harvard T.H. Chan School of Public Health. "Ask the Expert: Concerns about canola oil." The Nutrition Source. 2015.', url: 'https://nutritionsource.hsph.harvard.edu/2015/04/13/ask-the-expert-concerns-about-canola-oil/' },
  { text: 'Mercola J, D\'Adamo CR. "Linoleic Acid: A Narrative Review of the Effects of Increased Intake in the Standard American Diet and Associations with Chronic Disease." Nutrients. 2023;15(14):3129.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10386285/' },
  { text: 'Johns Hopkins Bloomberg School of Public Health. "The Evidence Behind Seed Oils\' Health Effects." 2025.', url: 'https://publichealth.jhu.edu/2025/the-evidence-behind-seed-oils-health-effects' },
  { text: 'Ramsden CE, Zamora D, Leelarthaepin B, et al. "Use of dietary linoleic acid for secondary prevention of coronary heart disease and death: evaluation of recovered data from the Sydney Diet Heart Study and updated meta-analysis." BMJ. 2013;346:e8707.', url: 'https://www.bmj.com/content/346/bmj.e8707' },
  { text: 'DiNicolantonio JJ, O\'Keefe JH. "Seed Oils as a Hypothesized Contributor to the 20th-Century Coronary Heart Disease Epidemic: A Narrative Synthesis." PMC. 2024.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12923254/' },
  { text: 'Goicoechea E, Guillén MD, et al. "Toxic aldehydes generated during high-temperature cooking of vegetable oils: a review." Food Chemistry: X. 2025.', url: 'https://www.sciencedirect.com/science/article/pii/S2590157525005917' },
  { text: 'Grootveld M, et al. "Toxin Formation in Polyunsaturated Cooking Oils During Frying." Frontiers in Nutrition. 2021;8:711640.', url: 'https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2021.711640/full' },
  { text: 'Souza Monteiro de Araújo D, et al. "Ultra-Processed Foods and Metabolic Dysregulation: A Mechanistic Review." Metabolites. 2025.', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12734455/' },
  { text: 'Estruch R, Ros E, Salas-Salvadó J, et al. "Primary Prevention of Cardiovascular Disease with a Mediterranean Diet Supplemented with Extra-Virgin Olive Oil or Nuts." New England Journal of Medicine. 2018;378:e34.', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1800389' },
  { text: 'PREDIMED investigators. "Outcome-wide association study of extra-virgin olive oil consumption and cardiovascular outcomes." American Heart Journal. 2025.', url: 'https://www.sciencedirect.com/science/article/pii/S0002870325003217' },
  { text: 'Teng M, et al. "Effects of coconut oil on cardiovascular risk factors: a systematic review and meta-analysis." Current Atherosclerosis Reports. 2023.', url: 'https://link.springer.com/article/10.1007/s11883-023-01098-y' },
  { text: 'Sharma H, et al. "Health benefits of cow ghee: a contemporary review." Journal of Nutrition, Metabolism and Health Sciences. 2025.', url: 'https://www.jnmhs.com/html-article/12521' },
];

function RefinedOilsArticleInner() {
  const [lang, setLang] = useState('en');
  const [warm, setWarm] = useState(false);

  useEffect(() => {
    try {
      const savedLang = window.sessionStorage.getItem('fen-lang');
      if (savedLang === 'dv') setLang('dv');
      const savedWarm = window.localStorage.getItem('fen-warm');
      if (savedWarm === 'true') setWarm(true);
    } catch (e) {}
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
    try { window.sessionStorage.setItem('fen-lang', newLang); } catch (e) {}
  };

  const toggleWarm = () => {
    const next = !warm;
    setWarm(next);
    try { window.localStorage.setItem('fen-warm', String(next)); } catch (e) {}
  };

  const c = lang === 'en' ? en : dv;
  const isRtl = lang === 'dv';
  const bf = isRtl ? "'Faruma','MV Waheed',Tahoma,sans-serif" : "'DM Sans',sans-serif";
  const hf = isRtl ? "'MVWaheed','Faruma','MV Waheed',Tahoma,sans-serif" : "'Instrument Serif',serif";
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
  const BG_TAKEAWAY    = warm ? '#F5CEBC' : 'rgba(13,122,106,0.06)';
  const BG_DISCLAIMER  = warm ? '#F0C8B8' : '#F0EDE8';
  const BG_EVIDENCE    = warm ? 'rgba(150,50,20,0.05)' : 'rgba(0,0,0,0.02)';
  const TEAL           = warm ? '#A03A18' : '#4A5C42';
  const LINK_COLOR     = warm ? '#A03A18' : '#4A5C42';

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
              <span className="toggle-label">{isRtl ? 'ނޫ އަލި ހުރަސް' : 'Blue Light Blocker'}</span>
              {warm && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F5A060', display: 'inline-block', marginLeft: 2 }} />}
            </button>
            <button
              onClick={() => changeLang(lang === 'en' ? 'dv' : 'en')}
              style={{ fontFamily: lang === 'en' ? "'Faruma',Tahoma" : "'DM Sans',sans-serif", fontSize: 13, background: 'rgba(45,53,48,0.07)', border: '1.5px solid rgba(45,53,48,0.30)', borderRadius: 6, padding: '6px 12px', cursor: 'pointer', color: '#2D3530', fontWeight: 500, whiteSpace: 'nowrap' }}
            >
              {lang === 'en' ? 'ދިވެހި' : 'English'}
            </button>
          </div>
        </div>
      </nav>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '100px 24px 100px', background: PAGE_BG, transition: 'background 0.4s ease' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            <span className="evidence-tag" style={{ background: '#b5651d', fontFamily: bf }}>
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

        <Sec title={c.s1t} ps={c.s1} ev={c.s1e} />
        <Sec title={c.s2t} ps={c.s2} ev={c.s2e} />
        <Sec title={c.s3t} ps={c.s3} ev={c.s3e} />
        <Sec title={c.s4t} ps={c.s4} ev={c.s4e} />
        <Sec title={c.s5t} ps={c.s5} ev={c.s5e} />
        <Sec title={c.s6t} ps={c.s6} ev={c.s6e} />
        <Sec title={c.s7t} ps={c.s7} ev={c.s7e} />

        <div style={{ marginTop: 60, paddingTop: 32, borderTop: `2px solid ${BORDER_MED}` }}>
          <h3 style={{ fontFamily: hf, fontSize: isRtl ? 24 : 26, marginBottom: 20, color: TEXT_PRIMARY }}>
            {c.refsTitle}
          </h3>
          <ol style={{ paddingLeft: isRtl ? 0 : 24, paddingRight: isRtl ? 24 : 0, fontFamily: "'DM Sans',sans-serif" }}>
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

        <div style={{ marginTop: 40, padding: 20, background: BG_DISCLAIMER, border: `1px solid ${BORDER_SUBTLE}`, borderRadius: 8, fontSize: isRtl ? 15 : 13, lineHeight: isRtl ? 2.2 : 1.7, color: TEXT_SECONDARY, fontStyle: 'italic', fontFamily: bf }}>
          <strong style={{ fontStyle: 'normal', color: TEXT_PRIMARY }}>
            {c.discL}{' '}
          </strong>
          {c.disc}
        </div>

        <div style={{ marginTop: 48, padding: 32, background: '#4A5C42', borderRadius: 12, textAlign: 'center' }}>
          <h3 style={{ fontFamily: hf, fontSize: isRtl ? 22 : 28, color: '#faf9f6', marginBottom: 12 }}>
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
            fen<span style={{ color: '#52b788' }}>.</span>
          </span>
          <p className="footer-copy">© 2026 fen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default function RefinedOilsArticle() {
  return <RefinedOilsArticleInner />;
}
