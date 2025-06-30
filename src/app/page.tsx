import Header from "@/components/header";
import NaserApp from "@/components/naser-app";
import { branches } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <NaserApp branches={branches} />
      </main>
    </div>
  );
}
