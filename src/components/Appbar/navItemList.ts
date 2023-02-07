import { INavItems } from "./Appbar.types";
import { CHARACTERS, FAVORITE_CHARACTERS } from "router/routes-list";

export const navItems: INavItems = [
    { label: 'Characters', path: CHARACTERS },
    { label: 'Favorites', path: FAVORITE_CHARACTERS }
];
