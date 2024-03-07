import { SidebarItemType } from "../../../utils/sidebar";
import HomeInActiveSvg from "../../../../public/assets/home-inactive.svg";
import CoinInActiveSvg from "../../../../public/assets/coin-inactive.svg";
import CoinActiveSvg from "../../../../public/assets/coin-active.svg";
import HomeActiveSvg from "../../../../public/assets/home-active.svg";
import { render, fireEvent } from '@testing-library/react';
import Sidebar from ".";
import theme from "../../../utils/theme";

describe('Sidebar tests', () => {
    const sidebarItems: SidebarItemType[] = [
        {
            id: 1,
            activeIconPath: HomeActiveSvg,
            inActiveIconPath: HomeInActiveSvg,
            itemName: 'Home'
        },
        {
            id: 2,
            activeIconPath: CoinActiveSvg,
            inActiveIconPath: CoinInActiveSvg,
            itemName: 'Cash Accleration'
        }
    ];


    it('renders correctly', () => {
        const { getByText } = render(
            <Sidebar sidebarNavItems={sidebarItems} />
        );
        expect(getByText('Seeder')).toBeInTheDocument();
        expect(getByText('Home')).toBeInTheDocument();
        fireEvent.click(getByText('Cash Accleration'));
        expect(getByText('Cash Accleration')).toBeInTheDocument();
        expect(getByText('Watch how to')).toBeInTheDocument();
    });

});