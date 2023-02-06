export interface INavItem {
    label: string;
    path:string;
};

export interface INavItems extends Array<INavItem> {}

export interface IMobileDrawerProps {
    window?: () => Window;
    navItems: INavItems;
    mobileOpen: boolean;
    handleDrawerToggle: () => void;
}