import Features from "./components/feature";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Team from "./components/team";

export default function Home() {
   return (
      <main>
         <Navbar />
         <Hero />
         <Features />
         <Team />
         <Footer />
      </main>
   );
}
