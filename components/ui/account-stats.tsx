'use client';

import { motion } from 'framer-motion';
import { formatLastActivity } from '@/lib/utils/date-helpers';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Trophy, Users, Clock, Coins } from 'lucide-react';

interface AccountStatsProps {
  username: string;
  level: number;
  rank: string;
  rankImage: string;
  region: string;
  lastActivity: number;
  valorantPoints: number;
  totalSkins: number;
  totalAgents: number;
  accountId: string;
}

export function AccountStats({
  username,
  level,
  rank,
  rankImage,
  region,
  lastActivity,
  valorantPoints,
  totalSkins,
  totalAgents,
  accountId
}: AccountStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Perfil</CardTitle>
            <Avatar className="h-4 w-4">
              <AvatarImage src={rankImage} alt={rank} />
              <AvatarFallback>{username[0]}</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{username}</div>
            <p className="text-xs text-blue-200">Nível {level} • {region}</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Rank</CardTitle>
            <Trophy className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{rank}</div>
            <p className="text-xs text-blue-200">Rank Competitivo</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Coleção</CardTitle>
            <Users className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{totalSkins}</div>
            <p className="text-xs text-blue-200">{totalAgents} Agentes Desbloqueados</p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white">Valorant Points</CardTitle>
            <Coins className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{valorantPoints}</div>
            <p className="text-xs text-blue-200">VP Disponíveis</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}