import { Meta, StoryObj } from "@storybook/react";
import Header, { IHeaderProps } from ".";
import AvatarSvg from "../../../../public/assets/avatar.svg";

export default {
    title: 'Organisms/Header',
    component: Header,
} as Meta;

type HeaderType = StoryObj<IHeaderProps>;

export const HeaderComponent: HeaderType = {
    args: {
        title: "Cash accleration",
        description: "Place to create new cash kicks to run business",
        avatarPath: AvatarSvg
    }
}