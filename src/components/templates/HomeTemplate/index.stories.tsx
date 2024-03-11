import { Meta, StoryObj } from "@storybook/react";
import HomeTemplate, { IHomeTemplate } from ".";

export default {
    title: 'Tempaltes/HomeTemplate',
    component: HomeTemplate,
} as Meta;

type HomeTemplateType = StoryObj<IHomeTemplate>;


export const MyTemplate: HomeTemplateType = {
    args: {
        leftNavComponent: 'sidebar',
        header: 'header',
        content: 'content'
    }
};