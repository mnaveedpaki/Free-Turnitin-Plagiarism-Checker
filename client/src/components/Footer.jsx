import { Link } from 'wouter';
import { FileSearch, Mail, Github } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: 'Home', href: '/' },
            { name: 'How to Use', href: '/how-to-use' },
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Disclaimer', href: '/disclaimer' },
        ],
    };

    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="md:col-span-2">
                        <Link href="/">
                            <a className="flex items-center space-x-2 hover:opacity-80 transition-opacity mb-4">
                                <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                                    <FileSearch className="w-6 h-6 text-primary-foreground" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-lg leading-none">Free Turnitin Checker</span>
                                    <span className="text-xs text-muted-foreground leading-none mt-0.5">100% Free AI & Plagiarism Detection</span>
                                </div>
                            </a>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-4 max-w-md">
                            Get accurate plagiarism and AI content detection reports completely free.
                            No signup required. Your documents are never saved.
                        </p>
                        <div className="flex space-x-4">
                            <a href="mailto:support@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-semibold text-sm mb-4">Product</h3>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href}>
                                        <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                            {link.name}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="font-semibold text-sm mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href}>
                                        <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                            {link.name}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} Free Turnitin Checker. All rights reserved.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Free plagiarism detection • AI content checker • Turnitin alternative
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
