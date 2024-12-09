export function getRandomPastTimestamp(): number {
  const now = new Date();
  const threeMonthsAgo = new Date(now.getTime() - (90 * 24 * 60 * 60 * 1000));
  const fourMonthsAgo = new Date(now.getTime() - (120 * 24 * 60 * 60 * 1000));
  
  const randomTime = fourMonthsAgo.getTime() + 
    Math.random() * (threeMonthsAgo.getTime() - fourMonthsAgo.getTime());
  
  return Math.floor(randomTime / 1000); // Convert to Unix timestamp
}

export function formatLastActivity(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  const months = Math.floor(diffInDays / 30);
  const remainingDays = diffInDays % 30;

  if (months > 0) {
    return `${months} ${months === 1 ? 'mês' : 'meses'}`;
  }
  
  return `${diffInDays} ${diffInDays === 1 ? 'dia' : 'dias'} atrás`;
}