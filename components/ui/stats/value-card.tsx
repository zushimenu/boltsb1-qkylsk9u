'use client';

import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';
import { formatCurrency } from '@/lib/utils/currency-helpers';
import { calculateAccountValue } from '@/lib/utils/value-calculator';
import { useAccountValue } from '@/lib/hooks/use-account-value';
import { Skin } from '@/lib/types';
import { NumberTicker } from '../number-ticker';

interface ValueCardProps {
  accountId: string;
  skins: Skin[];
}

export function ValueCard({ accountId, skins = [] }: ValueCardProps) {
  const initialValue = calculateAccountValue(skins);
  const { accountValue } = useAccountValue(accountId, initialValue);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative p-6 rounded-xl bg-gradient-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-sm border border-white/10"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-green-500/20 rounded-lg">
          <DollarSign className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="text-lg font-medium text-white">Valor Estimado</h3>
      </div>
      
      <div className="text-3xl font-bold text-green-400">
        <NumberTicker value={accountValue} />
      </div>
      
      <p className="text-sm text-white/60 mt-2">
        Baseado em {skins.length} {skins.length === 1 ? 'skin' : 'skins'}
      </p>
    </motion.div>
  );
}