import CaseStudyPage from "@/components/myhiwi/cases/CaseStudyPage";
import { caseMetadata } from "@/components/myhiwi/cases/metadata";
import { getCaseStudy } from "@/content/case-studies";

const study = getCaseStudy("mannis-fahrschule");

export const metadata = caseMetadata(study);

export default function Page() {
  return <CaseStudyPage study={study} />;
}
