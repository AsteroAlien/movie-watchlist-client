import Box from '@mui/material/Box';
import { useForm } from '@tanstack/react-form';
import { loginSchema } from '../validators/authValidators';
import Card from '@mui/material/Card';
import Label from '../components/Label';
import TheatersRoundedIcon from '@mui/icons-material/TheatersRounded';
import { Link } from '@tanstack/react-router';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const inputStyles = {
    '& .MuiOutlinedInput-root': {
        backgroundColor: '#1a1a1a',
        height: '2.75rem',
        borderRadius: '0.5rem',
        fontSize: '0.875rem',
        color: '#ffffff',
        mb: 3,
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

function Login() {
    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        validators: {
            onChange: loginSchema
        },
        onSubmit: async ({ value }) => {
            console.log(value)
        }
    });
    return (
        <Box className='flex h-full'>
            <Box className='w-full h-full flex justify-center items-center' sx={{ flexDirection: 'column' }}>
                <Box id='signup-container' className='max-w-lg'>
                    <Box className='pl-5 flex items-center gap-3 group mb-7'>
                        <Box className='flex items-center justify-center rounded-xl from-primary to-accent group-hover:shadow-lg transition-shadow' sx={{ height: '2.25rem', width: '2.25rem', background: 'var(--gradient-primary)' }}>
                            <TheatersRoundedIcon />
                        </Box>
                        <Link to='/' className='text-xl font-display tracking-wider gradient-text font-bold'>WATCHLIST</Link>
                    </Box>
                    <Label classes={'pl-5 font-display tracking-wider font-bold'} text="WELCOME BACK" variant="h1" sx={{ mb: 2, color: '#ffffff', fontSize: '2rem', letterSpacing: '0.025em' }} />
                    <Label classes={'pl-5 font-display tracking-wider font-medium'} text="Sign in to continue to your watchlist" variant="h6" sx={{ mb: 4, color: 'var(--muted-foreground)', fontSize: '1rem', letterSpacing: '0.025em' }} />
                    <form className='w-full flex'>
                        <Card className='h-5 pl-5 pr-5 pb-5' sx={{ background: 'transparent', width: '100%', height: '100%' }}>
                            <form.Field
                                name='email'
                                children={(field) => (
                                    <>
                                        {/*Email*/}
                                        <Label classes={'font-display tracking-wider font-medium font-bold'} text="Email" sx={{ fontSize: '0.875rem', color: '#ffffff' }} />
                                        <TextField id='email' placeholder="john.doe@example.com" fullWidth sx={inputStyles}
                                            slotProps={{
                                                input: {
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <EmailOutlinedIcon sx={{ color: '#666666' }} />
                                                        </InputAdornment>
                                                    ),
                                                },
                                            }}
                                        />
                                    </>
                                )}
                            />
                            <form.Field
                                name='password'
                                children={(field) => (
                                    <>
                                        {/*Password*/}
                                        <Label classes={'font-display tracking-wider font-medium font-bold'} text="Password" sx={{ fontSize: '0.875rem', color: '#ffffff' }} />
                                        <TextField id='password' placeholder="********" fullWidth sx={inputStyles}
                                            slotProps={{
                                                input: {
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <LockOutlinedIcon sx={{ color: '#666666' }} />
                                                        </InputAdornment>
                                                    ),
                                                },
                                            }}
                                        />
                                    </>
                                )}
                            />
                            <Button type="submit" variant="contained" fullWidth
                                sx={buttonStyles}>
                                Sign In
                                <ArrowForwardIcon sx={{ ml: '1rem', fontSize: '1.125rem' }} />
                            </Button>
                            <Box className='flex justify-center items-center mt-7'>
                                <Label classes={'mt-4 font-display tracking-wider font-medium'} text="Don't have an account? " variant="h6" sx={{ color: 'var(--muted-foreground)', fontSize: '1rem' }} />
                                <Link to='/dashboard/signup' className='flex mb-2 font-display tracking-wider font-medium gradient-text ml-2' style={{ fontSize: '1rem', }}>Sign up</Link>
                            </Box>
                        </Card>
                    </form>
                </Box>
            </Box>
            <Box className='w-full h-full flex justify-center items-center'>
                <Box className='w-100 h-100 bg-primary/20 rounded-full blur-[150px] pointer-events-none'></Box>
            </Box>
        </Box>
    );
}

export default Login;