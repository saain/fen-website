'use client';

import { useState, useEffect } from 'react';

const en = {
  back: '← Back to Home',
  tag: 'Strong Evidence',
  category: 'SUPPLEMENTS',
  title: 'Magnesium: The Most Underrated Mineral in Modern Nutrition',
  subtitle: 'Over half of adults in developed countries fail to meet the recommended daily intake for magnesium. Here is what the clinical evidence actually says about supplementation — the forms that work, the doses that matter, and the claims that fall short.',
  date: 'April 7, 2026',
  readTime: '12 min read',
  refCount: '14 references cited',
  keyTitle: 'Key Takeaways',
  keys: [
    'Magnesium is involved in over 300 enzymatic reactions in the human body, including energy production, muscle function, and nervous system regulation.',
    'An estimated 50% or more of adults in developed countries consume less than the recommended daily amount.',
    'Meta-analyses show modest but significant benefits for blood pressure reduction, depression, and sleep quality.',
    'Magnesium glycinate, citrate, and taurate have superior bioavailability compared to magnesium oxide.',
    'Typical effective supplemental doses range from 200–400 mg of elemental magnesium per day.',
  ],
  s1t: 'Why Magnesium Matters',
  s1: [
    'Magnesium is the fourth most abundant mineral in the human body and serves as a cofactor in more than 300 enzyme systems that regulate diverse biochemical reactions. These include protein synthesis, muscle and nerve function, blood glucose control, and blood pressure regulation. It is also required for energy production, the synthesis of DNA and RNA, and the structural development of bone.',
    'Despite its importance, magnesium deficiency is remarkably common. A 2025 scoping review in the journal Nutrients examining 48 studies using the Magnesium Depletion Score found that nearly all analyses reported adverse health associations with low magnesium status. The score was inversely correlated with dietary magnesium intake across every study examined. [1]',
    'The Recommended Dietary Allowance (RDA) for magnesium is 400–420 mg per day for adult men and 310–320 mg per day for adult women. Yet dietary surveys consistently show that a large proportion of the population falls short. The National Institutes of Health notes that many Americans consume less than recommended amounts, particularly older adults, those with gastrointestinal diseases, and people with type 2 diabetes. [2]',
  ],
  s2t: 'Blood Pressure: What the Meta-Analyses Show',
  s2: [
    'One of the most extensively studied benefits of magnesium supplementation is its effect on blood pressure. A 2025 systematic review and meta-analysis published in Hypertension (American Heart Association) analyzed 38 randomized controlled trials involving 2,709 participants. The median supplemental dose was 365 mg of elemental magnesium, taken for a median of 12 weeks. [3]',
    'The results showed that magnesium supplementation reduced systolic blood pressure by 2.81 mmHg and diastolic blood pressure by 2.05 mmHg compared to placebo. The effect was most pronounced in hypertensive individuals already taking blood pressure medication, where systolic reductions reached 7.68 mmHg — a clinically meaningful reduction that prior research has linked to roughly a 10% decrease in major cardiovascular events. [3]',
    'However, the same meta-analysis found that magnesium supplementation did not significantly lower blood pressure in normotensive individuals. This suggests that the benefit is primarily corrective — addressing a physiological imbalance rather than pushing blood pressure below its natural set point.',
  ],
  s2e: {
    level: 'Strong',
    color: '#2d6a4f',
    text: 'Multiple large meta-analyses of RCTs consistently show modest blood pressure reduction, particularly in hypertensive populations. The 2025 Hypertension meta-analysis (38 RCTs, n=2,709) is the most comprehensive to date.'
  },
  s3t: 'Depression and Mood',
  s3: [
    'The relationship between magnesium and mental health has drawn increasing research attention. A 2024 systematic review and meta-analysis published in Frontiers in Nutrition examined seven randomized clinical trials with a total sample of 325 individuals with depressive disorder. The combined analysis found a significant reduction in depression scores among those taking magnesium supplements, with a standardized mean difference of −0.919. [4]',
    'The proposed mechanisms involve magnesium\'s role in regulating the hypothalamic-pituitary-adrenal (HPA) axis and its function as a natural NMDA receptor antagonist. Low magnesium levels may contribute to neuroinflammation and excessive cortisol production, both of which are implicated in depressive disorders.',
  ],
  s3e: {
    level: 'Moderate',
    color: '#b5651d',
    text: 'Seven RCTs with 325 participants show significant improvement in depression scores. Promising but limited by small sample sizes. More large-scale trials needed.'
  },
  s4t: 'Sleep Quality',
  s4: [
    'A 2025 randomized, double-blind, placebo-controlled trial published in Nature and Science of Sleep enrolled 155 adults aged 18–65 with self-reported poor sleep quality. Participants received magnesium bisglycinate supplementation and were assessed using validated sleep questionnaires. [5]',
    'While the trial found some improvements in subjective sleep measures, the results did not reach statistical significance across all primary endpoints. The authors noted that individuals with lower baseline magnesium status tended to benefit more, suggesting that magnesium supplementation for sleep may be most effective in those who are already deficient. [5]',
    'An earlier 2021 systematic review and meta-analysis focused on older adults found that magnesium supplementation was associated with improvements in sleep onset latency and overall sleep quality, though the number of included trials was small. [6]',
  ],
  s4e: {
    level: 'Moderate',
    color: '#b5651d',
    text: 'Observational data is supportive. RCT evidence is mixed but trends positive, particularly in magnesium-deficient individuals and older adults.'
  },
  s5t: 'Inflammation',
  s5: [
    'A 2025 systematic review and meta-analysis in the journal Antioxidants evaluated 28 studies on magnesium\'s effects on inflammatory and oxidative stress biomarkers. The analysis found a statistically significant reduction in C-reactive protein (CRP) levels with magnesium supplementation, suggesting a meaningful anti-inflammatory effect. [7]',
    'However, the same review found no conclusive impact on other oxidative stress markers such as total antioxidant capacity, malondialdehyde, or glutathione. The authors concluded that magnesium may help regulate inflammation, but its direct antioxidant effects remain uncertain. [7]',
  ],
  s5e: {
    level: 'Moderate',
    color: '#b5651d',
    text: 'CRP reduction is consistently observed across studies. Effects on other oxidative stress markers are inconclusive.'
  },
  s6t: 'Which Form Should You Take?',
  s6: [
    'Not all magnesium supplements are created equal. The form of magnesium determines how well it is absorbed and utilized by the body:'
  ],
  s6after: 'The NIH notes that magnesium from food sources (dark leafy greens, nuts, seeds, whole grains, legumes) is generally well absorbed. However, soil depletion and food processing have reduced the magnesium content of many common foods, making supplementation a reasonable strategy for many people. [2]',
  s7t: 'Dosage and Safety',
  s7: [
    'The tolerable upper intake level (UL) for supplemental magnesium is 350 mg per day for adults, as established by the Institute of Medicine. This refers specifically to supplemental magnesium and does not include magnesium obtained from food or water. [2]',
    'Most clinical trials showing benefits have used doses between 200 and 400 mg of elemental magnesium daily. Higher doses may cause gastrointestinal side effects including diarrhea, nausea, and cramping — particularly with magnesium citrate and oxide.',
    'Magnesium supplements can interact with certain medications, including bisphosphonates, antibiotics, diuretics, and proton pump inhibitors. Individuals with kidney disease should consult a physician before supplementing. [2]',
  ],
  s8t: 'The Bottom Line',
  s8: [
    'Magnesium is one of the most well-studied and well-supported supplements in nutritional science. The evidence for blood pressure reduction in hypertensive individuals is strong. The evidence for improvements in depression, sleep, and inflammation is moderate but growing.',
    'For most adults, supplementing with 200–400 mg of elemental magnesium daily — preferably as glycinate, citrate, or taurate — is a safe and evidence-supported strategy, particularly if dietary intake falls below recommended levels. As with any supplement, the greatest benefits are seen in those who are deficient.',
  ],
  tHead: ['Form', 'Bioavailability', 'Best For', 'Notes'],
  tRows: [
    ['Magnesium Glycinate', 'High', 'Sleep, anxiety, general use', 'Well-tolerated, less GI distress'],
    ['Magnesium Citrate', 'High', 'General supplementation', 'Mild laxative effect possible'],
    ['Magnesium Taurate', 'High', 'Cardiovascular health', 'Taurine adds cardiac benefits'],
    ['Magnesium L-Threonate', 'Moderate', 'Cognitive function', 'Crosses blood-brain barrier; limited RCTs'],
    ['Magnesium Malate', 'Moderate–High', 'Energy, muscle pain', 'Often used for fibromyalgia'],
    ['Magnesium Oxide', 'Low (4–5%)', 'Constipation relief', 'Poor bioavailability; avoid for deficiency'],
  ],
  refsTitle: 'References',
  disc: 'This article is for educational purposes only and does not constitute medical advice. Magnesium supplementation may interact with medications and may not be appropriate for individuals with kidney disease. Always consult a qualified healthcare provider before starting any supplement regimen.',
  discL: 'Medical Disclaimer:',
  ctaT: 'Enjoyed this article?',
  ctaD: 'Get evidence-based health research delivered to your inbox every Saturday.',
  ctaB: 'Subscribe to The Saturday Edition',
};

