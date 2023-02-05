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
    <div style={{ backgroundColor: "rgb(26,35,46)", overflow: "hidden" }}>
      <Navbar />
      <Hero />
      <div style={{ position: "relative" }}>
        <About />
        <div className="gradient-about-explore" style={{ zIndex: 0 }} />
        <Explore />
      </div>
      <div style={{ position: "relative" }}>
        <GetStarted />
        <div className="gradient-start-new" style={{ zIndex: 0 }} />
        <WhatsNew />
      </div>
      <div style={{ position: "relative" }}>
        <World />
        <div className="gradient-start-new" style={{ zIndex: 0 }} />
        <Insights />
      </div>
      <Feedback />
      <Footer />
    </div>
  );
}
