import {
    Button,
    Input,
    Label,
    Separator
} from "@/components";

export default function SignIn() {
    return (
        <main className="h-full w-full min-h-[720px] flex justify-center items-center p-6 gap-6">
            <div className="flex flex-col gap-4 w-96">
                <div className="pb-4">
                    <p className="text-2xl font-semibold">로그인</p>
                    <p className="text-muted-foreground">로그인을 위한 정보를 입력해주세요.</p>
                </div>
                {/* 소셜 로그인 */}
                <div className="flex flex-col gap-3">
                    <Button className="bg-[#03c75a] font-semibold">
                        <img src="https://www.mingo.team/icons/company/naver.svg" alt="@NAVER-LOGO" className="w-[18px] h-[18px]"/>
                        네이버 로그인
                    </Button>
                    <Button className="bg-[#fee500] font-semibold">
                        <img src="https://www.mingo.team/icons/company/kakao.svg" alt="@KAKAO-LOGO" className="w-[18px] h-[18px]"/>
                        카카오 로그인
                    </Button>
                    <Button className="bg-neutral-800 font-semibold text-white">
                        <img src="https://www.mingo.team/icons/company/google.svg" alt="@GOOGLE-LOGO" className="w-[18px] h-[18px]"/>
                        구글 로그인
                    </Button>
                </div>
                {/* 경계선 */}
                <div className="flex items-center gap-2">
                    <Separator className="flex-1"/>
                    <span>OR CONTINUE WITH</span>
                    <Separator className="flex-1"/>
                </div>
                {/* 로그인폼 */}
                <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="font-semibold">이메일</Label>
                    <Input type="email" id="email" placeholder="이메일을 입력하세요."/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <Label htmlFor="password" className="font-semibold">비밀번호</Label>
                        <span className="underline font-semibold">비밀번호를 잊으셨나요?</span>
                    </div>
                    <Input type="password" id="password" placeholder="비밀번호를 입력하세요."/>
                </div>
                <Button className="bg-sky-700 font-semibold text-white">로그인</Button>
                <div className="flex justify-center gap-2">
                    <span className="font-semibold">계정이 없으신가요?</span>
                    <span className="font-semibold underline">회원가입</span>
                </div>
            </div>
        </main>
    );
}