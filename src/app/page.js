import "./lib/fontawesome";
import Image from "next/image";
import Navbar from './components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
    </div>
  );
}
