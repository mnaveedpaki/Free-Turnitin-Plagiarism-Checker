import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Zap, Globe, Heart, Target, Users } from 'lucide-react';

export default function About() {
    const features = [
        {
            icon: Shield,
            title: '100% Free Forever',
            description: 'No hidden costs, no premium plans. Everyone deserves access to quality plagiarism and AI detection tools.'
        },
        {
            icon: Zap,
            title: 'Fast & Accurate',
            description: 'Get results in 30-60 seconds using advanced algorithms for plagiarism detection and AI content analysis.'
        },
        {
            icon: Globe,
            title: 'Web-Based Sources',
            description: 'We search billions of web pages and academic sources to ensure comprehensive plagiarism checking.'
        },
        {
            icon: Heart,
            title: 'Privacy First',
            description: 'Your documents are never saved or stored. All processing happens in real-time and data is immediately discarded.'
        },
        {
            icon: Target,
            title: 'Dual Detection',
            description: 'Simultaneous plagiarism and AI content detection in one scan, saving you time and effort.'
        },
        {
            icon: Users,
            title: 'For Everyone',
            description: 'Students, teachers, writers, and professionals can all benefit from our free plagiarism checker.'
        }
    ];

    return (
        <Layout>
            <Helmet>
                <title>About Us - Free Turnitin Alternative | Plagiarism & AI Checker</title>
                <meta name="description" content="Learn about our free Turnitin alternative. We provide accurate plagiarism and AI detection for students, teachers, and professionals. 100% free, no signup required." />
                <meta name="keywords" content="about turnitin checker, free plagiarism detection, AI content detector, turnitin alternative, academic integrity" />
            </Helmet>

            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 py-16">
                <div className="container mx-auto px-4">
                    {/* Hero Section */}
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            About Our Free Turnitin Checker
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We believe that everyone should have access to quality plagiarism and AI detection tools without paying expensive subscription fees. That's why we built this completely free alternative to Turnitin.
                        </p>
                    </div>

                    {/* Mission Statement */}
                    <Card className="max-w-4xl mx-auto mb-12 shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-2xl">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Our mission is to democratize access to academic integrity tools. We understand that students, educators, and writers need reliable plagiarism and AI detection, but many can't afford expensive commercial solutions.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                By combining advanced web search algorithms with state-of-the-art AI detection technology, we provide a comprehensive solution that rivals commercial products—completely free of charge.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Features Grid */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                                        <CardHeader>
                                            <div className="flex items-center space-x-3 mb-2">
                                                <div className="p-2 bg-primary/10 rounded-lg">
                                                    <Icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <CardTitle className="text-lg">{feature.title}</CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>

                    {/* Technology Section */}
                    <Card className="max-w-4xl mx-auto shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-2xl">Our Technology</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Plagiarism Detection</h3>
                                <p className="text-muted-foreground">
                                    We use advanced cosine similarity and n-gram analysis algorithms to compare your text against billions of web pages. Our system searches through DuckDuckGo and academic databases including CrossRef to find potential matches.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">AI Content Detection</h3>
                                <p className="text-muted-foreground">
                                    Our AI detection uses the latest machine learning models via RapidAPI to identify AI-generated text from ChatGPT, GPT-4, and other language models. We provide detailed sentence-level analysis showing exactly which parts may be AI-written.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Privacy & Security</h3>
                                <p className="text-muted-foreground">
                                    All analysis happens in real-time. We don't store your documents, and no data is saved to any database. Your privacy and confidentiality are our top priorities.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}
