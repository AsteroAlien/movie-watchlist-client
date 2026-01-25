import Box from '@mui/material/Box';

function Login() {
    return (
        <Box className='flex h-full'>
            <Box className='w-full h-full'>
                <h1>Login</h1>
            </Box>
            <Box className='w-full h-full flex justify-center items-center'>
                <Box className='w-100 h-100 bg-primary/20 rounded-full blur-[150px] pointer-events-none'></Box>
            </Box>
        </Box>
    );
}

export default Login;