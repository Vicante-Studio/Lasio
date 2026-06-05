import type { Listing } from './Listing';
export interface ButtonProps{
    label: string;
    variant: Variant;
    type: 'button' | 'submit' | 'reset'
    onClick?: (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => void
}

export type Variant = 'primary' | 'secondary' | 'danger' | 'outline';

export type ButtonVariant = Record<Variant, string>

export interface NavLinkProps{
    label: string;
    link: string;
}

export interface InputFieldProps{
    id: string;
    type: string;
    label:string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface FilterProp{
    filterFunction: (listings: Listing[]) => void
}

export interface IconSetProps{
    title: string;
    icon: React.ReactNode;
    value: string | number;
}

export interface StatsType {
    title: string
    value: string
    icon: "Home" | "DollarSign" | "MapPin" | "MessagesSquare"
}

export interface ToastProps {
    msg: string;
    state: "error" | "success"
}