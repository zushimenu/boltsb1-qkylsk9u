export interface Skin {
  NameSkin: string;
  ImageSkin: string;
  Rarity: string;
}

export interface Agent {
  uuid: string;
  displayName: string;
  displayIcon: string;
}

export interface AccountInfo {
  level: number;
  rank: string;
  rankTitle: string;
  rankImage: string;
  username: string;
  region: string;
  lastActivity: number;
  valorantPoints: number;
  agents: Agent[];
  skins: Skin[];
}

export interface ApiResponse {
  item: {
    riot_username: string;
    riot_valorant_level: number;
    riot_valorant_rank: number;
    riot_valorant_rank_type: string;
    riot_valorant_region: string;
    riot_valorant_wallet_vp: number;
    riot_last_activity: number;
    valorantRankTitle: string;
    valorantRankImgPath: string;
    valorantInventory: {
      WeaponSkins: string[];
      Agent: string[];
    };
  };
}