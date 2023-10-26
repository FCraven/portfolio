import { Bitter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '../lib/registry';

import { Header, Footer, Layout } from '../components';

const bitter = Bitter({ subsets: ['latin'] })

export const metadata = {
  title: 'Francis Craven',
  description: '- Frontend Developer - ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bitter.className}>
        <StyledComponentsRegistry>
          <Layout>
            <Header />
              {children}
            <Footer />
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
