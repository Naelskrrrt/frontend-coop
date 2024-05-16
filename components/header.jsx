"use client";

import React, { useRef } from "react";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Header = () => {
    const LinkToLogin = useRef(null);
    const LinkToReservation = useRef(null);

    const handleToClickLogin = (event) => {
        event.preventDefault();
        if (LinkToLogin.current) {
            return LinkToLogin.current.click();
        }
    };

    const handleToClickReservation = (event) => {
        event.preventDefault();
        if (LinkToReservation.current) {
            return LinkToReservation.current.click();
        }
    };
    return (
        <div className="w-full flex justify-between bg-slate-50/70 backdrop:blur-3xl py-5 px-10 shadow">
            <div className="flex gap-3 items-center">
                <Icon
                    icon="lucide:bus"
                    width={26}
                    height={26}
                    color="#020617"
                />
                <span className="font-bold text-xl">E-travel</span>
            </div>
            <div className="flex flex-row-reverse gap-2">
                <Button variant="default" onClick={handleToClickLogin}>
                    Se connecter
                </Button>
                <Link className="none" ref={LinkToLogin} href={"/login"}></Link>

                <Button variant="secondary" onClick={handleToClickReservation}>
                    Reserver
                </Button>
                <Link
                    className="none"
                    ref={LinkToReservation}
                    href={"/reserver"}
                ></Link>
            </div>
        </div>
    );
};

export default Header;
