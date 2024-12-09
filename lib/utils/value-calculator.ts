import { Skin } from '../types';

const BASE_SKIN_VALUE = 3; // Each skin costs R$3

export function calculateAccountValue(skins: Skin[] = []): number {
  if (!Array.isArray(skins) || skins.length === 0) return 0;

  // Calculate total value based on number of skins
  const totalValue = skins.length * BASE_SKIN_VALUE;

  // Add small random variation (±1%)
  const variation = 0.99 + (Math.random() * 0.02);
  
  return Math.round(totalValue * variation);
}

export function getValueRange(skins: Skin[] = []): { min: number; max: number } {
  const baseValue = calculateAccountValue(skins);
  return {
    min: Math.round(baseValue * 0.95),
    max: Math.round(baseValue * 1.05)
  };
}