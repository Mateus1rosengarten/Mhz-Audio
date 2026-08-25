import { HeroDesktop } from "./HeroDesktop";
import { HeroMobile } from "./HeroMobile";

export function Hero() {
  return (
    <div id="home">
      <div className="lg:hidden">
        <HeroMobile />
      </div>

      <div className="hidden lg:block">
        <HeroDesktop />
      </div>
    </div>
  );
}
