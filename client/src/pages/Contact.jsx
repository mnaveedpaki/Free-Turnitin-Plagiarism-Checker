import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Since this is a static site, we'll just show a message
        toast({
            title: "Message Received!",
            description: "Thank you for contacting us. We'll get back to you soon."
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <Layout>
            <Helmet>
                <title>Contact Us - Free Turnitin Plagiarism & AI Checker</title>
                <meta name="description" content="Get in touch with our team. We're here to help with any questions about our free Turnitin alternative plagiarism and AI detection tool." />
                <meta name="keywords" content="contact turnitin checker, plagiarism checker support, AI detector help, free turnitin contact" />
            </Helmet>

            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Hero Section */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                                Contact Us
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Have questions or feedback? We'd love to hear from you!
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* Contact Form */}
                            <Card className="shadow-xl">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <MessageSquare className="w-5 h-5" />
                                        <span>Send us a Message</span>
                                    </CardTitle>
                                    <CardDescription>
                                        Fill out the form below and we'll get back to you as soon as possible
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <Label htmlFor="name">Name *</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="email">Email *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="subject">Subject *</Label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                placeholder="What is this about?"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="message">Message *</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                placeholder="Your message..."
                                                className="min-h-[120px]"
                                            />
                                        </div>
                                        <Button type="submit" className="w-full">
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>

                            {/* Contact Info */}
                            <div className="space-y-6">
                                <Card className="shadow-xl">
                                    <CardHeader>
                                        <CardTitle className="flex items-center space-x-2">
                                            <Mail className="w-5 h-5" />
                                            <span>Email Us</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-2">
                                            For general inquiries and support:
                                        </p>
                                        <a href="mailto:support@example.com" className="text-primary hover:underline font-medium">
                                            support@freeturnit inchecker.com
                                        </a>
                                    </CardContent>
                                </Card>

                                <Card className="shadow-xl">
                                    <CardHeader>
                                        <CardTitle>Frequently Asked Questions</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4">
                                            Before contacting us, you might find answers to common questions in our FAQ:
                                        </p>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start space-x-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Is this really completely free? Yes, 100% free forever!</span>
                                            </li>
                                            <li className="flex items-start space-x-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Do you save my documents? No, everything is processed in real-time and discarded.</span>
                                            </li>
                                            <li className="flex items-start space-x-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>How accurate is the detection? We use industry-standard algorithms for high accuracy.</span>
                                            </li>
                                            <li className="flex items-start space-x-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>Can I use this for commercial purposes? Yes, our tool is free for all uses.</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="shadow-xl bg-primary/5">
                                    <CardContent className="pt-6">
                                        <h3 className="font-semibold mb-2">Response Time</h3>
                                        <p className="text-sm text-muted-foreground">
                                            We typically respond to all inquiries within 24-48 hours during business days.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
