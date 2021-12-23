import classNames from "classnames";
import React, { Dispatch, SetStateAction } from "react";

interface IButtonItem<T> {
  value: T;
  content: React.ReactNode;
}

export interface ButtonGroupProps<T> {
  options: IButtonItem<T>[];
  activeOption: T;
  setActiveOption: Dispatch<SetStateAction<T>>;
}

export const ButtonGroup = <T extends unknown>({ options, activeOption, setActiveOption }: ButtonGroupProps<T>) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            key={option.value as string}
            onClick={() => setActiveOption(option.value)}
            className={classNames(
              "inline-flex whitespace-nowrap items-center h-10 px-4 font-medium text-sm focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-500",
              {
                "rounded-l-lg border-r-0": index === 0,
                "rounded-r-lg": index === options.length - 1,
                "bg-gray-50 dark:bg-gray-700": activeOption === option.value,
                "border-r-0": index !== 0 && index !== options.length - 1,
              },
            )}
          >
            {option.content}
          </button>
        );
      })}
    </>
  );
};
