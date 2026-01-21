import Box from '@mui/material/Box';
import Header from './../components/Header';
function Welcome() {
    return (
        <div className="h-full bg-[hsl(var(--background))] film-grain">
            <Header />
            <section id="welcome" className="h-full relative overflow-hidden">
                {/* Background glow */}
                <Box className="absolute top-1/4 left-1/2 -translate-x-1/2 w-200 h-200 bg-[hsl(var(--primary))]/20 rounded-full blur-[150px] pointer-events-none"></Box>
                <Box className="container relative pt-20 pb-32"></Box>
            </section>

            <section></section>
        </div>
    )
}

export default Welcome;