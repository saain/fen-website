'use client';

import { useState, useEffect } from 'react';

const en = {
  back: '← Back to Home',
  tag: 'Strong Evidence',
  category: 'NUTRITION SCIENCE',
  title: 'Omega-3: The Essential Fat Your Brain and Heart Cannot Make',
  subtitle: 'The average Maldivian eats more tuna than anyone on earth — yet not all tuna is equal when it comes to omega-3. Here is what the clinical evidence actually says about EPA and DHA, the fish that provide the most, and when a supplement is worth considering.',
  date: 'April 24, 2026',
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
    'ALA is classified as an essential fatty acid — meaning the human body cannot synthesise it and must obtain it through diet. The body can convert small amounts of ALA into EPA and DHA, but this conversion is strikingly inefficient. Human studies consistently find that only around 2–10% of ALA is converted to EPA, and less than 1% — often as low as 0.01% — to DHA. For practical purposes, EPA and DHA must also come from the diet. [2]',
    'DHA is the dominant omega-3 in brain tissue and the retina. EPA plays a more prominent role in regulating inflammation, cardiovascular function, and mood. Together, they are involved in membrane fluidity, nerve signalling, the production of anti-inflammatory messengers called resolvins and protectins, and the regulation of heart rhythm. [1]',
  ],
  s1e: {
    level: 'Established',
    color: '#2d6a4f',
    text: 'The essentiality of omega-3 fatty acids is not controversial. Conversion of plant ALA into EPA and DHA is too low to meet physiological needs from plant sources alone for most people.'
  },
  s2t: 'The Cardiovascular Evidence',
  s2: [
    'The relationship between omega-3 and heart disease is one of the most extensively studied topics in nutrition. A 2024 meta-analysis published in the European Journal of Preventive Cardiology pooled data from 18 randomised controlled trials with over 134,000 participants. Omega-3 supplementation reduced the risk of coronary revascularisation, myocardial infarction, and cardiovascular death by roughly 8 to 11 percent, even in people already taking statins. [3]',
    'The same meta-analysis found that EPA alone produced stronger effects than EPA combined with DHA — a finding confirmed by an earlier analysis of 38 trials with 149,000 participants, which showed EPA monotherapy reduced cardiovascular mortality more than EPA+DHA formulations. This pattern has prompted several clinical guidelines to specifically endorse purified EPA for high-risk cardiovascular patients. [4]',
    'Omega-3 also produces robust reductions in triglycerides — a blood fat strongly linked to heart disease. A dose-response meta-analysis of 90 randomised trials and over 72,000 participants found a near-linear relationship: the more omega-3 consumed, the greater the reduction in triglycerides, particularly at doses above 2 grams per day. Typical triglyceride reductions range from 15 to 30 percent. [5]',
    'The "Omega-3 Index" — the proportion of EPA and DHA in red blood cell membranes — has been proposed as an independent predictor of death from coronary heart disease, with a target range of 8 percent or higher associated with the lowest risk. [15]',
  ],
  s2e: {
    level: 'Strong',
    color: '#2d6a4f',
    text: 'Multiple large meta-analyses show modest but consistent cardiovascular benefit. EPA produces stronger effects than combined EPA+DHA. Triglyceride reduction is robust and dose-dependent.'
  },
  s3t: 'Brain Health and Cognition',
  s3: [
    'DHA makes up around 30 to 40 percent of the polyunsaturated fatty acids in brain grey matter and retinal membranes. A 2023 meta-analysis of 48 longitudinal studies covering more than 103,000 participants found that higher dietary intake of omega-3 — especially DHA — was associated with approximately 20 percent lower risk of all-cause dementia and cognitive decline. Each additional 0.1 g/day of DHA or EPA intake was linked to an 8 to 10 percent lower risk of cognitive decline. [6]',
    'A 2025 systematic review and dose-response meta-analysis of 58 randomised trials found that each 2,000 mg/day increase in omega-3 supplementation significantly improved attention and perceptual speed in adults. Benefits have been most consistent in people with mild cognitive impairment, those at genetic risk (APOE4 carriers), and in populations with low baseline omega-3 intake. [7]',
    'Results in healthy older adults without cognitive impairment have been more mixed — of 15 trials in cognitively healthy people over 55, seven showed benefit and eight did not. The pattern suggests that omega-3 is more protective than curative: adequate intake across life appears more important than supplementation once cognitive decline is already advanced. [8]',
  ],
  s3e: {
    level: 'Moderate to Strong',
    color: '#2d6a4f',
    text: 'Observational evidence for prevention is strong. Trial evidence is strongest in people with mild impairment or low baseline omega-3 levels. Benefits in already-healthy older adults are less consistent.'
  },
  s4t: 'Depression and Mood',
  s4: [
    'Multiple meta-analyses have now examined omega-3 for depression, with reasonably consistent findings. The effect depends heavily on the ratio of EPA to DHA and the dose. A 2023 meta-analysis of ten randomised trials (1,426 participants) found that EPA-enriched formulations — where EPA made up at least 60 percent of total EPA+DHA — significantly reduced depression severity at doses of 1 to 2 grams per day. DHA-dominant formulations did not show the same benefit. [9]',
    'A 2019 meta-analysis of 26 trials with 2,160 participants reached the same conclusion: pure EPA and EPA-majority formulations at doses at or below 1 g/day produced clinically meaningful improvements in depressive symptoms, while DHA-pure formulations did not. This has led to a fairly consistent recommendation in the literature: if omega-3 is being used to support mood, the formulation should be EPA-dominant. [10]',
    'Omega-3 is not a replacement for clinical treatment of depression, but the evidence for adjunctive use — alongside conventional therapy — is solid, particularly in people with elevated inflammatory markers.',
  ],
  s4e: {
    level: 'Moderate',
    color: '#b5651d',
    text: 'EPA-dominant formulations (at least 60% EPA) at 1 to 2 g/day consistently show modest antidepressant effects. Pure DHA does not. Best evidence is as adjunctive treatment.'
  },
  s5t: 'The Maldivian Context: Tuna as Medicine',
  s5: [
    'The Maldives has the highest per capita fish consumption in the world — recent figures from the Ministry of Fisheries and Ocean Resources report around 181 kg per person per year. Tuna, mostly skipjack (Katsuwonus pelamis) and yellowfin (Thunnus albacares), accounts for approximately 85 percent of the protein consumed by Maldivians. This places the population in an almost unique dietary position globally: abundant access to the exact fish that most of the world is told to eat more of. [11]',
    'But not all tuna is equal in omega-3 content. A peer-reviewed study analysing yellowfin tuna from the Atlantic, Indian, and Pacific Oceans found that 100 g of Indian Ocean yellowfin — the variety most commonly caught in the Maldives — provides approximately 192 mg of combined EPA and DHA. That covers roughly 77 percent of the 250 mg daily minimum recommended by major health authorities. A modest second serving in the day, or the addition of small reef fish, comfortably meets the target. [12]',
    'Skipjack tuna, which accounts for two-thirds of the Maldivian catch, is leaner and contains somewhat less omega-3 per gram. Reef fish such as mackerel scad and small pelagics caught in Maldivian waters are generally higher in omega-3 than skipjack. Traditional preparations — garudhiya, mas huni, smoked valhomas, and freshly grilled or steamed cuts — preserve most of the omega-3 content. Deep-frying and prolonged high-heat cooking degrade it. [13]',
    'The practical implication is that a traditional Maldivian diet, eaten regularly, likely meets or exceeds international omega-3 recommendations without supplementation for most healthy adults. The larger issue in the Maldives is not insufficient omega-3 — it is the gradual displacement of fresh fish by imported processed food, particularly in younger urban populations.',
  ],
  s5e: {
    level: 'Applied',
    color: '#2d6a4f',
    text: 'Regular consumption of locally caught Maldivian tuna and reef fish is sufficient to meet omega-3 recommendations for most healthy adults. Supplementation is mostly relevant for specific clinical conditions or those who do not eat fish regularly.'
  },
  s6t: 'Common Omega-3 Sources at a Glance',
  s6: [
    'The amount of EPA and DHA varies widely between food sources. Oily cold-water fish sit at the top. Lean tropical fish — including the tuna species most common in the Maldives — contain less omega-3 per gram but remain a reliable source when eaten regularly. Supplements fill the gap for people who do not eat fish.'
  ],
  s6after: 'Processing matters. Canned tuna in water retains some omega-3 but less than fresh. Deep-frying in refined seed oils degrades omega-3 and introduces pro-inflammatory oxidised fats. Traditional Maldivian preparations — boiling, steaming, grilling, and smoking — preserve most of the long-chain omega-3s.',
  s7t: 'When Supplements Make Sense',
  s7: [
    'For most people who regularly eat fatty fish, food is the preferred source. Fish provides not only omega-3 but also selenium, iodine, vitamin D, protein, and other nutrients in a form the body evolved to use. The US National Institutes of Health notes that 250 to 500 mg of combined EPA + DHA per day — roughly two servings of fatty fish per week — is the baseline recommendation for healthy adults. [1]',
    'Supplementation becomes more relevant in specific situations: people who do not eat fish, vegetarians and vegans (for whom algal oil is a direct DHA source bypassing the inefficient ALA conversion), people with established cardiovascular disease, those with elevated triglycerides, and during pregnancy and lactation when DHA supports fetal brain and retinal development. Therapeutic doses for these conditions typically range from 1 to 3 grams of combined EPA + DHA daily, ideally under clinical supervision. [1]',
    'Fish oil supplement quality is a real concern. A 2023 study from George Washington University analysed 72 popular omega-3 supplements sold in the United States and found that 45 percent tested positive for rancidity — oxidation that reduces nutritional value and may actively increase inflammation. Flavouring was found to mask the fishy smell and taste that would normally signal a degraded product. Look for supplements that report a TOTOX (total oxidation) value below 26, carry third-party certifications such as IFOS or USP, and are stored cool and away from light. A good fish oil should taste clean, not fishy. [14]',
  ],
  s7e: {
    level: 'Practical',
    color: '#b5651d',
    text: 'Food first. Supplements are most useful for non-fish-eaters, cardiovascular patients, people with high triglycerides, and during pregnancy. Supplement quality varies significantly — around 45% of tested products in one US study were rancid.'
  },
  s8t: 'Dosage and Safety',
  s8: [
    'The US Food and Drug Administration considers intakes of up to 3 g/day of combined EPA + DHA to be Generally Recognized as Safe (GRAS). The European Food Safety Authority has set a similar tolerable upper limit. Higher therapeutic doses for triglyceride reduction are sometimes prescribed but should be taken under medical supervision. [1]',
    'The main concern with higher doses is a small increased risk of atrial fibrillation — an irregular heart rhythm. Meta-analyses have shown a modest but statistically significant increase in atrial fibrillation with omega-3 supplementation, particularly at doses above 1 g/day. For this reason, people with existing heart rhythm problems should discuss supplementation with their doctor. [4]',
    'Omega-3 has mild blood-thinning effects. People on anticoagulant medications, or those scheduled for surgery, should inform their clinician before taking supplements. For most people, mild digestive discomfort or a fishy aftertaste is the only side effect — both are often signs of either taking the supplement on an empty stomach or that the oil is oxidised and should be replaced.',
  ],
  s8e: {
    level: 'Well-characterised',
    color: '#2d6a4f',
    text: 'Safe for most people at recommended doses. Small increased risk of atrial fibrillation at high doses. Caution with anticoagulants.'
  },
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
  disc: 'This article is for educational purposes only and does not constitute medical advice. If you have a diagnosed health condition, take prescription medications (especially blood thinners), are pregnant, or have an irregular heart rhythm, consult your healthcare provider before starting any omega-3 supplement.',
  discL: 'Medical Disclaimer:',
  ctaT: 'Enjoyed this article?',
  ctaD: 'Get evidence-based health research delivered to your inbox every Saturday.',
  ctaB: 'Subscribe to The Saturday Edition',
};

