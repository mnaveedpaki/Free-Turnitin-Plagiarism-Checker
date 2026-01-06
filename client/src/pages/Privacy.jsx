import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Privacy() {
    return (
        <Layout>
            <Helmet>
                <title>Privacy Policy - Free Turnitin Plagiarism & AI Checker</title>
                <meta name="description" content="Privacy policy for our free Turnitin alternative. We don't store your documents. Learn how we protect your data and ensure complete privacy." />
                <meta name="keywords" content="privacy policy, data protection, document privacy, turnitin privacy, plagiarism checker privacy" />
            </Helmet>

            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent text-center">
                            Privacy Policy
                        </h1>
                        <p className="text-center text-muted-foreground mb-12">
                            Last updated: January 2026
                        </p>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Your Privacy is Our Priority</CardTitle>
                            </CardHeader>
                            <CardContent className="prose dark:prose-invert max-w-none">
                                <p>
                                    At Free Turnitin Checker, we take your privacy seriously. This Privacy Policy explains how we handle your information when you use our plagiarism and AI detection service.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Information We DO NOT Collect or Store</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-2">Your Documents</h3>
                                    <p className="text-muted-foreground">
                                        We DO NOT store, save, or keep any copies of the text or files you submit for checking. All processing happens in real-time in your browser session and our server memory. Once the analysis is complete and you close your browser, all data is permanently discarded.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Personal Information</h3>
                                    <p className="text-muted-foreground">
                                        We DO NOT require registration, login, or any personal information. You can use our service completely anonymously without providing your name, email, or any identifying data.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">User Accounts</h3>
                                    <p className="text-muted-foreground">
                                        We DO NOT have user accounts, databases, or any system to track individual users.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Information We Temporarily Process</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-2">Submitted Text</h3>
                                    <p className="text-muted-foreground">
                                        Your text is temporarily processed in server memory to perform plagiarism and AI detection. This data exists only during the analysis (30-60 seconds) and is immediately deleted upon completion.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">API Requests</h3>
                                    <p className="text-muted-foreground">
                                        We use third-party APIs (DuckDuckGo for web search, RapidAPI for AI detection) to provide our services. Your text is sent to these services for analysis but they also do not store your data permanently.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Technical Logs</h3>
                                    <p className="text-muted-foreground">
                                        We may collect basic technical information like IP addresses and browser types in server logs for security and debugging purposes. These logs do not contain your document content and are automatically deleted after 7 days.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Cookies and Tracking</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    We use minimal cookies only for essential functionality:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    <li>Session cookies to maintain your analysis state during use</li>
                                    <li>Local storage for theme preferences (light/dark mode)</li>
                                    <li>No tracking cookies, no analytics cookies, no advertising cookies</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Third-Party Services</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    We use the following third-party services to provide our functionality:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    <li><strong>DuckDuckGo:</strong> For web search to find potential plagiarism sources</li>
                                    <li><strong>CrossRef:</strong> For academic paper searches</li>
                                    <li><strong>RapidAPI AI Detection:</strong> For identifying AI-generated content</li>
                                </ul>
                                <p className="text-muted-foreground mt-4">
                                    These services have their own privacy policies and data handling practices. We recommend reviewing their policies if you have concerns.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Data Security</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    All data transmission between your browser and our servers uses HTTPS encryption. Since we don't store your documents, there's no risk of data breaches exposing your content.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Your Rights</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    Since we don't collect or store personal data or documents:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    <li>There's no personal data to request, access, or delete</li>
                                    <li>You automatically have complete privacy by design</li>
                                    <li>You maintain full ownership and control of your documents</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Children's Privacy</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Our service is available to users of all ages. Since we don't collect personal information, there are no special considerations for children's data.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl">
                            <CardHeader>
                                <CardTitle>Changes to This Policy</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of our service after changes constitutes acceptance of the updated policy.
                                </p>
                            </CardContent>
                        </Card>

                        <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                            <p className="text-center text-muted-foreground">
                                <strong>Questions about our privacy practices?</strong><br />
                                Contact us at: privacy@freeturnit inchecker.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
