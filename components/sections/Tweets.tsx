"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";


const items = [
    {
        image: "/assets/Tweet1.png",
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        image: "/assets/Tweet2.png",
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        image: "/assets/Tweet3.png",
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
];



export const Tweets = ({
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <div
                ref={containerRef}
                className={cn(
                    "scroller relative pb-10 z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                    className
                )}
            >
                <ul
                    ref={scrollerRef}
                    className={cn(
                        "flex items-center w-full shrink-0 flex-nowrap gap-5 py-4 min-w-full",
                        start && "animate-scroll ",
                        pauseOnHover && "hover:[animation-play-state:paused]"
                    )}
                >
                    {items.map((item, idx) => (
                        <Image
                            alt="Product screenshot"
                            src={item.image}
                            width={2432}
                            height={1442}
                            className="p-3 w-[350px] max-w-full relative flex-shrink-0 mx-4 my-3 md:w-[550px] rounded-3xl shadow-2xl shadow-cyan-400"
                            key={item.name}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Tweets;
