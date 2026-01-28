import { type FormEvent } from 'react';

import { Link } from '@tanstack/react-router';
import { useForm } from '@tanstack/react-form';
import { loginSchema } from '../validators/authValidators';
import { useIsMobile } from '../hooks/useIsMobile';
import {
    parentContainerStyles,
    parentContainerStylesMobile,
    formContainerStyles,
    formHeaderStyles,
    formHeaderStylesMobile,
    formIconStyles,
    formIconStylesMobile,
    titleStyles,
    titleStylesMobile,
    subTitleStyles,
    subTitleStylesMobile,
    cardStyles,
    inputStyles,
    inputStylesMobile,
    buttonStyles,
    buttonStylesMobile,
    labelStyles,
    labelStylesMobile,
    iconStyle,
    linkTitleStyles,
    linkTitleStylesMobile
} from '../styles/authFormStyles';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Label from '../components/Label';
import Button from '@mui/material/Button';
import FormField from './../components/FormField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TheatersRoundedIcon from '@mui/icons-material/TheatersRounded';

function Login() {
    const isMobile = useIsMobile();
    
    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        validators: {
            onSubmit: loginSchema
        },
        onSubmit: async ({ value }) => {
            console.log(value)
        }
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const onClickAction = () => {
        form.handleSubmit();
    }

    return (
        <Box sx={isMobile ? parentContainerStylesMobile : parentContainerStyles}>
            <Box sx={formContainerStyles}>
                <Box id='signup-container' className='max-w-lg'>
                    <Box className='group' sx={isMobile ? formHeaderStylesMobile : formHeaderStyles}>
                        <Box className='from-primary to-accent group-hover:shadow-lg transition-shadow' sx={isMobile ? formIconStylesMobile : formIconStyles}>
                            <TheatersRoundedIcon />
                        </Box>
                        <Link to='/' className='text-xl font-display tracking-wider gradient-text font-bold'>WATCHLIST</Link>
                    </Box>
                    <Label id="welcome-back-label" classes={'font-display tracking-wider'} text="WELCOME BACK" variant="h1" sx={isMobile ? titleStylesMobile : titleStyles} />
                    <Label id="sign-in-continue-label" classes={' font-display tracking-wider'} text="Sign in to continue to your watchlist" variant="h6" sx={isMobile ? subTitleStylesMobile : subTitleStyles} />
                    <Card sx={cardStyles}>
                        <form className='pl-5 pr-5 pb-5' onSubmit={onSubmit}>
                            <form.Field
                                name='email'
                                children={(field) => (
                                    <>
                                        {/*Email*/}
                                        <FormField id="email" field={field} placeholder='john.doe@example.com' text='Email' sxLabel={isMobile ? labelStylesMobile : labelStyles}
                                            sxTextField={isMobile ? inputStylesMobile : inputStyles} icon={<EmailOutlinedIcon sx={iconStyle} />} cls='tracking-wider'
                                        />
                                    </>
                                )}
                            />
                            <form.Field
                                name='password'
                                children={(field) => (
                                    <>
                                        {/*Password*/}
                                        <FormField id="password" field={field} placeholder='********' text='Password' sxLabel={isMobile ? labelStylesMobile : labelStyles}
                                            sxTextField={isMobile ? inputStylesMobile : inputStyles} icon={<LockOutlinedIcon sx={iconStyle} />} cls='tracking-wider'
                                        />
                                    </>
                                )}
                            />
                            <form.Subscribe
                                selector={(state) => [state.canSubmit, state.isSubmitting]}
                                children={([canSubmit, isSubmitting]) => (
                                    <>
                                        <Button type="submit" variant="contained" fullWidth sx={isMobile ? buttonStylesMobile : buttonStyles}
                                            disabled={!canSubmit || isSubmitting} onClick={onClickAction}>
                                            {isSubmitting ? '...' :  'Sign In'}
                                            <ArrowForwardIcon sx={{ ml: '1rem', fontSize: '1.125rem' }} />
                                        </Button>
                                    </>
                                )}
                            />
                            <Box className='flex justify-center items-center mt-7'>
                                <Label id="dont-have-account-label" classes={'font-display tracking-wider'} text="Don't have an account ? " variant="h6"
                                    sx={isMobile ? linkTitleStylesMobile : linkTitleStyles} />
                                <Link to='/dashboard/signup' className='flex mb-2 font-display tracking-wider font-medium gradient-text ml-2' style={{ fontSize: '1rem', }}>Sign up</Link>
                            </Box>
                        </form>
                    </Card>
                </Box>
            </Box>
            <Box className='w-full h-full flex justify-center items-center'>
                <Box className='w-100 h-100 bg-primary/20 rounded-full blur-[150px] pointer-events-none'></Box>
            </Box>
        </Box>
    );
}
export default Login;
