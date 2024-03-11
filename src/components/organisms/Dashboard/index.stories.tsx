import { Meta, StoryObj } from "@storybook/react";
import Dashboard, { IDashboardProps } from ".";
import CalendarSvg from "../../../../public/assets/calendar.svg";
import DocumentDownloadSvg from "../../../../public/assets/document-download.svg";
import PercentageSquareSvg from "../../../../public/assets/percentage-square.svg";

export default {
    title: 'Organisms/Dashboard',
    component: Dashboard,
} as Meta;

type DashboardType = StoryObj<IDashboardProps>;

export const CashAcclerationDashboard: DashboardType = {
    args: {
        cardItems: [
            {
                icon: CalendarSvg,
                infoText: 'Term cap',
                title: '12 months'
            },
            {
                icon: DocumentDownloadSvg,
                infoText: 'Available credit',
                title: '$709.45k'
            },
            {
                icon: PercentageSquareSvg,
                infoText: 'Max interest rate',
                title: '12.00%'
            }
        ]
    }
};