const dv = {
  back: 'ފުރަތަމަ ސަފްހާއަށް ←',
  tag: 'ވަރުގަދަ ހެކި',
  category: 'ސަޕްލިމެންޓްސް',
  title: 'މެގްނީޒިއަމް: ޒަމާނީ ނިއުޓްރިޝަންގައި އެންމެ ބޮޑަށް އަޅާނުލެވި އޮތް މިނަރަލް',
  subtitle: 'ތަރައްގީވެފައިވާ ގައުމުތަކުގެ ބޮޑެތި މީހުންގެ ތެރެއިން ދެބައިކުޅަ އެއްބަޔަށްވުރެ ގިނަ މީހުންނަށް، ދުވާލަކަށް ބޭނުންވާ މެގްނީޒިއަމްގެ މިންވަރު ހަށިގަނޑަށް ނުލިބެއެވެ. މެގްނީޒިއަމް ސަޕްލިމެންޓްތަކާ ބެހޭގޮތުން ކްލިނިކަލް ހެކިތަކުން ދައްކާ ހަގީގަތަކީ މިއީއެވެ — މަސައްކަތްކުރާ ބާވަތްތަކާއި، މުހިންމު މިންވަރުތަކާއި، އަދި އެއްވެސް އަސާސެއް ނެތް ދައުވާތަކެވެ.',
  date: '7 އެޕްރީލް 2026',
  readTime: '12 މިނެޓުގެ ކިޔުމެއް',
  refCount: '14 ރިފަރެންސް ހިމެނިފައިވޭ',
  keyTitle: 'މުހިންމު ނުކުތާތައް',
  keys: [
    'އިންސާނާގެ ހަށިގަނޑުގައި ހަކަތަ އުފެއްދުމާއި، މަސްތަކުގެ މަސައްކަތާއި، އަދި ނާރުތަކުގެ ނިޒާމު ރެގިއުލޭޓްކުރުން ހިމެނޭގޮތަށް 300 އަށްވުރެ ގިނަ އެންޒައިމެޓިކް ރިއެކްޝަންތަކުގައި މެގްނީޒިއަމް ބައިވެރިވެއެވެ.',
    'އަންދާޒާކުރެވޭ ގޮތުގައި ތަރައްގީވެފައިވާ ގައުމުތަކުގެ ބޮޑެތި މީހުންގެ 50 އިންސައްތަ ނުވަތަ އެއަށްވުރެ ގިނަ މީހުން ބޭނުންކުރަނީ ދުވާލަކަށް ލަފާދީފައިވާ މިންވަރަށްވުރެ މަދު މެގްނީޒިއަމްއެވެ.',
    'މެޓާ-އެނަލިސިސްތަކުން ދައްކާގޮތުގައި ލޭގެ ޕްރެޝަރު ދަށްކުރުމަށާއި، ޑިޕްރެޝަނަށާއި، އަދި ނިދީގެ ފެންވަރު ރަނގަޅުކުރުމަށް މެގްނީޒިއަމްއިން ކޮންމެވެސް ވަރެއްގެ ނަމަވެސް ފާހަގަކޮށްލެވޭ ފައިދާތަކެއް ކުރެއެވެ.',
    'މެގްނީޒިއަމް ގްލައިސިނޭޓް، ސިޓްރޭޓް، އަދި ޓޯރޭޓް އަކީ މެގްނީޒިއަމް އޮކްސައިޑާ އަޅާބަލާއިރު ހަށިގަނޑަށް ދަމައިގަތުމުގެ ގާބިލުކަން (bioavailability) މަތި ބާވަތްތަކެކެވެ.',
    'އާންމުކޮށް ސަޕްލިމެންޓްގެ ގޮތުގައި ދޭން އެންމެ އެކަށީގެންވާ މިންވަރަކީ ދުވާލަކު 200 އާއި 400 މިލިގްރާމާ ދެމެދުގެ އެލިމެންޓަލް މެގްނީޒިއަމްއެވެ.',
  ],
  s1t: 'މެގްނީޒިއަމް މުހިންމުވާ ސަބަބު',
  s1: [
    'މެގްނީޒިއަމް އަކީ އިންސާނާގެ ހަށިގަނޑުގައި ހަތަރުވަނައަށް އެންމެ ގިނައިން ހުންނަ މިނަރަލްއެވެ. އަދި ތަފާތު ބަޔޯކެމިކަލް ރިއެކްޝަންތައް ކޮންޓްރޯލްކުރާ 300 އަށްވުރެ ގިނަ އެންޒައިމް ސިސްޓަމްތަކުގައި ކޯފެކްޓަރެއްގެ ގޮތުގައި މިއީ މަސައްކަތްކުރެއެވެ. މީގެ ތެރޭގައި ޕްރޮޓީން ސިންތެސިސް، މަސްތަކާއި ނާރުތަކުގެ މަސައްކަތް، ލޭގައި ހަކުރު ހުންނަ މިންވަރު ކޮންޓްރޯލްކުރުން، އަދި ލޭގެ ޕްރެޝަރު ރެގިއުލޭޓްކުރުން ހިމެނެއެވެ. މީގެ އިތުރުން ހަކަތަ އުފެއްދުމަށާއި، DNA އަދި RNA އުފެއްދުމަށާއި، އަދި ކަށީގެ އޮނިގަނޑު ތަރައްގީވުމަށްވެސް މެގްނީޒިއަމް ބޭނުންވެއެވެ.',
    'މީގެ މުހިންމުކަން ބޮޑު ނަމަވެސް، މެގްނީޒިއަމް މަދުވުމަކީ އާދަޔާ ހިލާފަށް އާންމު ކަމެކެވެ. 2025 ވަނަ އަހަރު ނިއުޓްރިއެންޓްސް ޖާނަލްގައި ޝާއިއުކުރި، މެގްނީޒިއަމް ޑިޕްލީޝަން ސްކޯ ބޭނުންކޮށްގެން ހެދި 48 ދިރާސާއެއްގެ ރިވިއުއަކުން ދެއްކި ގޮތުގައި، ގާތްގަނޑަކަށް ހުރިހާ ތަހުލީލުތަކަކުންވެސް މެގްނީޒިއަމް މަދުވުމާއި ސިއްހީ ނޭދެވޭ އަސަރުތަކާ ގުޅުން ހުރިކަން ފާހަގަކުރެވުނެވެ. [1]',
    'ބޮޑެތި ފިރިހެނުންނަށް ދުވާލަކު 400-420 މިލިގްރާމް އަދި ބޮޑެތި އަންހެނުންނަށް ދުވާލަކު 310-320 މިލިގްރާމް މެގްނީޒިއަމް ބޭނުންކުރުމަށް ރެކޮމެންޑެޑް ޑައިޓަރީ އެލަވަންސް (RDA) ލަފާދެއެވެ. އެހެންނަމަވެސް، ކާނާ ބޭނުންކުރާ ގޮތުގެ ސާވޭތަކުން ދައްކާގޮތުގައި އާބާދީގެ ބޮޑު ބަޔަކަށް މި މިންވަރު ނުލިބެއެވެ. [2]',
  ],
  s2t: 'ލޭގެ ޕްރެޝަރު: މެޓާ-އެނަލިސިސްތަކުން ދައްކަނީ ކީކޭ؟',
  s2: [
    'މެގްނީޒިއަމް ސަޕްލިމެންޓް ބޭނުންކުރުމުން ލިބޭ ފައިދާތަކުގެ ތެރެއިން އެންމެ ފުޅާދާއިރާއެއްގައި ދިރާސާކުރެވިފައިވާ އެއް ކަމަކީ ލޭގެ ޕްރެޝަރަށް ކުރާ އަސަރެވެ. 2025 ވަނަ އަހަރު ހައިޕަރޓެންޝަން (AHA) ގައި ޝާއިއުކުރި ސިސްޓަމެޓިކް ރިވިއުއެއްގައި 2,709 މީހުން ބައިވެރިވި 38 ރެންޑަމައިޒްޑް ކޮންޓްރޯލްޑް ޓްރަޔަލްތައް ތަހުލީލުކުރެވުނެވެ. [3]',
    'ނަތީޖާތަކުން ދެއްކި ގޮތުގައި، ޕްލަސީބޯ އާ އަޅާބަލާއިރު، ސިސްޓޮލިކް ބްލަޑް ޕްރެޝަރު 2.81 mmHg އަދި ޑަޔަސްޓޮލިކް ބްލަޑް ޕްރެޝަރު 2.05 mmHg ދަށްވިއެވެ. ކުރިންވެސް ލޭގެ ޕްރެޝަރުގެ ބޭސް ބޭނުންކުރަމުންދާ ހައިޕަރޓެންޝަން ބަލިމީހުންގެ ސިސްޓޮލިކް ޕްރެޝަރު 7.68 mmHg އަށް ދަށްވިއެވެ — ހިތުގެ ބޮޑެތި ބަލިތައް ޖެހުމުގެ ފުރުސަތު ގާތްގަނޑަކަށް 10 އިންސައްތަ ކުޑަކޮށްދޭ މިންވަރެކެވެ. [3]',
    'ނަމަވެސް، ލޭގެ ޕްރެޝަރު އާދައިގެ މިންވަރެއްގައި ހުންނަ މީހުންގެ ލޭގެ ޕްރެޝަރު ދަށްކުރުމަށް މެގްނީޒިއަމް ސަޕްލިމެންޓްތަކުން މާ ބޮޑު ބަދަލެއް ނާދެއެވެ. މީގެއިން ދޭހަވަނީ މީގެ ފައިދާއަކީ މައިގަނޑު ގޮތެއްގައި އިސްލާހީ ފައިދާއެއް ކަމެވެ — ހަށިގަނޑުގެ ފިޒިއޮލޮޖިކަލް ނުބައި މިންވަރުތައް ރަނގަޅުކޮށްދެނީއެވެ.',
  ],
  s2e: {
    level: 'ވަރުގަދަ',
    color: '#2d6a4f',
    text: 'އާރް.ސީ.ޓީ (RCT) ތަކުގެ ގިނަ މެޓަ-އެނަލިސިސްތަކުން ދައްކާގޮތުގައި، ހާއްސަކޮށް ލޭގެ ޕްރެޝަރު މަތި މީހުންގެ ލޭގެ ޕްރެޝަރު ކޮންމެވެސް މިންވަރަކަށް ދަށްކޮށްދެއެވެ. 2025 ވަނަ އަހަރުގެ ހައިޕަރޓެންޝަން މެޓަ-އެނަލިސިސް (38 އާރް.ސީ.ޓީ، n=2,709) އަކީ މިހާތަނަށް މިކަމާ ގުޅޭގޮތުން ހެދިފައިވާ އެންމެ ފުރިހަމަ ދިރާސާއެވެ.'
  },
  s3t: 'ޑިޕްރެޝަން އަދި މޫޑު',
  s3: [
    'މެގްނީޒިއަމް އާއި ނަފްސާނީ ދުޅަހެޔޮކަމާ ހުރި ގުޅުމަށް މިހާރު އަންނަނީ ދިރާސާވެރިންގެ ސަމާލުކަން އިތުރަށް ލިބެމުންނެވެ. 2024 ވަނަ އަހަރު ފްރޮންޓިއަރސް އިން ނިއުޓްރިޝަން މަޖައްލާގައި ޝާއިއުކުރި މެޓަ-އެނަލިސިސްއެއްގައި، ޑިޕްރެޝަން ހުންނަ 325 މީހުން ހިމެނޭ ހަތް ޓްރަޔަލްއެއް ދިރާސާކުރިއެވެ. މެގްނީޒިއަމް ސަޕްލިމެންޓް ބޭނުންކުރި މީހުންގެ ޑިޕްރެޝަން ސްކޯރތަކަށް ބޮޑު ކުރިއެރުމެއް އައިސްފައިވެއެވެ. [4]',
    'މިކަން ހިނގާ ގޮތް ކަމަށް ބެލެވެނީ، ހައިޕޯތަލަމިކް-ޕިޓޫއިޓަރީ-އެޑްރީނަލް (HPA) އެކްސިސް ކޮންޓްރޯލްކުރުމުގައި މެގްނީޒިއަމް އަދާކުރާ ދައުރާއި، ގުދުރަތީ NMDA ރިސެޕްޓަރ އެންޓަގޮނިސްޓެއްގެ ގޮތުގައި އެ މަސައްކަތްކުރާތީއެވެ. މެގްނީޒިއަމް މަދުވުމަކީ ނިއުރޯއިންފްލެމޭޝަން އަދި ކޯޓިޒޯލް ހޯރމޯން އުފެދުން އިތުރުވުމަށް މަގުފަހިވާ ކަމެކެވެ. މިއީ ދެކަމަކީވެސް ޑިޕްރެޝަންއާ ގުޅުންހުރި ކަންކަމެވެ.',
  ],
  s3e: {
    level: 'މެދު މިންވަރެއްގެ',
    color: '#b5651d',
    text: '325 މީހުން ބައިވެރިވި ހަތް އާރް.ސީ.ޓީ އިން ޑިޕްރެޝަން ސްކޯރތަކަށް ބޮޑު ކުރިއެރުމެއް އަންނަކަން ދައްކައެވެ. މިއީ އުންމީދީ ނަތީޖާއެއް ނަމަވެސް، ބައިވެރިވި މީހުންގެ އަދަދު މަދުވުމުން މީގެ އިތުރު ބޮޑެތި ދިރާސާތައް ބޭނުންވެއެވެ.'
  },
  s4t: 'ނިދުމުގެ ފެންވަރު',
  s4: [
    '2025 ވަނަ އަހަރު ނޭޗަރ އެންޑް ސައިންސް އޮފް ސްލީޕް މަޖައްލާގައި ޝާއިއުކުރި ޓްރަޔަލްއެއްގައި، ނިދުމުގެ މައްސަލަ ހުންނަ 18 އަހަރާއި 65 އަހަރާ ދެމެދުގެ 155 މީހުން ބައިވެރިކުރިއެވެ. ބައިވެރިންނަށް މެގްނީޒިއަމް ބިސްގްލައިސިނޭޓް ސަޕްލިމެންޓް ދިނުމަށްފަހު، ސުވާލު ކަރުދާސްތައް ބޭނުންކޮށްގެން ނިދުމުގެ ފެންވަރު ވަޒަންކުރިއެވެ. [5]',
    'މި ދިރާސާއިން ނިދުމުގެ ބައެއް ކަންކަމަށް ކުރިއެރުން ލިބުނުކަން ފާހަގަވި ނަމަވެސް، ހުރިހާ މައިގަނޑު ނަތީޖާތަކަކުން ތަފާސްހިސާބީ ގޮތުން މާ ބޮޑު ބަދަލެއް ނުފެނުނެވެ. މެގްނީޒިއަމް ހުންނަންޖެހޭ މިންވަރަށްވުރެ މަދުން ހުރި މީހުންނަށް މީގެ ފައިދާ ބޮޑަށް ކުރިއެވެ. [5]',
    '2021 ވަނަ އަހަރު އުމުރުން ދުވަސްވީ މީހުންނަށް ހާއްސަކޮށްގެން ހެދި ސިސްޓެމެޓިކް ރިވިއުއަކާއި މެޓަ-އެނަލިސިސްއަކުން ދެއްކި ގޮތުގައި، މެގްނީޒިއަމް ސަޕްލިމެންޓް ބޭނުންކުރުމުން އަވަހަށް ނިދުމަށާއި ނިދީގެ ފެންވަރު ރަނގަޅުވުމަށް އެހީތެރިވެދެއެވެ. ނަމަވެސް މި ދިރާސާގައި ހިމެނުނު ޓްރަޔަލްތަކުގެ އަދަދު މަދެވެ. [6]',
  ],
  s4e: {
    level: 'މެދު މިންވަރެއްގެ',
    color: '#b5651d',
    text: 'އޮބްޒަވޭޝަނަލް ޑޭޓާތަކުން މިކަމަށް ތާއީދުކުރެއެވެ. އާރް.ސީ.ޓީ ހެކިތައް ހުރީ އެކި ގޮތަށެވެ، ނަމަވެސް ހާއްސަކޮށް މެގްނީޒިއަމް މަދު މީހުންނާއި އުމުރުން ދުވަސްވީ މީހުންގެ މެދުގައި މީގެ ނަތީޖާ ރަނގަޅެވެ.'
  },
  s5t: 'އިންފްލެމޭޝަން (ދުޅަވުން)',
  s5: [
    '2025 ވަނަ އަހަރު އެންޓިއޮކްސިޑެންޓްސް މަޖައްލާގައި ޝާއިއުކުރި ދިރާސާއެއްގައި، އިންފްލެމޭޝަން އަދި އޮކްސިޑޭޓިވް ސްޓްރެސްއަށް މެގްނީޒިއަމް ކުރާ އަސަރުތަކާ ބެހޭ 28 ދިރާސާއެއް ވަޒަންކުރިއެވެ. ސީ-ރިއެކްޓިވް ޕްރޮޓީން (CRP) ގެ މިންވަރު ތަފާސްހިސާބީ ގޮތުން ބޮޑުތަނުން ދަށްވެއެވެ. [7]',
    'ނަމަވެސް، ޓޯޓަލް އެންޓިއޮކްސިޑަންޓް ކެޕޭސިޓީ، މެލޮންޑިއަލްޑިހައިޑް، ނުވަތަ ގްލޫޓަތިއޯން ފަދަ އޮކްސިޑޭޓިވް ސްޓްރެސްގެ އެހެން މާކަރުތަކަށް މާބޮޑު އަސަރެއް ކުރާކަމުގެ ހެއްކެއް ނެތެވެ. މެގްނީޒިއަމްގެ ސަބަބުން އިންފްލެމޭޝަން ކޮންޓްރޯލް ކުރުމަށް އެހީތެރިވެދީފާނެ ކަމަށެވެ. ނަމަވެސް އޭގެ ސީދާ އެންޓިއޮކްސިޑަންޓް އަސަރުތަކާ މެދު އަދިވެސް ޔަގީންކަމެއް ނެތެވެ. [7]',
  ],
  s5e: {
    level: 'މެދުމިންވަރެއްގެ',
    color: '#b5651d',
    text: 'ސީ.އާރު.ޕީ (CRP) ދަށްވުން ހުރިހާ ދިރާސާތަކަކުން ވެސް އެއްގޮތަކަށް ފާހަގަކުރެވެއެވެ. އޮކްސިޑޭޓިވް ސްޓްރެސްގެ އެހެން މާކަރުތަކަށް ކުރާ އަސަރުތަކާ މެދު ވަކި ގޮތެއް ނުނިންމެއެވެ.'
  },
  s6t: 'ކޮން ބާވަތެއްގެ ސަޕްލިމެންޓެއް ހިޔާރުކުރާނީ؟',
  s6: [
    'ހުރިހާ މެގްނީޒިއަމް ސަޕްލިމެންޓްތަކަކީ އެއްވަރެއްގެ އެއްޗެއް ނޫނެވެ. މެގްނީޒިއަމް ހުންނަ ބާވަތުގެ ސަބަބުން، އެ ހަށިގަނޑަށް ދަމައިގަންނަ މިންވަރާއި ބޭނުންކުރެވޭ މިންވަރު ތަފާތުވެއެވެ:'
  ],
  s6after: 'އެން.އައި.އެޗް (NIH) އިން ފާހަގަކުރާ ގޮތުގައި ކާނާގެ ބާވަތްތަކުން (ފެހިކަން ގަދަ ފަތް، މޭވާގެ އޮށް، ގްރެއިންސް، ލެގިއުމްސް) ލިބޭ މެގްނީޒިއަމް އާންމުކޮށް ހަށިގަނޑަށް ރަނގަޅަށް ދަމައިގަނެއެވެ. ނަމަވެސް، ބިމުގެ ފަސްގަނޑުން މާއްދާތައް މަދުވުމާއި ކާނާ ތައްޔާރުކުރާ ގޮތްތަކުގެ ސަބަބުން އާންމު ގިނަ ކާނާތަކުގައި މެގްނީޒިއަމް ހުންނަ މިންވަރު ވަނީ މަދުވެފައެވެ. [2]',
  s7t: 'ޑޯޒް އަދި ރައްކާތެރިކަން',
  s7: [
    'އިންސްޓިޓިއުޓް އޮފް މެޑިސިން އިން ކަނޑައަޅާފައިވާ ގޮތުގައި، ބޮޑެތި މީހުންނަށް ސަޕްލިމެންޓްގެ ގޮތުގައި ދުވާލަކު ބޭނުންކުރެވޭނެ އެންމެ މަތީ މިންވަރަކީ 350 މިލިގްރާމެވެ. މިއީ ހަމައެކަނި ސަޕްލިމެންޓްގެ ގޮތުގައި ބޭނުންކުރާ މެގްނީޒިއަމްއަށް ނިސްބަތްކޮށް ބުނެފައިވާ މިންވަރެކެވެ. ކާނާއާއި ފެނުން ލިބޭ މެގްނީޒިއަމް މީގެ ތެރެއަކު ނުހިމެނެއެވެ. [2]',
    'ފައިދާކުރާކަން ހާމަވެފައިވާ ގިނަ ކްލިނިކަލް ޓްރަޔަލްތަކުގައި ބޭނުންކޮށްފައިވަނީ ދުވާލަކު 200 އާއި 400 މިލިގްރާމާ ދެމެދުގެ އެލިމެންޓަލް މެގްނީޒިއަމްއެވެ. މިއަށްވުރެ މަތީ ޑޯޒްތަކުގެ ސަބަބުން ބަނޑުދިޔާވުން، މޭނުބައިކުރުން، އަދި ބަނޑުގައި ރިއްސުން ފަދަ މައްސަލަތައް ދިމާވެދާނެއެވެ.',
    'މެގްނީޒިއަމް ސަޕްލިމެންޓްތަކުގެ ސަބަބުން ބައެއް ބޭސްތަކަށް ބަދަލު އަތުވެދާނެއެވެ. އޭގެ ތެރޭގައި ބިސްފޮސްފޮނޭޓްސް، އެންޓިބަޔޮޓިކްސް، ޑައިޔުރެޓިކްސް، އަދި ޕްރޮޓޯން ޕަމްޕް އިންހިބިޓާސް ހިމެނެއެވެ. ކިޑްނީގެ ބަލި ހުންނަ މީހުން ސަޕްލިމެންޓް ބޭނުންކުރުމުގެ ކުރިން ޑޮކްޓަރެއްގެ ލަފާ ހޯދަންވާނެއެވެ. [2]',
  ],
  s8t: 'ޚުލާސާ',
  s8: [
    'މެގްނީޒިއަމްއަކީ ނިއުޓްރިޝަނަލް ސައިންސްގައި އެންމެ ގިނައިން ދިރާސާކުރެވިފައިވާ އަދި އެންމެ ބޮޑަށް ތާއީދު ލިބިފައިވާ އެއް ސަޕްލިމެންޓެވެ. ލޭގެ ފިއްތުން މަތި މީހުންގެ ލޭގެ ފިއްތުން ދަށްކޮށްދޭކަމުގެ ހެކިތައް ވަރަށް ވަރުގަދައެވެ. ޑިޕްރެޝަން، ނިދި، އަދި އިންފްލެމޭޝަން ރަނގަޅުކޮށްދޭކަމުގެ ހެކިތައް ހުރީ މެދުމިންވަރެއްގައެވެ، ނަމަވެސް މި ހެކިތައް ދަނީ އިތުރުވަމުންނެވެ.',
    'ގިނަ ބޮޑެތި މީހުންނަށް، ދުވާލަކު 200–400 މިލިގްރާމްގެ އެލިމެންޓަލް މެގްނީޒިއަމް (ހާއްސަކޮށް ގްލައިސިނޭޓް، ސިޓްރޭޓް، ނުވަތަ ޓޯރޭޓްގެ ގޮތުގައި) ބޭނުންކުރުމަކީ ރައްކާތެރި އަދި ހެކިތަކުން ސާބިތުވާ ކަމެކެވެ. ހާއްސަކޮށް ކާނާއިން ލިބޭ މިންވަރު މަދުނަމަ މިއީ މުހިންމު ކަމެކެވެ. ކޮންމެ ސަޕްލިމެންޓެއްގައި ވެސް ވާ ފަދައިން، އެންމެ ބޮޑު ފައިދާއެއް ފެންނާނީ ހަށިގަނޑުގައި އެ މާއްދާ މަދު މީހުންގެ ފަރާތުންނެވެ.',
  ],
  tHead: ['ބާވަތް', 'ބަޔޯއެވެއިލަބިލިޓީ (ހަށިގަނޑަށް ދަމައިގަންނަ މިންވަރު)', 'އެންމެ ރަނގަޅީ', 'ނޯޓް'],
  tRows: [
    ['މެގްނީޒިއަމް ގްލައިސިނޭޓް', 'މަތި', 'ނިދުމަށް، ހާސްކަމަށް، އާންމު ބޭނުންތަކަށް', 'ހަށިގަނޑަށް ފަސޭހައިން ބަލައިގަނޭ، ބަނޑަށް އުނދަގޫވުން ކުޑަ'],
    ['މެގްނީޒިއަމް ސިޓްރޭޓް', 'މަތި', 'އާންމު ސަޕްލިމެންޓެއްގެ ގޮތުގައި', 'ބަނޑުދިޔާވުމުގެ ފުރުސަތު އޮވޭ'],
    ['މެގްނީޒިއަމް ޓޯރޭޓް', 'މަތި', 'ހިތުގެ ދުޅަހެޔޮކަމަށް', 'ޓޯރީންގެ ސަބަބުން ހިތަށް އިތުރު ފައިދާ ލިބޭ'],
    ['މެގްނީޒިއަމް އެލް-ތްރިއޮނޭޓް', 'މެދުމިންވަރު', 'ސިކުނޑީގެ މަސައްކަތްތަކަށް', 'ލޭގެ ޒަރީއާއިން ސިކުނޑިއަށް ފޯރާ؛ ދިރާސާތައް މަދު'],
    ['މެގްނީޒިއަމް މެލޭޓް', 'މެދުމިންވަރު–މަތި', 'ހަކަތައަށް، މަސްތަކުގެ ރިހުމަށް', 'ގިނައިން ބޭނުންކުރަނީ ފައިބްރޯމައިއަލްޖިއާ އަށް'],
    ['މެގްނީޒިއަމް އޮކްސައިޑް', 'ދަށް (4–5%)', 'ބަނޑުހިކުމުން ސަލާމަތްވުމަށް', 'ހަށިގަނޑަށް ދަމައިގަންނަނީ ވަރަށް މަދުން؛ މެގްނީޒިއަމް މަދުވުމުން ބޭނުންކުރުން ރަނގަޅެއް ނޫން'],
  ],
  refsTitle: 'ރިފަރެންސްތައް',
  disc: 'މި މަޒުމޫނަކީ ހަމައެކަނި ތައުލީމީ ބޭނުމަށް ލިޔެވިފައިވާ މަޒުމޫނެކެވެ. މިއީ ސިއްހީ ލަފާގެ ގޮތުގައި ބަލައިގެން ނުވާނެއެވެ. މެގްނީޒިއަމް ސަޕްލިމެންޓް ބޭނުންކުރުމުން ބައެއް ބޭސްތަކާ އެކު ނޭދެވޭ އަސަރުކޮށްފާނެއެވެ. އަދި ކިޑްނީގެ ބަލި ހުންނަ މީހުންނަށް މިއީ އެކަށީގެންވާ އެއްޗަކަށް ނުވެދާނެއެވެ. އެއްވެސް ސަޕްލިމެންޓެއް ބޭނުންކުރަން ފެށުމުގެ ކުރިން އަބަދުވެސް ގާބިލު ސިއްހީ އެހީތެރިއެއްގެ ލަފާ ހޯދާށެވެ.',
  discL: 'ސިއްހީ އިންޒާރު:',
  ctaT: 'މި ލިޔުން ކަމުދިޔަތ؟',
  ctaD: 'ހެއްކަށް ބިނާކޮށްފައިވާ ސިއްހީ ދިރާސާ ކޮންމެ ހޮނިކިރު ދުވަހަކު ތިބާގެ އީމޭލަށް ލިބޭނެ.',
  ctaB: 'ހޮނިކިރު އެޑިޝަނާ ގުޅާ',
};

