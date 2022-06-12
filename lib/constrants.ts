export interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
  picture: {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: [];
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata: string;
    created_at: string;
    updated_at: string;
  };
}
