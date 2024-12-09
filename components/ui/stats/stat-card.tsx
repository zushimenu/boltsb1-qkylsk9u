import { Card } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description: string;
  imageSrc?: string;
}

export function StatCard({
  title,
  value,
  icon,
  description,
  imageSrc
}: StatCardProps) {
  return (
    <Card className="h-full p-6 bg-gradient-to-br from-blue-900/80 to-blue-800/80 border-blue-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-blue-100">{title}</h3>
        <div className="text-blue-400">{icon}</div>
      </div>
      <div className="flex items-center gap-3">
        {imageSrc && (
          <div className="relative w-12 h-12 flex-shrink-0">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="text-2xl font-bold text-white mb-1">{value}</div>
          <p className="text-sm text-blue-200">{description}</p>
        </div>
      </div>
    </Card>
  );
}