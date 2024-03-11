import { Meta, StoryObj } from "@storybook/react";
import TypographyWithInfoIcon, { ITypographyWithInfoIconProps } from ".";

export default {
    title: 'Molecules/TypographyInfoIcon',
    component: TypographyWithInfoIcon,
} as Meta;

type TypographyInfoIconType = StoryObj<ITypographyWithInfoIconProps>;


export const TermCap: TypographyInfoIconType = {
    args: {
        title: "Term cap",
        isHeading: false
    }
};

export const CashAccleration: TypographyInfoIconType = {
    args: {
        title: "Cash acceleration",
        isHeading: true
    }
};