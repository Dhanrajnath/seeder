import HomeInActiveSvg from "../../public/assets/home-inactive.svg";
import CoinInActiveSvg from "../../public/assets/coin-inactive.svg";
import CoinActiveSvg from "../../public/assets/coin-active.svg";
import HomeActiveSvg from "../../public/assets/home-active.svg";

export type SidebarItemType = {
    id: number;
    activeIconPath: string;
    inActiveIconPath: string;
    itemName: string;
};

export const sidebarItems: SidebarItemType[] = [
    {
        id: 1,
        activeIconPath: HomeActiveSvg,
        inActiveIconPath: HomeInActiveSvg,
        itemName: 'Home'
    },
    {
        id: 2,
        activeIconPath: CoinActiveSvg,
        inActiveIconPath: CoinInActiveSvg,
        itemName: 'Cash Accleration'
    }
];

export const SEEDER = 'Seeder';
export const WATCH_HOW_TO = 'Watch how to';