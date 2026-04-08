'use client';

import { useState } from 'react';

const en = {
  back: '\u2190 Back to Home',
  tag: 'Strong Evidence', category: 'SUPPLEMENTS',
  title: 'Magnesium: The Most Underrated Mineral in Modern Nutrition',
  subtitle: 'Over half of adults in developed countries fail to meet the recommended daily intake for magnesium. Here is what the clinical evidence actually says about supplementation \u2014 the forms that work, the doses that matter, and the claims that fall short.',
  date: 'April 7, 2026', readTime: '12 min read', refCount: '14 references cited',
  keyTitle: 'Key Takeaways',
  keys: [
    'Magnesium is involved in over 300 enzymatic reactions in the human body, including energy production, muscle function, and nervous system regulation.',
    'An estimated 50% or more of adults in developed countries consume less than the recommended daily amount.',
    'Meta-analyses show modest but significant benefits for blood pressure reduction, depression, and sleep quality.',
    'Magnesium glycinate, citrate, and taurate have superior bioavailability compared to magnesium oxide.',
    'Typical effective supplemental doses range from 200\u2013400 mg of elemental magnesium per day.',
  ],
  s1t: 'Why Magnesium Matters',
  s1: [
    'Magnesium is the fourth most abundant mineral in the human body and serves as a cofactor in more than 300 enzyme systems that regulate diverse biochemical reactions. These include protein synthesis, muscle and nerve function, blood glucose control, and blood pressure regulation. It is also required for energy production, the synthesis of DNA and RNA, and the structural development of bone.',
    'Despite its importance, magnesium deficiency is remarkably common. A 2025 scoping review in the journal Nutrients examining 48 studies using the Magnesium Depletion Score found that nearly all analyses reported adverse health associations with low magnesium status. The score was inversely correlated with dietary magnesium intake across every study examined. [1]',
    'The Recommended Dietary Allowance (RDA) for magnesium is 400\u2013420 mg per day for adult men and 310\u2013320 mg per day for adult women. Yet dietary surveys consistently show that a large proportion of the population falls short. The National Institutes of Health notes that many Americans consume less than recommended amounts, particularly older adults, those with gastrointestinal diseases, and people with type 2 diabetes. [2]',
  ],
  s2t: 'Blood Pressure: What the Meta-Analyses Show',
  s2: [
    'One of the most extensively studied benefits of magnesium supplementation is its effect on blood pressure. A 2025 systematic review and meta-analysis published in Hypertension (American Heart Association) analyzed 38 randomized controlled trials involving 2,709 participants. The median supplemental dose was 365 mg of elemental magnesium, taken for a median of 12 weeks. [3]',
    'The results showed that magnesium supplementation reduced systolic blood pressure by 2.81 mmHg and diastolic blood pressure by 2.05 mmHg compared to placebo. The effect was most pronounced in hypertensive individuals already taking blood pressure medication, where systolic reductions reached 7.68 mmHg \u2014 a clinically meaningful reduction that prior research has linked to roughly a 10% decrease in major cardiovascular events. [3]',
    'However, the same meta-analysis found that magnesium supplementation did not significantly lower blood pressure in normotensive individuals. This suggests that the benefit is primarily corrective \u2014 addressing a physiological imbalance rather than pushing blood pressure below its natural set point.',
  ],
  s2e: { level: 'Strong', color: '#2d6a4f', text: 'Multiple large meta-analyses of RCTs consistently show modest blood pressure reduction, particularly in hypertensive populations. The 2025 Hypertension meta-analysis (38 RCTs, n=2,709) is the most comprehensive to date.' },
  s3t: 'Depression and Mood',
  s3: [
    'The relationship between magnesium and mental health has drawn increasing research attention. A 2024 systematic review and meta-analysis published in Frontiers in Nutrition examined seven randomized clinical trials with a total sample of 325 individuals with depressive disorder. The combined analysis found a significant reduction in depression scores among those taking magnesium supplements, with a standardized mean difference of \u22120.919. [4]',
    'The proposed mechanisms involve magnesium\'s role in regulating the hypothalamic-pituitary-adrenal (HPA) axis and its function as a natural NMDA receptor antagonist. Low magnesium levels may contribute to neuroinflammation and excessive cortisol production, both of which are implicated in depressive disorders.',
  ],
  s3e: { level: 'Moderate', color: '#b5651d', text: 'Seven RCTs with 325 participants show significant improvement in depression scores. Promising but limited by small sample sizes. More large-scale trials needed.' },
  s4t: 'Sleep Quality',
  s4: [
    'A 2025 randomized, double-blind, placebo-controlled trial published in Nature and Science of Sleep enrolled 155 adults aged 18\u201365 with self-reported poor sleep quality. Participants received magnesium bisglycinate supplementation and were assessed using validated sleep questionnaires. [5]',
    'While the trial found some improvements in subjective sleep measures, the results did not reach statistical significance across all primary endpoints. The authors noted that individuals with lower baseline magnesium status tended to benefit more, suggesting that magnesium supplementation for sleep may be most effective in those who are already deficient. [5]',
    'An earlier 2021 systematic review and meta-analysis focused on older adults found that magnesium supplementation was associated with improvements in sleep onset latency and overall sleep quality, though the number of included trials was small. [6]',
  ],
  s4e: { level: 'Moderate', color: '#b5651d', text: 'Observational data is supportive. RCT evidence is mixed but trends positive, particularly in magnesium-deficient individuals and older adults.' },
  s5t: 'Inflammation',
  s5: [
    'A 2025 systematic review and meta-analysis in the journal Antioxidants evaluated 28 studies on magnesium\'s effects on inflammatory and oxidative stress biomarkers. The analysis found a statistically significant reduction in C-reactive protein (CRP) levels with magnesium supplementation, suggesting a meaningful anti-inflammatory effect. [7]',
    'However, the same review found no conclusive impact on other oxidative stress markers such as total antioxidant capacity, malondialdehyde, or glutathione. The authors concluded that magnesium may help regulate inflammation, but its direct antioxidant effects remain uncertain. [7]',
  ],
  s5e: { level: 'Moderate', color: '#b5651d', text: 'CRP reduction is consistently observed across studies. Effects on other oxidative stress markers are inconclusive.' },
  s6t: 'Which Form Should You Take?',
  s6: ['Not all magnesium supplements are created equal. The form of magnesium determines how well it is absorbed and utilized by the body:'],
  s6after: 'The NIH notes that magnesium from food sources (dark leafy greens, nuts, seeds, whole grains, legumes) is generally well absorbed. However, soil depletion and food processing have reduced the magnesium content of many common foods, making supplementation a reasonable strategy for many people. [2]',
  s7t: 'Dosage and Safety',
  s7: [
    'The tolerable upper intake level (UL) for supplemental magnesium is 350 mg per day for adults, as established by the Institute of Medicine. This refers specifically to supplemental magnesium and does not include magnesium obtained from food or water. [2]',
    'Most clinical trials showing benefits have used doses between 200 and 400 mg of elemental magnesium daily. Higher doses may cause gastrointestinal side effects including diarrhea, nausea, and cramping \u2014 particularly with magnesium citrate and oxide.',
    'Magnesium supplements can interact with certain medications, including bisphosphonates, antibiotics, diuretics, and proton pump inhibitors. Individuals with kidney disease should consult a physician before supplementing. [2]',
  ],
  s8t: 'The Bottom Line',
  s8: [
    'Magnesium is one of the most well-studied and well-supported supplements in nutritional science. The evidence for blood pressure reduction in hypertensive individuals is strong. The evidence for improvements in depression, sleep, and inflammation is moderate but growing.',
    'For most adults, supplementing with 200\u2013400 mg of elemental magnesium daily \u2014 preferably as glycinate, citrate, or taurate \u2014 is a safe and evidence-supported strategy, particularly if dietary intake falls below recommended levels. As with any supplement, the greatest benefits are seen in those who are deficient.',
  ],
  tHead: ['Form', 'Bioavailability', 'Best For', 'Notes'],
  tRows: [
    ['Magnesium Glycinate', 'High', 'Sleep, anxiety, general use', 'Well-tolerated, less GI distress'],
    ['Magnesium Citrate', 'High', 'General supplementation', 'Mild laxative effect possible'],
    ['Magnesium Taurate', 'High', 'Cardiovascular health', 'Taurine adds cardiac benefits'],
    ['Magnesium L-Threonate', 'Moderate', 'Cognitive function', 'Crosses blood-brain barrier; limited RCTs'],
    ['Magnesium Malate', 'Moderate\u2013High', 'Energy, muscle pain', 'Often used for fibromyalgia'],
    ['Magnesium Oxide', 'Low (4\u20135%)', 'Constipation relief', 'Poor bioavailability; avoid for deficiency'],
  ],
  refsTitle: 'References',
  disc: 'This article is for educational purposes only and does not constitute medical advice. Magnesium supplementation may interact with medications and may not be appropriate for individuals with kidney disease. Always consult a qualified healthcare provider before starting any supplement regimen.',
  discL: 'Medical Disclaimer:',
  ctaT: 'Enjoyed this article?',
  ctaD: 'Get evidence-based health research delivered to your inbox every Saturday.',
  ctaB: 'Subscribe to The Saturday Edition',
};

