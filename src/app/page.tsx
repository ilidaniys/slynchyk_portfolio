import MainWrapper from "~/app/MainWrapper";
import Header from "~/app/(headerPart)/Header";
import WorkStudySection from "~/app/(history)/WorkStudySection";
import ProjectSection from "~/app/(projects)/ProjectSection";
import Footer from "~/app/(footer)/Footer";
import Skills from "~/app/(skills)/Skills";

export default function HomePage() {
  return (
    <MainWrapper>
      <div className={"flex w-3/4 flex-col gap-10"}>
        <Header />
        <WorkStudySection />
        <Skills />
        <ProjectSection />
        <Footer />
      </div>
    </MainWrapper>
  );
}
