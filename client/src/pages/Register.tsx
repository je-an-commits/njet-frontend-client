import { Button } from "../components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card";
import { CustomForm, FormActions } from "../components/ui/Form";
import { Input } from "../components/ui/Input";
import { Mail, Lock, Eye, EyeOff, User, UserPlus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import backgroundImage from "../assets/background.png";
export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
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
                    <CardTitle className="text-center text-2xl font-bold">Create Account</CardTitle>
                    <CardDescription className="text-center text-gray-500">
                        Join us today! Please fill in the details below to create your account.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <CustomForm onSubmit={handleSubmit(onSubmit)}>
                        <Input 
                            leftIcon={<User size={12} />} 
                            label="Name" type="text" 
                            className="py-3"
                            placeholder="e.g John Doe" 
                            error={errors.name?.message as string}
                            {...register("name", { required: "Name is required" })}
                        />
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
                        
                        <FormActions>
                            <Button type="submit" className="w-full flex items-center justify-center gap-2">
                                <UserPlus size={18} />
                                Sign Up
                            </Button>
                            
                        </FormActions>
                    </CustomForm>
                    
                    
                    
                </CardContent>
                <CardFooter className="flex flex-col gap-4">    
                        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
                            Already have an account?{' '}
                            <Link to="/login" className="font-medium text-[#611313] hover:text-[#4a0f0f] hover:underline">Sign in</Link>
                        </p>
                </CardFooter>
            </Card>
        </div>
    );
}
                      