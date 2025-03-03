"use client";

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';

export default function ThemeSwitcher() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Button onClick={toggleTheme}>
            {resolvedTheme === 'dark' ? <Sun/> : <Moon/>}
        </Button>
    );
}