const dv = {
  back: 'ފުރަތަމަ ސަފްހާއަށް ←',
  tag: 'ވަރުގަދަ ހެކި',
  category: 'ކާނާއާބެހޭ ސައިންސް',
  title: 'އޯމެގާ-3: ސިކުނޑިއާއި ހިތަށް އަމިއްލައަށް އުފެއްދުމުގެ ގާބިލުކަން ލިބިފައިނުވާ މުހިންމު ފެޓް',
  subtitle: 'ދުނިޔޭގެ އެހެން އެއްވެސް ގައުމެއްގެ މީހުންނަށްވުރެ ދިވެހިން ކާ ކަނޑުމަހުގެ މިންވަރު އިތުރެވެ. ނަމަވެސް، އޯމެގާ-3 އަށް ބަލާއިރު ހުރިހާ މަހަކީ އެއްވަރެއްގެ އެއްޗެއް ނޫނެވެ. އީ.ޕީ.އޭ (EPA) އަދި ޑީ.އެޗް.އޭ (DHA) އާ ގުޅޭގޮތުން ކްލިނިކަލް ހެކިތަކުން ދައްކާ ގޮތާއި، މި މާއްދާތައް އެންމެ ގިނައިން އެކުލެވޭ މަހުގެ ބާވަތްތަކާއި، އަދި ސަޕްލިމެންޓެއް ބޭނުންކުރުން މުހިންމުވަނީ ކޮން ހާލަތްތަކެއްގައިކަން ތިރީގައި އެވަނީއެވެ.',
  date: '24 އެޕްރީލް 2026',
  readTime: '14 މިނެޓުގެ ކިޔުމެއް',
  refCount: '15 ރިފަރެންސް ހިމެނިފައިވޭ',
  keyTitle: 'މުހިންމު ނުކުތާތައް',
  keys: [
    'އީ.ޕީ.އޭ އަދި ޑީ.އެޗް.އޭ ފެޓީ އެސިޑްތަކަކީ އިންސާނާގެ ހަށިގަނޑަށް ކޮންމެހެން ބޭނުންތެރި މާއްދާތަކެކެވެ — ހަށިގަނޑުގައި މި މާއްދާތައް އެކަށީގެންވާ މިންވަރަކަށް އުފެއްދުމުގެ ގާބިލުކަން ނެތުމުން، ކާނާ ނުވަތަ ސަޕްލިމެންޓުން ހޯދަންޖެހެއެވެ.',
    'އިންސާނާގެ ހަށިގަނޑުގައި، ގަސްގަހާގެހިން ލިބޭ އޮމެގާ-3 (އޭ.އެލް.އޭ) ގެ ތެރެއިން އީ.ޕީ.އޭ އަށް ބަދަލުވަނީ %10 އަށްވުރެ މަދު މިންވަރެކެވެ. އަދި ޑީ.އެޗް.އޭ އަށް ބަދަލުވަނީ %1 އަށްވުރެ މަދު މިންވަރެކެވެ. އެހެންކަމުން، ކަނޑުގެ ތަކެތި ފިޔަވައި އެހެން މަސްދަރަކުން ބޭނުންވާ މިންވަރު ހޯދުމަކީ އަމަލީ ގޮތުން ދަތި ކަމެކެވެ.',
    '134,000 އަށްވުރެ ގިނަ މީހުން ބައިވެރިވި މެޓަ-އެނަލިސިސްތަކުން ދައްކާ ގޮތުގައި އޮމެގާ-3 ސަޕްލިމެންޓް ބޭނުންކުރުމަކީ ހިތުގެ ބަލިތަކުން މަރުވުމާއި ހާޓް އެޓޭކް ޖެހުމުގެ ނުރައްކާ ކުޑަކޮށްދޭ ކަމެކެވެ. އީ.ޕީ.އޭ އާއި ޑީ.އެޗް.އޭ އެއްކޮށް ބޭނުންކުރުމަށްވުރެ، ހަމައެކަނި އީ.ޕީ.އޭ ބޭނުންކުރުމުން ފެންނަ ނަތީޖާ ވަރުގަދައެވެ.',
    'ދިވެހިރާއްޖޭގައި، އިންޑިއާ ކަނޑުގެ ރީނދޫއުރަހަ ކަންނެލީގެ 100 ގްރާމްގައި ގާތްގަނޑަކަށް 190 މިލިގްރާމްގެ އީ.ޕީ.އޭ + ޑީ.އެޗް.އޭ އެކުލެވެއެވެ — ގަވާއިދުން ކަނޑުމަސް ކައި އުޅޭނަމަ އޮމެގާ-3 ބޭނުންކުރުމުގެ ބައިނަލްއަގުވާމީ މިންގަނޑުތައް ފުރިހަމަވެއެވެ.',
    'ދުޅަހެޔޮ ބޮޑެތި މީހުންނަށް މައި ސިއްހީ ޖަމާއަތްތަކުން ލަފާދެނީ ދުވާލަކު މަދުވެގެން 250-500 މިލިގްރާމްގެ އީ.ޕީ.އޭ + ޑީ.އެޗް.އޭ ބޭނުންކުރުމަށެވެ. ހިތުގެ ބަލިތައް ހުންނަ ނުވަތަ ޓްރައިގްލިސަރައިޑްސް މަތި މީހުންނަށް ދުވާލަކު 1-2 ގްރާމާ ހަމައަށް ބޭނުންކޮށްފާނެއެވެ.',
  ],
  s1t: 'އޯމެގާ-3 މުހިންމުވާ ސަބަބު',
  s1: [
    'އޯމެގާ-3 ފެޓީ އެސިޑްތަކަކީ އިންސާނާގެ ހަށިގަނޑުގެ ކޮންމެ ސެލް މެމްބްރޭނެއްގެ އޮނިގަނޑު އެކުލެވިގެންވާ މުހިންމު ބައެކެވެ. ނަމަވެސް، މީގެ ކޮންސެންޓްރޭޝަން އެންމެ މަތީ ސިކުނޑިއާއި، ލޮލުގެ ރެޓިނާ އަދި ހިތުގައެވެ. މީގެ ތެރެއިން އެންމެ މުހިންމު ތިން ބާވަތަކީ އަލްފާ-ލިނޯލެނިކް އެސިޑް (ALA)، އީކޯސަޕެންޓައީނޯއިކް އެސިޑް (EPA) އަދި ޑޮކޯސަހެކްސައީނޯއިކް އެސިޑް (DHA) އެވެ. އޭ.އެލް.އޭ (ALA) ފެންނަނީ ފްލެކްސްސީޑް، ޗިއާ ސީޑްސް އަދި ވޯލްނަޓް ފަދަ ގަސްގަހާގެހިން އުފައްދާ ތެލުންނެވެ. އީ.ޕީ.އޭ އަދި ޑީ.އެޗް.އޭ ފެންނަނީ ހަމައެކަނި މަހާއި، ކަނޑުގެ އެހެނިހެން ދިރުންތަކާއި ފެއްސުން (algae) ނެވެ.',
    'އޭ.އެލް.އޭ (ALA) ގިންތިކުރެވިފައިވަނީ "އެސެންޝަލް" ނުވަތަ ކޮންމެހެން ބޭނުންތެރި ފެޓީ އެސިޑެއްގެ ގޮތުގައެވެ. މީގެ މާނައަކީ އިންސާނާގެ ހަށިގަނޑަށް މިއީ އަމިއްލައަށް އުފެއްދޭ އެއްޗެއް ނޫންކަމުން، ކާނާގެ ޒަރީއާއިން މިއީ ހޯދަންޖެހޭ އެއްޗެކެވެ. ހަށިގަނޑަށް މަދު މިންވަރެއްގެ އޭ.އެލް.އޭ، އީ.ޕީ.އޭ އަދި ޑީ.އެޗް.އޭ އަށް ބަދަލުކުރެވިދާނެއެވެ. ނަމަވެސް މި ބަދަލުވުމަކީ ވަރަށް ނުކުޅެދުންތެރި ނިޒާމެކެވެ. އިންސާނުން ބޭނުންކޮށްގެން ހަދާފައިވާ ދިރާސާތަކުން ދައްކާގޮތުގައި އޭ.އެލް.އޭ ގެ ތެރެއިން އީ.ޕީ.އޭ އަށް ބަދަލުވަނީ އެންމެ 2-10 އިންސައްތައެވެ. އަދި ޑީ.އެޗް.އޭ އަށް ބަދަލުވަނީ 1 އިންސައްތައަށްވުރެ މަދު މިންވަރެކެވެ (ގިނަ ފަހަރަށް 0.01 އިންސައްތަހާ މަދު މިންވަރެކެވެ). އެހެންކަމުން، އަމަލީ ގޮތުން ބަލާއިރު އީ.ޕީ.އޭ އަދި ޑީ.އެޗް.އޭ ވެސް ހޯދަންޖެހެނީ ކާނާގެ ތެރެއިންނެވެ. [2]',
    'ޑީ.އެޗް.އޭ އަކީ ސިކުނޑީގެ ޓިޝޫތަކާއި ރެޓިނާގައި އެންމެ ގިނައިން ހުންނަ އޯމެގާ-3 އެވެ. އީ.ޕީ.އޭ މުހިންމު ދައުރެއް އަދާކުރަނީ ދުޅަހެޔޮކަން ދެމެހެއްޓުމަށާއި (inflammation)، ހިތުގެ މަސައްކަތްތަކަށާއި، އަދި ނަފްސާނީ ދުޅަހެޔޮކަމުގައެވެ. މި ދެބާވަތް އެކުވެގެން ސެލް މެމްބްރޭންތަކުގެ މަޑުކަން ދެމެހެއްޓުމަށާއި، ނާރުތަކުގެ ސިގްނަލްތައް ފޮނުވުމަށާއި، ދުޅަހެޔޮކަން ދަމަހައްޓައިދޭ "ރިޒޮލްވިންސް" އަދި "ޕްރޮޓެކްޓިންސް" އުފެއްދުމަށާއި، އަދި ހިތުގެ ވިންދު ހަމަހަމަކޮށް ބެހެއްޓުމަށް އެހީތެރިވެދެއެވެ. [1]',
  ],
  s1e: {
    level: 'ކަށަވަރުވެފައިވާ ހަގީގަތް',
    color: '#2d6a4f',
    text: 'އޯމެގާ-3 ފެޓީ އެސިޑްތަކުގެ މުހިންމުކަމާމެދު އެއްވެސް ދެބަސްވުމެއް ނެތެވެ. ގަސްގަހާގެހިން ލިބޭ އޭ.އެލް.އޭ، އީ.ޕީ.އޭ އަދި ޑީ.އެޗް.އޭ އަށް ބަދަލުވާ މިންވަރު މަދުކަމުން، ގިނަ މީހުންނަށް ހަމައެކަނި ގަސްގަހާގެހިން ލިބޭ ކާނާއިން ހަށިގަނޑަށް ބޭނުންވާ މިންވަރު ފުރިހަމައެއް ނުކުރެވޭނެއެވެ.'
  },
  s2t: 'ހިތުގެ ބަލިތަކާ ގުޅޭ ހެކިތައް',
  s2: [
    'އޯމެގާ-3 އާއި ހިތުގެ ބަލިތަކާ ހުރި ގުޅުމަކީ ކާނާއާބެހޭ ސައިންސްގައި އެންމެ ފުޅާދާއިރާއެއްގައި ދިރާސާކުރެވިފައިވާ އެއް މައުޟޫއެވެ. 2024 ވަނަ އަހަރު "ޔޫރަޕިއަން ޖާނަލް އޮފް ޕްރިވެންޓިވް ކާޑިއޮލޮޖީ" ގައި ޝާއިއުކުރި މެޓާ-އެނަލިސިސްއެއްގައި، 134,000 އަށްވުރެ ގިނަ މީހުން ބައިވެރިވި 18 ރެންޑަމައިޒްޑް ކޮންޓްރޯލްޑް ޓްރަޔަލްތަކުގެ މައުލޫމާތު އެއްކުރެވުނެވެ. އޯމެގާ-3 ސަޕްލިމެންޓް ބޭނުންކުރުމުން، ކޮރޮނަރީ ރިވަސްކިއުލަރައިޒޭޝަން، ހާޓް އެޓޭކް، އަދި ހިތުގެ ބަލިތަކުގައި މަރުވުމުގެ ފުރުސަތު ގާތްގަނޑަކަށް 8 އިން 11 އިންސައްތައަށް ދަށްކޮށްދޭކަން ފާހަގަކުރެވުނެވެ. މިއީ ސްޓެޓިންސް (ކޮލެސްޓްރޯލް ބޭސް) ބޭނުންކުރާ މީހުންގެ ކިބައިންވެސް ފެނުނު ނަތީޖާއެކެވެ. [3]',
    'ހަމަ މި ދިރާސާއިން ދެއްކި ގޮތުގައި، އީ.ޕީ.އޭ އާއި ޑީ.އެޗް.އޭ އެކުލެވޭ ފޯމިއުލާތަކަށްވުރެ، ހަމައެކަނި އީ.ޕީ.އޭ ބޭނުންކުރުމުން ލިބޭ ނަތީޖާ މާ ވަރުގަދައެވެ. މިއީ 149,000 މީހުން ބައިވެރިވި 38 ޓްރަޔަލްއެއްގެ ކުރީގެ ދިރާސާއަކުންވެސް ކަށަވަރުވެފައިވާ ކަމެކެވެ. މި ނަތީޖާތަކާ ގުޅިގެން، ހިތުގެ ބަލިތަކުގެ ނުރައްކާ ބޮޑު މީހުންނަށް ހަމައެކަނި ސާފު އީ.ޕީ.އޭ ބޭނުންކުރުމަށް ބައެއް ކްލިނިކަލް ގައިޑްލައިންތަކުގައި މިހާރު ލަފާދެއެވެ. [4]',
    'މީގެ އިތުރުން، އޯމެގާ-3 އަކީ ލޭގައި ހުންނަ ފެޓްގެ ބާވަތެއް ކަމަށްވާ ޓްރައިގްލިސަރައިޑްސް (Triglycerides) ވަރަށް ބޮޑަށް ދަށްކޮށްދޭ އެއްޗެކެވެ. ޓްރައިގްލިސަރައިޑްސް މަތިވުމަކީ ހިތުގެ ބަލިތަކާ ވަރަށް ބޮޑަށް ގުޅިފައިވާ ކަމެކެވެ. 90 ރެންޑަމައިޒްޑް ޓްރަޔަލްތަކާއި 72,000 އަށްވުރެ ގިނަ ބައިވެރިން ހިމެނޭ ޑޯޒް-ރެސްޕޮންސް މެޓަ-އެނަލިސިސްއަކުން ދެއްކި ގޮތުގައި، އޮމެގާ-3 ބޭނުންކުރާ މިންވަރާއި ޓްރައިގްލިސަރައިޑްސް ދަށްވުމާ ދެމެދު ސީދާ ގުޅުމެއް އޮވެއެވެ. އެގޮތުން އޮމެގާ-3 ބޭނުންކުރާ މިންވަރު އިތުރުވި ވަރަކަށް ޓްރައިގްލިސަރައިޑްސް ދަށްވާ މިންވަރު އިތުރުވެއެވެ. ހާއްސަކޮށް ދުވާލަކު 2 ގްރާމަށްވުރެ ގިނައިން ބޭނުންކުރުމުން މި ނަތީޖާ ބޮޑަށް ފާހަގަކުރެވެއެވެ. އާންމުގޮތެއްގައި ޓްރައިގްލިސަރައިޑްސް 15 އިން 30 އިންސައްތައާ ދެމެދުގެ މިންވަރަކަށް ދަށްކޮށްދެއެވެ. [5]',
    '"އޮމެގާ-3 އިންޑެކްސް" — ނުވަތަ ރަތްލޭގެ ސެލްތަކުގެ މެމްބްރޭންގައި ހުންނަ އީ.ޕީ.އޭ (EPA) އާއި ޑީ.އެޗް.އޭ (DHA) ގެ ނިސްބަތަކީ، ހިތުގެ ބަލިތަކުގައި މަރުވުމުގެ ފުރުސަތު ދެނެގަތުމަށް ބޭނުންކުރެވިދާނެ މިނެކަނޑައެޅުމެއް ކަމަށް ވަނީ ހުށަހަޅާފައެވެ. މީގައި އެންމެ ނުރައްކާ ކުޑަ މިންވަރެއް ކަމަށް ބެލެވެނީ 8 އިންސައްތަ ނުވަތަ އެއަށްވުރެ މަތީ މިންވަރެކެވެ. [15]',
  ],
  s2e: {
    level: 'ވަރުގަދަ',
    color: '#2d6a4f',
    text: 'ގިނަ އަދަދެއްގެ ބޮޑެތި މެޓަ-އެނަލިސިސްތަކުން ދައްކާގޮތުގައި ހިތުގެ ދުޅަހެޔޮކަމަށް މީގެން މެދުމިންވަރެއްގެ ނަމަވެސް ދާއިމީ ފައިދާތަކެއް ކުރެއެވެ. ހަމައެކަނި އީ.ޕީ.އޭ ބޭނުންކުރުމުން، އީ.ޕީ.އޭ އާއި ޑީ.އެޗް.އޭ އެއްކޮށް ބޭނުންކުރުމަށްވުރެ ބޮޑު ނަތީޖާއެއް ފެނެއެވެ. ޓްރައިގްލިސަރައިޑްސް ދަށްކޮށްދޭ މިންވަރު ސާބިތުވެފައިވާއިރު، އެއީ ބޭނުންކުރާ ޑޯޒްގެ މައްޗަށް ބިނާވާ ކަމެކެވެ.'
  },
  s3t: 'ސިކުނޑީގެ ދުޅަހެޔޮކަމާއި ވިސްނުންތެރިކަން',
  s3: [
    'ސިކުނޑީގެ ގްރޭ މެޓަރ އާއި ލޮލުގެ ރެޓިނާގެ މެމްބްރޭންތަކުގައި ހުންނަ ޕޮލީއަންސެޗުރޭޓެޑް ފެޓީ އެސިޑްތަކުގެ ގާތްގަނޑަކަށް 30 އިން 40 އިންސައްތައަކީ ޑީ.އެޗް.އޭ އެވެ. 103,000 އަށްވުރެ ގިނަ ބައިވެރިން ހިމެނޭ ގޮތަށް 2023 ވަނަ އަހަރު ހެދި 48 ލޮންގިޓޫޑިނަލް ދިރާސާއެއްގެ މެޓަ-އެނަލިސިސްއަކުން ދެއްކި ގޮތުގައި، ކާނާގެ ޒަރީއާއިން އޮމެގާ-3 — ހާއްސަކޮށް ޑީ.އެޗް.އޭ — ގިނައިން ލިބުމަކީ ޑިމެންޝިއާ ޖެހުމާއި ވިސްނުން ކުޑަވުމުގެ ފުރުސަތު ގާތްގަނޑަކަށް 20 އިންސައްތަ ދަށްކޮށްދޭ ކަމެކެވެ. ކޮންމެ ދުވަހަކު އިތުރަށް ބޭނުންކުރާ 0.1 ގްރާމްގެ ޑީ.އެޗް.އޭ ނުވަތަ އީ.ޕީ.އޭ އަކީ ވިސްނުން ކުޑަވުމުގެ ފުރުސަތު 8 އިން 10 އިންސައްތައާ ދެމެދުގެ މިންވަރަކަށް ދަށްކޮށްދޭ ކަމެކެވެ. [6]',
    '58 ރެންޑަމައިޒްޑް ޓްރަޔަލްގެ މައްޗަށް ބިނާކޮށް 2025 ވަނަ އަހަރު ހެދި ސިސްޓެމެޓިކް ރިވިއުއަކާއި ޑޯޒް-ރެސްޕޮންސް މެޓަ-އެނަލިސިސްއަކުން ދެއްކި ގޮތުގައި، އޮމެގާ-3 ސަޕްލިމެންޓް ބޭނުންކުރާ މިންވަރު ދުވާލަކު 2,000 މިލިގްރާމް އިތުރުކުރުމުން ބޮޑެތި މީހުންގެ ސަމާލުކަން ދިނުމުގެ ގާބިލުކަމާއި ކަންކަން ދެނެގަތުމުގެ ހަލުވިމިން ވަރަށް ބޮޑަށް ރަނގަޅުވެއެވެ. މީގެ ފައިދާ އެންމެ ބޮޑަށް ފެންނަނީ ކުޑަކޮށް ވިސްނުން ބަލިކަށިވެފައިވާ މީހުންނާއި، ޖެނެޓިކް ގޮތުން ނުރައްކާ އޮތް މީހުން (APOE4 ކެރިއަރުން) އަދި އާންމުކޮށް އޮމެގާ-3 ލިބޭ މިންވަރު މަދު މީހުންގެ މެދުގައެވެ. [7]',
    'ވިސްނުމުގެ އެއްވެސް މައްސަލައެއް ނެތް ދުޅަހެޔޮ ދޮށީ އުމުރުގެ މީހުންގެ މެދުގައި ކުރެވުނު ދިރާސާތަކުގެ ނަތީޖާ ތަފާތެވެ. އުމުރުން 55 އަހަރުން މަތީގެ ދުޅަހެޔޮ މީހުންގެ މެދުގައި ކުރެވުނު 15 ޓްރަޔަލްގެ ތެރެއިން ހަތް ޓްރަޔަލްއިން ފައިދާ ފެނުނުއިރު، އަށް ޓްރަޔަލްއިން އެއްވެސް ފައިދާއެއް ނުފެނެއެވެ. މީގެން ދޭހަވަނީ އޮމެގާ-3 އަކީ ބަލި ރަނގަޅުކުރުމަށްވުރެ ބަލިން ރައްކާތެރިވުމަށް ބޮޑަށް އެހީތެރިވެދޭ އެއްޗެއް ކަމެވެ. އެބަހީ، ވިސްނުން ބަލިކަށިވުމަށްފަހު ސަޕްލިމެންޓް ނެގުމަށްވުރެ، މުޅި އުމުރުގައި އެކަށީގެންވާ މިންވަރަށް އޮމެގާ-3 ހަށިގަނޑަށް ލިބުމަކީ މާ މުހިންމު ކަމެކެވެ. [8]',
  ],
  s3e: {
    level: 'މެދުމިންވަރަކުން ވަރުގަދަ',
    color: '#2d6a4f',
    text: 'ބަލިން ރައްކާތެރިވުމަށް އޮތް ހެކިތައް ވަރުގަދައެވެ. ޓްރަޔަލްތަކުން އެންމެ ވަރުގަދަ ހެކި ފެންނަނީ ކުޑަކޮށް ވިސްނުން ބަލިކަށި މީހުންނާއި އޮމެގާ-3 ލެވެލް ދަށް މީހުންގެ ފަރާތުންނެވެ. ކުރިންވެސް ދުޅަހެޔޮކޮށް ތިބި ދޮށީ އުމުރުގެ މީހުންނަށް ކުރާ ފައިދާ އެހާ ސާބިތެއް ނޫނެވެ.'
  },
  s4t: 'ޑިޕްރެޝަން އަދި މޫޑު',
  s4: [
    'ޑިޕްރެޝަނަށް އޮމެގާ-3 އިން ކުރާ އަސަރުތަކާ ގުޅޭގޮތުން ގިނަ މެޓަ-އެނަލިސިސްތަކެއް ހަދާފައިވާއިރު، އޭގެ ނަތީޖާތައް ގާތްގަނޑަކަށް އެއްގޮތެވެ. މީގެ އަސަރު ބޮޑަށް ބިނާވަނީ އީ.ޕީ.އޭ އާއި ޑީ.އެޗް.އޭ ހުންނަ ނިސްބަތަށާއި ޑޯޒްގެ މައްޗަށެވެ. 2023 ވަނަ އަހަރު ހެދި 10 ރެންޑަމައިޒްޑް ޓްރަޔަލް (1,426 ބައިވެރިން) ގެ މެޓަ-އެނަލިސިސްއަކުން ދެއްކި ގޮތުގައި، އީ.ޕީ.އޭ ގިނައިން ހިމެނޭ ފޯމިއުލާތައް (ޖުމްލަ އޮމެގާ-3 ގެ މަދުވެގެން 60 އިންސައްތަ އީ.ޕީ.އޭ ހިމެނޭ) ދުވާލަކު 1 އިން 2 ގްރާމާ ދެމެދުގެ މިންވަރަކަށް ބޭނުންކުރުމުން ޑިޕްރެޝަންގެ ނުރައްކާތެރިކަން ވަރަށް ބޮޑަށް ކުޑަކޮށްދެއެވެ. ނަމަވެސް ޑީ.އެޗް.އޭ ގިނައިން ހިމެނޭ ފޯމިއުލާތަކުން މި ފައިދާއެއް ނުފެނެއެވެ. [9]',
    '2,160 ބައިވެރިން ހިމެނޭ ގޮތަށް ހެދި 26 ޓްރަޔަލްގެ 2019 ވަނަ އަހަރުގެ މެޓަ-އެނަލިސިސްއަކުންވެސް ނިކުތީ ހަމަ މި ނަތީޖާއެވެ. އެއީ ހަމައެކަނި އީ.ޕީ.އޭ ނުވަތަ އީ.ޕީ.އޭ ގިނައިން ހިމެނޭ ފޯމިއުލާތައް ދުވާލަކު 1 ގްރާމް ނުވަތަ އެއަށްވުރެ މަދު މިންވަރަކަށް ބޭނުންކުރުމުން ޑިޕްރެޝަންގެ އަލާމާތްތަކަށް ބޮޑު ކުރިއެރުމެއް ލިބޭއިރު، ހަމައެކަނި ޑީ.އެޗް.އޭ ހިމެނޭ ފޯމިއުލާތަކުން އެފަދަ ކުރިއެރުމެއް ނުލިބޭ ކަމެވެ. މީގެ ސަބަބުން، މިކަމާ ގުޅޭ ލިޔުންތަކުގައި ވަރަށް އެއްގޮތް ލަފައެއް ދީފައިވެއެވެ: އެއީ ނަފްސާނީ ދުޅަހެޔޮކަމަށް އެހީތެރިވުމަށް އޮމެގާ-3 ބޭނުންކުރާނަމަ، އޭގައި އީ.ޕީ.އޭ (EPA) ގިނަވާންޖެހޭ ކަމެވެ. [10]',
    'އޮމެގާ-3 އަކީ ކޮންމެހެން ޑިޕްރެޝަނަށް ދޭ ކްލިނިކަލް ފަރުވާގެ ބަދަލުގައި ބޭނުންކުރެވޭނެ އެއްޗެއް ނޫނެވެ. ނަމަވެސް، އާންމު ފަރުވާގެ އިތުރުން އެހީތެރި ފަރުވާއެއްގެ ގޮތުގައި މީގެ ބޭނުންތެރިކަން ބޮޑުކަމުގެ ހެކިތައް އެބަހުއްޓެވެ. ހާއްސަކޮށް ހަށިގަނޑުގައި އިންފްލެމޭޓަރީ މާކަރސް (ދުޅަވުމުގެ ނިޝާންތައް) މަތިކޮށް ހުންނަ މީހުންގެ މެދުގައެވެ.',
  ],
  s4e: {
    level: 'މެދު މިންވަރެއްގެ',
    color: '#b5651d',
    text: 'ދުވާލަކު 1 އާއި 2 ގްރާމާ ދެމެދުގެ މިންވަރަކަށް އީ.ޕީ.އޭ ގިނަ (މަދުވެގެން %60 އީ.ޕީ.އޭ ހިމެނޭ) ފޯމިއުލޭޝަންތަކުން ޑިޕްރެޝަނާ ދެކޮޅަށް މަޑުމައިތިރި ނަތީޖާއެއް ފެންނަކަން ސާބިތުވެއެވެ. ނަމަވެސް ހަމައެކަނި ޑީ.އެޗް.އޭ (DHA) ހިމެނޭ ބާވަތްތަކުން މި ނަތީޖާއެއް ނުފެނެއެވެ. އެންމެ ރަނގަޅު ހެއްކަކީ މިއީ އިތުރު ފަރުވާއެއްގެ ގޮތުގައި ބޭނުންކުރުމެވެ.'
  },
  s5t: 'ދިވެހިރާއްޖޭގެ ހާލަތު: ބޭހެއްގެ ގޮތުގައި ކަނޑުމަސް',
  s5: [
    'ދިވެހިރާއްޖެއަކީ ދުނިޔޭގައި ބޮލަކަށް ޖެހޭ މަހުގެ ނިސްބަތް އެންމެ މަތީ ގައުމެވެ. މިނިސްޓްރީ އޮފް ފިޝަރީޒް އެންޑް އޯޝަން ރިސޯސަސްގެ ފަހުގެ ތަފާސްހިސާބުތަކުން ދައްކާގޮތުގައި އަހަރަކު މީހަކަށް ގާތްގަނޑަކަށް 181 ކިލޯ މަސް ޖެހެއެވެ. ދިވެހިން ކާ ޕްރޮޓީންގެ ގާތްގަނޑަކަށް 85 އިންސައްތައަކީ ކަނޑުމަހެވެ. މީގެ ތެރޭގައި ގިނައީ ކަޅުބިލަމަހާއި (skipjack) ރީނދޫއުރަހަ ކަންނެއްޔެވެ (yellowfin). މީގެ ސަބަބުން ދުނިޔޭގެ އެހެން ގައުމުތަކާ އަޅާބަލާއިރު ދިވެހިންނަށް ލިބިފައިވަނީ ތަފާތު ކެއުމުގެ އާދައެކެވެ: އެއީ ދުނިޔޭގެ އެހެން މީހުންނަށް ގިނައިން ކެއުމަށް އިރުޝާދުދޭ މަހުގެ ބާވަތްތައް ދިވެހިންނަށް ފަސޭހައިން ލިބެން ހުރުމެވެ. [11]',
    'ނަމަވެސް ހުރިހާ މަހެއްގައި އޮމެގާ-3 ހުންނަނީ އެއް މިންވަރަކަށް ނޫނެވެ. އެޓްލާންޓިކް، އިންޑިއާ ކަނޑު އަދި ޕެސިފިކް ކަނޑުގެ ރީނދޫއުރަހަ ކަންނެލި ދިރާސާކޮށް ޝާއިއުކޮށްފައިވާ ރިޕޯޓެއް ބުނާގޮތުން، އިންޑިއާ ކަނޑުގެ (ދިވެހިރާއްޖޭގައި އެންމެ ގިނައިން ބާނާ) 100 ގްރާމްގެ ކަންނެލީގައި ގާތްގަނޑަކަށް 192 މިލިގްރާމްގެ އީ.ޕީ.އޭ އަދި ޑީ.އެޗް.އޭ އެކުލެވިގެންވެއެވެ. މިއީ ސިއްހީ މާހިރުން ލަފާދޭ ދުވާލަކު މަދުވެގެން ބޭނުންކުރަންޖެހޭ 250 މިލިގްރާމްގެ ގާތްގަނޑަކަށް 77 އިންސައްތައެވެ. ދުވާލަކު ދެވަނަ ފަހަރަށް މަސްކޮޅެއް ކާލުމުން ނުވަތަ ކުދި ފަރުމަސް ކެއުމުގައި ހިމެނުމުން މި މިންވަރު ފަސޭހަކަމާއެކު ހަމަވެއެވެ. [12]',
    'ދިވެހިރާއްޖޭގައި ބާނާ މަހުގެ ތިންބައިކުޅަ ދެބަޔަކީ ކަޅުބިލަމަހެވެ. މިއީ ކަންނެއްޔަށްވުރެ މަސްގަނޑު ހިކި އަދި އޮމެގާ-3 ހުންނަ މިންވަރު ކުޑަކޮށް މަދު ބާވަތެކެވެ. ދިވެހި ކަނޑުތަކުން ބާނާ މުށިމަހާއި އެހެނިހެން ކުދި ފަރުމަސްތަކުގައި ކަޅުބިލަމަހަށްވުރެ ގިނައިން އޮމެގާ-3 ހުރެއެވެ. ދިވެހިންގެ އާންމު ކެއުންތައް ކަމަށްވާ ގަރުދިޔަ، މަސްހުނި، ވަޅޯމަސް، އަދި ފިހުނު މަހާއި ކައްކާފައި ހުންނަ މަހުގައި އޮމެގާ-3 ގެ މާއްދާތައް ބޮޑަށް ރައްކާތެރިކޮށްދެއެވެ. ނަމަވެސް ތެލުލުމާއި ގިނައިރު ގަދަ ހޫނުގައި ކެއްކުމުން މީގެ ފައިދާ ކެނޑެއެވެ. [13]',
    'މީގެ އަމަލީ ނަތީޖާއަކީ، އާންމުކޮށް ދިވެހި ކެއުންތައް ބޭނުންކުރާނަމަ، ބޭރުން އިތުރު ސަޕްލިމެންޓް ނުނެގި ނަމަވެސް ބައިނަލްއަގުވާމީ މިންގަނޑުތަކަށްވުރެ ގިނައިން އޮމެގާ-3 ލިބޭނެ ކަމެވެ. ރާއްޖޭގައި މިހާރު އޮތް އެންމެ ބޮޑު މައްސަލައަކީ އޮމެގާ-3 ނުލިބުމެއް ނޫނެވެ. އޭގެ ބަދަލުގައި، ހާއްސަކޮށް ސިޓީތަކުގައި ދިރިއުޅޭ ޒުވާނުންގެ މެދުގައި، ތާޒާ މަހުގެ ބަދަލުގައި ބޭރުން އެތެރެކުރާ ޕްރޮސެސްޑް ކާނާ ބޭނުންކުރުން އިތުރުވުމެވެ.',
  ],
  s5e: {
    level: 'އަމަލީ',
    color: '#2d6a4f',
    text: 'ރާއްޖޭގެ ކަނޑުތަކުން ބާނާ ކަންނެއްޔާއި ފަރުމަސް ގަވާއިދުން ކެއުމަކީ ސިއްހަތު ސަލާމަތުން ހުރި މީހަކަށް ބޭނުންވާ އޮމެގާ-3 ލިބުމަށް ފުދޭ މިންވަރެކެވެ. ސަޕްލިމެންޓް ބޭނުންކުރުން މުހިންމީ ވަކި ހާއްސަ ބަލިތަކެއް ހުންނަ މީހުންނަށް ނުވަތަ ގަވާއިދުން މަސް ނުކާ މީހުންނަށެވެ.'
  },
  s6t: 'އޮމެގާ-3 ލިބޭ އާންމު ބާވަތްތައް އެއް ނަޒަރަކުން',
  s6: [
    'ކާނާގެ ބާވަތްތަކުގައި އީ.ޕީ.އޭ އަދި ޑީ.އެޗް.އޭ ހުންނަ މިންވަރު ވަރަށް ތަފާތެވެ. ފިނި ކަނޑުތަކުގެ ތެޔޮ މަސްތައް އުޅެނީ އެންމެ ކުރީގައެވެ. ރާއްޖޭގައި އާންމުކޮށް އުޅޭ ކަންނެލީގެ ބާވަތްތަކުގައި އޮމެގާ-3 ހުންނަ މިންވަރު ގްރާމަކަށް ބަލާއިރު މަދުވި ނަމަވެސް، ގަވާއިދުން ކާނަމަ މިއީ މި މާއްދާ ލިބިދޭ އިތުބާރު ހުރި މަސްދަރެކެވެ. މަސް ނުކާ މީހުންނަށް، އުނިވާ ބައި ފޫބެއްދުމަށް ސަޕްލިމެންޓްތައް ބޭނުންކުރެވިދާނެއެވެ.'
  ],
  s6after: 'މަސް ތައްޔާރުކުރާ ގޮތް މުހިންމެވެ. ފެނުގައި ބަންދުކުރި ދަޅުމަހުގައި ބައެއް އޮމެގާ-3 ހުރި ނަމަވެސް، ތާޒާ މަހަށްވުރެ އެ މިންވަރު މަދެވެ. ސީޑް އޮއިލް (seed oils) ބޭނުންކޮށްގެން މާބޮޑަށް ތެލުލުމުން އޮމެގާ-3 ހަލާކުވެ، ހަށިގަނޑުގައި ދުޅަހެތިކަން (inflammation) އުފައްދާ އޮކްސިޑައިޒްޑް ފެޓްސް އުފެދެއެވެ. ދިވެހިންގެ އާދަކާދައިގެ ކެއްކުންތައް ކަމަށްވާ ކައްކައިގެން، އާވިން، ފިހެގެން ނުވަތަ ދުންޖައްސައިގެން ތައްޔާރުކުރުމުން އޮމެގާ-3 ގެ ގިނަ ބައިތައް ރައްކާތެރިކޮށްދެއެވެ.',
  s7t: 'ސަޕްލިމެންޓް ބޭނުންކުރުން މުހިންމުވާ ހާލަތްތައް',
  s7: [
    'ގަވާއިދުން ތެޔޮ މަސް (fatty fish) ކާ މީހުންނަށް، އެންމެ ރަނގަޅު ގޮތަކީ ކާނާއިން މި ބައިތައް ހޯދުމެވެ. މަހުން ހަމައެކަނި އޮމެގާ-3 އެކަންޏެއް ނޫނެވެ؛ ސެލީނިއަމް، އަޔޮޑިން، ވިޓަމިން D، ޕްރޮޓީން އަދި ހަށިގަނޑަށް ބޭނުންވާ އެހެނިހެން މާއްދާތައް ވެސް ލިބެއެވެ. އެމެރިކާގެ ނޭޝަނަލް އިންސްޓިޓިއުޓްސް އޮފް ހެލްތުން ފާހަގަކުރާ ގޮތުގައި، ދުޅަހެޔޮ ބޮޑެތި މީހުންނަށް ދުވާލަކު 250 އާއި 500 މިލިގްރާމްގެ EPA + DHA (ހަފުތާއަކު ގާތްގަނޑަކަށް ދެ ފަހަރު ތެޔޮ މަސް ކެއުން) އަކީ އެންމެ މަދުވެގެން ބޭނުންވާ މިންވަރެވެ. [1]',
    'ސަޕްލިމެންޓް ބޭނުންކުރުން މުހިންމުވަނީ ވަކި ހާލަތްތަކެއްގައެވެ: މަސް ނުކާ މީހުން، ވެޖިޓޭރިއަނުންނާއި ވީގަނުން (މީހުންނަށް އަލްގަލް އޮއިލް އަކީ ސީދާ DHA ލިބޭ މަސްދަރެކެވެ)، ހިތުގެ ބަލިތައް ހުންނަ މީހުން، ޓްރައިގްލިސަރައިޑްސް މަތި މީހުން، އަދި މާބަނޑު ދުވަސްވަރާއި ގާތުންދޭ ދުވަސްވަރު (ކުއްޖާގެ ސިކުނޑިއާއި ލޮލުގެ ފެނުން ތަރައްގީވުމަށް DHA އެހީތެރިވެދޭތީ) އެވެ. މިފަދަ ހާލަތްތަކުގައި ބޭނުންކުރާ މިންވަރު އާންމުކޮށް އުޅެނީ ދުވާލަކު 1 އާއި 3 ގްރާމްގެ EPA + DHA އާ ދެމެދުގައެވެ. މިގޮތަށް ބޭނުންކުރަންވާނީ ޑޮކްޓަރެއްގެ އިރުޝާދުގެ ދަށުންނެވެ. [1]',
    'ފިޝް އޮއިލް ސަޕްލިމެންޓްތަކުގެ ފެންވަރަކީ ކަންބޮޑުވާންޖެހޭ ކަމެކެވެ. 2023 ވަނަ އަހަރު ޖޯޖް ވޮޝިންގޓަން ޔުނިވަރސިޓީން ކުރި ދިރާސާއަކުން ދެއްކި ގޮތުގައި، އެމެރިކާގައި ވިއްކާ މަގުބޫލު 72 އޮމެގާ-3 ސަޕްލިމެންޓެއްގެ ތެރެއިން 45 އިންސައްތަ ތަކެތި ހުރީ "ރެންސިޑް" ވެފައެވެ (އޮކްސިޑައިޒްވެ، އޭގެ ފައިދާ ކުޑަވެ، ހަށިގަނޑުގައި ދުޅަހެތިކަން އިތުރުކޮށްފާނެ ފަދަ ހާލަތެއްގައެވެ). ބައެއް ފަހަރު މީގައި ރަހަ ޖައްސާފައި ހުރުމުން، ބާވެފައި ހުންނައިރު ދުވާ ނުބައި ވަހާއި ރަހަ ނޭނގިދާނެއެވެ. ސަޕްލިމެންޓް ގަންނައިރު TOTOX (ޓޯޓަލް އޮކްސިޑޭޝަން) ވެލިއު 26 އަށްވުރެ ދަށް، IFOS ނުވަތަ USP ފަދަ ތާޑް-ޕާޓީ ސެޓިފިކޭޝަން އޮތް، އަދި ފިނި ތަނެއްގައި އަލި ނުޖެހޭ ގޮތަށް ރައްކާކޮށްފައި ހުރި ތަކެތި ހޯދާށެވެ. ރަނގަޅު ފިޝް އޮއިލްއެއްގައި ހުންނަންވާނީ ސާފު ރަހައެކެވެ، ނުބައި މަސް ވަހެއް ނޫނެވެ. [14]',
  ],
  s7e: {
    level: 'އަމަލީ',
    color: '#b5651d',
    text: 'ފުރަތަމަ އިސްކަންދޭނީ ކާނާއަށެވެ. ސަޕްލިމެންޓް އެންމެ ބޭނުންތެރީ މަސް ނުކާ މީހުންނަށާއި، ހިތުގެ ބަލިތައް ހުންނަ މީހުންނަށާއި، ޓްރައިގްލިސަރައިޑްސް މަތި މީހުންނަށާއި، މާބަނޑު މީހުންނަށެވެ. ސަޕްލިމެންޓްތަކުގެ ފެންވަރު ވަރަށް ބޮޑަށް ތަފާތުވެއެވެ - އެމެރިކާގެ ދިރާސާއަކުން ދެއްކި ގޮތުގައި ޓެސްޓްކުރި ތަކެތީގެ 45% ހުރީ ބާވެ، ހަލާކުވެފައެވެ.'
  },
  s8t: 'ބޭނުންކުރަންވީ މިންވަރާއި ރައްކާތެރިކަން',
  s8: [
    'އެމެރިކާގެ ފުޑް އެންޑް ޑްރަގް އެޑްމިނިސްޓްރޭޝަން (FDA) އިން ގަބޫލުކުރާ ގޮތުގައި ދުވާލަކު 3 ގްރާމާ ހަމައަށް EPA + DHA ބޭނުންކުރުމަކީ އާންމުކޮށް ރައްކާތެރި ކަމެކެވެ. ޔޫރަޕިއަން ފުޑް ސޭފްޓީ އޮތޯރިޓީން ވެސް ކަނޑައަޅާފައިވަނީ މިއާ އެއްގޮތް މިންގަނޑެކެވެ. ޓްރައިގްލިސަރައިޑް ދަށްކުރުމަށްޓަކައި ބައެއް ފަހަރު މަތީ ޑޯޒްތަކުގެ ފަރުވާ އިރުޝާދު ދެވުނު ކަމުގައި ވިޔަސް، އެފަދަ ޑޯޒްތައް ބޭނުންކުރަންވާނީ ޑޮކްޓަރެއްގެ ބެލުމުގެ ދަށުންނެވެ. [1]',
    'މަތީ ޑޯޒްތަކާ ގުޅިގެން އެންމެ ބޮޑަށް ކަންބޮޑުވާ ކަމަކީ "އޭޓްރިއަލް ފިބްރިލޭޝަން" (ހިތުގެ ވިންދު ނުގަވާއިދުވުން) ކުރިމަތިވުމުގެ ފުރުސަތު ކުޑަކޮށް އިތުރުވުމެވެ. މެޓަ-އެނަލިސިސްތަކުން ދައްކާ ގޮތުގައި، އޮމެގާ-3 ސަޕްލިމެންޓް ބޭނުންކުރުމުން، ހާއްސަކޮށް ދުވާލަކު 1 ގްރާމަށްވުރެ ގިނައިން ބޭނުންކުރާނަމަ، އޭޓްރިއަލް ފިބްރިލޭޝަން ކުރިމަތިވުމުގެ ފުރުސަތު ކުޑަ ނަމަވެސް ފާހަގަކުރެވޭ މިންވަރަކަށް އިތުރުވެއެވެ. މި ސަބަބަށްޓަކައި، ހިތުގެ ވިންދުގައި މައްސަލަ ހުންނަ މީހުން ސަޕްލިމެންޓް ބޭނުންކުރުމުގެ ކުރިން ޑޮކްޓަރާ މަޝްވަރާކުރަންވާނެއެވެ. [4]',
    'އޮމެގާ-3 އަކީ ލޭ ތުނިކޮށްދޭ އަސަރެއް އެކުލެވޭ އެއްޗެކެވެ. އެހެންކަމުން، ލޭ ތުނިކުރާ ބޭސް ބޭނުންކުރާ މީހުން ނުވަތަ ސާޖަރީއެއް ކުރަން ހަމަޖެހިފައިވާ މީހުން، ސަޕްލިމެންޓް ބޭނުންކުރުމުގެ ކުރިން ޑޮކްޓަރަށް އެކަން އަންގަންވާނެއެވެ. ގިނަ މީހުންނަށް ދިމާވާ ހަމައެކަނި ނޭދެވޭ އަސަރަކީ ބަނޑަށް އުނދަގޫވުން ނުވަތަ މަސް ރަހަ ކަރުގައިލުމެވެ. މިއީ ގިނަ ފަހަރަށް ހުސްބަނޑާ ހުރެ ސަޕްލިމެންޓް ބޭނުންކުރުމުން ނުވަތަ ތެޔޮކޮޅު އޮކްސިޑައިޒްވެ (ބޭނުންނުކުރެވޭ ވަރަށް ހަލާކުވެ) ހުރުމުން ދިމާވާ ކަންކަމެވެ.',
  ],
  s8e: {
    level: 'ޚުލާސާ',
    color: '#2d6a4f',
    text: 'އިރުޝާދު ދީފައިވާ މިންވަރަށް ބޭނުންކުރުމުން ގިނަ މީހުންނަށް ރައްކާތެރި އެއްޗެކެވެ. މަތީ ޑޯޒްތަކުގައި އޭޓްރިއަލް ފިބްރިލޭޝަންގެ ނުރައްކާ ކުޑަކޮށް އިތުރުވެއެވެ. ލޭ ތުނިކުރާ ބޭސް ބޭނުންކުރާނަމަ ސަމާލުވާންޖެހެއެވެ.'
  },
  tHead: ['މަސްދަރު', '100 ގްރާމްގައި ހުންނަ EPA + DHA', 'ނޯޓް'],
  tRows: [
    ['އެޓްލާންޓިކް ސަލްމަން (ފާމް ކުރި)', 'ގާތްގަނޑަކަށް 2,000 މިލިގްރާމް', 'އެންމެ ގިނައިން އޮމެގާ-3 އެކުލެވޭ އެއް ބާވަތް'],
    ['ކަނޑުމަސް (Mackerel)', 'ގާތްގަނޑަކަށް 2,500 މިލިގްރާމް', 'އޮމެގާ-3 ވަރަށް މަތީ މިންވަރަކަށް އެކުލެވޭ'],
    ['ސާޑިންސް', 'ގާތްގަނޑަކަށް 1,500 މިލިގްރާމް', 'ކެލްސިއަމް އަދި ވިޓަމިން D ވެސް ގިނަ'],
    ['ރީނދޫއުރަހަ ކަންނެލި (އިންޑިއާ ކަނޑު)', 'ގާތްގަނޑަކަށް 190 މިލިގްރާމް', 'މަޑު މަސް؛ ރާއްޖޭގެ މައިގަނޑު އެކްސްޕޯޓް'],
    ['ކަޅުބިލަމަސް', 'ގާތްގަނޑަކަށް 200–300 މިލިގްރާމް', 'ދިވެހިންގެ ކެއުމުގެ މައިގަނޑު އަސާސް'],
    ['ފެނުގައި ބަންދުކުރި ދަޅުމަސް', 'ގާތްގަނޑަކަށް 150–300 މިލިގްރާމް', 'ތާޒާ މަހަށްވުރެ މަދު؛ ތައްޔާރުކުރުމުގެ ތެރޭގައި ބައެއް ބައިތައް މަދުވޭ'],
    ['ފިޝް އޮއިލް ސޮފްޓްގެލް (އާންމުކޮށް)', 'ކެޕްސޫލަކަށް ގާތްގަނޑަކަށް 300 މިލިގްރާމް', 'ލޭބަލް ޗެކްކުރައްވާ؛ EPA + DHA ހުންނަ މިންވަރު ތަފާތުވޭ'],
    ['އަލްގަލް އޮއިލް (ވީގަން)', 'ސާވިންގް އަކަށް 200–300 މިލިގްރާމް DHA', 'ގަހުން ލިބޭ ސީދާ މަސްދަރެއް، މާކަރީއެއް ނުހުރޭ'],
  ],
  refsTitle: 'ހަވާލާތައް',
  disc: 'މި މަޒުމޫނަކީ ހަމައެކަނި ތައުލީމީ ބޭނުމަށް ލިޔެފައިވާ މަޒުމޫނެކެވެ. މިއީ ސިއްހީ ލަފައެއް ނޫނެވެ. ތިޔަބޭފުޅާއަކީ ބައްޔަކަށް ފަރުވާ ހޯއްދަވާ، ޑޮކްޓަރީ ބޭސް ބޭނުންކުރައްވާ (ޚާއްސަކޮށް ލޭ ތުނިކުރާ ބޭސް)، މާބަނޑު، ނުވަތަ ހިތުގެ ވިންދު ހުންނަންޖެހޭ މިންވަރަށްވުރެ ތަފާތުކޮށް ހުންނަ ބޭފުޅެއްނަމަ، އެއްވެސް އޮމެގާ-3 ސަޕްލިމެންޓެއް ބޭނުންކުރަން ފެށުމުގެ ކުރިން ސިއްހީ މާހިރެއްގެ ލަފާ ހޯއްދަވާށެވެ.',
  discL: 'ސިއްހީ އިރުޝާދު:',
  ctaT: 'މި ލިޔުން ކަމުދިޔަތ؟',
  ctaD: 'ހެއްކަށް ބިނާކޮށްފައިވާ ސިއްހީ ދިރާސާ ކޮންމެ ހޮނިކިރު ދުވަހަކު ތިބާގެ އީމޭލަށް ލިބޭނެ.',
  ctaB: 'ހޮނިކިރު އެޑިޝަނާ ގުޅާ',
};

