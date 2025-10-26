import {
    Button,
    Checkbox,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input, Label,
    Separator
} from "@/components";
import {ArrowLeft, Asterisk, ChevronRight} from "lucide-react";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {NavLink, useNavigate} from "react-router";
import {useState} from "react";
import supabase from "@/lib/supabase.ts";
import { toast } from "sonner"

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
}).superRefine(({password, confirmPassword}, ctx) => {
    if (password !== confirmPassword) {
        ctx.addIssue({
            code: "custom",
            message: "비밀번호가 일치하지 않습니다.",
            path: ["confirmPassword"],
        });
    }
});

export default function SignUp() {
    const navigate = useNavigate();

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    const [serviceAgreed, setServiceAgreed] = useState<boolean>(false); // 서비스 이용약관 동의 여부
    const [privacyAgreed, setPrivacyAgreed] = useState<boolean>(false); // 개인정보 수집 및 이용약관 동의 여부
    const [marketingAgreed, setMarketingAgreed] = useState<boolean>(false); // 마케팅 및 광고 수신약관 동의 여부

    const handleCheckService = () => setServiceAgreed(!serviceAgreed);
    const handleCheckPrivacy = () => setPrivacyAgreed(!privacyAgreed);
    const handleCheckMarketing = () => setMarketingAgreed(!marketingAgreed);


    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log("회원가입 버튼 클릭!");

        if (!serviceAgreed || !privacyAgreed) {
            // 경고메시지 - toast ui
            toast.warning("필수 동의항목을 체크해주세요");
            return;
        }

        try {
            const {data, error} = await supabase.auth.signUp({
                email: values.email,
                password: values.password,
            });

            // 회원가입 실패
            if (error) {
                // 에러메시지 - toast ui
                return;
            }

            // 회원가입 성공
            if (data) {
                // 성공메시지 - toast ui
                toast.success("회원가입을 완료하였습니다.");
                // 로그인 페이지로 리다이렉트
                navigate("/sign-in");
            }
        } catch(error) {
            console.log(error);
            throw new Error(`${error}`)
        }
    };

    return (
        <main className="h-full w-full min-h-[720px] flex justify-center items-center p-6 gap-6">
            <div className="flex flex-col gap-2 w-100">
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
                                        <Input type="password" placeholder="비밀번호를 입력하세요." {...field} />
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
                                        <Input type="password" placeholder="비밀번호 확인을 입력하세요." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <Asterisk size={14} className="font-semibold text-red-400"/>
                                <Label>필수 동의 항목</Label>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    <Checkbox checked={serviceAgreed} onCheckedChange={handleCheckService} />
                                    <Label>서비스 이용약관 동의</Label>
                                </div>
                                <Button variant="link" className="cursor-pointer !p-0 text-xs">
                                    <p>자세히</p>
                                    <ChevronRight className="size-4" />
                                </Button>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    <Checkbox checked={privacyAgreed} onCheckedChange={handleCheckPrivacy} />
                                    <Label>개인정보 수집 및 이용동의</Label>
                                </div>
                                <Button variant="link" className="cursor-pointer !p-0 text-xs">
                                    <p>자세히</p>
                                    <ChevronRight className="size-4" />
                                </Button>
                            </div>
                        </div>
                        <Separator className="space-y-2"/>
                        <div className="flex flex-col gap-2">
                            <Label>선택 동의 항목</Label>
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    <Checkbox checked={marketingAgreed} onCheckedChange={handleCheckMarketing} />
                                    <Label>마케팅 및 광고 수신 동의</Label>
                                </div>
                                <Button variant="link" className="cursor-pointer !p-0 text-xs">
                                    <p>자세히</p>
                                    <ChevronRight className="size-4" />
                                </Button>
                            </div>
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