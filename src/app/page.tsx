import MainWrapper from "~/app/MainWrapper";
import Header from "~/app/(headerPart)/Header";
import WorkStudy from "~/app/(history)/WorkStudy";

export default function HomePage() {
  return (
    <MainWrapper>
      <div className={"flex w-1/2 flex-col gap-5"}>
        <Header />
        <WorkStudy />
      </div>
    </MainWrapper>
  );
}
