'use client';

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Algo deu errado!</h2>
      <Button
        onClick={reset}
        variant="outline"
        className="hover:bg-blue-600 hover:text-white"
      >
        Tentar novamente
      </Button>
    </div>
  );
}