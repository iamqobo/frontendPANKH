import React from "react";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import MissionVision from "../components/MissionVision";
import ProgramHighlights from "../components/ProgramHighlights";
import ImpactStories from "../components/ImpactStories";
import PodcastFeature from "../components/PodcastFeature";
import DisabilityInclusionHighlight from "../components/DisabilityInclusionHighlight";
import UdaanToSpacePreview from "../components/UdaanToSpacePreview";
import Testimonials from "../components/Testimonials";
import DonationCTA from "../components/DonationCTA";
import UNSDGAligned from "../components/UNSDGAligned";
import ImpactAreas from "../components/ImpactAreas";

const Home = () => {
  return (
    <div>
      <Hero />
      <Statistics />
      <MissionVision />
      <ProgramHighlights />
      <ImpactStories />
      <PodcastFeature />
      <DisabilityInclusionHighlight />
      <UdaanToSpacePreview />
      <UNSDGAligned />
      <ImpactAreas />
      <Testimonials />
      <DonationCTA />
    </div>
  );
};

export default Home;
