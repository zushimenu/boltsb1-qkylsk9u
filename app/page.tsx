import { SearchForm } from '@/components/search-form';
import { AnimatedBackground } from '@/components/ui/animated-background';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center space-y-8 max-w-2xl w-full">
          <h1 className="text-5xl font-bold text-white mb-4 [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
            JettNewSkins
          </h1>
          <p className="text-lg text-blue-200 mb-8 [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
            Digite o ID da conta para visualizar sua coleção de skins do Valorant
          </p>
          <SearchForm />
        </div>
      </div>
    </main>
  );
}