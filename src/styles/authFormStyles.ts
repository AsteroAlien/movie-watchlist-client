import type { SxProps } from '@mui/material';

export const parentContainerStyles: SxProps = {
    display: 'flex',
    height: '100%'
};

export const parentContainerStylesMobile: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '1rem'
};

export const titleStyles: SxProps = {
    pl: '1.25rem',
    mb: 2,
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: '2rem',
    letterSpacing: '0.025em'
};

export const titleStylesMobile: SxProps = {
    pl: '0.5rem',
    mb: 1.5,
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: '1.5rem',
    letterSpacing: '0.025em'
};

export const subTitleStyles: SxProps = {
    mb: 0,
    pl: '1.25rem',
    color: 'var(--muted-foreground)',
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: '0.025em'
};

export const subTitleStylesMobile: SxProps = {
    mb: 0,
    pl: '0.5rem',
    color: 'var(--muted-foreground)',
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.025em'
};

export const linkTitleStyles: SxProps = {
    color: 'var(--muted-foreground)',
    fontWeight: 500,
    fontSize: '1rem'
};

export const linkTitleStylesMobile: SxProps = {
    color: 'var(--muted-foreground)',
    fontWeight: 500,
    fontSize: '0.875rem'
};

export const cardStyles: SxProps = {
    width: '100%',
    display: 'flex',
    background: 'transparent'
};

export const formContainerStyles: SxProps = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
};

export const formHeaderStyles: SxProps = {
    display: 'flex',
    alignItems: 'center',
    mb: '1.75rem',
    gap: '0.75rem',
    paddingLeft: '1.25rem'
};

export const formHeaderStylesMobile: SxProps = {
    display: 'flex',
    alignItems: 'center',
    mb: '1rem',
    gap: '0.5rem',
    paddingLeft: '0.5rem'
};

export const formIconStyles: SxProps = {
    height: '2.25rem',
    width: '2.25rem',
    background: 'var(--gradient-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.75rem'
};

export const formIconStylesMobile: SxProps = {
    height: '1.75rem',
    width: '1.75rem',
    background: 'var(--gradient-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.5rem'
};

export const inputStyles: SxProps = {
    width: "100%",
    '& input:-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 1000px transparent inset',
        WebkitTextFillColor: '#ffffff',
        transition: 'background-color 9999s ease-in-out 0s',
    },
    '& .MuiOutlinedInput-root': {
        backgroundColor: '#1a1a1a',
        height: '2.75rem',
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
        color: '#ffffff',
        width: '28rem',
        maxWidth: '28rem',
        '& fieldset': {
            borderColor: '#333333',
        },
        '&:hover fieldset': {
            borderColor: '#555555',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'red',
        },
    },
    '& .MuiOutlinedInput-input': {
        padding: '0.75rem 1rem',
        outline: 'red'
    },
};

export const inputStylesMobile: SxProps = {
    width: "100%",
    '& input:-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 1000px transparent inset',
        WebkitTextFillColor: '#ffffff',
        transition: 'background-color 9999s ease-in-out 0s',
    },
    '& .MuiOutlinedInput-root': {
        backgroundColor: '#1a1a1a',
        height: '2.5rem',
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
        color: '#ffffff',
        width: '100%',
        maxWidth: '100%',
        '& fieldset': {
            borderColor: '#333333',
        },
        '&:hover fieldset': {
            borderColor: '#555555',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'red',
        },
    },
    '& .MuiOutlinedInput-input': {
        padding: '0.625rem 0.875rem',
        outline: 'red'
    },
};

export const buttonStyles: SxProps = {
    height: '2.75rem',
    borderRadius: '0.5rem',
    background: 'var(--gradient-primary)',
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'none',
    letterSpacing: '0.025em',
    mt: '2.5rem',
    maxWidth: '28rem',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        background: 'var(--gradient-primary)',
        opacity: 0.9,
        transform: 'scale(1.05)',
    },
};

export const buttonStylesMobile: SxProps = {
    height: '2.5rem',
    borderRadius: '0.5rem',
    background: 'var(--gradient-primary)',
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'none',
    letterSpacing: '0.025em',
    mt: '1.5rem',
    width: '100%',
    maxWidth: '100%',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        background: 'var(--gradient-primary)',
        opacity: 0.9,
        transform: 'scale(1.05)',
    },
};

export const labelStyles: SxProps = {
    fontSize: '0.875rem',
    color: '#ffffff',
    fontWeight: 'bold',
    mt: '2.125rem'
};

export const labelStylesMobile: SxProps = {
    fontSize: '0.875rem',
    color: '#ffffff',
    fontWeight: 'bold',
    mt: '1.5rem'
};

export const iconStyle: SxProps = {
    color: '#666666'
};
