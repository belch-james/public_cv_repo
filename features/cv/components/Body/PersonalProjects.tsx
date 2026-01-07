import { ProjectList } from "@components/ui";
import type { WorkExperience } from "@data/types/cv_types";

interface PersonalProjectsProps {
  workType: WorkExperience[];
}

export const PersonalProjects = ({ workType }: PersonalProjectsProps) => {
  return <ProjectList workType={workType} />;
};
