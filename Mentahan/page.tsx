"use client";
import { useEffect, useState } from "react";
import RenderForm, { Props } from "./go/_components/render-form";
import Header from "./Header"; // Impor komponen Header

export default function Home({ searchParams }: Readonly<Props>) {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleLoadImage = async () => {
    const imageUrl = "/A2.png";
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;
      localStorage.setItem("customFrameUrl", result);
    };

    setFileName("A2.png");
    reader.readAsDataURL(blob);
  };

  useEffect(() => {
    handleLoadImage();
  }, []);

  return (
    <div className="w-screen flex flex-col h-screen mt-6 md:mt-20">
    <Header />
    <div className="flex-1 flex items-center justify-center flex-col gap-12 p-6">
      <div className="w-full md:w-1/2">
        <h1 className="text-[22px] sm:text-[36px] font-bold leading-[130%] mb-[18px] text-center">
          LKMM-TD 2024
        </h1>
        <p className="text-[18px] text-neutral-500 leading-[130%] text-center mt-1 ">
          Silahkan pilih foto dan buat Twibbon kamu
        </p>
      </div>
      <RenderForm searchParams={searchParams} />
    </div>
  </div>
  
  );
}
