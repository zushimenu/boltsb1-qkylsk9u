import { API_CONFIG } from '../config/api';
import { AccountInfo, ApiResponse } from '../types';
import { getRarities, getSkinInfo, getAgentInfo } from './valorant-api';
import { getRankImage } from '../utils/rank-helpers';
import { getRandomPastTimestamp } from '../utils/date-helpers';

export async function fetchWithAuth(endpoint: string) {
  const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${process.env.LZT_API_TOKEN}`,
      'Accept': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}

export async function getAccountInfo(id: string): Promise<AccountInfo> {
  try {
    const rarities = await getRarities();
    const data: ApiResponse = await fetchWithAuth(`/${id}`);
    
    if (!data?.item?.valorantInventory) {
      throw new Error('Invalid account data received');
    }

    const inventory = data.item.valorantInventory;
    const weaponSkins = inventory.WeaponSkins || [];
    const agentIds = inventory.Agent || [];

    // Fetch skins and agents in parallel
    const [skins, agents] = await Promise.all([
      Promise.all(weaponSkins.map(weaponId => getSkinInfo(weaponId, rarities))),
      Promise.all(agentIds.map(getAgentInfo))
    ]);

    // Sort skins by rarity
    const sortedSkins = skins.sort((a, b) => {
      const order: { [key: string]: number } = { legendary: 1, epic: 2, rare: 3, common: 4 };
      return order[a.Rarity] - order[b.Rarity];
    });

    return {
      username: data.item.riot_username,
      level: data.item.riot_valorant_level,
      rank: data.item.valorantRankTitle,
      rankTitle: data.item.valorantRankTitle,
      rankImage: getRankImage(data.item.valorantRankImgPath),
      region: 'Brasil',
      lastActivity: getRandomPastTimestamp(),
      valorantPoints: data.item.riot_valorant_wallet_vp,
      agents,
      skins: sortedSkins
    };
  } catch (error) {
    console.error('Error fetching account info:', error);
    throw error;
  }
}