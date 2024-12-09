'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const COOKIE_NAME = 'account_value';
const COOKIE_EXPIRY = 7; // 7 dias

export function useAccountValue(accountId: string, initialValue: number = 0) {
  const [accountValue, setAccountValue] = useState<number>(initialValue);

  useEffect(() => {
    if (!accountId) return;
    
    const cookieKey = `${COOKIE_NAME}_${accountId}`;
    const savedValue = Cookies.get(cookieKey);

    if (savedValue && !isNaN(Number(savedValue))) {
      setAccountValue(Number(savedValue));
    } else {
      setAccountValue(initialValue);
      Cookies.set(cookieKey, String(initialValue), { expires: COOKIE_EXPIRY });
    }
  }, [accountId, initialValue]);

  return {
    accountValue,
    updateAccountValue: (newValue: number) => {
      if (!accountId || isNaN(newValue)) return;
      
      const validValue = Math.max(0, newValue);
      setAccountValue(validValue);
      Cookies.set(`${COOKIE_NAME}_${accountId}`, String(validValue), { expires: COOKIE_EXPIRY });
    },
  };
}