import { NavbarType } from "@/types/navType";

export const navLink: NavbarType[] = [
    {
        path: '/',
        name: 'Home',
        active: true,
    },
    {
        path: '/about',
        name: 'About',
        active: false,
    },
    {
        path: '/product',
        name: 'Product',
        active: false,
    }
]