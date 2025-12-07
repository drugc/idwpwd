export interface Timestamps {
  start: number;
  end?: number;
}

export interface Assets {
  large_image?: string;
  large_text?: string;
  small_image?: string;
  small_text?: string;
}

export interface Activity {
  type: number;
  state?: string;
  name: string;
  id: string;
  emoji?: {
    name: string;
    id?: string;
    animated?: boolean;
  };
  created_at: number;
  timestamps?: Timestamps;
  sync_id?: string;
  session_id?: string;
  party?: {
    id?: string;
  };
  flags?: number;
  details?: string;
  assets?: Assets;
  application_id?: string;
}

export interface DiscordUser {
  username: string;
  public_flags?: number;
  id: string;
  discriminator: string;
  avatar: string | null;
}

export interface LanyardData {
  kv: Record<string, string>;
  spotify: {
    track_id: string;
    timestamps: Timestamps;
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
  } | null;
  discord_user: DiscordUser;
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  activities: Activity[];
  active_on_discord_web: boolean;
  active_on_discord_mobile: boolean;
  active_on_discord_desktop: boolean;
}

export interface LanyardResponse {
  success: boolean;
  data: LanyardData;
}