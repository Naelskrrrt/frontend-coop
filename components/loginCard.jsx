import * as React from "react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export function LoginCardForm() {
    return (
        <Card className="w-[350px] h-[340px]">
            <CardHeader>
                <CardTitle>Se connecter</CardTitle>
                <CardDescription>
                    En tant qu'admin vous devez d'abord vous connecter
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="Type your email..."
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Password</Label>
                            <Input
                                id="email"
                                placeholder="Type your password..."
                                type="password"
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex w-full  flex-col items-start">
                <Button>Se Connecter</Button>
                <Link
                    href={"/"}
                    className="text-xs text-blue-500 underline-offset-4 hover:underline mt-2"
                >
                    Continuer en tant que visiteur...
                </Link>
            </CardFooter>
        </Card>
    );
}
