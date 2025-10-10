import {
    Button,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    Separator
} from "@/components";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {NavLink} from "react-router";

const formSchema = z.object({
    email: z.email({
        error: "올바른 형식의 이메일 주소를 입력해주세요.",
    }),
    password: z.string().min(8, {
        error: "비밀번호는 최소 8자 이상으로 입력해주세요.",
    }),
})

export default function SignIn() {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = () => {
        console.log("로그인 버튼 클릭!");
    };


    return (
        <main className="h-full w-full min-h-[720px] flex justify-center items-center p-6 gap-6">
            <div className="flex flex-col gap-4 w-100">
                <div className="pb-4">
                    <p className="text-2xl font-semibold">로그인</p>
                    <p className="text-muted-foreground">로그인을 위한 정보를 입력해주세요.</p>
                </div>
                {/* 소셜 로그인 */}
                <div className="flex flex-col gap-3">
                    <Button variant={"secondary"} className="font-semibold">
                        <img src="/assets/icons/social/google_icon.png" alt="@GOOGLE-LOGO" className="w-[18px] h-[18px]"/>
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
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>이메일</FormLabel>
                                    <FormControl>
                                        <Input placeholder="이메일을 입력하세요." {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex justify-between">
                                            <FormLabel>비밀번호</FormLabel>
                                            <span className="underline font-semibold">비밀번호를 잊으셨나요?</span>
                                        </div>
                                    </div>
                                    <FormControl>
                                        <Input placeholder="비밀번호를 입력하세요." {...field} />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col gap-3">
                            <Button type="submit" className="flex-1 bg-sky-700 font-semibold text-white">로그인</Button>
                            <div className="flex justify-center gap-2">
                                <span className="font-semibold">계정이 없으신가요?</span>
                                <NavLink to={"/sign-up"} className="font-semibold underline">
                                    회원가입
                                </NavLink>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </main>
    );
}