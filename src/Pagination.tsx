import React, { FC } from "react" ;
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import classNames from "classnames";

interface PaginationProps {
    isMobile: boolean;
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({ isMobile, page, setPage, totalPages }) => {
    if (isMobile) {
        return (
            <div className="flex items-center w-full">
                <FiArrowLeft 
                    className={classNames("mr-3 text-gray-500 dark:text-white", {
                        "cursor-pointer": page !== 0,
                        "opacity-50": page === 0
                    })}
                    size={20}
                    onClick={() => {
                        if (page > 0) {
                            setPage(page - 1);
                        }
                    }} 
                />
                <div className="flex justify-center flex-grow text-sm text-gray-700 select-none dark:text-white">Page {page + 1} out of {totalPages}</div>
                <FiArrowRight
                    className={classNames("ml-3 text-gray-500 dark:text-white", {
                        "cursor-pointer": page !== totalPages - 1,
                        "opacity-50": page === totalPages -1 
                    })}
                    size={20}
                    onClick={() => {
                        if (page < totalPages - 1) {
                            setPage(page + 1);
                        }
                    }}
                />
            </div>
        );
    }

    return <div>Desktop Pagination</div>;
}