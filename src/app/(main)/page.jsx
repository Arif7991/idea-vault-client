"use client";

import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import Hero from "@/components/home/Hero/Hero";
import TrendingIdeas from "@/components/home/TrendingIdeas/TrendingIdeas";
import Categories from "@/components/home/Categories/Categories";
import SuccessStories from "@/components/home/SuccessStories/SuccessStories";
import CTA from "@/components/home/CTA/CTA";

export default function Home() {
   useEffect(() => {
    console.log(authClient);
    console.log(Object.keys(authClient));
  }, []);
  return (
    <>
      <Hero />
      <TrendingIdeas />
      <Categories />
      <SuccessStories />
      <CTA />
    </>
  );
}