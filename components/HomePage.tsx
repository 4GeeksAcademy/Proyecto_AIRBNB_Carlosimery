"use client";

import { useEffect, useState } from "react";
import { CategoryNav } from "@/components/CategoryNav";
import { HomeHeader } from "@/components/HomeHeader";
import { HomeListings } from "@/components/HomeListings";
import { initialListings } from "@/components/listings";
import type { CatalogListing } from "@/types/catalog";

const filterListings = (search: string, category: string) => initialListings.filter((listing) => {
  const normalizedSearch = search.trim().toLowerCase();
  const matchesCategory = category === "Todo" || listing.category === category;
  const matchesSearch = !normalizedSearch || `${listing.title} ${listing.location} ${listing.category}`.toLowerCase().includes(normalizedSearch);
  return matchesCategory && matchesSearch;
});

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todo");
  const [listings, setListings] = useState<CatalogListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => { setListings(initialListings); setIsLoading(false); }, 1000);
    return () => window.clearTimeout(timer);
  }, []);

  const updateSearch = (value: string) => { setSearch(value); if (!isLoading) setListings(filterListings(value, activeCategory)); };
  const updateCategory = (category: string) => { setActiveCategory(category); if (!isLoading) setListings(filterListings(search, category)); };

  return <div className="min-h-screen bg-white text-[#222222]"><HomeHeader search={search} onSearch={updateSearch} /><main id="top" className="mx-auto max-w-[1440px] px-5 py-7 lg:px-10"><CategoryNav activeCategory={activeCategory} onCategoryChange={updateCategory} /><HomeListings listings={listings} isLoading={isLoading} /></main></div>;
};
