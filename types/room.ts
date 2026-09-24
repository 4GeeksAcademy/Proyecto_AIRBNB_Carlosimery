import type { CatalogListing } from "@/types/catalog";

export type Room = CatalogListing & {
  host: string;
  hostYears: number;
  reviews: number;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenities: { icon: string; label: string }[];
  gallery: string[];
};
