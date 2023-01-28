import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";
import { Footer, Navbar } from "@/components";

export default function Home() {
  return (
    <div style={{ backgroundColor: "black", overflow: "hidden" }}>
      <Navbar />
      <Hero />
      <div style={{ position: "relative" }}>
        <About />
        <div className="gradient-about-explore" style={{ zIndex: 0 }} />
        <Explore />
      </div>
      <div style={{ position: "relative" }}>
        <GetStarted />
        <WhatsNew />
      </div>
      <div style={{ position: "relative" }}>
        <World />
        <Insights />
      </div>
      <Feedback />
      <Footer />
    </div>
  );
}