const refs = [
  'Wallace TC, et al. "Magnesium Depletion Score as an Indicator of Health Risk." Nutrients. 2025.',
  'NIH Office of Dietary Supplements. "Magnesium — Health Professional Fact Sheet." Updated 2026.',
  'Argeros Z, et al. "Magnesium Supplementation and Blood Pressure." Hypertension. 2025;82(11):1844–1856.',
  'Afsharfar M, et al. "Magnesium supplementation beneficially affects depression." Front Nutr. 2024;10:1268722.',
  'Schuster J, et al. "Magnesium Bisglycinate and Sleep." Nat Sci Sleep. 2025;17:2027–2040.',
  'Mah J, Pitre T. "Oral magnesium for insomnia in older adults." BMC Comp Med Ther. 2021;21(1):125.',
  'Systematic Review: Magnesium, Oxidative Stress and Inflammation. Antioxidants. 2025;14(6):740.',
  'Rosanoff A, et al. "Magnesium therapy for hypertension: 49 clinical trials." Nutrients. 2021;13:195.',
  'Zhang X, et al. "Magnesium and blood pressure meta-analysis." Hypertension. 2016;68:324.',
  'Dickinson HO, et al. "Magnesium for hypertension." Cochrane Database Syst Rev. 2006;(3):CD004640.',
  'Breus MJ, et al. "Magnesium, Sleep Quality and Mood." Med Res Arch. 2024;12(7).',
  'Barbagallo M, Dominguez LJ. "Magnesium and type 2 diabetes." World J Diabetes. 2015;6(10):1152–1157.',
  'Del Gobbo LC, et al. "Magnesium and cardiovascular disease." Am J Clin Nutr. 2013;98(1):160–173.',
  'Guerrero-Romero F, et al. "Magnesium improves beta-cell function." Eur J Clin Invest. 2011;41(4):405–410.',
];

