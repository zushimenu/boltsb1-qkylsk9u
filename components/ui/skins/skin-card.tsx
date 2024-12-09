'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface SkinCardProps {
  name: string;
  image: string;
  rarity: string;
  index: number;
}

export function SkinCard({ name, image, rarity, index }: SkinCardProps) {
  const rarityColors: { [key: string]: string } = {
    legendary: 'from-yellow-400/20 to-yellow-600/20',
    epic: 'from-purple-400/20 to-purple-600/20',
    rare: 'from-blue-400/20 to-blue-600/20',
    common: 'from-gray-400/20 to-gray-600/20'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`bg-gradient-to-br ${rarityColors[rarity]} border-white/20 backdrop-blur-sm overflow-hidden`}>
        <CardContent className="p-4">
          <div className="aspect-[16/9] relative mb-3">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h3 className="text-white text-center font-medium truncate">{name}</h3>
        </CardContent>
      </Card>
    </motion.div>
  );
}