import { render } from "@testing-library/react";
import Avatar from ".";
import AvatarSvg from "../../../../public/assets/avatar.svg";

describe('Avatar tests', () => {
    it('renders Avatar with default props and should match the snapshot', () => {
        const { container } = render(<Avatar isImage={false} />);
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders Avatar with image as prop and should match the snapshot', () => {
        const { container } = render(<Avatar isImage={true} variant="circular" alt="Profile Pic" src={AvatarSvg} />);

        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders Avatar without image and with children', () => {
        const { container } = render(<Avatar isImage={false} variant="circular" children="ABC" />);

        expect(container.firstChild).toMatchSnapshot();
    })
});