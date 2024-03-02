import { Meta, StoryObj } from "@storybook/react";
import Typography from ".";
import { TypographyProps } from "@mui/material";

export default {
    title: 'Atoms/Typography',
    component: Typography,
} as Meta;

type TypographyType = StoryObj<TypographyProps>;


export const TypographyH1: TypographyType = {
    args: {
        variant: 'h1',
        color: 'blue',
        children: 'Seeder'
    }
};
