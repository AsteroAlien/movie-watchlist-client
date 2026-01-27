import Label from './Label';
import TextField from '@mui/material/TextField';
import type { ReactNode } from 'react'
import {type SxProps } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

interface IFormField {
    placeholder: string;
    cls: string;
    text: string;
    sxLabel?: SxProps;
    sxTextField?: SxProps;
    icon: ReactNode;
}

function FormField({ cls, text, placeholder, sxLabel, sxTextField, icon }: IFormField) {
    return (
        <>
            <Label classes={cls} text={text} sx={{ ...sxLabel }} />
            <TextField placeholder={placeholder} sx={{ ...sxTextField }}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position='start'>
                                {icon}
                            </InputAdornment>
                        ),
                    }
                }}
            />
        </>
    );
}

export default FormField;