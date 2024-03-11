import { render } from "@testing-library/react";
import AvatarSvg from "../../../../public/assets/avatar.svg";
import Header from ".";

describe('Header Component tests', () => {
    const title = "Cash accleration";
    const description = "Place to create new cash kicks to run business";
    const avatarPath = AvatarSvg;

    it('renders Header', () => {
        const { getByText, getByAltText } = render(
            <Header title={title} description={description} avatarPath={avatarPath} />
        );

        expect(getByText(title)).toBeInTheDocument();
        expect(getByText(description)).toBeInTheDocument();
        expect(getByAltText('Profile Pic')).toHaveAttribute('src', avatarPath);
    });

});