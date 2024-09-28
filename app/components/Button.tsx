import React, {ButtonHTMLAttributes, FC} from 'react';
import {twMerge} from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button className={twMerge('bg-orange text-offWhite uppercase font-bold p-2 rounded-2xl', className)} {...props}>
            {children}
        </button>
    );
};

export default Button;