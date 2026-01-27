import type { FormEvent } from 'react';
import { Link } from '@tanstack/react-router';
import { useForm } from '@tanstack/react-form';
import { sigupSchema } from '../validators/authValidators';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Label from '../components/Label';
import Button from '@mui/material/Button';
import FormField from './../components/FormField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import TheatersRoundedIcon from '@mui/icons-material/TheatersRounded';

function Signup() {
    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validators: {
            onChange: sigupSchema
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
        <Box sx={parentContainerStyles}>
            <Box className='w-full h-full flex justify-center items-center'>
                <Box className='w-100 h-100 bg-primary/20 rounded-full blur-[150px] pointer-events-none'></Box>
            </Box>
             <Box sx={formContainerStyles}>
                <Box id='signup-container' className='max-w-lg'>
                    <Box className='group' sx={formHeaderStyles}>
                        <Box className='from-primary to-accent group-hover:shadow-lg transition-shadow' sx={formIconStyles}>
                            <TheatersRoundedIcon />
                        </Box>
                        <Link to='/' className='text-xl font-display tracking-wider gradient-text font-bold'>WATCHLIST</Link>
                    </Box>
                    <Label id="create-account-label" classes={'font-display tracking-wider'} text="Create Account" variant="h1" sx={titleStyles} />
                    <Label id="join-tracking-label" classes={' font-display tracking-wider'} text="Join to start tracking your movies" variant="h6" sx={subTitleStyles} />
                    <Card sx={cardStyles}>
                        <form className='pl-5 pr-5 pb-5' onSubmit={onSubmit}>
                             <form.Field
                                name='name'
                                children={(field) => (
                                    <>
                                        {/*fullName*/}
                                        <FormField id="name" field={field} placeholder='John Doe' text='Full Name' sxLabel={labelStyles}
                                            sxTextField={inputStyles} icon={<PersonOutlineIcon sx={iconStyle} />} cls='tracking-wider'
                                        />
                                    </>
                                )}
                            />
                            <form.Field
                                name='email'
                                children={(field) => (
                                    <>
                                        {/*Email*/}
                                        <FormField id="email" field={field} placeholder='john.doe@example.com' text='Email' sxLabel={labelStyles}
                                            sxTextField={inputStyles} icon={<EmailOutlinedIcon sx={iconStyle} />} cls='tracking-wider'
                                        />
                                    </>
                                )}
                            />
                            <form.Field
                                name='password'
                                children={(field) => (
                                    <>
                                        {/*Password*/}
                                        <FormField id="password" field={field} placeholder='********' text='Password' sxLabel={labelStyles}
                                            sxTextField={inputStyles} icon={<LockOutlinedIcon sx={iconStyle} />} cls='tracking-wider'
                                        />
                                    </>
                                )}
                            />
                             <form.Field
                                name='confirmPassword'
                                children={(field) => (
                                    <>
                                        {/*Confirm Password*/}
                                         <FormField id="confirmPassword" field={field} placeholder='********' text='Confirm Password' sxLabel={labelStyles}
                                            sxTextField={inputStyles} icon={<LockOutlinedIcon sx={iconStyle} />} cls='tracking-wider'
                                        />
                                    </>
                                )}
                            />
                             <form.Subscribe
                                selector={(state) => [state.canSubmit, state.isSubmitting]}
                                children={([canSubmit, isSubmitting]) => (
                                    <>
                                        <Button type="submit" variant="contained" fullWidth sx={buttonStyles}
                                            disabled={!canSubmit || isSubmitting} onClick={onClickAction}>
                                            {isSubmitting ? '...' : 'Sign Up'}
                                            <ArrowForwardIcon sx={{ ml: '1rem', fontSize: '1.125rem' }} />
                                        </Button>
                                    </>
                                )}
                            />
                            <Box className='flex justify-center items-center mt-7'>
                                <Label id="already-have-account-label" classes={'font-display tracking-wider'} text="Already have an account ?" variant="h6"
                                    sx={linkTitleStyles} />
                                <Link to='/dashboard/login' className='flex mb-2 font-display tracking-wider font-medium gradient-text ml-2' style={{ fontSize: '1rem', }}>Sign in</Link>
                            </Box>
                        </form>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
}

export default Signup;

/*Styles*/
const parentContainerStyles = {
    display: 'flex',
    height: '100%'
};

const titleStyles = {
    pl: '1.25rem',
    mb: 2,
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: '2rem',
    letterSpacing: '0.025em'
}

const subTitleStyles = {
    mb: 3,
    pl: '1.25rem',
    color: 'var(--muted-foreground)',
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: '0.025em'
}

const linkTitleStyles = {
    color: 'var(--muted-foreground)',
    fontWeight: 500,
    fontSize: '1rem'
}

const cardStyles = {
    width: '100%',
    display: 'flex',
    background: 'transparent'
}

const formContainerStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
};

const formHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    mb: '1.75rem',
    gap: '0.75rem',
    paddingLeft: '1.25rem'
};

const formIconStyles = {
    height: '2.25rem',
    width: '2.25rem',
    background: 'var(--gradient-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.75rem'
};

const inputStyles = {
    width: "100%",
    '& .MuiOutlinedInput-root': {
        backgroundColor: '#1a1a1a',
        height: '2.75rem',
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
        color: '#ffffff',
        mb: 3,
        width: '23rem',
        maxWidth: '28rem',
        '& fieldset': {
            borderColor: '#333333',
        },
        '&:hover fieldset': {
            borderColor: '#555555',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'var(--primary)',
        },
    },
    '& .MuiOutlinedInput-input': {
        padding: '0.75rem 1rem',
    },
};

const buttonStyles = {
    height: '2.75rem',
    borderRadius: '0.5rem',
    background: 'var(--gradient-primary)',
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'none',
    letterSpacing: '0.025em',
    mt: 2,
    maxWidth: '28rem',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        background: 'var(--gradient-primary)',
        opacity: 0.9,
        transform: 'scale(1.05)',
    },
};

const labelStyles = {
    fontSize: '0.875rem',
    color: '#ffffff',
    fontWeight: 'bold'
};

const iconStyle = {
    color: '#666666'
};
