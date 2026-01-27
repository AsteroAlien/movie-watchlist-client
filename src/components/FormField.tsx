import { type ChangeEvent } from 'react';
import type { ReactNode } from 'react'
import { type SxProps } from '@mui/material';


import Label from './Label';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SubMessage from './SubMessage';
interface IFormField {
    id: string;
    placeholder: string;
    cls: string;
    text: string;
    sxLabel?: SxProps;
    sxTextField?: SxProps;
    icon: ReactNode;
    field: any // only allowing type any because field type from tanstack-form is complex
}

function FormField({ cls, text, placeholder, sxLabel, sxTextField, icon, field, id }: IFormField) {
    const onChangeAction = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        field.handleChange(value);
    };

    return (
        <>
            <Label id={`label-${id}`} classes={cls} text={text} sx={{ ...sxLabel }} />
            <TextField id={id} value={field.state.value} onChange={onChangeAction} placeholder={placeholder} sx={{ ...sxTextField }}
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
            <SubMessage field={field} />
        </>
    );
}

export default FormField;