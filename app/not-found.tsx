import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001B3D] via-[#003366] to-[#001B3D] flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-white">Conta Não Encontrada</h2>
        <p className="text-blue-200">Não foi possível encontrar a conta solicitada.</p>
        <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
          <Link href="/">Voltar ao Início</Link>
        </Button>
      </div>
    </div>
  );
}