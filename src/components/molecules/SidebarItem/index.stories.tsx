import { Meta, StoryObj } from "@storybook/react";
import SidebarItem, { ISidebarItemProps } from ".";
import HomeInActiveSvg from "../../../../public/assets/home-inactive.svg";
import CoinInActiveSvg from "../../../../public/assets/coin-inactive.svg";
import CoinActiveSvg from "../../../../public/assets/coin-active.svg";

export default {
    title: 'Molecules/SidebarItem',
    component: SidebarItem,
} as Meta;

type SidebarItemType = StoryObj<ISidebarItemProps>;


export const Home: SidebarItemType = {
    args: {
        id: 1,
        itemName: "Home",
        iconPath: HomeInActiveSvg,
        isActive: false,
        onClick: (id: number) => {
            console.log("clicked sidebar item id:", id);
        }
    }
};

export const CashAcclerationInactive: SidebarItemType = {
    args: {
        id: 2,
        itemName: "Cash Accleration",
        iconPath: CoinInActiveSvg,
        isActive: false,
        onClick: (id: number) => {
            console.log("clicked sidebar item id:", id);
        }
    }
};

export const CashAcclerationActive: SidebarItemType = {
    args: {
        id: 2,
        itemName: "Cash Accleration",
        iconPath: CoinActiveSvg,
        isActive: true,
        onClick: (id: number) => {
            console.log("clicked sidebar item id:", id);
        }
    }
};