const dv = {
  back: 'ފުރަތަމަ ޞަފްޙާއަށް \u2190',
  tag: 'ވަރުގަދަ ހެކި', category: 'ސަޕްލިމެންޓްސް',
  title: 'މެގްނީޒިއަމް: ޒަމާނީ ނިއުޓްރިޝަންގައި އެންމެ އަގު ވެއްޓިފައިވާ މިނެރަލް',
  subtitle: 'ކުރިއަރާފައިވާ ޤައުމުތަކުގެ ބޮޑެތި މީހުންގެ ދެބައިކުޅަ އެއްބައަށް ވުރެ ގިނަ މީހުންނަށް ދުވާލެއްގެ މައްޗަށް ލަފާދޭ މިންވަރަށް މެގްނީޒިއަމް ނުލިބެއެވެ. ސަޕްލިމެންޓް ކުރުމާ ބެހޭ ގޮތުން ކްލިނިކަލް ހެކި ޙަޤީޤަތުގައި ބުނަނީ ކީކޭ ހެއްޔެވެ؟',
  date: 'އެޕްރީލް 7، 2026', readTime: '12 މިނެޓުން ކިޔޭނެ', refCount: '14 ރެފެރެންސް',
  keyTitle: 'މުހިންމު ނުކުތާތައް',
  keys: [
    'މެގްނީޒިއަމް އަކީ ހަކަތަ އުފެއްދުން، މަސްތަކުގެ މަސައްކަތް، އަދި ނާރުގެ ނިޒާމް ރެގިއުލޭޓް ކުރުން ހިމެނޭ ގޮތަށް ހަށިގަނޑުގެ 300 އަށް ވުރެ ގިނަ އެންޒައިމެޓިކް ރިއެކްޝަންގައި ބައިވެރިވާ މާއްދާއެކެވެ.',
    'ކުރިއަރާފައިވާ ޤައުމުތަކުގެ ބޮޑެތި މީހުންގެ 50% ނުވަތަ އެއަށް ވުރެ ގިނައިން ލަފާދޭ ދުވާލެއްގެ މިންވަރަށް ވުރެ މަދުން ކައެވެ.',
    'މެޓާ-އެނާލިސިސްތަކުން ދައްކާ ގޮތުގައި ލޭގެ ޕްރެޝަރު ދަށްކުރުން، ޑިޕްރެޝަން، އަދި ނިދީގެ ފެންވަރު ރަނގަޅު ކުރުމުގައި ފާހަގަކޮށްލެވޭ ފައިދާތައް ވެއެވެ.',
    'މެގްނީޒިއަމް ގްލައިސިނޭޓް، ސިޓްރޭޓް، އަދި ޓައުރޭޓް ގައި މެގްނީޒިއަމް އޮކްސައިޑަށް ވުރެ ރަނގަޅަށް ހަށިގަނޑަށް ދެމެގެން ދެއެވެ.',
    'ޢާންމު ގޮތެއްގައި ފައިދާ ކުރާ ޑޯޒް އަކީ ދުވާލެއްގެ މައްޗަށް އެލިމެންޓަލް މެގްނީޒިއަމް 200-400 މިލިގްރާމެވެ.',
  ],
  s1t: 'މެގްނީޒިއަމް މުހިންމީ ކީއްވެ؟',
  s1: [
    'މެގްނީޒިއަމް އަކީ އިންސާނާގެ ހަށިގަނޑުގައި ހަތަރުވަނައަށް އެންމެ ގިނައިން ހުންނަ މިނެރަލެވެ. ތަފާތު ބައޯކެމިކަލް ރިއެކްޝަންތައް ބެލެހެއްޓުމުގައި 300 އަށް ވުރެ ގިނަ އެންޒައިމް ސިސްޓަމްގެ ކޯފެކްޓަރެއްގެ ގޮތުގައި މަސައްކަތް ކުރެއެވެ. މީގެ ތެރޭގައި ޕްރޮޓީން ސިންތެސިސް، މަސްތަކާއި ނާރުތަކުގެ މަސައްކަތް، ލޭގެ ހަކުރު ކޮންޓްރޯލް، އަދި ލޭގެ ޕްރެޝަރު ރެގިއުލޭޓް ކުރުން ހިމެނެއެވެ.',
    'މެގްނީޒިއަމް ގެ މުހިންމުކަމާ އެކުވެސް، މި މާއްދާ މަދުވުމަކީ ވަރަށް ޢާންމު ކަމެކެވެ. ނިއުޓްރިއެންޓްސް ޖާނަލްގައި 2025 ގައި ޝާއިޢު ކުރެވުނު ސްކޯޕިން ރިވިއުއެއްގައި، 48 ދިރާސާ ބެލި އިރު ގާތްގަނޑަކަށް ހުރިހާ ދިރާސާއަކުން ވެސް ދެއްކީ މެގްނީޒިއަމް މަދުވުމާ ޞިއްޙީ ނޭދެވޭ ކަންކަމާ ގުޅުން ހުރި ކަމެވެ. [1]',
    'ބޮޑެތި ފިރިހެނުންނަށް ދުވާލެއްގެ މައްޗަށް ލަފާ ދީފައިވާ މިންވަރަކީ 400-420 މިލިގްރާމެވެ. ބޮޑެތި އަންހެނުންނަށް 310-320 މިލިގްރާމެވެ. ނަމަވެސް ޑައެޓް ސާވޭތަކުން ތަކުރާރުކޮށް ދައްކާ ގޮތުގައި އާބާދީގެ ބޮޑު ބައެއް މި މިންވަރަށް ނުފੋ ރައެވެ. [2]',
  ],
  s2t: 'ލޭގެ ޕްރެޝަރު: މެޓާ-އެނާލިސިސްތަކުން ދައްކާ ގޮތް',
  s2: [
    'މެގްނީޒިއަމް ސަޕްލިމެންޓް ކުރުމުގެ އެންމެ ފުޅާ ދާއިރާއެއްގައި ދިރާސާ ކުރެވިފައިވާ ފައިދާ އަކީ ލޭގެ ޕްރެޝަރަށް ކުރާ އަސަރެވެ. 2025 ގައި ހައިޕަރޓެންޝަން ޖާނަލްގައި ޝާއިޢު ކުރެވުނު މެޓާ-އެނާލިސިސް އެއްގައި 2,709 ބައިވެރިން ހިމެނޭ 38 ރެންޑަމައިޒްޑް ކޮންޓްރޯލްޑް ޓްރައަލް ތަޙުލީލު ކުރިއެވެ. [3]',
    'ނަތީޖާ ދެއްކި ގޮތުގައި ސިސްޓੋ ލިކް ބްލަޑް ޕްރެޝަރު 2.81 mmHg އަދި ޑައެސްޓੋ ← ←ިކ ← ← 2.05 mmHg ދަށް ކުރެވުނެވެ. ބީ.ޕީ. ބޭސް ކެއި ހައި ބްލަޑް ޕްރެޝަރު ހުންނަ މީހުންނަށް 7.68 mmHg ދަށްވިއެވެ \u2014 ބޮޑެތި ހިތުގެ ހާދިސާތައް ގާތްގަނޑަކަށް 10% ދަށް ކުރެވޭ މިންވަރެކެވެ. [3]',
    'ނަމަވެސް ލޭގެ ޕްރެޝަރު ނੋ ← ←ް← ←ަލ ← ← މީހުންގެ ތެރޭގައި ފާހަގަ ކުރެވޭ ވަރުގެ ދަށްވުމެއް ނައެވެ. ފައިދާ ލިބެނީ މައިގަނޑު ގޮތެއްގައި ހަށިގަނޑުގެ ނުބައި ހަމައެއް ރަނގަޅު ކުރުމުގެ ގޮތުގައެވެ.',
  ],
  s2e: { level: 'ވަރުގަދަ', color: '#2d6a4f', text: 'ގިނަ ބޮޑެތި މެޓާ-އެނާލިސިސްތަކުން ޚާއްޞަކޮށް ހައި ބްލަޑް ޕްރެޝަރު ހުންނަ މީހުންގެ ތެރޭގައި ލޭގެ ޕްރެޝަރު ދަށްވުން ދައްކައެވެ.' },
  s3t: 'ޑިޕްރެޝަން އާއި ނަފްސާނީ ދުޅަހެޔޮކަން',
  s3: [
    '2024 ގައި ފްރੋ ←ންޓިއާޒް އިން ނިއުޓްރިޝަން ޖާނަލްގައި ޝާއިޢު ކުރެވުނު މެޓާ-އެނާލިސިސް އެއްގައި، ޑިޕްރެޝަން ހުންނަ 325 މީހުން ހިމެނޭ 7 ޓްރައަލް ތަޙުލީލު ކުރިއެވެ. މެގްނީޒިއަމް ކެއި މީހުންގެ ޑިޕްރެޝަން ސްކੋ ←ތައް ފާހަގަ ކުރެވޭ ވަރަށް ދަށް ވިއެވެ. [4]',
    'ހުށަހެޅިފައިވާ ސަބަބުތަކުގެ ތެރޭގައި HPA އެކްސިސް ރެގިއުލޭޓް ކުރުމުގައި މެގްނީޒިއަމް އަދާ ކުރާ ދައުރާއި، ޤުދުރަތީ NMDA ރިސެޕްޓަރ އެންޓެގੋ ←ނިސްޓެއްގެ ގੋ ←ތުގައި ކުރާ މަސައްކަތް ހިމެނެއެވެ.',
  ],
  s3e: { level: 'މެދުމިން', color: '#b5651d', text: '325 ބައިވެރިން ހިމެނޭ 7 ޓްރައަލް އިން ޑިޕްރެޝަން ސްކੋ ← ←ތައް ރަނގަޅުވީ ކަމަށް ދައްކައެވެ. އުންމީދީ ނަމަވެސް ސާމްޕަލް ސައިޒް ކުދިވީމާ ލިމިޓެޑެވެ.' },
  s4t: 'ނިދީގެ ފެންވަރު',
  s4: [
    '2025 ގައި ނޭޗަރ އެންޑް ސައިންސް އੋ ←ފް ސްލީޕް ޖާނަލްގައި ނިދީގެ ފެންވަރު ދަށް ކަމަށް ރިޕੋ ←ޓް ކުރި 155 މީހުން ބައިވެރި ކުރި ޓްރައަލެއްގައި މެގްނީޒިއަމް ބިސްގްލައިސިނޭޓް ދީ ވަޒަން ކުރެވުނެވެ. [5]',
    'ނިދީގެ ބައެއް މެޝާޒްތައް ރަނގަޅުވި ނަމަވެސް ހުރިހާ އެންޑްޕੋ ← ←ިންޓްތަކުގައި ސްޓެޓިސްޓިކަލީ ސިގްނިފިކަންޓް ނުވިއެވެ. މެގްނީޒިއަމް ދަށް މީހުންނަށް އެންމެ ބޮޑު ފައިދާ ލިބޭ ކަމަށް ފެނުނެވެ. [5]',
    '2021 ގެ ސިސްޓެމެޓިކް ރިވިއު އެއް ދੋ ←ށީ ޢުމުރުގެ މީހުންނަށް ފੋ ←ކަސް ކުރި ގޮތުގައި ނިދި ޖެހެން ނަގާ ވަގުތު ކުރު ވުމާއި ނিදީގެ ފެންވަރު ރަނގަޅުވި ކަމެވެ. [6]',
  ],
  s4e: { level: 'މެދުމިން', color: '#b5651d', text: 'ބެލުންތެރި ޑާޓާ ސަޕੋ ←ޓިވެވެ. އާރް.ސީ.ޓީ. ހެކި މިކްސެޑް ނަމަވެސް ޕੋ ←ޒިޓިވް ޓްރެންޑެއް ފެނެއެވެ.' },
  s5t: 'ދުޅަވުން (އިންފްލެމޭޝަން)',
  s5: [
    '2025 ގައި އެންޓިއੋ ← ←ކްސިޑެންޓްސް ޖާނަލްގައި 28 ދިރާސާ ވަޒަން ކުރިއެވެ. CRP ގެ މިންވަރު ފާހަގަ ކުރެވޭ ވަރަށް ދަށް ވި ކަމެވެ \u2014 ދުޅަވުމާ ދެކੋ ← ←ޅު ފައިދާ ހުރި އަސަރެއް ކުރާ ކަމެވެ. [7]',
    'ނަމަވެސް އެހެން އੋ ← ←ކްސިޑٰ ←ޓިވް ސްޓްރެސް ބައੋ ←މާކާސް ތަކަށް ޔަޤީން ނަތީޖާއެއް ނުފެނުނެވެ. މެގްނީޒިއަމް އިން ދުޅަވުން ރެގިއުލٰ ←ޓް ކުރުމަށް އެހީ ވެދާނެ ނަމަވެސް ސީދާ އެންޓިއੋ ← ←ކްސިޑެންޓް އަސަރު ޔަޤީނެއް ނੁ ←ނެވެ. [7]',
  ],
  s5e: { level: 'މެދުމިން', color: '#b5651d', text: 'CRP ދަށްވުން ދެމެހެއްޓެނިވި ގۏ ←ތެއްގައި ފެނެއެވެ. އެހެން ބައِ ←މާކާސް ތަކަށް ކުރާ އަސަރު ޔަޤީނެއް ނੁ ←ނެވެ.' },
  s6t: 'ކੋ ←ން ފੋ ←މެއް ބޭނުން ކުރާނީ؟',
  s6: ['ހުރިހާ މެގްނީޒިއަމް ސަޕްލިމެންޓެއް އެއް ގۏ ←ތެއް ނੁ ←ނެވެ. ހަށިގަނޑަށް ދެމިގެން ދާ މިންވަރު ކަނޑައެޅެނީ ފۏ ←މުންނެވެ:'],
  s6after: 'ކާނާ އިން ލިބޭ މެގްނީޒިއަމް (ކަޅު ފެހި ފަތް، ބަދަން، އੋ ←ގੋ ←ށި، ހੋ ←ލް ގްރٰ ←ންސް) ޢާންމު ގۏ ←ތެއްގައި ރަނގަޅަށް ހަށިގަނޑަށް ދެމެގެން ދެއެވެ. ނަމަވެސް ބިމުގެ ބައެއް މާއްދާ މަދުވުމާއި ކާބۏ ←ތް ޕްރٍ ←ސެސް ކުރުމުން ގިނަ ކާނާގައި ހުންނަ މެގްނީޒިއަމް ދަށް ވެފައިވެއެވެ. [2]',
  s7t: 'ޑۏ ←ޒް އާއި ރައްކާތެރިކަން',
  s7: [
    'ސަޕްލިމެންޓް މެގްނީޒިއަމް ގެ ޓۏ ←ލަރަބްލް އަޕަރ ލެވެލް (UL) އަކީ ދުވާލެއްގެ މައްޗަށް 350 މިލިގްރާމެވެ. [2]',
    'ފައިދާ ދެއްކި ގިނަ ޓްރައަލްތަކުގައި 200-400 މިލިގްރާމް ޑۏ ←ޒެއް ބޭނުން ކۏ ←ށްފައިވެއެވެ. ބۏ ←ޑެތި ޑۏ ←ޒްތަކުން ބަނޑުގެ ސައިޑް އިފެކްޓް ކުރިމަތިވެދާނެއެވެ.',
    'މެގްނީޒިއަމް ސަޕްލިމެންޓާ ބައެއް ބޭސްތަކާ ނٰ ←ދެވޭ ގۏ ←ތަށް ރިއެކްޓް ވެދާނެއެވެ. ކިޑްނީ ބަލި ހުންނަ މީހުން ޑۏ ←ކްޓަރެއްގެ ލަފާ ހۏ ←ދާށެވެ. [2]',
  ],
  s8t: 'ޚުލާޞާ',
  s8: [
    'މެގްނީޒިއަމް އަކީ ނިއުޓްރިޝަނަލް ސައިންސްގައި އެންމެ ރަނގަޅަށް ދިރާސާ ކުރެވި، ހެކި ލިބިފައިވާ ސަޕްލިމެންޓްތަކުގެ ތެރެއިން އެކެކެވެ. ހައި ބްލަޑް ޕްރެޝަރު ހުންނަ މީހުންގެ ލٰ ←ގެ ޕްރެޝަރު ދަށް ކުރުމުގެ ހެކި ވަރުގަދައެވެ. ޑިޕްރެޝަން، ނިދި، އަދި ދުޅަވުން ރަނގަޅު ކުރުމުގެ ހެކި މެދުމިނުގެ ނަމަވެސް ކުރިއަރަމުން ދެއެވެ.',
    'ގިނަ ބۏ ←ޑެތި މީހުންނަށް ދުވާލެއްގެ މައްޗަށް 200-400 މިލިގްރާމް \u2014 ގްލައިސިނٰ ←ޓް، ސިޓްރٰ ←ޓް، ނੁ ←ވަތަ ޓައުރٰ ←ޓް ގެ ގۏ ←ތުގައި \u2014 ސަޕްލިމެންޓް ކުރުމަކީ ރައްކާތެރި، ހެއްކަށް ބިނާ ކۏ ←ށްފައިވާ އੁ ←ކੁ ←ލެކެވެ.',
  ],
  tHead: ['ފۏ ←މް', 'ހަށިގަނޑަށް ދެމުން', 'އެންމެ ރަނގަޅީ', 'ނۏ ←ޓް'],
  tRows: [
    ['މެގްނީޒިއަމް ގްލައިސިނٰ ←ޓް', 'ރަނގަޅު', 'ނިދި، ހާސްވުން، ޢާންމު ބޭނުން', 'ބަނޑަށް ފަސٰ ←ހަ'],
    ['މެގްނީޒިއަމް ސިޓްރٰ ←ޓް', 'ރަނގަޅު', 'ޢާންމު ސަޕްލިމެންޓٰ ←ޝަން', 'ކޮންމެވެސް ވަރަކަށް ބަނޑު ދިޔާ ވެދާނެ'],
    ['މެގްނީޒިއަމް ޓައުރٰ ←ޓް', 'ރަނގަޅު', 'ހިތުގެ ޞިއްޙަތު', 'ޓައުރީން އިން ހިތަށް ފައިދާ'],
    ['މެގްނީޒިއަމް އެލް-ތްރٍ ←ނٰ ←ޓް', 'މެދުމިން', 'ސިކުނޑީގެ މަސައްކަތް', 'ބްލަޑް-ބްރٰ ←ން ބٰ ←ރިއާ ހުރަސް ކުރޭ'],
    ['މެގްނީޒިއަމް މٰ ←ލٰ ←ޓް', 'މެދު-ރަނގަޅު', 'ހަކަތަ، މަސް ރިއްސުން', 'ފައިބްރۏ ←މައެލްޖިއާ އަށް ބޭނުން ކުރެވޭ'],
    ['މެގްނީޒިއަމް އۏ ←ކްސައިޑް', 'ދަށް (4-5%)', 'ބަނޑު ހަރުވުމަށް', 'ހަށިގަނޑަށް ރަނގަޅަށް ނުދެމޭ'],
  ],
  refsTitle: 'ރެފެރެންސްތައް',
  disc: 'މި ލިޔުމަކީ ތަޢުލީމީ ބޭނުމަށް އެކަނި ތައްޔާރުކފައިވާ ލިޔުމެކެވެ. ޞިއްޙީ ލަފާ ދިނުމެއް ނۏ ←ނެވެ. މެގްނީޒިއަމް ސަޕްލިމެންޓާ ބައެއް ބٰ ←ސްތަކާ ރިއެކްޓް ވެދާނެއެވެ. ސަޕްލިމެންޓް ފެށުމުގެ ކުރިން ޑۏ ←ކްޓަރެއްގެ ލަފާ ހۏ ←ދާށެވެ.',
  discL: 'ޞިއްޙީ ޑިސްކްލٰ ←މާ:',
  ctaT: 'މި ލިޔުން ކަމުދިޔަތ؟',
  ctaD: 'ހެއްކަށް ބިނާކۏ ←ށްފައިވާ ޞިއްޙީ ދިރާސާ ކۏ ←ންމެ ހۏ ←ނިހިރު ދުވަހަކު ތިބާގެ އީމٰ ←ލަށް ލިބޭނެ.',
  ctaB: 'ހۏ ←ނިހިރު އެޑިޝަނާ ގުޅާ',
};

