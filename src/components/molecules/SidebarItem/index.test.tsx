import { fireEvent, render } from "@testing-library/react";
import SidebarItem from ".";
import CoinActiveSvg from "../../../../public/assets/coin-active.svg";
import CoinInActiveSvg from "../../../../public/assets/coin-inactive.svg";

describe('SidebarItem test', () => {
    const mockOnClick = jest.fn();

    it('renders correctly', () => {
        const { container } = render(<SidebarItem iconPath={CoinActiveSvg} itemName="Cash accleration" isActive={true} onClick={mockOnClick} />);

        expect(container.firstChild).toMatchSnapshot();
    });
    it('renders sidebar item with active state', () => {
        const { getByText } = render(<SidebarItem iconPath={CoinActiveSvg} itemName="Cash accleration" isActive={true} onClick={mockOnClick} />);

        fireEvent.click(getByText('Cash accleration'));
        expect(mockOnClick).toHaveBeenCalled();
    });

    it('renders sidebar item with in-active state', () => {
        const mockOnClick = jest.fn();
        const { getByText } = render(<SidebarItem iconPath={CoinInActiveSvg} itemName="Cash accleration" isActive={false} onClick={mockOnClick} />);

        fireEvent.click(getByText('Cash accleration'));
        expect(mockOnClick).toHaveBeenCalled();
    });
});