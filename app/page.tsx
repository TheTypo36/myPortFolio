import Hero from "@/components/Hero";
import Image from "next/image";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/ui/Grid";
export default function Home() {
  return (
    <main className="relative text-white flex-justify-center items-center flex-col overflow-hidden sm:px-10 px-5 bg-black-100">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: <FaHome />,
            },
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
