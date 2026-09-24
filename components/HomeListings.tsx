import { ListingCard } from "@/components/ListingCard";
import type { CatalogListing } from "@/types/catalog";

type HomeListingsProps = {
  listings: CatalogListing[];
  isLoading: boolean;
};

export const HomeListings = ({ listings, isLoading }: HomeListingsProps) => (
  <section id="alojamientos" aria-live="polite">
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <h1 className="text-xl font-bold tracking-[-0.02em] sm:text-2xl">Alojamientos populares en Lecherías</h1>
        <p className="mt-1 text-sm text-[#717171]">Encuentra un lugar que se sienta como tuyo.</p>
      </div>
      {!isLoading && <span className="hidden text-sm text-[#717171] sm:block">{listings.length} resultados</span>}
    </div>
    {isLoading ? <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5" aria-label="Cargando alojamientos">{Array.from({ length: 5 }).map((_, index) => <div className="animate-pulse" key={index}><div className="aspect-[1.08] rounded-2xl bg-[#eeeeee]" /><div className="mt-3 h-4 w-4/5 rounded bg-[#eeeeee]" /><div className="mt-2 h-3 w-3/5 rounded bg-[#f3f3f3]" /></div>)}</div> : listings.length > 0 ? <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">{listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}</div> : <div className="rounded-2xl border border-dashed border-[#d7d7d7] px-6 py-16 text-center"><p className="text-lg font-semibold">No encontramos alojamientos</p><p className="mt-2 text-sm text-[#717171]">Prueba con otra búsqueda o categoría.</p></div>}
  </section>
);
