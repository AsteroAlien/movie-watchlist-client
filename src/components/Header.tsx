import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from '@tanstack/react-router';
import TheatersRoundedIcon from '@mui/icons-material/TheatersRounded';

function Header() {
    return (
        <header>
            <AppBar className='sticky border-b backdrop-blur-xl items-center' sx={{ height: '4rem', backgroundColor: 'hsl(var(--background)/ 0.5)', borderColor: '#282828' }} component="nav">
                <Box className='container flex justify-between items-center pr-1.5 pl-1.5'>
                    <Box className='flex items-center gap-3 group'>
                        <Box className='flex items-center justify-center rounded-xl from-primary to-accent group-hover:shadow-lg transition-shadow' sx={{height: '2.25rem', width:'2.25rem',background: 'var(--gradient-primary)'}}>
                            <TheatersRoundedIcon/>
                        </Box>
                        <Link to='/' className='text-xl font-display tracking-wider gradient-text font-bold'>WATCHLIST</Link>
                    </Box>
                    <Box className='flex h-16 items-center gap-4' width={'auto'}>
                        <Button component={Link} to="/dashboard/login" variant="contained" sx={{ width: '5.3125rem', height: '2.5rem', borderRadius: '1rem', fontSize: '0.875rem', background: 'transparent', textTransform: 'none' }}>
                            Log in
                        </Button>
                        <Button component={Link} to='/dashboard/signup' variant="contained" sx={{ width: '5.3125rem', height: '2.5rem', borderRadius: '0.875rem', fontSize: '0.875rem', background: 'var(--gradient-primary)', textTransform: 'none' }}>
                            Sign up
                        </Button>
                    </Box>
                </Box>
            </AppBar>
        </header>
    )
}

export default Header;