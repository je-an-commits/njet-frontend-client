import backgroundImage from "../assets/background.png";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/Card";
import { CustomForm, FormActions } from "../components/ui/Form";
import { Input } from "../components/ui/Input";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";

type OtpFormData = {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
};
export default function VerifyOtp() {
    const { register, handleSubmit, formState: { errors } } = useForm<OtpFormData>();

    const inputRefs = [
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
    ];

    const onSubmit = (data: OtpFormData) => {
        const otp = `${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`;
        console.log(otp);
        // Handle OTP verification logic here
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;

        if (!/^[0-9]?$/.test(value)) {
            e.target.value = '';
            return;
        }

        if(value && index < inputRefs.length - 1) {
            inputRefs[index + 1].current?.focus();
        }
        
    };  

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // If user hits backspace and the current field is already empty, move back
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };
   
    return (
        <div className="relative flex items-center justify-center min-h-screen">
            <div className="absolute inset-0 overflow-hidden">
                <img src={backgroundImage} alt="" className="w-full h-full object-cover scale-105 brightness-85" />
                <div className="absolute inset-0 bg-black/5 dark:bg-black/60" />
            </div>
            <Card className="relative w-full sm:rounded-xl max-w-lg md:p-6">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Verify OTP</CardTitle>
                    <CardDescription className="text-center text-gray-500">
                        Verification code sent to <span className="font-semibold">test@gmail.com</span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <CustomForm onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-center text-gray-500 ">Enter the 6-digit code:</p>
                        <div className="flex justify-center space-x-2">
                        {inputRefs.map((ref, index) => {
                            const fieldName = `code${index + 1}` as keyof OtpFormData;
                            const { ref: registerRef, ...registerProps } = register(fieldName, { required: " " });
                            return (
                                <Input
                                    key={index}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    className="text-center text-xl font-semibold"
                                    {...registerProps}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onChange={(e) => {
                                        registerProps.onChange(e); // Call react-hook-form's onChange
                                        handleChange(e, index); // Handle focus change
                                    }}
                                    ref={(el) => {
                                        registerRef(el);
                                        inputRefs[index].current = el; // Assign to our ref array
                                    }}
                                    error={errors[fieldName]?.message as string}
                                />
                            );
                        })}
                        </div>
                        {errors.code1 || errors.code2 || errors.code3 || errors.code4 || errors.code5 || errors.code6 ? (
                            <p className="text-red-500 text-sm mt-2 text-center">All fields are required.</p>
                        ) : null}
                        
                            <Button type="submit" variant="primary">
                                Verify
                            </Button>
                        
                    </CustomForm>
                </CardContent>
            </Card>
        </div>
    );
}