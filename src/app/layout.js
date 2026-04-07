import './globals.css';

export const metadata = {
  title: 'fen. — Evidence-Based Natural Health',
  description: 'We examine supplements, herbal remedies, teas, and wellness practices through the lens of peer-reviewed research — so you can make informed choices about your health.',
  openGraph: {
    title: 'fen. — Evidence-Based Natural Health',
    description: 'Supplements, herbal remedies, and wellness practices examined through peer-reviewed research.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
