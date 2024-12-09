import { getAccountInfo } from "@/lib/api";
import { AccountStats } from "@/components/ui/account-stats";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { SkinsGrid } from "@/components/ui/skins-grid";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id: string }
}

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate a cada hora

export default async function AccountPage({ params }: PageProps) {
  if (!params.id) {
    notFound();
  }

  try {
    const accountInfo = await getAccountInfo(params.id);

    return (
      <main className="min-h-screen relative overflow-hidden">
        <AnimatedBackground />
        <div className="container mx-auto py-8 px-4 relative z-10">
          <h1 className="text-4xl font-bold text-center text-white mb-8 [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
            Informações da Conta
          </h1>
          
          <AccountStats
            username={accountInfo.username}
            level={accountInfo.level}
            rank={accountInfo.rank}
            rankImage={accountInfo.rankImage}
            region={accountInfo.region}
            lastActivity={accountInfo.lastActivity}
            valorantPoints={accountInfo.valorantPoints}
            totalSkins={accountInfo.skins.length}
            totalAgents={accountInfo.agents.length}
            accountId={params.id}
          />

          <h2 className="text-2xl font-bold text-white mb-6 mt-12 [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
            Skins de Armas ({accountInfo.skins.length})
          </h2>
          
          <SkinsGrid skins={accountInfo.skins} />
        </div>
      </main>
    );
  } catch (error) {
    console.error('Erro na AccountPage:', error);
    notFound();
  }
}