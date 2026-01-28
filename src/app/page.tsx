import { HeroSection } from "@/components/sections/hero";
import { OpportunitySection } from "@/components/sections/opportunity";
import { ExperienceSection } from "@/components/sections/experience";
import { WhyUsSection } from "@/components/sections/why-us";
import { OfferNeedSection } from "@/components/sections/offer-need";
import { RosterSection } from "@/components/sections/roster";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <OpportunitySection />
      <ExperienceSection />
      <WhyUsSection />
      <OfferNeedSection />
      <RosterSection />
      {/* Contact Section can be a separate page or linked here if implemented as a section. 
          For now, buttons link to #contact so we might want a contact section or footer handles it. 
          Assuming Footer handles general contact info + maybe a dedicated section later. */}
    </div>
  );
}
