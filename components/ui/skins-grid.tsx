'use client';

import { motion } from 'framer-motion';
import { Skin } from '@/lib/types';
import Image from 'next/image';

interface SkinsGridProps {
  skins: Skin[];
}

export function SkinsGrid({ skins }: SkinsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {skins.map((skin, index) => (
        <motion.div
          key={`${skin.NameSkin}-${index}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="group relative"
        >
          <div className="relative overflow-hidden rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="aspect-square relative mb-3">
              <Image
                src={skin.ImageSkin}
                alt={skin.NameSkin}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="text-sm font-medium text-white text-center truncate">
              {skin.NameSkin}
            </h3>
            <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-semibold ${
              skin.Rarity === 'legendary' ? 'bg-yellow-500/80' :
              skin.Rarity === 'epic' ? 'bg-purple-500/80' :
              skin.Rarity === 'rare' ? 'bg-blue-500/80' :
              'bg-gray-500/80'
            } text-white backdrop-blur-sm`}>
              {skin.Rarity.charAt(0).toUpperCase() + skin.Rarity.slice(1)}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}