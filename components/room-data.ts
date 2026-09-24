import { initialListings } from "@/components/listings";
import type { CatalogListing } from "@/types/catalog";
import type { Room } from "@/types/room";

const defaultGallery = ["bg-[linear-gradient(135deg,#d8d3c8_0%,#8c9da0_45%,#3c4f52_100%)]", "bg-[linear-gradient(135deg,#e7d6bc_0%,#a6b9b4_50%,#64706d_100%)]", "bg-[linear-gradient(135deg,#b9c8c8_0%,#e8d6b5_55%,#6b7775_100%)]"];
const amenityOptions = [{ icon: "⌁", label: "Wifi de alta velocidad" }, { icon: "♨", label: "Piscina" }, { icon: "♧", label: "Cocina equipada" }, { icon: "▣", label: "Estacionamiento gratuito" }, { icon: "◒", label: "Vista al mar" }, { icon: "♨", label: "Aire acondicionado" }, { icon: "◷", label: "Llegada autónoma" }, { icon: "♢", label: "Lavadora" }];
const galleryByListing: Record<number, string[]> = { 1: defaultGallery, 2: ["bg-[linear-gradient(135deg,#f0b36a_0%,#577f9d_46%,#172d43_100%)]", "bg-[linear-gradient(135deg,#f5d19f_0%,#739bb2_52%,#26455f_100%)]", "bg-[linear-gradient(135deg,#d6e2db_0%,#6eabb8_48%,#1d5369_100%)]"] };

export const getRoom = (listing: CatalogListing): Room => ({ ...listing, host: listing.id % 2 === 0 ? "Camila" : "Andrés", hostYears: listing.id % 2 === 0 ? 6 : 8, reviews: 42 + listing.id * 19, guests: 4 + (listing.id % 3), bedrooms: 2 + (listing.id % 2), beds: 2 + (listing.id % 3), bathrooms: 2, amenities: amenityOptions, gallery: galleryByListing[listing.id] ?? defaultGallery });

export const findRoom = (id: string) => getRoom(initialListings.find((listing) => listing.id === Number(id)) ?? initialListings[0]);
export const priceValue = (price: string) => Number(price.replace(/[^0-9]/g, ""));
