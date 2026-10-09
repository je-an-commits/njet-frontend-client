import { Button } from "../components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card";
import { CustomForm, FormActions } from "../components/ui/Form";
import { Input } from "../components/ui/Input";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import backgroundImage from "../assets/background.png";
export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = (data: any) => {
        console.log(data);
        // Handle login logic here
    }
    
    return (
        <div className="relative flex items-center justify-center min-h-screen">
            <div className="absolute inset-0 overflow-hidden ">
                <img src={backgroundImage} alt="" className="w-full h-full object-cover scale-105 brightness-85" />
                <div className="absolute inset-0 bg-black/5 dark:bg-black/60" />
            </div>
            <Card className=" relative w-full sm:rounded-xl max-w-lg p-6">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Welcome back!</CardTitle>
                    <CardDescription className="text-center text-gray-500">
                        Please enter your credentials to log in.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <CustomForm onSubmit={handleSubmit(onSubmit)}>
                        <Input 
                            leftIcon={<Mail size={12} />} 
                            label="Email" type="email" 
                            className="py-3"
                            placeholder="your.email@example.com" 
                            error={errors.email?.message as string}
                            {...register("email", { required: "Email is required" })}
                        />
                        <Input 
                            leftIcon={<Lock size={12} />} 
                            rightIcon={showPassword ? <EyeOff size={12} /> : <Eye size={12} />} 
                            onRightIconClick={() => setShowPassword(!showPassword)}
                            label="Password" type={showPassword ? "text" : "password"} 
                            className="py-3"
                            placeholder="Enter your password" 
                            error={errors.password?.message as string}
                            {...register("password", { required: "Password is required" })}
                        />
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 cursor-pointer select-none">
                                <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)}
                                className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-[#611313] focus:ring-[#611313]/30" />
                                Remember me
                            </label>
                            <Link to="/forgot-password" className="text-sm text-[var(--primary)] hover:text-gray-700">
                                Forgot Password?
                            </Link>
                        </div>
                        <FormActions>
                            <Button type="submit" className="w-full flex items-center justify-center gap-2">
                                <LogIn size={18} />
                                Sign In
                            </Button>
                            
                        </FormActions>
                        <div className="relative my-3">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200 dark:border-gray-700" />
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="bg-white/90 dark:bg-gray-900/90 px-2 text-gray-400">or continue with</span>
                            </div>
                        </div>
                    </CustomForm>
                    
                    <button type="button" 
                            className="w-full py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md active:scale-[0.99] flex items-center justify-center gap-2">
                            <svg width="18" height="18" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                            <path fill="#FBBC05" d="M10.54 28.59A14.5 14.5 0 0 1 9.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.99 23.99 0 0 0 0 24c0 3.77.87 7.35 2.56 10.78l7.98-6.19z" />
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                            </svg>
                            Sign in with Google
                    </button>
                    
                </CardContent>
                <CardFooter className="flex flex-col gap-4">    
                        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
                            Don't have an account?{' '}
                            <Link to="/register" className="font-medium text-[#611313] hover:text-[#4a0f0f] hover:underline">Create one</Link>
                        </p>
                </CardFooter>
            </Card>
        </div>
    );
}
                      