"use client";

import StoryHero from "./sections/StoryHero";
import StoryProblem from "./sections/StoryProblem";
import StoryLearning from "./sections/StoryLearning";
import StoryFirstProjects from "./sections/StoryFirstProjects";
import StoryDataDriven from "./sections/StoryDataDriven";
import StoryJourney from "./sections/StoryJourney";
import StoryMission from "./sections/StoryMission";

export default function AboutStoryPage() {
  return (
    <main className="min-h-screen">
      <StoryHero />
      <StoryProblem />
      <StoryLearning />
      <StoryFirstProjects />
      <StoryDataDriven />
      <StoryJourney />
      <StoryMission />
    </main>
  );
}
