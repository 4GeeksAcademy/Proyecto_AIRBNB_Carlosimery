import Link from "next/link";

type HomeHeaderProps = {
  search: string;
  onSearch: (value: string) => void;
};

export const HomeHeader = ({ search, onSearch }: HomeHeaderProps) => (
  <header className="border-b border-[#eeeeee] bg-white">
    <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 py-4 lg:px-10">
      <Link href="#top" className="flex shrink-0 items-center gap-1.5" aria-label="Airbnb inicio">
        <span className="text-3xl leading-none text-[#e31c5f]">⌂</span>
        <span className="text-[22px] font-bold tracking-[-0.04em] text-[#e31c5f]">airbnb</span>
      </Link>
      <nav className="hidden items-center gap-8 text-sm font-semibold text-[#555555] md:flex" aria-label="Navegación principal">
        <Link className="border-b-2 border-[#222222] py-3 text-[#222222]" href="#alojamientos">Todo</Link>
        <Link className="py-3 transition-colors hover:text-[#e31c5f]" href="/catalog">Alojamientos</Link>
        <Link className="py-3 transition-colors hover:text-[#e31c5f]" href="#alojamientos">Experiencias</Link>
        <Link className="py-3 transition-colors hover:text-[#e31c5f]" href="#alojamientos">Servicios</Link>
      </nav>
      <div className="flex items-center gap-2">
        <button className="hidden rounded-full px-3 py-2 text-sm font-semibold transition-colors hover:bg-[#f7f7f7] sm:block" type="button">Pon tu espacio en Airbnb</button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f7f7] text-lg transition-colors hover:bg-[#eeeeee]" type="button" aria-label="Cambiar idioma">◎</button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f7f7] text-lg transition-colors hover:bg-[#eeeeee]" type="button" aria-label="Abrir menú de usuario">☰</button>
      </div>
    </div>
    <div className="mx-auto max-w-[760px] px-5 pb-5">
      <div className="flex items-center rounded-full border border-[#dddddd] bg-white p-1.5 shadow-[0_3px_16px_rgba(0,0,0,0.10)] focus-within:shadow-[0_4px_20px_rgba(0,0,0,0.16)]">
        <label className="min-w-0 flex-1 px-4 py-1.5">
          <span className="block text-[11px] font-bold">¿A dónde?</span>
          <input className="w-full truncate bg-transparent text-sm text-[#717171] outline-none placeholder:text-[#717171]" type="search" value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Busca destinos, ciudades o categorías" aria-label="Buscar alojamientos" />
        </label>
        <div className="hidden border-l border-[#dddddd] px-5 py-1.5 sm:block"><span className="block text-[11px] font-bold">Fechas</span><span className="text-sm text-[#717171]">Agrega fechas</span></div>
        <div className="hidden border-l border-[#dddddd] px-5 py-1.5 lg:block"><span className="block text-[11px] font-bold">Quién</span><span className="text-sm text-[#717171]">¿Cuántos?</span></div>
        <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e31c5f] text-xl text-white transition-transform hover:scale-105" type="button" aria-label="Buscar">⌕</button>
      </div>
    </div>
  </header>
);
