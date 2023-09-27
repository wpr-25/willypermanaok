/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Portofolio() {
    return (

        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:flex lg:-mx-6">
                        <div className="lg:w-3/4 lg:px-6">
                            <img className="object-cover object-center w-full h-80 xl:h-[28rem] rounded-xl" src="https://i.pinimg.com/originals/62/81/3e/62813e1a1c05d523b6ae1591338d8093.gif" alt="gift" />

                            <div>
                                <p className="mt-6 text-sm text-blue-500 uppercase">Want to know</p>

                                <h1 className="max-w-lg mt-4 text-2xl font-semibold leading-tight text-gray-800 dark:text-white">
                                    Website Portofolio
                                </h1>
                            </div>
                        </div>

                        <div className="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
                            <div>
                                <h3 className="text-blue-500 capitalize">E-Learning LMS ROSMA</h3>

                                <Link href="https://e-learning.rosma.ac.id/" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                                    Learning Management System
                                </Link>
                            </div>

                            <hr className="my-6 border-gray-200 dark:border-gray-700" />

                            <div>
                                <h3 className="text-blue-500 capitalize">Saranalab Mandiri Analitika</h3>

                                <Link href="https://saranalaboratorium.com/" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                                    Company Website
                                </Link>
                            </div>

                            <hr className="my-6 border-gray-200 dark:border-gray-700" />

                            <div>
                                <h3 className="text-blue-500 capitalize">Movi Ventura Prima</h3>

                                <Link href="https://movi.id" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                                    Company Website.
                                </Link>
                            </div>

                            <hr className="my-6 border-gray-200 dark:border-gray-700" />

                            <div>
                                <h3 className="text-blue-500 capitalize">Puf Sains Lab</h3>

                                <Link href="https://psl.id/" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                                    first Portofolio
                                </Link>
                            </div>

                            <hr className="my-6 border-gray-200 dark:border-gray-700" />

                            <div>
                                <h3 className="text-blue-500 capitalize">MoviZoo</h3>

                                <Link href="https://movizoo.id/" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                                    first Portofolio
                                </Link>
                            </div>

                            <hr className="my-6 border-gray-200 dark:border-gray-700" />

                            <div>
                                <h3 className="text-blue-500 capitalize">Porto 1</h3>

                                <Link href="https://portofolio1-beta.vercel.app/" className="block mt-2 font-medium text-gray-700 hover:underline hover:text-gray-500 dark:text-gray-400 ">
                                    first Portofolio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
