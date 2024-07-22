import { Inter } from 'next/font/google';
import { NextSeo } from 'next-seo';
const inter = Inter({ subsets: ['latin'] }); 

const RootLayout = ({ children }) => {
  return (
    <>
      <NextSeo
        title="Clear Digital"
        description="Clear Digital Web Agency"
      />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
};
export default RootLayout;