import MainWrapper from "~/app/MainWrapper";
import Header from "~/app/(headerPart)/Header";
import WorkStudySection from "~/app/(history)/WorkStudySection";
import ProjectSection from "~/app/(projects)/ProjectSection";
import Footer from "~/app/(footer)/Footer";
import Skills from "~/app/(skills)/Skills";

export default function HomePage() {
  return (
    <MainWrapper>
      <div
        className={
          "flex w-full max-w-screen-md flex-col gap-10 px-5 md:w-1/2 md:px-0"
        }
      >
        <Header />
        <WorkStudySection />
        <Skills />
        <ProjectSection />
        <Footer />
      </div>
    </MainWrapper>
  );
}
