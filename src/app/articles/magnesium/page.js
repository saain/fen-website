'use client';

import { useState } from 'react';

export default function MagnesiumArticle() {
  const [lang, setLang] = useState('en');
  const isRtl = lang === 'dv';
  const bodyFont = isRtl ? "'Faruma', 'MV Waheed', Tahoma, sans-serif" : "'DM Sans', sans-serif";
  const headingFont = isRtl ? "'Faruma', 'MV Waheed', Tahoma, serif" : "'Instrument Serif', serif";

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ fontFamily: bodyFont }}>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div><a href="/" className="logo">fen<span className="logo-dot">.</span></a></div>
          <div className="nav-links">
            <a className="nav-link" href="/" style={{ fontFamily: bodyFont }}>← Back to Home</a>
            <button onClick={() => setLang(lang === 'en' ? 'dv' : 'en')} style={{ fontFamily: lang === 'en' ? "'Faruma','MV Waheed',Tahoma" : "'DM Sans',sans-serif", fontSize: 14, background: 'none', border: '1px solid rgba(0,0,0,0.15)', borderRadius: 4, padding: '6px 14px', cursor: 'pointer', color: '#1a1a1a' }}>
              {lang === 'en' ? 'ދިވެހި' : 'English'}
            </button>
          </div>
        </div>
      </nav>

      {/* ARTICLE */}
      <article style={{ maxWidth: 720, margin: '0 auto', padding: '60px 32px 100px' }}>
        {/* META */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <span className="evidence-tag" style={{ background: '#2d6a4f' }}>Strong Evidence</span>
            <span style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', fontWeight: 500, fontFamily: bodyFont }}>SUPPLEMENTS</span>
          </div>
          <h1 style={{ fontFamily: headingFont, fontSize: isRtl ? 34 : 44, fontWeight: 400, lineHeight: isRtl ? 1.7 : 1.15, letterSpacing: '-0.02em', color: '#1a1a1a', marginBottom: 20 }}>
            Magnesium: The Most Underrated Mineral in Modern Nutrition
          </h1>
          <p style={{ fontSize: isRtl ? 15 : 17, lineHeight: isRtl ? 2.2 : 1.7, color: '#666', fontWeight: 300, marginBottom: 20, fontFamily: bodyFont }}>
            Over half of adults in developed countries fail to meet the recommended daily intake for magnesium. Here is what the clinical evidence actually says about supplementation — the forms that work, the doses that matter, and the claims that fall short.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 13, color: '#999', fontWeight: 300, paddingBottom: 24, borderBottom: '1px solid rgba(0,0,0,0.08)', fontFamily: bodyFont }}>
            <span>April 7, 2026</span>
            <span>·</span>
            <span>12 min read</span>
            <span>·</span>
            <span>14 references cited</span>
          </div>
        </div>

        {/* KEY TAKEAWAYS */}
        <div style={{ background: '#e8f5e9', borderRadius: 8, padding: 28, marginBottom: 40, borderLeft: isRtl ? 'none' : '4px solid #2d6a4f', borderRight: isRtl ? '4px solid #2d6a4f' : 'none' }}>
          <h3 style={{ fontFamily: headingFont, fontSize: isRtl ? 20 : 22, marginBottom: 14, color: '#1b4332' }}>Key Takeaways</h3>
          <ul style={{ paddingLeft: isRtl ? 0 : 20, paddingRight: isRtl ? 20 : 0, listStyle: 'disc', fontFamily: bodyFont }}>
            <li style={{ fontSize: 14, lineHeight: isRtl ? 2.4 : 1.8, color: '#2d6a4f', marginBottom: 8 }}>Magnesium is involved in over 300 enzymatic reactions in the human body, including energy production, muscle function, and nervous system regulation.</li>
            <li style={{ fontSize: 14, lineHeight: isRtl ? 2.4 : 1.8, color: '#2d6a4f', marginBottom: 8 }}>An estimated 50% or more of adults in developed countries consume less than the recommended daily amount.</li>
            <li style={{ fontSize: 14, lineHeight: isRtl ? 2.4 : 1.8, color: '#2d6a4f', marginBottom: 8 }}>Meta-analyses show modest but significant benefits for blood pressure reduction, depression, and sleep quality.</li>
            <li style={{ fontSize: 14, lineHeight: isRtl ? 2.4 : 1.8, color: '#2d6a4f', marginBottom: 8 }}>Magnesium glycinate, citrate, and taurate have superior bioavailability compared to magnesium oxide.</li>
            <li style={{ fontSize: 14, lineHeight: isRtl ? 2.4 : 1.8, color: '#2d6a4f' }}>Typical effective supplemental doses range from 200–400 mg of elemental magnesium per day.</li>
          </ul>
        </div>

        {/* BODY */}
        <div style={{ fontFamily: bodyFont }}>
          <Section title="Why Magnesium Matters" font={headingFont} rtl={isRtl}>
            <P rtl={isRtl}>Magnesium is the fourth most abundant mineral in the human body and serves as a cofactor in more than 300 enzyme systems that regulate diverse biochemical reactions. These include protein synthesis, muscle and nerve function, blood glucose control, and blood pressure regulation. It is also required for energy production, the synthesis of DNA and RNA, and the structural development of bone.</P>
            <P rtl={isRtl}>Despite its importance, magnesium deficiency is remarkably common. A 2025 scoping review in the journal <em>Nutrients</em> examining 48 studies using the Magnesium Depletion Score found that nearly all analyses reported adverse health associations with low magnesium status. The score was inversely correlated with dietary magnesium intake across every study examined.<Ref n={1} /></P>
            <P rtl={isRtl}>The Recommended Dietary Allowance (RDA) for magnesium is 400–420 mg per day for adult men and 310–320 mg per day for adult women. Yet dietary surveys consistently show that a large proportion of the population falls short. The National Institutes of Health notes that many Americans consume less than recommended amounts, particularly older adults, those with gastrointestinal diseases, and people with type 2 diabetes.<Ref n={2} /></P>
          </Section>

          <Section title="Blood Pressure: What the Meta-Analyses Show" font={headingFont} rtl={isRtl}>
            <P rtl={isRtl}>One of the most extensively studied benefits of magnesium supplementation is its effect on blood pressure. A 2025 systematic review and meta-analysis published in <em>Hypertension</em> (American Heart Association) analyzed 38 randomized controlled trials involving 2,709 participants. The median supplemental dose was 365 mg of elemental magnesium, taken for a median of 12 weeks.<Ref n={3} /></P>
            <P rtl={isRtl}>The results showed that magnesium supplementation reduced systolic blood pressure by 2.81 mmHg and diastolic blood pressure by 2.05 mmHg compared to placebo. The effect was most pronounced in hypertensive individuals already taking blood pressure medication, where systolic reductions reached 7.68 mmHg — a clinically meaningful reduction that prior research has linked to roughly a 10% decrease in major cardiovascular events.<Ref n={3} /></P>
            <EvidenceBox level="Strong" color="#2d6a4f" text="Multiple large meta-analyses of RCTs consistently show modest blood pressure reduction, particularly in hypertensive populations. The 2025 Hypertension meta-analysis (38 RCTs, n=2,709) is the most comprehensive to date." />
            <P rtl={isRtl}>However, the same meta-analysis found that magnesium supplementation did not significantly lower blood pressure in normotensive individuals. This suggests that the benefit is primarily corrective — addressing a physiological imbalance rather than pushing blood pressure below its natural set point.</P>
          </Section>

          <Section title="Depression and Mood" font={headingFont} rtl={isRtl}>
            <P rtl={isRtl}>The relationship between magnesium and mental health has drawn increasing research attention. A 2024 systematic review and meta-analysis published in <em>Frontiers in Nutrition</em> examined seven randomized clinical trials with a total sample of 325 individuals with depressive disorder. The combined analysis found a significant reduction in depression scores among those taking magnesium supplements, with a standardized mean difference of −0.919.<Ref n={4} /></P>
            <P rtl={isRtl}>The proposed mechanisms involve magnesium's role in regulating the hypothalamic-pituitary-adrenal (HPA) axis and its function as a natural NMDA receptor antagonist. Low magnesium levels may contribute to neuroinflammation and excessive cortisol production, both of which are implicated in depressive disorders.</P>
            <EvidenceBox level="Moderate" color="#b5651d" text="Seven RCTs with 325 participants show significant improvement in depression scores. Results are promising but limited by small sample sizes and heterogeneous study designs. More large-scale trials are needed." />
          </Section>

          <Section title="Sleep Quality" font={headingFont} rtl={isRtl}>
            <P rtl={isRtl}>A 2025 randomized, double-blind, placebo-controlled trial published in <em>Nature and Science of Sleep</em> enrolled 155 adults aged 18–65 with self-reported poor sleep quality. Participants received magnesium bisglycinate supplementation and were assessed using validated sleep questionnaires.<Ref n={5} /></P>
            <P rtl={isRtl}>While the trial found some improvements in subjective sleep measures, the results did not reach statistical significance across all primary endpoints. The authors noted that individuals with lower baseline magnesium status tended to benefit more, suggesting that magnesium supplementation for sleep may be most effective in those who are already deficient.<Ref n={5} /></P>
            <P rtl={isRtl}>An earlier 2021 systematic review and meta-analysis focused on older adults found that magnesium supplementation was associated with improvements in sleep onset latency and overall sleep quality, though the number of included trials was small.<Ref n={6} /></P>
            <EvidenceBox level="Moderate" color="#b5651d" text="Observational data is supportive. RCT evidence is mixed but trends positive, particularly in magnesium-deficient individuals and older adults. More large-scale trials with objective sleep measurement (polysomnography) are needed." />
          </Section>

          <Section title="Inflammation" font={headingFont} rtl={isRtl}>
            <P rtl={isRtl}>A 2025 systematic review and meta-analysis in the journal <em>Antioxidants</em> evaluated 28 studies (both human and animal) on magnesium's effects on inflammatory and oxidative stress biomarkers. The analysis found a statistically significant reduction in C-reactive protein (CRP) levels with magnesium supplementation, suggesting a meaningful anti-inflammatory effect.<Ref n={7} /></P>
            <P rtl={isRtl}>However, the same review found no conclusive impact on other oxidative stress markers such as total antioxidant capacity, malondialdehyde, or glutathione. The authors concluded that magnesium may help regulate inflammation, but its direct antioxidant effects remain uncertain.<Ref n={7} /></P>
            <EvidenceBox level="Moderate" color="#b5651d" text="CRP reduction is consistently observed across studies. Effects on other oxidative stress markers are inconclusive. More homogeneous clinical trials with larger sample sizes are needed." />
          </Section>

          <Section title="Which Form Should You Take?" font={headingFont} rtl={isRtl}>
            <P rtl={isRtl}>Not all magnesium supplements are created equal. The form of magnesium determines how well it is absorbed and utilized by the body. Here is how the most common forms compare:</P>
            <div style={{ overflowX: 'auto', marginBottom: 28 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, fontFamily: bodyFont }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #2d6a4f' }}>
                    <th style={{ textAlign: isRtl ? 'right' : 'left', padding: '10px 12px', fontWeight: 500, color: '#1b4332' }}>Form</th>
                    <th style={{ textAlign: isRtl ? 'right' : 'left', padding: '10px 12px', fontWeight: 500, color: '#1b4332' }}>Bioavailability</th>
                    <th style={{ textAlign: isRtl ? 'right' : 'left', padding: '10px 12px', fontWeight: 500, color: '#1b4332' }}>Best For</th>
                    <th style={{ textAlign: isRtl ? 'right' : 'left', padding: '10px 12px', fontWeight: 500, color: '#1b4332' }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Magnesium Glycinate', 'High', 'Sleep, anxiety, general use', 'Well-tolerated, less GI distress'],
                    ['Magnesium Citrate', 'High', 'General supplementation', 'Can have mild laxative effect'],
                    ['Magnesium Taurate', 'High', 'Cardiovascular health', 'Taurine adds cardiac benefits'],
                    ['Magnesium L-Threonate', 'Moderate', 'Cognitive function', 'Crosses blood-brain barrier; limited RCTs'],
                    ['Magnesium Malate', 'Moderate–High', 'Energy, muscle pain', 'Often used for fibromyalgia'],
                    ['Magnesium Oxide', 'Low (4–5%)', 'Constipation relief', 'Poor bioavailability; not recommended for deficiency'],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                      {row.map((cell, j) => (
                        <td key={j} style={{ padding: '10px 12px', color: j === 0 ? '#1a1a1a' : '#666', fontWeight: j === 0 ? 500 : 300, lineHeight: isRtl ? 2 : 1.5 }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <P rtl={isRtl}>The NIH notes that magnesium from food sources (dark leafy greens, nuts, seeds, whole grains, legumes) is generally well absorbed. However, soil depletion and food processing have reduced the magnesium content of many common foods over recent decades, making supplementation a reasonable strategy for many people.<Ref n={2} /></P>
          </Section>

          <Section title="Dosage and Safety" font={headingFont} rtl={isRtl}>
            <P rtl={isRtl}>The tolerable upper intake level (UL) for supplemental magnesium is 350 mg per day for adults, as established by the Institute of Medicine. This refers specifically to supplemental magnesium and does not include magnesium obtained from food or water.<Ref n={2} /></P>
            <P rtl={isRtl}>Most clinical trials showing benefits have used doses between 200 and 400 mg of elemental magnesium daily. Higher doses may cause gastrointestinal side effects including diarrhea, nausea, and cramping — particularly with magnesium citrate and oxide.</P>
            <P rtl={isRtl}>Magnesium supplements can interact with certain medications, including bisphosphonates, antibiotics (tetracyclines and quinolones), diuretics, and proton pump inhibitors. Individuals with kidney disease should consult a physician before supplementing, as impaired renal function can lead to magnesium accumulation.<Ref n={2} /></P>
          </Section>

          <Section title="The Bottom Line" font={headingFont} rtl={isRtl}>
            <P rtl={isRtl}>Magnesium is one of the most well-studied and well-supported supplements in nutritional science. The evidence for blood pressure reduction in hypertensive individuals is strong. The evidence for improvements in depression, sleep, and inflammation is moderate but growing. And the evidence for cognitive benefits (via magnesium L-threonate) remains early-stage.</P>
            <P rtl={isRtl}>For most adults, supplementing with 200–400 mg of elemental magnesium daily — preferably as glycinate, citrate, or taurate — is a safe and evidence-supported strategy, particularly if dietary intake falls below recommended levels. As with any supplement, the greatest benefits are seen in those who are deficient.</P>
          </Section>

          {/* REFERENCES */}
          <div style={{ marginTop: 60, paddingTop: 32, borderTop: '2px solid rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontFamily: headingFont, fontSize: isRtl ? 22 : 26, marginBottom: 20, color: '#1a1a1a' }}>References</h3>
            <ol style={{ paddingLeft: isRtl ? 0 : 24, paddingRight: isRtl ? 24 : 0, fontFamily: bodyFont }}>
              {[
                'Wallace TC, et al. "Magnesium Depletion Score as an Indicator of Health Risk and Nutritional Status — A Scoping Review." Nutrients. 2025;17(20). doi:10.3390/nu17020344.',
                'National Institutes of Health, Office of Dietary Supplements. "Magnesium — Health Professional Fact Sheet." Updated April 2026. ods.od.nih.gov/factsheets/Magnesium-HealthProfessional.',
                'Argeros Z, Xu X, Bhandari B, Harris K, Touyz RM, Schutte AE. "Magnesium Supplementation and Blood Pressure: A Systematic Review and Meta-Analysis of Randomized Controlled Trials." Hypertension. 2025;82(11):1844–1856. doi:10.1161/HYPERTENSIONAHA.125.25129.',
                'Afsharfar M, et al. "Magnesium supplementation beneficially affects depression in adults with depressive disorder: a systematic review and meta-analysis of randomized clinical trials." Frontiers in Nutrition. 2024;10:1268722. doi:10.3389/fnut.2023.1268722.',
                'Schuster J, et al. "Magnesium Bisglycinate Supplementation in Healthy Adults Reporting Poor Sleep: A Randomized, Placebo-Controlled Trial." Nature and Science of Sleep. 2025;17:2027–2040. doi:10.2147/NSS.S524348.',
                'Mah J, Pitre T. "Oral magnesium supplementation for insomnia in older adults: a systematic review & meta-analysis." BMC Complementary Medicine and Therapies. 2021;21(1):125. doi:10.1186/s12906-021-03297-z.',
                'Unlocking the Power of Magnesium: A Systematic Review and Meta-Analysis Regarding Its Role in Oxidative Stress and Inflammation. Antioxidants. 2025;14(6):740. doi:10.3390/antiox14060740.',
                'Rosanoff A, Costello RB, Johnson GH. "Effectively prescribing oral magnesium therapy for hypertension: a categorized systematic review of 49 clinical trials." Nutrients. 2021;13:195.',
                'Zhang X, et al. "Effects of magnesium supplementation on blood pressure: a meta-analysis of randomized double-blind placebo-controlled trials." Hypertension. 2016;68:324.',
                'Dickinson HO, et al. "Magnesium supplementation for the management of primary hypertension in adults." Cochrane Database Syst Rev. 2006;(3):CD004640.',
                'Breus MJ, et al. "Effectiveness of Magnesium Supplementation on Sleep Quality and Mood for Adults with Poor Sleep Quality." Medical Research Archives. 2024;12(7). doi:10.18103/mra.v12i7.5410.',
                'Barbagallo M, Dominguez LJ. "Magnesium and type 2 diabetes." World Journal of Diabetes. 2015;6(10):1152–1157.',
                'Del Gobbo LC, et al. "Circulating and dietary magnesium and risk of cardiovascular disease: a systematic review and meta-analysis of prospective studies." American Journal of Clinical Nutrition. 2013;98(1):160–173.',
                'Guerrero-Romero F, Rodriguez-Moran M. "Magnesium improves the beta-cell function to compensate variation of insulin sensitivity: double-blind, randomized clinical trial." European Journal of Clinical Investigation. 2011;41(4):405–410.',
              ].map((ref, i) => (
                <li key={i} id={`ref-${i + 1}`} style={{ fontSize: 13, lineHeight: isRtl ? 2.2 : 1.7, color: '#666', marginBottom: 12, fontWeight: 300, wordBreak: 'break-word' }}>
                  {ref}
                </li>
              ))}
            </ol>
          </div>

          {/* DISCLAIMER */}
          <div style={{ marginTop: 40, padding: 20, background: '#f5f3ef', borderRadius: 8, fontSize: 13, lineHeight: isRtl ? 2.2 : 1.7, color: '#888', fontStyle: 'italic', fontFamily: bodyFont }}>
            <strong style={{ fontStyle: 'normal', color: '#666' }}>Medical Disclaimer:</strong> This article is for educational purposes only and does not constitute medical advice. Magnesium supplementation may interact with medications and may not be appropriate for individuals with kidney disease. Always consult a qualified healthcare provider before starting any supplement regimen.
          </div>

          {/* NEWSLETTER CTA */}
          <div style={{ marginTop: 48, padding: 32, background: '#2d6a4f', borderRadius: 8, textAlign: 'center' }}>
            <h3 style={{ fontFamily: headingFont, fontSize: isRtl ? 24 : 28, color: '#faf9f6', marginBottom: 12 }}>Enjoyed this article?</h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', marginBottom: 20, fontWeight: 300, fontFamily: bodyFont }}>
              Get evidence-based health research delivered to your inbox every Saturday.
            </p>
            <a href="/#newsletter" className="newsletter-btn" style={{ display: 'inline-block', padding: '12px 28px', textDecoration: 'none', fontFamily: bodyFont }}>
              Subscribe to The Saturday Edition
            </a>
          </div>
        </div>
      </article>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <span className="footer-logo">fen<span style={{ color: '#52b788' }}>.</span></span>
            <p className="footer-copy" style={{ fontFamily: bodyFont }}>© 2026 fen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ title, children, font, rtl }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: font, fontSize: rtl ? 24 : 28, fontWeight: 400, lineHeight: rtl ? 1.7 : 1.2, letterSpacing: '-0.01em', color: '#1a1a1a', marginBottom: 18, paddingBottom: 10, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        {title}
      </h2>
      {children}
    </div>
  );
}

function P({ children, rtl }) {
  return (
    <p style={{ fontSize: rtl ? 15 : 16, lineHeight: rtl ? 2.4 : 1.85, color: '#333', marginBottom: 18, fontWeight: 300 }}>
      {children}
    </p>
  );
}

function Ref({ n }) {
  return (
    <sup>
      <a href={`#ref-${n}`} style={{ color: '#2d6a4f', textDecoration: 'none', fontSize: 11, fontWeight: 500 }}>[{n}]</a>
    </sup>
  );
}

function EvidenceBox({ level, color, text }) {
  return (
    <div style={{ background: 'rgba(0,0,0,0.02)', border: `1px solid ${color}30`, borderRadius: 8, padding: '16px 20px', marginBottom: 20, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: color, marginTop: 6, flexShrink: 0 }} />
      <div>
        <span style={{ fontSize: 12, fontWeight: 600, color, display: 'block', marginBottom: 4 }}>Evidence: {level}</span>
        <span style={{ fontSize: 13, lineHeight: 1.7, color: '#555', fontWeight: 300 }}>{text}</span>
      </div>
    </div>
  );
}
