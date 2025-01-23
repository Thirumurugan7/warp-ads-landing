'use client'

import { motion } from "framer-motion";

const benefits = [
    {
        feature: "Model Context Protocol (MACP)",
        benefit: "Ads adapt to user intent—no more guessing."
    },
    {
        feature: "Permissionless Ad Auctions",
        benefit: "Anyone can bid for ad space, creating fair competition and higher payouts."
    },
    {
        feature: "Incentive-Aligned Metrics",
        benefit: "Earn more when users engage—we profit only when you do."
    }
];

export default function Vision() {
    return <div className="mx-auto max-w-full sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
            {/* Decorative blob background for Vision */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-12 top-0 -z-10 translate-y-[-50%] transform-gpu blur-3xl lg:top-0 lg:translate-y-0 lg:transform-gpu"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-cyan-400 opacity-25"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl"
                        >
                            The Problem
                        </motion.h2>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="lg:w-full lg:max-w-2xl lg:flex-auto"
                            >
                                <p className="text-xl/8 text-gray-300">
                                    AI agents struggle to monetize without disrupting user trust or experience.
                                </p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="mt-8"
                                >
                                    <h3 className="text-2xl font-semibold text-white mb-4">The Pain</h3>
                                    <p className="text-gray-300">
                                        "Generic ads ruin AI interactions. Users hate irrelevance, advertisers waste budgets, and developers lose revenue."
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="mt-8"
                                >
                                    <h3 className="text-2xl font-semibold text-white mb-4">Our Solution</h3>
                                    <p className="text-gray-300">
                                        WarpAds uses LLM-powered context to serve ads that feel like helpful suggestions, not interruptions.
                                    </p>
                                    <ul className="mt-4 space-y-4 text-gray-300">
                                        <li>• For Users: Ads match their real-time needs (e.g., DeFi tips → hardware wallet promo).</li>
                                        <li>• For Agents: Earn rewards via the open-auction protocol.</li>
                                        <li>• For Advertisers: Target high-intent moments in AI-driven conversations.</li>
                                    </ul>
                                </motion.div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="lg:flex lg:flex-auto lg:justify-center"
                            >
                                <dl className="w-full space-y-8">
                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                        className="text-2xl font-semibold text-white mb-6"
                                    >
                                        Benefits
                                    </motion.h3>
                                    {benefits.map((item, index) => (
                                        <motion.div
                                            key={item.feature}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.7 + index * 0.1,
                                            }}
                                            className="flex flex-col gap-y-2 border-l-2 border-gray-600 pl-4"
                                        >
                                            <dt className="text-lg font-medium text-white">
                                                {item.feature}
                                            </dt>
                                            <dd className="text-base text-gray-300">
                                                {item.benefit}
                                            </dd>
                                        </motion.div>
                                    ))}
                                </dl>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
}
