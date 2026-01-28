import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint: number = 768): boolean {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);
        
        // Set initial value
        setIsMobile(mediaQuery.matches);

        // Create event listener
        const handleChange = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        // Add listener
        mediaQuery.addEventListener('change', handleChange);

        // Cleanup
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [breakpoint]);

    return isMobile;
}
