import { render } from "@testing-library/react";
import IconFromSvg from ".";
import SeederSvg from "../../../../public/assets/seeder.svg";

describe('IconFromSvg tests', () => {
    it('renders a svg img from path', () => {
        const { getByAltText } = render(<IconFromSvg path={SeederSvg} alt={"Seeder"} />);
        const seederIcon = getByAltText('Seeder');
        expect(seederIcon).toBeInTheDocument();
        expect(seederIcon).toMatchSnapshot();
    });
});