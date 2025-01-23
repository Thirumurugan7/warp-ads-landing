'use client'

import { motion } from "framer-motion";



const stats = [
    { label: "Transactions every 24 hours", value: "44 million" },
    { label: "Assets under holding", value: "$119 trillion" },
    { label: "New users annually", value: "46,000" },
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
                            Vision
                        </motion.h2>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="lg:w-full lg:max-w-2xl lg:flex-auto"
                            >
                                <p className="text-xl/8 text-gray-300">
                                    Aliquet nec orci mattis amet quisque ullamcorper neque,
                                    nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                                    aliquam. Quisque id at vitae feugiat egestas ac. Diam
                                    nulla orci at in viverra scelerisque eget. Eleifend
                                    egestas fringilla sapien.
                                </p>
                                <p className="mt-10 max-w-xl text-base/7 text-gray-300">
                                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                                    eget risus enim. Mattis mauris semper sed amet vitae sed
                                    turpis id. Id dolor praesent donec est. Odio penatibus
                                    risus viverra tellus varius sit neque erat velit. Faucibus
                                    commodo massa rhoncus, volutpat. Dignissim sed eget risus
                                    enim. Mattis mauris semper sed amet vitae sed turpis id.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="lg:flex lg:flex-auto lg:justify-center"
                            >
                                <dl className="w-64 space-y-8 xl:w-80">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: 0.5 + index * 0.1,
                                            }}
                                            className="flex flex-col-reverse gap-y-4"
                                        >
                                            <dt className="text-base/7 text-gray-100">
                                                {stat.label}
                                            </dt>
                                            <dd className="text-5xl font-semibold tracking-tight text-gray-400">
                                                {stat.value}
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
