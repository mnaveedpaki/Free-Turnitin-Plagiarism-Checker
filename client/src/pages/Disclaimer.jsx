import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function Disclaimer() {
    return (
        <Layout>
            <Helmet>
                <title>Disclaimer - Free Turnitin Plagiarism & AI Checker</title>
                <meta name="description" content="Important disclaimer about our free Turnitin alternative. Understand the limitations and proper use of our plagiarism and AI detection tool." />
                <meta name="keywords" content="plagiarism checker disclaimer, turnitin alternative disclaimer, AI detection disclaimer" />
            </Helmet>

            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent text-center">
                            Disclaimer
                        </h1>
                        <p className="text-center text-muted-foreground mb-12">
                            Last updated: January 2026
                        </p>

                        <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-r">
                            <div className="flex items-start space-x-3">
                                <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Important Notice</h3>
                                    <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                                        Please read this disclaimer carefully before using our service. By using Free Turnitin Checker, you acknowledge that you have read, understood, and agree to this disclaimer.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Not Affiliated with Turnitin</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Free Turnitin Checker is an independent service and is NOT affiliated with, endorsed by, or connected to Turnitin LLC or iParadigms LLC in any way. "Turnitin" is a registered trademark of iParadigms LLC. We use the term for descriptive purposes only to indicate that our service provides similar plagiarism detection functionality.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Educational Tool Only</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    This service is provided as an educational and informational tool to help users identify potential plagiarism and AI-generated content in their documents. It should be used as:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    <li>A supplementary checking tool, not a definitive authority</li>
                                    <li>One of multiple methods to verify content originality</li>
                                    <li>A learning resource to understand plagiarism detection</li>
                                    <li>A starting point for further investigation</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Accuracy Limitations</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold mb-2">Plagiarism Detection</h3>
                                        <p className="text-muted-foreground">
                                            Our plagiarism detection uses web search algorithms and may not catch all instances of plagiarism. It searches publicly available web pages but does not have access to:
                                        </p>
                                        <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2 ml-4">
                                            <li>Paid academic databases and journals</li>
                                            <li>Private or password-protected content</li>
                                            <li>Unpublished works or manuscripts</li>
                                            <li>Content behind paywalls</li>
                                            <li>Printed materials not available online</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">AI Detection</h3>
                                        <p className="text-muted-foreground">
                                            AI content detection is based on statistical analysis and machine learning models. It may produce false positives (marking human text as AI) or false negatives (missing AI content). The technology is continually evolving, and new AI models may not be detected accurately.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>No Professional Advice</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    The results provided by our service do not constitute professional, legal, or academic advice. We are not responsible for:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                                    <li>Academic decisions made based on our reports</li>
                                    <li>Legal consequences of plagiarism or copyright issues</li>
                                    <li>Grades, penalties, or sanctions applied by institutions</li>
                                    <li>Publishing or submission decisions</li>
                                </ul>
                                <p className="text-muted-foreground mt-4">
                                    Always consult with appropriate professionals (teachers, academic advisors, legal counsel) for matters related to academic integrity, copyright, or intellectual property.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>User Responsibility</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    Users are solely responsible for:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    <li>Verifying the accuracy of results independently</li>
                                    <li>Properly citing all sources in their work</li>
                                    <li>Understanding their institution's plagiarism policies</li>
                                    <li>Ensuring their work meets academic standards</li>
                                    <li>Not relying solely on automated detection tools</li>
                                    <li>Complying with copyright and intellectual property laws</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Third-Party Services</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Our service uses third-party APIs and services (DuckDuckGo, CrossRef, RapidAPI) to provide functionality. We are not responsible for the accuracy, availability, or policies of these third-party services. Their use is subject to their own terms and conditions.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>No Warranty</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    This service is provided "as is" without any warranties, express or implied. We make no guarantees about:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                                    <li>The completeness of plagiarism detection</li>
                                    <li>The accuracy of AI content identification</li>
                                    <li>Continuous availability of the service</li>
                                    <li>Freedom from errors or bugs</li>
                                    <li>Fitness for any particular purpose</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Limitation of Liability</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    We shall not be liable for any damages arising from the use or inability to use our service, including but not limited to:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                                    <li>Academic penalties or consequences</li>
                                    <li>Lost data or work</li>
                                    <li>Missed deadlines or opportunities</li>
                                    <li>Financial losses</li>
                                    <li>Reputation damage</li>
                                    <li>Legal disputes</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl">
                            <CardHeader>
                                <CardTitle>Updates to This Disclaimer</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    We reserve the right to update this disclaimer at any time. Changes will be posted on this page with an updated date. Your continued use of the service constitutes acceptance of any modifications.
                                </p>
                            </CardContent>
                        </Card>

                        <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                            <h3 className="font-semibold text-red-900 dark:text-red-100 mb-2">Final Reminder</h3>
                            <p className="text-red-800 dark:text-red-200 text-sm">
                                Use this tool responsibly and always verify results independently. Never submit work that isn't entirely your own, properly cited work. Academic integrity is your responsibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
