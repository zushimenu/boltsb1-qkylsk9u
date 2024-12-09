'use client';

import { StatCard } from './stat-card';
import { Shield, Swords, Users, Wallet } from 'lucide-react';

interface StatsGridProps {
  level: number;
  valorantPoints: number;
  totalSkins: number;
  totalAgents: number;
}

export function StatsGrid({ level, valorantPoints, totalSkins, totalAgents }: StatsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Nível da Conta"
        value={level}
        icon={<Shield className="h-4 w-4 text-white/80" />}
        delay={0.1}
      />
      <StatCard
        title="Valorant Points"
        value={valorantPoints}
        icon={<Wallet className="h-4 w-4 text-white/80" />}
        delay={0.2}
      />
      <StatCard
        title="Total de Skins"
        value={totalSkins}
        icon={<Swords className="h-4 w-4 text-white/80" />}
        delay={0.3}
      />
      <StatCard
        title="Total de Agentes"
        value={totalAgents}
        icon={<Users className="h-4 w-4 text-white/80" />}
        delay={0.4}
      />
    </div>
  );
}