import {
    Button,
    Checkbox,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    Separator
} from "@/components";
import {ArrowLeft, Asterisk, ChevronRight} from "lucide-react";
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
    confirmPassword: z.string().min(8, {
        error: "비밀번호 확인을 입력해주세요.",
    }),
}).superRefine(({password,confirmPassword}, ctx)=>{
    if (password !== confirmPassword) {
        ctx.addIssue({
            code: "custom",
            message: "비밀번호가 일치하지 않습니다.",
            path: ["confirmPassword"],
        });
    }

})

export default function SignUp() {

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            termsOfService: false,
            privacyPolicy: false,
            marketingConsent: false,
        },
    });

    const onSubmit = () => {
        console.log("회원가입 버튼 클릭!");
    };

    // https://youtu.be/W_4QikL5ej0?si=u9dJxk7t98Y3FK2v&t=676
    return (
        <main className="h-full w-full min-h-[720px] flex justify-center items-center p-6 gap-6">
            <div className="flex flex-col gap-4 w-100">
                <div className="pb-4">
                    <p className="text-2xl font-semibold">회원가입</p>
                    <p className="text-muted-foreground">회원가입을 위한 정보를 입력해주세요.</p>
                </div>
                {/* 회원가입폼 */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex gap-2">
                                        <Asterisk size={14} className="font-semibold text-red-400"/>
                                        <FormLabel>이메일</FormLabel>
                                    </div>
                                    <div className="flex gap-2">
                                        <FormControl>
                                            <Input placeholder="이메일을 입력하세요." {...field} />
                                        </FormControl>
                                        <Button variant={"outline"} className="cursor-pointer">본인인증</Button>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex gap-2">
                                        <Asterisk size={14} className="font-semibold text-red-400"/>
                                        <FormLabel>비밀번호</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Input placeholder="비밀번호를 입력하세요." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex gap-2">
                                        <Asterisk size={14} className="font-semibold text-red-400"/>
                                        <FormLabel>비밀번호 확인</FormLabel>
                                    </div>
                                    <FormControl>
                                        <Input placeholder="비밀번호 확인을 입력하세요." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                                <Asterisk size={14} className="font-semibold text-red-400"/>
                                <span>필수 동의 항목</span>
                            </div>
                            <FormField
                                control={form.control}
                                name="termsOfService"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex justify-between">
                                            <div className="flex gap-2">
                                                <FormControl>
                                                    <Checkbox id="termsOfService" checked={field.value} />
                                                </FormControl>
                                                <FormLabel>서비스 이용약관 동의</FormLabel>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-xs hover:underline cursor-pointer">자세히</span>
                                                <ChevronRight className="size-4" />
                                            </div>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="privacyPolicy"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex justify-between">
                                            <div className="flex gap-2">
                                                <FormControl>
                                                    <Checkbox id="privacyPolicy" checked={field.value} />
                                                </FormControl>
                                                <FormLabel>개인정보 수집 및 이용동의</FormLabel>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-xs hover:underline cursor-pointer">자세히</span>
                                                <ChevronRight className="size-4" />
                                            </div>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Separator className="space-y-2"/>
                        <div className="flex flex-col gap-3">
                            <p>선택 동의 항목</p>
                            <FormField
                                control={form.control}
                                name="marketingConsent"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex justify-between">
                                            <div className="flex gap-2">
                                                <FormControl>
                                                    <Checkbox id="marketingConsent" checked={field.value} />
                                                </FormControl>
                                                <FormLabel>마케팅 및 광고 수신 동의</FormLabel>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-xs hover:underline cursor-pointer">자세히</span>
                                                <ChevronRight className="size-4" />
                                            </div>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon" className="cursor-pointer">
                                <ArrowLeft/>
                            </Button>
                            <Button type="submit" variant="outline" className="flex-1 !bg-emerald-800/50 cursor-pointer">회원가입</Button>
                        </div>
                        <div className="flex justify-center gap-2">
                            <span>이미 계정이 있으신가요?</span>
                            <NavLink to={"/sign-in"} className="underline cursor-pointer">로그인</NavLink>
                        </div>
                    </form>
                </Form>
            </div>
        </main>
    );
}