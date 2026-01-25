import Box from '@mui/material/Box';

function Signup() {
    return (
        <Box className='flex h-full'>
            <Box className='w-full h-full flex justify-center items-center'>
                <Box className='w-100 h-100 bg-primary/20 rounded-full blur-[150px] pointer-events-none'></Box>
            </Box>
            <Box className='w-full h-full'>
                <h1>Register</h1>
            </Box>
        </Box>
    );
}

export default Signup;