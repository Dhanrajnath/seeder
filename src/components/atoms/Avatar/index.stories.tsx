import { Meta, StoryObj } from "@storybook/react";
import Avatar, { IAvatarProps } from ".";
import AvatarSvg from "../../../../public/assets/avatar.svg";

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
} as Meta;

type AvatarType = StoryObj<IAvatarProps>;


export const ImageAvatar: AvatarType = {
    args: {
        isImage: true,
        variant: 'circular',
        alt: "Profile Pic",
        src: AvatarSvg
    }
};

export const NonImageChildrenAvatar: AvatarType = {
    args: {
        isImage: false,
        variant: 'circular',
        children: 'AB'
    }
};

export const defaultAvatar: AvatarType = {
    args: {}
}