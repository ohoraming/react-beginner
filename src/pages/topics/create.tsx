import {Button, SelectGroup, SelectLabel, Skeleton} from "@/components";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {ArrowLeft, Asterisk, BookOpenCheck, ImageOff, Save} from "lucide-react";
import {TOPIC_CATEGORY} from "@/constants/category.constant.tsx";

export default function CreateTopic() {
    return (
        <main className="w-full h-full min-h-[1024px] flex gap-6 p-6">
            {/* 하단 버튼 */}
            <div className="fixed right-1/2 bottom-10 translate-x-1/2 z-20 flex items-center gap-2">
                <Button variant="outline" size="icon" className="cursor-pointer">
                    <ArrowLeft/>
                </Button>
                <Button variant="outline" className="w-22 !bg-yellow-800/50 cursor-pointer">
                    <Save/>저장
                </Button>
                <Button variant="outline" className="w-22 !bg-emerald-800/50 cursor-pointer">
                    <BookOpenCheck/>발행
                </Button>
            </div>
            {/* 토픽 작성하기 */}
            <section className="w-3/4 h-full flex flex-col gap-6">
                <div className="flex flex-col pb-6 border-b">
                    <span className="font-semibold text-red-400">Step 1</span>
                    <span className="font-semibold">토픽 작성하기</span>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="topic-title" className="text-muted-foreground">
                        <Asterisk size={14} className="font-semibold text-red-400"/>
                        <span>제목</span>
                    </Label>
                    <Input type="text" id="topic-title" placeholder="토픽 제목을 입력하세요." className="h-16 pl-6 !text-lg placeholder:text-lg placeholder:font-semibold border-0" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-muted-foreground">
                        <Asterisk size={14} className="font-semibold text-red-400"/>
                        <span>본문</span>
                    </Label>
                    <Skeleton className="w-full h-100"/>
                </div>
            </section>
            {/* 카테고리 및 썸네일 등록 */}
            <section className="w-1/4 h-full flex flex-col gap-6">
                <div className="flex flex-col pb-6 border-b">
                    <span className="font-semibold text-red-400">Step 2</span>
                    <span className="font-semibold">카테고리 및 썸네일 등록</span>
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-muted-foreground">
                        <Asterisk size={14} className="font-semibold text-red-400"/>
                        <span>카테고리</span>
                    </Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="토픽(주제) 선택" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>토픽(주제)</SelectLabel>
                                {TOPIC_CATEGORY.map((topic)=>{
                                    return (<SelectItem key={topic.id} value={topic.label}>{topic.label}</SelectItem>);
                                })}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="topic-content" className="text-muted-foreground">
                        <Asterisk size={14} className="font-semibold text-red-400"/>
                        <span>썸네일</span>
                    </Label>
                    <Skeleton className="w-full aspect-video"/>
                    <Button variant="outline" className="border-0">
                        <ImageOff/>
                        썸네일 제거
                    </Button>
                </div>
            </section>
        </main>
    );
}