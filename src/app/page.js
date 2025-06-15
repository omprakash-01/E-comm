"use client"
import LaptopStore from "@/components/Home/LaptopStore"
import HeroSection from "@/components/Home/HeroSection"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Page() {
    const router = useRouter();
    const { data: session,} = useSession();

    if (!session) {
      router.push("/login");
      return null;
    }

  return (
    <>
    <HeroSection/>
    <LaptopStore/>
    </>
  )
}
