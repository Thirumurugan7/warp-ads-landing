"use client";

import {
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const data: { title: string; content: React.ReactNode }[] = [
    {
        title: "Q4 2024",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Full-scale launch of WarpAds platform with enterprise partnerships and global rollout
                </p>
                <div className="mb-8">
                    <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                        ✅ Enterprise integration suite
                        <motion.img
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            alt="Product screenshot"
                            src="/assets/productpic.png"
                            width={2432}
                            height={1442}
                            className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                        />
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                        ✅ Multi-chain support for payments
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                        ✅ Advanced analytics dashboard
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                        ✅ AI model optimization v2.0
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Q3 2024",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                    Beta launch with early adopters and key partnerships
                </p>
                <div className="mb-8">
                    <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                        ✅ Open beta for advertisers
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                        ✅ Integration with major AI platforms
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                        ✅ Smart contract audit completion
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                        ✅ Performance metrics tracking
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: "Q2 2024",
        content: (
            <div>
                <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                    Development of core platform features and infrastructure
                </p>
                <div className="mb-8">
                    <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                        ✅ Model Context Protocol (MACP) v1
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                        ✅ Ad auction smart contracts
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                        ✅ Developer SDK alpha
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                        ✅ Initial AI model training
                    </div>
                    <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                        ✅ Technical whitepaper release
                    </div>
                </div>
            </div>
        ),
    },
];

const Timeline = () => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full  dark:bg-neutral-950 font-sans md:px-10"
            ref={containerRef}
        >
            <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
                <h2 className="text-6xl  mb-4 text-white max-w-4xl">
                    How does it work?
                </h2>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Timeline;