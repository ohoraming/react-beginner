import {Button, Separator} from "@/components";
import {AtSign, TvMinimalPlay} from "lucide-react";

function AppFooter() {
    return (
        <footer className="w-full flex flex-col justify-center items-center bg-gray-900">
            <div className="w-full max-w-[1328px] flex flex-col gap-6 p-6 pb-18">
                <div className="w-full flex justify-between items-start gap-4">
                    <div className="flex flex-col items-start">
                        <div className="flex flex-col items-start">
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">나만의 학습 여정이,</h3>
                            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">나만의 창작으로 이어지는 플랫폼</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="border-0">
                                <TvMinimalPlay className="w-6 h-6"/>
                            </Button>
                            <Button variant="outline" size="icon" className="border-0">
                                <AtSign className="w-6 h-6"/>
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="cursor-pointer transition-all duration-500 hover:font-medium">이용약관</p>
                        <Separator orientation="vertical" className="!h-[14px]"/>
                        <p className="cursor-pointer transition-all duration-500 hover:font-medium">개인정보처리방침</p>
                        <Separator orientation="vertical" className="!h-[14px]"/>
                        <p className="cursor-pointer transition-all duration-500 hover:font-medium">클래스 론칭 문의</p>
                    </div>
                </div>
                <Separator/>
                <div className="w-full flex justify-between items-start">
                    <div className="h-full flex flex-col justify-between">
                        <div className="flex flex-col">
                            <p className="h-10 font-semibold text-base">고객센터</p>
                            <div className="flex flex-col items-start gap-1">
                                <p>평일 09:00 ~ 18:00</p>
                                <p>문의: ohora.ming@gmail.com</p>
                            </div>
                        </div>
                        <p>ⓒ 가나다라 all rights reserved</p>
                    </div>
                    <div className="flex flex-col justify-start">
                        <p className="h-10 font-semibold text-base">사업자 정보</p>
                        <div className="flex flex-col items-start gap-1">
                            <p>대표이사: 오호라밍</p>
                            <p>사업자 번호: 123-45-67890</p>
                            <p>통신판매신고번호: 2025-대한민국-0123</p>
                            <p>주소: 서울특별시 가나구 다라대로 123길 00</p>
                            <p>대표번호: 010-1111-2222</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export { AppFooter };