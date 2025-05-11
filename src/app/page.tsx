'use client'
import Image from "next/image";
import React from "react";
import Game from "./game";

export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="place-items-center">
        <h1 className="text-xl">Welcome to Tre-I-Rad!</h1>
        <p className="text-sm">Tre-I-Rad is the swedish equivalent for tic-tac-toe. Made by Per-Erik Ljung with only limited tutorial knowledge from the past and only documentations from the technologi that was used. </p>
      </div>
      <main>
        < Game/>
      </main>
      <footer>
      </footer>
    </div>
  );
}
