import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import RootLayout from "@/pages/layout.tsx"; // 전역 레이아웃 컴포넌트
import Index from './pages' // 메인페이지
import SignUp from "@/pages/sign-up/sign-up.tsx"; // 회원가입 페이지
import SignIn from "@/pages/sign-in/sign-in.tsx"; // 로그인 페이지
import {ThemeProvider} from "@/components/theme-provider.tsx";
import './index.css'
import CreateTopic from "@/pages/topics/create.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Routes>
                    <Route element={<RootLayout />}>
                        <Route index element={<Index />} />
                        <Route path="sign-up" element={<SignUp />} />
                        <Route path="sign-in" element={<SignIn />} />
                        <Route path="topics/create" element={<CreateTopic />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
)
