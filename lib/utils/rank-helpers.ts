export function getRankImage(rankImagePath: string): string {
  return `https://lzt.market/${rankImagePath}`;
}

export function formatRegion(region: string): string {
  const regions: Record<string, string> = {
    'AP': 'Ásia Pacífico',
    'NA': 'América do Norte',
    'EU': 'Europa',
    'KR': 'Coreia',
    'BR': 'Brasil'
  };
  return regions[region] || region;
}