const refs = [
  { text: 'National Institutes of Health, Office of Dietary Supplements. "Omega-3 Fatty Acids — Health Professional Fact Sheet."', url: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/' },
  { text: 'Swanson D, Block R, Mousa SA. "Omega-3 Fatty Acids EPA and DHA: Health Benefits Throughout Life." Advances in Nutrition. 2012;3(1):1–7.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3262608/' },
  { text: 'Dinu M, Sofi F, Lotti S, et al. "Effects of omega-3 fatty acids on coronary revascularization and cardiovascular events: a meta-analysis." European Journal of Preventive Cardiology. 2024;31(15):1863–1875.', url: 'https://pubmed.ncbi.nlm.nih.gov/38869144/' },
  { text: 'Khan SU, Lone AN, Khan MS, et al. "Effect of omega-3 fatty acids on cardiovascular outcomes: A systematic review and meta-analysis." eClinicalMedicine. 2021;38:100997.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8413259/' },
  { text: 'Wang T, Zhang X, Zhou N, et al. "Association Between Omega-3 Fatty Acid Intake and Dyslipidemia: A Continuous Dose-Response Meta-Analysis of RCTs." Journal of the American Heart Association. 2023;12(11):e029512.', url: 'https://www.ahajournals.org/doi/10.1161/JAHA.123.029512' },
  { text: 'Wei BZ, Li L, Dong CW, et al. "The Relationship of Omega-3 Fatty Acids with Dementia and Cognitive Decline: Evidence from Prospective Cohort Studies." American Journal of Clinical Nutrition. 2023;117(6):1096–1109.', url: 'https://www.sciencedirect.com/science/article/pii/S0002916523463204' },
  { text: 'Mohammadi H, et al. "A systematic review and dose-response meta-analysis of omega-3 supplementation on cognitive function." Scientific Reports. 2025;15.', url: 'https://www.nature.com/articles/s41598-025-16129-8' },
  { text: 'Cole GM, Ma QL, Frautschy SA. "Omega-3 fatty acids and cognitive function." Current Opinion in Clinical Nutrition and Metabolic Care. 2023;26(2):165–172.', url: 'https://pubmed.ncbi.nlm.nih.gov/36637075/' },
  { text: 'Kelaiditis CF, Gibson EL, Dyall SC. "Effects of long-chain omega-3 polyunsaturated fatty acids on reducing anxiety and/or depression: A systematic review and meta-analysis of RCTs." Prostaglandins, Leukotrienes and Essential Fatty Acids. 2023;192:102572.', url: 'https://www.sciencedirect.com/science/article/pii/S0952327823000418' },
  { text: 'Liao Y, Xie B, Zhang H, et al. "Efficacy of omega-3 PUFAs in depression: A meta-analysis." Translational Psychiatry. 2019;9:190.', url: 'https://pubmed.ncbi.nlm.nih.gov/31383846/' },
  { text: 'Ministry of Fisheries and Ocean Resources, Republic of Maldives. "National Statement on Fisheries and Per Capita Fish Consumption."', url: 'https://www.un.org/depts/los/convention_agreements/ICSP17/ICSP17_Maldives.pdf' },
  { text: 'Pessoa RBG, et al. "Evaluating the Lipid Quality of Yellowfin Tuna (Thunnus albacares) Harvested from Different Oceans by Their Fatty Acid Signatures." Foods. 2021;10(11):2772.', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8620007/' },
  { text: 'RISE. "Maldives Pole-and-Line Skipjack Tuna Fisheries: Livelihood Security and Nutrition."', url: 'https://riseseafood.org/maldives-pole-and-line-skipjack-tuna-fisheries-livelihood-security-and-nutrition/' },
  { text: 'Jackowski SA, Alvi AZ, Mirajkar A, et al. "A Multi-Year Rancidity Analysis of 72 Marine and Microalgal Oil Omega-3 Supplements." Journal of Dietary Supplements. 2023.', url: 'https://pubmed.ncbi.nlm.nih.gov/37712532/' },
  { text: 'Harris WS, Von Schacky C. "The Omega-3 Index: a new risk factor for death from coronary heart disease?" Preventive Medicine. 2004;39(1):212–220.', url: 'https://pubmed.ncbi.nlm.nih.gov/15208005/' },
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
  const BG_TAKEAWAY    = warm ? '#F5CEBC' : 'rgba(74,92,66,0.07)';
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
              <span className="toggle-label" style={{ fontFamily: isRtl ? "'Faruma','MV Waheed',Tahoma,sans-serif" : "'DM Sans',sans-serif" }}>{isRtl ? 'ނޫ އަލި ހުރަސް' : 'Blue Light Blocker'}</span>
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
          <p style={{ fontSize: isRtl ? 18 : 17, lineHeight: lh, color: TEXT_SECONDARY, fontWeight: 300, marginBottom: 20, fontFamily: bf, overflow: 'hidden', paddingTop: isRtl && c.subtitle.startsWith('ދ') ? 24 : 0 }}>
            {isRtl && c.subtitle.startsWith('ދ') ? (
              <>
                <img
                  src="/dropcap-dhaalu.png"
                  alt="ދު"
                  style={{
                    float: 'right',
                    height: 165,
                    width: 'auto',
                    maxWidth: '40%',
                    marginLeft: 18,
                    marginTop: -18,
                    marginBottom: 6,
                    shapeOutside: 'url(/dropcap-dhaalu.png)',
                    shapeImageThreshold: 0.3,
                    shapeMargin: 10,
                  }}
                />
                {c.subtitle.slice(2)}
              </>
            ) : (
              c.subtitle
            )}
          </p>
          <div style={{ clear: 'both', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', fontSize: 13, color: TEXT_MUTED, fontWeight: 300, paddingBottom: 24, borderBottom: `1px solid ${BORDER_MED}`, fontFamily: bf }}>
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

        <Sec title={c.s1t} ps={c.s1} ev={c.s1e} />
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
                <tr style={{ borderBottom: `2px solid ${TEAL}80` }}>
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

        <Sec title={c.s7t} ps={c.s7} ev={c.s7e} />
        <Sec title={c.s8t} ps={c.s8} ev={c.s8e} />

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
            fen<span style={{ color: '#7B6D3E' }}>.</span>
          </span>
          <p className="footer-copy">© 2026 fen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default function Omega3Article() {
  return <Omega3ArticleInner />;
}
