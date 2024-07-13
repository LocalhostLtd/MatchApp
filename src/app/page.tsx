"use client"

import HomeBackground from "../../public/homeBackgroundGreen.png";
import { AnimatedHamburger } from "@/components/AnimatedHamburger";
import Toolbar from "@/components/Toolbar";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import { auth } from "../../firebase/firebase";
import Login from "@/components/Login";
import SignUp from "@/components/SignUp";

export default function Home() {
  const [isActive, setActive] = useState(false);

  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${HomeBackground.src})` }}
    >
      <div className="fixed right-5 top-5">
        <AnimatedHamburger isActive={isActive} setActive={setActive} />
        <AnimatePresence mode="wait">
          {isActive && <Toolbar setActive={setActive} />}
        </AnimatePresence>
      </div>

      <div>
        <Login auth={auth} />
        <SignUp auth={auth} />
      </div>
    </div >
  );
}
