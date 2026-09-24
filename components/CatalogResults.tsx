import { ListingCard } from "@/components/ListingCard";
import type { CatalogListing } from "@/types/catalog";

type CatalogResultsProps = {
  listings: CatalogListing[];
};

export const CatalogResults = ({ listings }: CatalogResultsProps) => <section aria-label="Lista de alojamientos"><div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2">{listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}</div></section>;

export const CatalogMap = () => <aside className="min-h-[360px] lg:sticky lg:top-6 lg:h-[calc(100vh-8rem)] lg:min-h-0" aria-label="Mapa de alojamientos"><div className="flex h-full min-h-[360px] items-center justify-center rounded-3xl bg-[#eeeeee] text-center shadow-inner"><div><div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">⌖</div><p className="text-lg font-bold">Mapa</p><p className="mt-1 text-sm text-[#717171]">Aquí aparecerán las ubicaciones</p></div></div></aside>;
