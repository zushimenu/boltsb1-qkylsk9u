'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Skin } from '@/lib/types';
import { Button } from './button';

interface SkinsCarouselProps {
  skins: Skin[];
}

export function SkinsCarousel({ skins }: SkinsCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(skins.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentSkins = skins.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 z-10 bg-blue-500/20 hover:bg-blue-500/30"
            onClick={prevPage}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </Button>

          <div className="flex gap-4 px-12">
            <AnimatePresence mode="wait">
              {currentSkins.map((skin, index) => (
                <motion.div
                  key={`${skin.NameSkin}-${currentPage}-${index}`}
                  className="flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="relative group">
                    <div className="aspect-[16/9] rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
                      <img
                        src={skin.ImageSkin}
                        alt={skin.NameSkin}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-white text-center font-medium">
                        {skin.NameSkin}
                      </h3>
                      <p className="text-blue-200 text-sm text-center capitalize">
                        {skin.Rarity}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 z-10 bg-blue-500/20 hover:bg-blue-500/30"
            onClick={nextPage}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentPage ? 'bg-blue-500' : 'bg-blue-500/20'
            }`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    </div>
  );
}