import './globals.css';
import { nunitoSans, raleway } from './ui/fonts';
import FooterMain from './ui/layout/FooterMain';
import HeaderMain from './ui/layout/HeaderMain';

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="drawer drawer-end bg-neutral-900"
      data-theme="theo"
    >
      <body
        className={`${raleway.variable} ${nunitoSans.variable} grid min-h-screen min-w-72 grid-cols-1 grid-rows-[auto_1fr_auto] px-3 font-sans antialiased sm:px-5`}
      >
        <HeaderMain />
        <main>{children}</main>
        <FooterMain />
      </body>
    </html>
  );
}
