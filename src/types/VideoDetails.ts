interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Embed {
  iframeUrl: string;
  width: number;
  height: number;
}

export interface Quality {
  id: number;
  type: 'video' | 'audio';
  quality?: string;
  bitrate: number;
  size: string;
  mime: string;
}

export interface VideoInfo {
  title: string;
  description: string | null;
  author: string;
  lengthSeconds: string;
  viewCount: string;
  keywords: string[];
  isLiveContent: boolean;
  thumbnail: Thumbnail[];
  embed: Embed;
  ownerProfileUrl: string;
  externalChannelId: string;
  isFamilySafe: boolean;
  availableCountries: string[];
  isUnlisted: boolean;
  hasYpcMetadata: boolean;
  category: string;
  publishDate: string;
  ownerChannelName: string;
  uploadDate: string;
  isShortsEligible: boolean;
  externalVideoId: string;
  likeCount: string;
  canonicalUrl: string;
  availableQuality: Quality[];
}
