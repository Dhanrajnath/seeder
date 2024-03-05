import { Meta, StoryObj } from '@storybook/react';
import DeleteIcon from '@mui/icons-material/Delete';
import { ButtonProps, PaletteColor } from '@mui/material';
import Button from '.';
import theme from '../../../utils/theme';

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        onClick: { action: 'clicked' },
    },
} as Meta;

type ButtonType = StoryObj<ButtonProps>;


export const Primary: ButtonType = {
    args: {
        size: 'large',
        variant: 'contained',
        color: 'primary',
        children: 'Primary Button',
        onClick: () => { console.log('Clicked!') }
    }
};

export const DeleteButton: ButtonType = {
    args: {
        size: 'large',
        variant: 'outlined',
        color: 'error',
        children: 'DELETE',
        startIcon: <DeleteIcon />
    }
}

export const SubmitButton: ButtonType = {
    args: {
        size: 'large',
        variant: 'text',
        color: 'success',
        children: 'SUBMIT'
    }
}

export const NewCashKickButton: ButtonType = {
    args: {
        children: 'New Cash Kick',
        sx: {
            ...theme.typography.button,
            borderRadius: theme.spacing(3),
            background: theme.palette.primary["500" as keyof PaletteColor],
            gap: theme.spacing(2),
            padding: '20px 40px 20px 40px',
            width: theme.spacing(69),
            height: theme.spacing(15)
        }
    }
}

export const MyContractsButton: ButtonType = {
    args: {
        variant: 'contained',
        children: 'My Contracts',
        sx: {
            ...theme.typography.button,
            border: '1px',
            borderRadius: theme.spacing(3),
            borderColor: theme.palette.primary["500" as keyof PaletteColor],
            background: theme.palette.primary["600" as keyof PaletteColor],
            gap: theme.spacing(2),
            padding: '12px 24px 12px 24px',
            width: theme.spacing(38),
            height: theme.spacing(11)
        }
    }
}

export const MyCachKicksButton: ButtonType = {
    args: {
        variant: 'contained',
        children: 'My Cash Kicks',
        sx: {
            ...theme.typography.button,
            border: '1px',
            borderRadius: theme.spacing(3),
            borderColor: theme.palette.primary["500" as keyof PaletteColor],
            background: theme.palette.primary["600" as keyof PaletteColor],
            gap: theme.spacing(2),
            padding: '12px 24px 12px 24px',
            width: theme.spacing(39),
            height: theme.spacing(11)
        }
    }
}
