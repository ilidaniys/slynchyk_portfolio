import MainWrapper from "~/app/MainWrapper";
import Header from "~/app/(headerPart)/Header";
import WorkStudySection from "~/app/(history)/WorkStudySection";
import ProjectSection from "~/app/(projects)/ProjectSection";
import Footer from "~/app/(footer)/Footer";

export default function HomePage() {
  return (
    <MainWrapper>
      <div className={"flex w-1/2 flex-col gap-10"}>
        <Header />
        <WorkStudySection />
        <ProjectSection />
        <Footer />
      </div>
    </MainWrapper>
  );
}
