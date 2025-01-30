import type { Metadata } from 'next';
import CircularStd from 'next/font/local';

import './styles/globals.css';

const circularStd = CircularStd({
  src: [
    {
      path: '../../public/fonts/CircularStd-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CircularStd-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CircularStd-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CircularStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/CircularStd-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Spotify Clone - Explora y Disfruta tu Música Favorita',
  description:
    'Descubre una experiencia musical increíble con este clon de Spotify. Explora playlists, artistas y álbumes con una interfaz moderna y funcional.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${circularStd.className} antialiased text-primary bg-primary`}
      >
        {children}
      </body>
    </html>
  );
}
