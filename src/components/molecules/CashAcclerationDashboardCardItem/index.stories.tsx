import { Meta, StoryObj } from "@storybook/react";
import DashboardCardItem, { IDashboardCardItemProps } from ".";
import CalendarSvg from "../../../../public/assets/calendar.svg";
import DocumentDownloadSvg from "../../../../public/assets/document-download.svg";
import PercentageSquareSvg from "../../../../public/assets/percentage-square.svg";

export default {
    title: 'Molecules/CashAcclerationDashboardCard',
    component: DashboardCardItem,
} as Meta;

type DashboardCardType = StoryObj<IDashboardCardItemProps>;


export const TermCapCard: DashboardCardType = {
    args: {
        icon: CalendarSvg,
        infoText: 'Term cap',
        title: '12 months'
    }
};

export const AvailableCredit: DashboardCardType = {
    args: {
        icon: DocumentDownloadSvg,
        infoText: 'Available credit',
        title: '$709.45k'
    }
};

export const MaxInterestRate: DashboardCardType = {
    args: {
        icon: PercentageSquareSvg,
        infoText: 'Max interest rate',
        title: '12.00%'
    }
};