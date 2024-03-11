import { Meta, StoryObj } from "@storybook/react";
import Sidebar, { ISidebarProps } from ".";
import { sidebarItems } from "../../../utils/sidebar";

export default {
    title: 'Organisms/Sidebar',
    component: Sidebar,
} as Meta;

type HeaderType = StoryObj<ISidebarProps>;

export const HeaderComponent: HeaderType = {
    args: {
        sidebarNavItems: sidebarItems
    }
}