import { AccountInfo, ApiResponse, Skin, Agent } from './types';
import { API_CONFIG } from './config/api';
import { fetchWithAuth, fetchValorantApi } from './utils/api-helpers';
import { getRankImage, formatRegion } from './utils/rank-helpers';
import { getRandomPastTimestamp } from './utils/date-helpers';

export async function getRarities(): Promise<Record<string, 'legendary' | 'epic' | 'rare' | 'common'>> {
  const json = await fetchValorantApi('/contenttiers');
  const rarities: Record<string, 'legendary' | 'epic' | 'rare' | 'common'> = {};
  
  json.data.forEach((tier: any) => {
    const devName = tier.devName.toLowerCase();
    if (devName === 'legendary' || devName === 'epic' || devName === 'rare' || devName === 'common') {
      rarities[tier.uuid] = devName;
    }
  });
  
  return rarities;
}

async function getAgentInfo(agentId: string): Promise<Agent> {
  const data = await fetchValorantApi(`/agents/${agentId}`);
  return {
    uuid: data.data.uuid,
    displayName: data.data.displayName,
    displayIcon: data.data.displayIcon
  };
}

export async function getAccountInfo(id: string): Promise<AccountInfo> {
  try {
    const rarities: Record<string, 'legendary' | 'epic' | 'rare' | 'common'> = await getRarities();
    const data: ApiResponse = await fetchWithAuth(`/${id}`);
    
    if (!data?.item?.valorantInventory) {
      throw new Error('Invalid account data received');
    }

    const inventory = data.item.valorantInventory;
    const weaponSkins = inventory.WeaponSkins || [];
    const agentIds = inventory.Agent || [];

    // Fetch skins
    const skins = await Promise.all(
      weaponSkins.map(async (weaponId) => {
        const data = await fetchValorantApi(`/weapons/skins/${weaponId}`);
        
        return {
          NameSkin: data.data.displayName,
          ImageSkin: data.data.displayIcon || API_CONFIG.DEFAULT_SKIN_ICON,
          Rarity: rarities[data.data.contentTierUuid] || 'common'
        };
      })
    );

    // Fetch agents
    const agents = await Promise.all(
      agentIds.map(getAgentInfo)
    );

    // Generate random last activity timestamp
    const randomLastActivity = getRandomPastTimestamp();

    // Sort skins by rarity
    const order: Record<'legendary' | 'epic' | 'rare' | 'common', number> = { legendary: 1, epic: 2, rare: 3, common: 4 };
    skins.sort((a, b) => order[a.Rarity] - order[b.Rarity]);

    return {
      username: data.item.riot_username,
      level: data.item.riot_valorant_level,
      rank: data.item.valorantRankTitle,
      rankTitle: data.item.valorantRankTitle,
      rankImage: getRankImage(data.item.valorantRankImgPath),
      region: 'Brasil',
      lastActivity: randomLastActivity,
      valorantPoints: data.item.riot_valorant_wallet_vp,
      agents,
      skins
    };
  } catch (error) {
    console.error('Error fetching account info:', error);
    throw error;
  }
}