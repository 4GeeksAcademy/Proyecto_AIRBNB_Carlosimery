"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AmenitiesGrid } from "@/components/AmenitiesGrid";
import { BookingCard } from "@/components/BookingCard";
import { RoomGallery } from "@/components/RoomGallery";
import { RoomOverview } from "@/components/RoomOverview";
import { RoomTopBar } from "@/components/RoomTopBar";
import { findRoom } from "@/components/room-data";
import type { Room } from "@/types/room";

export const RoomPage = () => {
  const params = useParams<{ id: string }>();
  const [room, setRoom] = useState<Room | null>(null);
  const [loadedId, setLoadedId] = useState<string | null>(null);
  const [activePhoto, setActivePhoto] = useState(0);
  const isLoading = loadedId !== params.id;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setRoom(findRoom(params.id));
      setLoadedId(params.id);
      setActivePhoto(0);
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [params.id]);

  if (isLoading || !room) return <main className="min-h-screen bg-white px-5 py-8 lg:px-10"><div className="mx-auto max-w-[1200px] animate-pulse"><div className="h-5 w-28 rounded bg-[#eeeeee]" /><div className="mt-8 h-[360px] rounded-3xl bg-[#eeeeee] sm:h-[480px]" /><div className="mt-8 h-8 w-2/3 rounded bg-[#eeeeee]" /><div className="mt-4 h-5 w-1/3 rounded bg-[#f3f3f3]" /></div><p className="mt-8 text-center text-sm text-[#717171]">Cargando alojamiento...</p></main>;

  const previousPhoto = () => setActivePhoto((current) => (current - 1 + room.gallery.length) % room.gallery.length);
  const nextPhoto = () => setActivePhoto((current) => (current + 1) % room.gallery.length);

  return <main className="min-h-screen bg-white text-[#222222]"><RoomTopBar roomTitle={room.title} /><div className="mx-auto max-w-[1200px] px-5 pb-7 lg:px-0"><RoomGallery room={room} activePhoto={activePhoto} onPrevious={previousPhoto} onNext={nextPhoto} /><div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_380px]"><div><RoomOverview room={room} /><AmenitiesGrid amenities={room.amenities} /></div><BookingCard room={room} /></div></div></main>;
};
