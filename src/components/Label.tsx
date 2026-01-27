import { boxClasses, Typography, type SxProps } from '@mui/material';

interface ILabel {
    id: string;
    text: string;
    sx?: SxProps;
    classes?: string;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; 
};

function Label({ id, text, sx, variant, classes }: ILabel) {

    return (
        <Typography id={id} className={classes} variant={variant} sx={{...sx }} gutterBottom>
            {text}
        </Typography>
    );
}

export default Label;