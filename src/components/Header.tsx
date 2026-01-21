import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from '@tanstack/react-router';

function Header() {
    return (
        <header>
            <AppBar className='sticky border-b backdrop-blur-xl' sx={{ height: '4rem', backgroundColor: 'hsl(var(--background)/ 0.5)', borderColor: '#282828' }} component="nav">
                <Box display={'flex'} justifyContent={'space-between'} alignContent={'center'} height={'4rem'} width={'100%'} p={'1.5rem'}>
                    <Link to='/' className='flex items-center text-2xl font-display tracking-wider'>WATCHLIST</Link>
                    <Box display={'flex'}justifyContent={'right'} alignItems={'center'} width={'14rem'}>
                        <Button component={Link} to="/dashboard/login" variant="contained"  sx={{width:'5.3125rem', height:'2.5rem', borderRadius:'1rem', fontSize:'0.875rem', background:'transparent', textTransform: 'none'}}>
                            Log in
                        </Button>
                        <Button component={Link} to='/dashboard/signup' variant="contained" sx={{width:'5.3125rem', height:'2.5rem', borderRadius:'0.875rem', fontSize:'0.875rem',background:'var(--gradient-primary)', textTransform: 'none'}}>
                            Sign up
                        </Button>
                    </Box>
                </Box>
            </AppBar>
        </header>
    )
}

export default Header;