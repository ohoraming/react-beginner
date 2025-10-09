import {Separator} from "@/components";

function AppHeader() {
    return (
        <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-gray-900">
            <div className="w-full max-w-[1320px] flex items-center justify-between px-6 py-3">
                {/* 로고 & 네비게이션 UI */}
                <div className="flex items-center gap-5">
                    <img src="https://miro.medium.com/v2/resize:fill:176:176/1*KsA_NcDeoLW5V5WtuQhcnA.jpeg" alt="@LOGO" className="w-6 h-6 cursor-pointer"/>
                    <div className="flex items-center gap-5">
                        <div className="font-semibold text-muted-foreground">토픽 인사이트</div>
                        <Separator orientation="vertical" className="!h-4"/>
                        <div className="font-semibold text-muted-foreground">포트폴리오</div>
                    </div>
                </div>
                {/* 로그인 UI */}
                <div className="font-semibold text-muted-foreground hover:text-white transition-all duration-500 cursor-pointer">로그인</div>
            </div>
        </header>
    );
}

export { AppHeader };