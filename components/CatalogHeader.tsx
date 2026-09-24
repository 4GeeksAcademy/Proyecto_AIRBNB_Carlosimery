import Link from "next/link";

type CatalogHeaderProps = {
  sortOrder: "asc" | "desc";
  onSortChange: (value: "asc" | "desc") => void;
};

export const CatalogHeader = ({ sortOrder, onSortChange }: CatalogHeaderProps) => (
  <div className="mb-7 flex flex-col gap-4 border-b border-[#eeeeee] pb-6 sm:flex-row sm:items-end sm:justify-between">
    <div><p className="mb-2 text-sm font-semibold text-[#717171]">Resultados de búsqueda</p><h1 className="text-2xl font-bold tracking-[-0.03em] sm:text-3xl">Alojamientos disponibles</h1><p className="mt-2 text-sm text-[#717171]">8 alojamientos encontrados</p></div>
    <label className="flex items-center gap-3 text-sm font-semibold"><span>Ordenar por</span><select className="rounded-full border border-[#b7b7b7] bg-white px-4 py-2.5 text-sm font-medium outline-none transition-shadow focus:border-[#222222] focus:ring-2 focus:ring-[#222222]/10" value={sortOrder} onChange={(event) => onSortChange(event.target.value as "asc" | "desc")} aria-label="Ordenar resultados por precio"><option value="asc">Precio: Ascendente</option><option value="desc">Precio: Descendente</option></select></label>
  </div>
);

export const CatalogTopBar = () => (
  <header className="border-b border-[#eeeeee] bg-white"><div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 lg:px-10"><Link href="/" className="flex items-center gap-1.5" aria-label="Volver al inicio"><span className="text-3xl leading-none text-[#e31c5f]">⌂</span><span className="text-[22px] font-bold tracking-[-0.04em] text-[#e31c5f]">airbnb</span></Link><div className="flex items-center gap-2 text-sm text-[#555555]"><Link className="hidden rounded-full px-4 py-2 font-semibold transition-colors hover:bg-[#f7f7f7] sm:block" href="/">Explorar alojamientos</Link><button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f7f7] text-lg transition-colors hover:bg-[#eeeeee]" type="button" aria-label="Abrir menú de usuario">☰</button></div></div></header>
);
