import { Avatar as MUIAvatar, AvatarProps, styled } from '@mui/material';
import theme from '../../../utils/theme';

export interface IAvatarProps extends AvatarProps {
    children?: string;
    isImage: boolean;
    size?: number;
};

const StyledAvatar = styled(MUIAvatar)({
    height: theme.spacing(8),
    weight: theme.spacing(8),
    borderRadius: theme.spacing(3),
    gap: theme.spacing(2),
    fontWeight: 600,
    letterSpacing: 0.8
});

const Avatar = ({ children, isImage, size, ...props }: IAvatarProps) => {
    if (isImage) {
        return (
            <StyledAvatar {...props} />
        );
    } else {
        if (children) {
            return (
                <StyledAvatar
                    children={children}
                />
            );
        }
        return (
            <MUIAvatar {...props} />
        );
    }
};

export default Avatar;