import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JettNewSkins - Visualizador de Skins Valorant',
  description: 'Visualize sua coleção de skins do Valorant de forma fácil e rápida',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gradient-to-br from-[#001B3D] via-[#003366] to-[#001B3D]">
        {children}
      </body>
    </html>
  );
}