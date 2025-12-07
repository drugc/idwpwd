import { LanyardResponse } from '../types';

export const fetchLanyardStatus = async (userId: string): Promise<LanyardData | null> => {
  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Error fetching status: ${response.statusText}`);
    }
    const json: LanyardResponse = await response.json();
    if (json.success) {
      return json.data;
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch Lanyard data", error);
    return null;
  }
};

// Helper types imported locally to avoid circular dependencies if needed, 
// but here we just import the type for the return value.
import { LanyardData } from '../types';