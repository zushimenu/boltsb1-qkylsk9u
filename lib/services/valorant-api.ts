import { API_CONFIG } from '../config/api';
import { Skin, Agent } from '../types';

export async function fetchValorantApi(endpoint: string) {
  const response = await fetch(`${API_CONFIG.VALORANT_API_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Valorant API request failed: ${response.statusText}`);
  }
  return response.json();
}

export async function getRarities() {
  const json = await fetchValorantApi('/contenttiers');
  const rarities: Record<string, string> = {};
  
  json.data.forEach((tier: any) => {
    rarities[tier.uuid] = tier.devName.toLowerCase();
  });
  
  return rarities;
}

export async function getSkinInfo(weaponId: string, rarities: Record<string, string>): Promise<Skin> {
  const data = await fetchValorantApi(`/weapons/skins/${weaponId}`);
  return {
    NameSkin: data.data.displayName,
    ImageSkin: data.data.displayIcon || API_CONFIG.DEFAULT_SKIN_ICON,
    Rarity: rarities[data.data.contentTierUuid] || 'common'
  };
}

export async function getAgentInfo(agentId: string): Promise<Agent> {
  const data = await fetchValorantApi(`/agents/${agentId}`);
  return {
    uuid: data.data.uuid,
    displayName: data.data.displayName,
    displayIcon: data.data.displayIcon
  };
}