function MagnesiumArticleInner() {
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

  const c = lang === 'en' ? en : dv;
  const isRtl = lang === 'dv';
  const bf = isRtl ? "'Faruma','MV Waheed',Tahoma,sans-serif" : "'DM Sans',sans-serif";
  const hf = isRtl ? "'MVWaheed','Faruma','MV Waheed',Tahoma,sans-serif" : "'Instrument Serif',serif";
  const lh = isRtl ? 2.3 : 1.85;
  const hlh = isRtl ? 1.7 : 1.15;

  /* Palette — switches between cream (normal) and red-shifted (blue light filter) */
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
  const IMG_FILTER     = warm ? 'sepia(0.45) saturate(0.80) brightness(0.94)' : 'none';

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
            <a href="/" style={{ fontFamily: bf, fontSize: 13, color: 'rgba(237,244,255,0.60)', textDecoration: 'none', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
              {isRtl ? 'ފުރަތަމަ ←' : '← Home'}
            </a>
            <button
              onClick={toggleWarm}
              title={warm ? 'Blue Light Blocker is active — tap to turn off' : 'Activate Blue Light Blocker for easier reading at night'}
              style={{
                fontSize: 12,
                background: warm ? 'rgba(160,80,20,0.22)' : 'transparent',
                border: warm ? '1px solid rgba(190,100,30,0.50)' : '1px solid rgba(237,244,255,0.18)',
                borderRadius: 20,
                padding: '6px 13px',
                cursor: 'pointer',
                color: warm ? '#F5C9A0' : 'rgba(237,244,255,0.70)',
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
              <span>Blue Light Blocker</span>
              {warm && <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F5A060', display: 'inline-block', marginLeft: 2 }} />}
            </button>
            <button
              onClick={() => changeLang(lang === 'en' ? 'dv' : 'en')}
              style={{ fontFamily: lang === 'en' ? "'Faruma',Tahoma" : "'DM Sans',sans-serif", fontSize: 13, background: 'none', border: '1px solid rgba(237,244,255,0.25)', borderRadius: 4, padding: '6px 12px', cursor: 'pointer', color: '#EDF4FF', whiteSpace: 'nowrap' }}
            >
              {lang === 'en' ? 'ދިވެހި' : 'English'}
            </button>
          </div>
        </div>
      </nav>

      <article style={{ maxWidth: 720, margin: '0 auto', padding: '100px 24px 100px', background: PAGE_BG, transition: 'background 0.4s ease' }}>
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
            <span className="evidence-tag" style={{ background: '#2d6a4f', fontFamily: bf }}>
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
          <h3 style={{ fontFamily: hf, fontSize: isRtl ? 22 : 22, marginBottom: 14, color: TEAL }}>
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

        <Sec title={c.s1t} ps={c.s1} />
        <Sec title={c.s2t} ps={c.s2} ev={c.s2e} />
        <Sec title={c.s3t} ps={c.s3} ev={c.s3e} />
        <Sec title={c.s4t} ps={c.s4} ev={c.s4e} />
        <Sec title={c.s5t} ps={c.s5} ev={c.s5e} />

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: hf, fontSize: isRtl ? 32 : 28, fontWeight: isRtl ? 700 : 300, lineHeight: isRtl ? 1.8 : 1.2, color: TEXT_PRIMARY, marginBottom: 18, paddingBottom: 10, borderBottom: `1px solid ${BORDER_SUBTLE}` }}>
            {c.s6t}
          </h2>
          {c.s6.map((p, i) => (
            <p key={i} style={{ fontFamily: bf, fontSize: isRtl ? 17 : 16, lineHeight: lh, color: TEXT_BODY, marginBottom: 18, fontWeight: 300 }}>
              {p}
            </p>
          ))}
          <div style={{ overflowX: 'auto', marginBottom: 28 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isRtl ? 15 : 14, fontFamily: bf }}>
              <thead>
                <tr style={{ borderBottom: `2px solid rgba(0, 196, 160, 0.50)` }}>
                  {c.tHead.map((h, i) => (
                    <th key={i} style={{ textAlign: isRtl ? 'right' : 'left', padding: '10px 12px', fontWeight: 500, color: TEAL }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.tRows.map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${BORDER_SUBTLE}` }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '10px 12px', color: j === 0 ? TEXT_PRIMARY : TEXT_SECONDARY, fontWeight: j === 0 ? 500 : 300, lineHeight: isRtl ? 2 : 1.5 }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: bf, fontSize: isRtl ? 17 : 16, lineHeight: lh, color: TEXT_BODY, marginBottom: 18, fontWeight: 300 }}>
            {c.s6after}
          </p>
        </div>

        <Sec title={c.s7t} ps={c.s7} />
        <Sec title={c.s8t} ps={c.s8} />

        <div style={{ marginTop: 60, paddingTop: 32, borderTop: `2px solid ${BORDER_MED}` }}>
          <h3 style={{ fontFamily: hf, fontSize: isRtl ? 24 : 26, marginBottom: 20, color: TEXT_PRIMARY }}>
            {c.refsTitle}
          </h3>
          <ol style={{ paddingLeft: isRtl ? 0 : 24, paddingRight: isRtl ? 24 : 0, fontFamily: "'DM Sans',sans-serif" }}>
            {refs.map((r, i) => (
              <li key={i} style={{ fontSize: 13, lineHeight: 1.7, color: TEXT_SECONDARY, marginBottom: 12, fontWeight: 300, wordBreak: 'break-word', direction: 'ltr', textAlign: 'left' }}>
                {r}
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

        <div style={{ marginTop: 48, padding: 32, background: '#2d6a4f', borderRadius: 8, textAlign: 'center' }}>
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

export default function MagnesiumArticle() {
  return <MagnesiumArticleInner />;
}
