type Category = {
  label: string;
  icon: string;
};

type CategoryNavProps = {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

const categories: Category[] = [
  { label: "Todo", icon: "◉" },
  { label: "Playa", icon: "☀" },
  { label: "Mansiones", icon: "⌂" },
  { label: "Tendencias", icon: "✦" },
  { label: "Piscinas", icon: "◌" },
  { label: "Vistas increíbles", icon: "◒" },
  { label: "Cabañas", icon: "⌁" },
  { label: "Diseño", icon: "◇" },
];

export const CategoryNav = ({ activeCategory, onCategoryChange }: CategoryNavProps) => (
  <section className="-mx-5 mb-8 overflow-x-auto px-5 lg:-mx-10 lg:px-10" aria-label="Categorías">
    <div className="flex min-w-max gap-7 border-b border-[#eeeeee] pb-3">
      {categories.map((category) => (
        <button key={category.label} className={`group flex min-w-[62px] flex-col items-center gap-2 border-b-2 pb-3 text-xs transition-colors ${activeCategory === category.label ? "border-[#222222] font-bold text-[#222222]" : "border-transparent text-[#717171] hover:border-[#aaaaaa] hover:text-[#222222]"}`} type="button" onClick={() => onCategoryChange(category.label)} aria-pressed={activeCategory === category.label}>
          <span className="text-2xl leading-none grayscale transition group-hover:grayscale-0">{category.icon}</span>
          <span>{category.label}</span>
        </button>
      ))}
    </div>
  </section>
);
