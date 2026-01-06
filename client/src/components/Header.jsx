import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, FileSearch } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'How to Use', href: '/how-to-use' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <a className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                                <FileSearch className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg leading-none">Free Turnitin</span>
                                <span className="text-xs text-muted-foreground leading-none mt-0.5">Plagiarism & AI Checker</span>
                            </div>
                        </a>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <a className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors">
                                    {item.name}
                                </a>
                            </Link>
                        ))}
                        <Link href="/">
                            <Button size="sm" className="ml-4">
                                <FileSearch className="w-4 h-4 mr-2" />
                                Check Now
                            </Button>
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-accent"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="md:hidden py-4 space-y-1">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href}>
                                <a
                                    className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            </Link>
                        ))}
                        <div className="px-4 pt-2">
                            <Link href="/">
                                <Button className="w-full" onClick={() => setIsMenuOpen(false)}>
                                    <FileSearch className="w-4 h-4 mr-2" />
                                    Check Now
                                </Button>
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
