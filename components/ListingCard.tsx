import Link from "next/link";
import type { CatalogListing } from "@/types/catalog";

type ListingCardProps = {
  listing: CatalogListing;
};

export const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <article className="group min-w-0">
      <div className={`relative aspect-[1.08] overflow-hidden rounded-2xl ${listing.imageClass}`}>
        <Link className="absolute inset-0 z-0" href={`/rooms/${listing.id}`} aria-label={`Ver ${listing.title}`} />
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center text-5xl opacity-30 transition-transform duration-500 group-hover:scale-110">▧</div>
        <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold shadow-sm">Favorito entre huéspedes</span>
        <button className="absolute right-3 top-3 z-10 text-2xl leading-none text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.75)] transition-transform hover:scale-110" type="button" aria-label={`Guardar ${listing.title}`}>
          ♡
        </button>
      </div>
      <div className="pt-3">
        <h2 className="truncate text-sm font-semibold">
          <Link className="hover:underline" href={`/rooms/${listing.id}`}>
            {listing.title}
          </Link>
        </h2>
        <p className="mt-1 truncate text-sm text-[#717171]">{listing.location}</p>
        <p className="mt-1 text-sm"><span className="font-semibold">{listing.price}</span> noche</p>
        <p className="mt-1 text-sm text-[#555555]">★ {listing.rating}</p>
      </div>
    </article>
  );
};
