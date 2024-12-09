import { API_CONFIG } from '../config/api';

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

export async function fetchValorantApi(endpoint: string) {
  const response = await fetch(`${API_CONFIG.VALORANT_API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`Valorant API request failed: ${response.statusText}`);
  }

  return response.json();
}