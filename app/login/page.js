import { LoginCardForm } from "@/components/loginCard";
import React from "react";

const LoginPage = () => {
    return (
        <>
            <div className="w-full h-[100vh] flex justify-center bg-slate-700 items-center">
                <LoginCardForm />
            </div>
        </>
    );
};

export default LoginPage;