const refs = [
  'Wallace TC, et al. "Magnesium Depletion Score as an Indicator of Health Risk." Nutrients. 2025.',
  'NIH Office of Dietary Supplements. "Magnesium \u2014 Health Professional Fact Sheet." Updated 2026.',
  'Argeros Z, et al. "Magnesium Supplementation and Blood Pressure." Hypertension. 2025;82(11):1844\u20131856.',
  'Afsharfar M, et al. "Magnesium supplementation beneficially affects depression." Front Nutr. 2024;10:1268722.',
  'Schuster J, et al. "Magnesium Bisglycinate and Sleep." Nat Sci Sleep. 2025;17:2027\u20132040.',
  'Mah J, Pitre T. "Oral magnesium for insomnia in older adults." BMC Comp Med Ther. 2021;21(1):125.',
  'Systematic Review: Magnesium, Oxidative Stress and Inflammation. Antioxidants. 2025;14(6):740.',
  'Rosanoff A, et al. "Magnesium therapy for hypertension: 49 clinical trials." Nutrients. 2021;13:195.',
  'Zhang X, et al. "Magnesium and blood pressure meta-analysis." Hypertension. 2016;68:324.',
  'Dickinson HO, et al. "Magnesium for hypertension." Cochrane Database Syst Rev. 2006;(3):CD004640.',
  'Breus MJ, et al. "Magnesium, Sleep Quality and Mood." Med Res Arch. 2024;12(7).',
  'Barbagallo M, Dominguez LJ. "Magnesium and type 2 diabetes." World J Diabetes. 2015;6(10):1152\u20131157.',
  'Del Gobbo LC, et al. "Magnesium and cardiovascular disease." Am J Clin Nutr. 2013;98(1):160\u2013173.',
  'Guerrero-Romero F, et al. "Magnesium improves beta-cell function." Eur J Clin Invest. 2011;41(4):405\u2013410.',
];

