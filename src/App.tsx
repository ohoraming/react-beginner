import {AppFooter, AppHeader} from "@/components/common";
import {ThemeProvider} from "./components/theme-provider";
import {AppSidebar} from "@/components/common/AppSidebar.tsx";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="page">
                <AppHeader/>
                <div className="container">
                    <main className="h-full w-full min-h-[720px] flex p-6 gap-6">
                        {/* 카테고리 사이드바 */}
                        <AppSidebar/>
                        {/* 토픽 컨텐츠 */}
                        <section></section>
                    </main>
                </div>
                <AppFooter/>
            </div>
        </ThemeProvider>
    );
}

export default App
