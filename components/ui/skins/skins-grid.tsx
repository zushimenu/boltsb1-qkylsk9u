'use client';

import { SkinCard } from './skin-card';
import { Skin } from '@/lib/types';

interface SkinsGridProps {
  skins: Skin[];
}

export function SkinsGrid({ skins }: SkinsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {skins.map((skin, index) => (
        <SkinCard
          key={`${skin.NameSkin}-${index}`}
          name={skin.NameSkin}
          image={skin.ImageSkin}
          rarity={skin.Rarity.toLowerCase()}
          index={index}
        />
      ))}
    </div>
  );
}