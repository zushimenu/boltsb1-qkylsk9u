'use client';

import { Skin } from "@/lib/types";
import { motion } from "framer-motion";
import Image from "next/image";

interface SkinCardProps {
  skin: Skin;
  index: number;
}

const rarityColors: { [key: string]: string } = {
  legendary: "border-yellow-500 bg-yellow-500/10",
  epic: "border-purple-500 bg-purple-500/10",
  rare: "border-blue-500 bg-blue-500/10",
  common: "border-gray-500 bg-gray-500/10",
};

export function SkinCard({ skin, index }: SkinCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
      className={`relative rounded-lg border-2 p-4 backdrop-blur-sm ${rarityColors[skin.Rarity]} 
        transform-gpu perspective-1000 cursor-pointer transition-all duration-300`}
    >
      <div className="aspect-video relative mb-4 overflow-hidden rounded-md">
        <Image
          src={skin.ImageSkin}
          alt={skin.NameSkin}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-lg font-semibold text-white text-center mb-2">
        {skin.NameSkin}
      </h3>
      <p className="text-sm text-center text-blue-200 capitalize">
        {skin.Rarity}
      </p>
      
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{ mixBlendMode: 'overlay' }}
        animate={{
          x: ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      />
    </motion.div>
  );
}