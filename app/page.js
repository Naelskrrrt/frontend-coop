"use client";

import Header from "@/components/header";
import ImageSlider from "@/components/imageSlider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
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
        <>
            <div className="w-full ">
                <Header />
            </div>
            <div className="w-full bg-slate-700 h-[100vh] absolute top-0 z-[-1]">
                <ImageSlider />
            </div>
            <section
                id="heroSection"
                className="w-full flex justify-center "
                style={{
                    height: "calc(100vh - 77px)",
                }}
            >
                <div className="w-[51%] flex flex-col pt-32">
                    <h1 className="text-7xl text-white capitalize">
                        Bienvenue dans E-travel
                    </h1>
                    <p className="text-lg mt-4 text-slate-100">
                        Bienvenue dans E-travel, votre companie pour tous vos
                        voyages et aventures. Connecter vous si vous etes
                        administrateurs. Sinon commencer à reserver votre
                        aventure
                    </p>
                    <div className="flex gap-2 mt-10">
                        <Button variant="default" onClick={handleToClickLogin}>
                            Se connecter
                        </Button>
                        <Link
                            className="none"
                            ref={LinkToLogin}
                            href={"/login"}
                        ></Link>

                        <Button
                            variant="secondary"
                            onClick={handleToClickReservation}
                        >
                            Reserver
                        </Button>
                        <Link
                            className="none"
                            ref={LinkToReservation}
                            href={"/reserver"}
                        ></Link>
                    </div>
                </div>
            </section>
        </>
    );
}
