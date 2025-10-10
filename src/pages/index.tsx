import {AppSidebar} from "@/components/common/AppSidebar.tsx";
import {SkeletonHotTopic, SkeletonNewTopic} from "@/components/skeleton";
import {Button} from "@/components";
import {PencilLine} from "lucide-react";
import {useNavigate} from "react-router";

function Index() {
    const navigate = useNavigate();
    return (
        <main className="w-full h-full min-h-[1024px] flex gap-6 p-6">
            {/* 새글 작성 버튼 */}
            <div className="fixed bottom-10 right-1/2 z-20 items-center translate-x-1/2 cursor-pointer">
                <Button variant="destructive" className="!py-5 !px-6 rounded-full" onClick={()=>navigate("/topics/create")}>
                    <PencilLine/>
                    나만의 토픽 작성
                </Button>
            </div>
            {/* 카테고리 사이드바 */}
            <AppSidebar/>
            {/* 토픽 컨텐츠 */}
            <section className="flex-1 flex flex-col gap-12">
                <div className="w-full flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <img src="/assets/fire.gif" alt="@IMG" className="w-7 h-7" />
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">핫토픽</h4>
                        </div>
                        <p className="text-md text-muted-foreground">지금 가장 주목받는 주제들을 살펴보고 다양한 관점의 인사이트를 얻어가세요.</p>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                        <SkeletonHotTopic/>
                        <SkeletonHotTopic/>
                        <SkeletonHotTopic/>
                        <SkeletonHotTopic/>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <img src="/assets/writing.gif" alt="@IMG" className="w-7 h-7" />
                            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">뉴토픽</h4>
                        </div>
                        <p className="text-md text-muted-foreground">새로운 시선으로 새로운 이야기를 시작하세요. 지금 바로 당신만의 토픽을 작성해보세요.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <SkeletonNewTopic/>
                        <SkeletonNewTopic/>
                        <SkeletonNewTopic/>
                        <SkeletonNewTopic/>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Index
