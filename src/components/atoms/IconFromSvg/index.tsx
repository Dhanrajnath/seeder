export interface IIconFromSvgProps {
    path: string;
    alt: string;
    width?: number;
    height?: number;
};

const IconFromSvg = ({
    path,
    alt,
    width,
    height,
}: IIconFromSvgProps) => {
    return (
        <img
            src={path}
            alt={alt}
            width={width ? width : 'inherit'}
            height={height ? height : 'inherit'}
        />
    );
};

export default IconFromSvg;