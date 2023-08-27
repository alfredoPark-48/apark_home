import React from "react";
import { BookListProps } from "@/types/BookList";

const BookList: React.FC<BookListProps> = ({ title, children }) => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <ul className="list-disc pl-10">{children}</ul>
        </div>
    );
};

export default BookList;