export default function MagnesiumArticle() {
  const [lang, setLang] = useState('en');
  const c = lang === 'en' ? en : dv;
  const isRtl = lang === 'dv';
  const bf = isRtl ? "'Faruma','MV Waheed',Tahoma,sans-serif" : "'DM Sans',sans-serif";
  const hf = isRtl ? "'Faruma','MV Waheed',Tahoma,serif" : "'Instrument Serif',serif";
  const lh = isRtl ? 2.3 : 1.85;
  const hlh = isRtl ? 1.7 : 1.15;

  const Sec = ({ title, ps, ev }) => (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontFamily: hf, fontSize: isRtl ? 22 : 28, lineHeight: isRtl ? 1.8 : 1.2, color: '#1a1a1a', marginBottom: 18, paddingBottom: 10, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>{title}</h2>
      {ps.map((p, i) => <p key={i} style={{ fontFamily: bf, fontSize: isRtl ? 15 : 16, lineHeight: lh, color: '#333', marginBottom: 18, fontWeight: 300 }}>{p}</p>)}
      {ev && <div style={{ background: 'rgba(0,0,0,0.02)', border: `1px solid ${ev.color}30`, borderRadius: 8, padding: '16px 20px', marginBottom: 20, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: ev.color, marginTop: 6, flexShrink: 0 }} />
        <div><span style={{ fontSize: 12, fontWeight: 600, color: ev.color, display: 'block', marginBottom: 4, fontFamily: bf }}>{ev.level}</span><span style={{ fontSize: 13, lineHeight: isRtl ? 2 : 1.7, color: '#555', fontWeight: 300, fontFamily: bf }}>{ev.text}</span></div>
      </div>}
    </div>
  );

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} style={{ fontFamily: bf }}>
      <nav className="nav"><div className="nav-inner">
        <div><a href="/" className="logo">fen<span className="logo-dot">.</span></a></div>
        <div className="nav-links">
          <a className="nav-link" href="/" style={{ fontFamily: bf }}>{c.back}</a>
          <button onClick={() => setLang(lang === 'en' ? 'dv' : 'en')} style={{ fontFamily: lang === 'en' ? "'Faruma',Tahoma" : "'DM Sans',sans-serif", fontSize: 14, background: 'none', border: '1px solid rgba(0,0,0,0.15)', borderRadius: 4, padding: '6px 14px', cursor: 'pointer', color: '#1a1a1a' }}>{lang === 'en' ? '\u078B\u07A8\u0788\u07AC\u0780\u07A8' : 'English'}</button>
        </div>
      </div></nav>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '60px 32px 100px' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            <span className="evidence-tag" style={{ background: '#2d6a4f', fontFamily: bf }}>{c.tag}</span>
            <span style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999', fontWeight: 500, fontFamily: bf }}>{c.category}</span>
          </div>
          <h1 style={{ fontFamily: hf, fontSize: isRtl ? 30 : 44, fontWeight: 400, lineHeight: hlh, letterSpacing: '-0.02em', color: '#1a1a1a', marginBottom: 20 }}>{c.title}</h1>
          <p style={{ fontSize: isRtl ? 15 : 17, lineHeight: lh, color: '#666', fontWeight: 300, marginBottom: 20, fontFamily: bf }}>{c.subtitle}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', fontSize: 13, color: '#999', fontWeight: 300, paddingBottom: 24, borderBottom: '1px solid rgba(0,0,0,0.08)', fontFamily: bf }}>
            <span>{c.date}</span><span>\u00B7</span><span>{c.readTime}</span><span>\u00B7</span><span>{c.refCount}</span>
          </div>
        </div>

        <div style={{ background: '#e8f5e9', borderRadius: 8, padding: 28, marginBottom: 40, borderLeft: isRtl ? 'none' : '4px solid #2d6a4f', borderRight: isRtl ? '4px solid #2d6a4f' : 'none' }}>
          <h3 style={{ fontFamily: hf, fontSize: isRtl ? 18 : 22, marginBottom: 14, color: '#1b4332' }}>{c.keyTitle}</h3>
          <ul style={{ paddingLeft: isRtl ? 0 : 20, paddingRight: isRtl ? 20 : 0, listStyle: 'disc' }}>
            {c.keys.map((k, i) => <li key={i} style={{ fontSize: 14, lineHeight: isRtl ? 2.4 : 1.8, color: '#2d6a4f', marginBottom: 8, fontFamily: bf }}>{k}</li>)}
          </ul>
        </div>

        <Sec title={c.s1t} ps={c.s1} />
        <Sec title={c.s2t} ps={c.s2} ev={c.s2e} />
        <Sec title={c.s3t} ps={c.s3} ev={c.s3e} />
        <Sec title={c.s4t} ps={c.s4} ev={c.s4e} />
        <Sec title={c.s5t} ps={c.s5} ev={c.s5e} />

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: hf, fontSize: isRtl ? 22 : 28, lineHeight: isRtl ? 1.8 : 1.2, color: '#1a1a1a', marginBottom: 18, paddingBottom: 10, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>{c.s6t}</h2>
          {c.s6.map((p, i) => <p key={i} style={{ fontFamily: bf, fontSize: isRtl ? 15 : 16, lineHeight: lh, color: '#333', marginBottom: 18, fontWeight: 300 }}>{p}</p>)}
          <div style={{ overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, fontFamily: bf }}>
              <thead><tr style={{ borderBottom: '2px solid #2d6a4f' }}>
                {c.tHead.map((h, i) => <th key={i} style={{ textAlign: isRtl ? 'right' : 'left', padding: '10px 12px', fontWeight: 500, color: '#1b4332' }}>{h}</th>)}
              </tr></thead>
              <tbody>{c.tRows.map((row, i) => <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
                {row.map((cell, j) => <td key={j} style={{ padding: '10px 12px', color: j === 0 ? '#1a1a1a' : '#666', fontWeight: j === 0 ? 500 : 300, lineHeight: isRtl ? 2 : 1.5 }}>{cell}</td>)}
              </tr>)}</tbody>
            </table>
          </div>
          <p style={{ fontFamily: bf, fontSize: isRtl ? 15 : 16, lineHeight: lh, color: '#333', marginBottom: 18, fontWeight: 300 }}>{c.s6after}</p>
        </div>

        <Sec title={c.s7t} ps={c.s7} />
        <Sec title={c.s8t} ps={c.s8} />

        <div style={{ marginTop: 60, paddingTop: 32, borderTop: '2px solid rgba(0,0,0,0.08)' }}>
          <h3 style={{ fontFamily: hf, fontSize: isRtl ? 20 : 26, marginBottom: 20, color: '#1a1a1a' }}>{c.refsTitle}</h3>
          <ol style={{ paddingLeft: isRtl ? 0 : 24, paddingRight: isRtl ? 24 : 0, fontFamily: "'DM Sans',sans-serif" }}>
            {refs.map((r, i) => <li key={i} style={{ fontSize: 13, lineHeight: 1.7, color: '#666', marginBottom: 12, fontWeight: 300, wordBreak: 'break-word', direction: 'ltr', textAlign: 'left' }}>{r}</li>)}
          </ol>
        </div>

        <div style={{ marginTop: 40, padding: 20, background: '#f5f3ef', borderRadius: 8, fontSize: 13, lineHeight: isRtl ? 2.2 : 1.7, color: '#888', fontStyle: 'italic', fontFamily: bf }}>
          <strong style={{ fontStyle: 'normal', color: '#666' }}>{c.discL} </strong>{c.disc}
        </div>

        <div style={{ marginTop: 48, padding: 32, background: '#2d6a4f', borderRadius: 8, textAlign: 'center' }}>
          <h3 style={{ fontFamily: hf, fontSize: isRtl ? 22 : 28, color: '#faf9f6', marginBottom: 12 }}>{c.ctaT}</h3>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', marginBottom: 20, fontWeight: 300, fontFamily: bf }}>{c.ctaD}</p>
          <a href="/#newsletter" className="newsletter-btn" style={{ display: 'inline-block', padding: '12px 28px', textDecoration: 'none', fontFamily: bf }}>{c.ctaB}</a>
        </div>
      </article>

      <footer className="footer"><div className="container" style={{ textAlign: 'center', padding: '20px 0' }}>
        <span className="footer-logo">fen<span style={{ color: '#52b788' }}>.</span></span>
        <p className="footer-copy">\u00A9 2026 fen. All rights reserved.</p>
      </div></footer>
    </div>
  );
}
