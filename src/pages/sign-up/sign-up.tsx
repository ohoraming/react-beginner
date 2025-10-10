import {Button, Checkbox, Input, Label, Separator} from "@/components";
import {ArrowLeft, Asterisk, ChevronRight} from "lucide-react";

export default function SignUp() {
    return (
        // https://youtu.be/W_4QikL5ej0?si=7LtWx5wodF1UUU5z&t=73
        <main className="h-full w-full min-h-[720px] flex justify-center items-center p-6 gap-6">
            <div className="flex flex-col gap-4 w-100">
                <div className="pb-4">
                    <p className="text-2xl font-semibold">회원가입</p>
                    <p className="text-muted-foreground">회원가입을 위한 정보를 입력해주세요.</p>
                </div>
                {/* 회원가입폼 */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">
                            <Asterisk size={14} className="font-semibold text-red-400"/>
                            <span>이메일</span>
                        </Label>
                        <div className="flex gap-2">
                            <Input type="email" id="email" placeholder="이메일을 입력하세요." />
                            <Button variant={"outline"} className="cursor-pointer">본인인증</Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password">
                            <Asterisk size={14} className="font-semibold text-red-400"/>
                            <span>비밀번호</span>
                        </Label>
                        <Input type="password" id="password" placeholder="비밀번호를 입력하세요." />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password-check">
                            <Asterisk size={14} className="font-semibold text-red-400"/>
                            <span>비밀번호 확인</span>
                        </Label>
                        <Input type="password" id="password-check" placeholder="비밀번호 확인을 입력하세요." />
                    </div>
                    <div className="flex flex-col gap-4">
                        <Label>
                            <Asterisk size={14} className="font-semibold text-red-400"/>
                            <span>필수 동의 항목</span>
                        </Label>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <Checkbox id="terms-of-service" />
                                <Label htmlFor="terms-of-service">서비스 이용약관 동의</Label>
                            </div>
                            <div className="flex items-center">
                                <span className="text-xs hover:underline cursor-pointer">자세히</span>
                                <ChevronRight className="size-4" />
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <Checkbox id="privacy-policy" />
                                <Label htmlFor="privacy-policy">개인정보 수집 및 이용동의</Label>
                            </div>
                            <div className="flex items-center">
                                <span className="text-xs hover:underline cursor-pointer">자세히</span>
                                <ChevronRight className="size-4" />
                            </div>
                        </div>
                    </div>
                    <Separator className="space-y-2"/>
                    <div className="flex flex-col gap-4">
                        <Label>선택 동의 항목</Label>
                        <div className="flex justify-between">
                            <div className="flex gap-2">
                                <Checkbox id="marketing-consent" />
                                <Label htmlFor="marketing-consent">마케팅 및 광고 수신 동의</Label>
                            </div>
                            <div className="flex items-center">
                                <span className="text-xs hover:underline cursor-pointer">자세히</span>
                                <ChevronRight className="size-4" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="cursor-pointer">
                            <ArrowLeft/>
                        </Button>
                        <Button variant="outline" className="flex-1 !bg-emerald-800/50 cursor-pointer">
                            회원가입
                        </Button>
                    </div>
                    <div className="flex justify-center gap-2">
                        <span>이미 계정이 있으신가요?</span>
                        <span className="underline cursor-pointer">로그인</span>
                    </div>
                </div>
            </div>
        </main>
    );
}