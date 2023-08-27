"use client";

import { NextPage } from "next";
import MainLayout from "@/components/layout/MainLayout";
import Link from "next/link";
import BookList from "@/components/ui/BookList";

const BooksPage: NextPage = () => {
    return (
        <MainLayout>
            <div className="flex flex-col p-10 gap-5 justify-center md:justify-normal">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Books</h1>
                    <p className="text-lg">
                        The following books are some that have helped me
                        throughout my journey as a software developer.
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    <BookList title="Software Engineering">
                        <li>
                            <Link
                                href={
                                    "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?crid=5L381JR5E0NE&keywords=clean+code&qid=1693162615&sprefix=clean+cod%2Caps%2C165&sr=8-1"
                                }
                            >
                                Clean Code - Robert C. Martin
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={
                                    "https://www.amazon.com/Modern-Software-Engineering-Discipline-Development/dp/0137314914/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1693162669&sr=8-1"
                                }
                            >
                                Modern Software Engineering - David Farley
                            </Link>
                        </li>
                    </BookList>

                    <BookList title="Data Structures and Algorithms">
                        <li>
                            <Link
                                href={
                                    "https://www.amazon.com/Common-Sense-Guide-Structures-Algorithms-Second/dp/1680507222/ref=sr_1_1?keywords=a+common+sense+guide+to+data+structures+and+algorithms&qid=1693163224&sprefix=a+common+sense+%2Caps%2C185&sr=8-1"
                                }
                            >
                                A Common-Sense Guide to Data Structures and
                                Algorithms - Jay Wengrow
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={
                                    "https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230/ref=sr_1_1?keywords=grokking+algorithm&qid=1693163275&sprefix=grokking+al%2Caps%2C174&sr=8-1"
                                }
                            >
                                Grokking Algorithms - Aditya Bhargava
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={
                                    "https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/ref=sr_1_1?keywords=cracking+the+coding+interview&qid=1693163435&sprefix=cracking+the+coding%2Caps%2C182&sr=8-1"
                                }
                            >
                                Cracking the Coding Interview - Gayle Laakmann
                                McDowell
                            </Link>
                        </li>
                    </BookList>

                    <BookList title="Software Architecture & System Design">
                        <li>
                            <Link
                                href={
                                    "https://www.amazon.com/Become-Awesome-Software-Architect-Foundation/dp/1697271065/ref=sr_1_1?keywords=become+an+awesome+software+architect&qid=1693163589&sprefix=become+an+awe%2Caps%2C176&sr=8-1"
                                }
                            >
                                Become an Awesome Software Architect - Anatoly
                                Volkhover
                            </Link>
                        </li>
                    </BookList>
                </div>
            </div>
        </MainLayout>
    );
};
export default BooksPage;
