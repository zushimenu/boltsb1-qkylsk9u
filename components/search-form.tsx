'use client';

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function SearchForm() {
  const router = useRouter();
  const [accountId, setAccountId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accountId) {
      router.push(`/${accountId}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
      <Input
        value={accountId}
        onChange={(e) => setAccountId(e.target.value)}
        placeholder="Digite o ID da Conta"
        required
        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
      />
      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
        <Search className="w-4 h-4 mr-2" />
        Buscar
      </Button>
    </form>
  );
}