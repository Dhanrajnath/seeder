import { Meta, StoryObj } from "@storybook/react";
import NewCashKick, { INewCashKickProps } from ".";

export default {
    title: 'Organisms/NewCashKick',
    component: NewCashKick,
    argTypes: {
        onClick: { action: 'clicked' },
    },
} as Meta;

type NewCashKickType = StoryObj<INewCashKickProps>;


export const NewCashkick: NewCashKickType = {
    args: {
        title: "Launch a new Cash Kick",
        description: "You have upto $ available for a new cash advance",
        availableCashKick: "709,546.00",
        buttonName: "New Cash Kick"
    }
};