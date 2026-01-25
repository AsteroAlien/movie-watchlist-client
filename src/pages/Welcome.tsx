import Box from '@mui/material/Box';
import Header from './../components/Header';
function Welcome() {
    return (
        <Box className='h-full bg-background film-grain'>
            <Header />
            <section id='welcome' className='h-full relative overflow-hidden'>
                {/* Background glow */}
                <Box className='absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-200 bg-primary/20 rounded-full blur-[150px] pointer-events-none'></Box>
                <Box className='container relative pt-20 pb-32'></Box>
            </section>
            <section id='sub-info' className='h-120 py24 bg-linear-to-b from-background to-secondary/20'></section>
            <section id='create-account' className='h-120 py24'></section>
            <footer className="border-t border-border py-12"></footer>
        </Box>
    )
}

export default Welcome;