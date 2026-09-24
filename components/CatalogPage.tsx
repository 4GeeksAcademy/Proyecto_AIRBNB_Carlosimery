"use client";

import { useMemo, useState } from "react";
import { CatalogHeader, CatalogTopBar } from "@/components/CatalogHeader";
import { CatalogMap, CatalogResults } from "@/components/CatalogResults";
import { initialListings } from "@/components/listings";

type SortOrder = "asc" | "desc";
const priceValue = (price: string) => Number(price.replace(/[^0-9]/g, ""));

export const CatalogPage = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const sortedListings = useMemo(() => [...initialListings].sort((first, second) => { const difference = priceValue(first.price) - priceValue(second.price); return sortOrder === "asc" ? difference : -difference; }), [sortOrder]);
  return <div className="min-h-screen bg-white text-[#222222]"><CatalogTopBar /><main className="mx-auto max-w-[1440px] px-5 py-8 lg:px-10"><CatalogHeader sortOrder={sortOrder} onSortChange={setSortOrder} /><div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)]"><CatalogResults listings={sortedListings} /><CatalogMap /></div></main></div>;
};
