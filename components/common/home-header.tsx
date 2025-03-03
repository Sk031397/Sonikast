'use client';
import Image from "next/image";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export function HomeHeader() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavigation = (path: string) => {
        setIsMenuOpen(false);
        if (pathname !== '/') {
            router.push(`/${path}`);
        } else {
            document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { name: "Home", path: "#home" },
        { name: "Features", path: "#features" },
        { name: "Pricing", path: "#pricing" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full shadow">
            <div className="flex h-14 items-center justify-between px-4 relative">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src={'/logo.png'} alt="Logo" width={50} height={50} priority />
                </Link>
                <div className="lg:hidden absolute left-1/2 -translate-x-1/2">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-[#7f00ff] hover:bg-[#7f00ff]/10 hover:text-[#7f00ff]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </Button>
                </div>
                <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
                    {navItems.map((item) =>
                        item.path.startsWith('#') ? (
                            <Button
                                variant={'ghost'}
                                key={item.path}
                                type="button"
                                onClick={() => handleNavigation(item.path)}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-6"
                            >
                                {item.name}
                            </Button>
                        ) : (
                            <Link
                                key={item.path}
                                href={item.path}
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-6"
                            >
                                {item.name}
                            </Link>
                        )
                    )}
                </nav>

                {/* Launch App Button - Always Visible */}
                <div>
                    <Button
                        
                        onClick={() => router.push('/app/chat/default')}
                        style={{ backgroundColor: '#7f00ff', color: 'white' }}
                        className="hover:bg-[#7f00ff]/90"
                    >
                        Launch App
                    </Button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 top-14 z-40 bg-[#121212] lg:hidden min-h-[calc(100vh-3.5rem)]">
                        <nav className="flex flex-col items-center py-8 gap-8 bg-[#121212] h-full">
                            {navItems.map((item) =>
                                item.path.startsWith('#') ? (
                                    <Button
                                        key={item.path}
                                        variant={'ghost'}
                                        type="button"
                                        onClick={() => handleNavigation(item.path)}
                                        className="text-lg font-medium text-muted-foreground hover:text-[#7f00ff] transition-colors"
                                    >
                                        {item.name}
                                    </Button>
                                ) : (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-lg font-medium text-muted-foreground hover:text-[#7f00ff] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )
                            )}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}