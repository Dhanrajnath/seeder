import { Meta, StoryObj } from "@storybook/react";
import IconFromSvg, { IIconFromSvgProps } from ".";
import SeederSvg from "../../../../public/assets/seeder.svg";
import CalendarSvg from "../../../../public/assets/calendar.svg";
import DocumentDownloadSvg from "../../../../public/assets/document-download.svg";
import PercentageSquareSvg from "../../../../public/assets/percentage-square.svg";

export default {
    title: 'Atoms/IconFromSVG',
    component: IconFromSvg,
    argTypes: {
        onClick: { action: 'clicked' },
    },
} as Meta;

type IconFromSvgType = StoryObj<IIconFromSvgProps>;


export const SeederIcon: IconFromSvgType = {
    args: {
        alt: 'Seeder Logo',
        path: SeederSvg
    }
};

export const CalendarIcon: IconFromSvgType = {
    args: {
        alt: 'calendar',
        path: CalendarSvg
    }
};

export const DocumentDownloadIcon: IconFromSvgType = {
    args: {
        alt: 'document-download',
        path: DocumentDownloadSvg
    }
};

export const PercentageSquareIcon: IconFromSvgType = {
    args: {
        alt: 'percentage-square',
        path: PercentageSquareSvg
    }
};