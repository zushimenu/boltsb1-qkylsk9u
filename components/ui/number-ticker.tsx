'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { formatCurrency } from '@/lib/utils/currency-helpers';

interface NumberTickerProps {
  value: number;
}

export function NumberTicker({ value }: NumberTickerProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  const spring = useSpring(value, {
    mass: 0.8,
    stiffness: 75,
    damping: 15
  });

  const display = useTransform(spring, (current) => 
    formatCurrency(Math.max(0, Math.floor(current)))
  );

  useEffect(() => {
    setIsMounted(true);
    spring.set(value);
  }, [value, spring]);

  if (!isMounted) {
    return <span>{formatCurrency(Math.max(0, value))}</span>;
  }

  return <motion.span>{display}</motion.span>;
}