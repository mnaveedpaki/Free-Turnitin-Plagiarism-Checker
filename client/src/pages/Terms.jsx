import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Terms() {
    return (
        <Layout>
            <Helmet>
                <title>Terms of Service - Free Turnitin Plagiarism & AI Checker</title>
                <meta name="description" content="Terms of service for our free Turnitin alternative. Understand your rights and responsibilities when using our plagiarism and AI detection tool." />
                <meta name="keywords" content="terms of service, user agreement, plagiarism checker terms, turnitin alternative terms" />
            </Helmet>

            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent text-center">
                            Terms of Service
                        </h1>
                        <p className="text-center text-muted-foreground mb-12">
                            Last updated: January 2026
                        </p>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Agreement to Terms</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    By accessing and using Free Turnitin Checker, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please do not use our service.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Use of Service</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-2">Permitted Use</h3>
                                    <p className="text-muted-foreground mb-2">You may use our service to:</p>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                                        <li>Check documents for plagiarism and AI-generated content</li>
                                        <li>Generate and download plagiarism reports</li>
                                        <li>Use for personal, academic, or commercial purposes</li>
                                        <li>Check unlimited documents at no cost</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Prohibited Use</h3>
                                    <p className="text-muted-foreground mb-2">You may NOT:</p>
                                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                                        <li>Use the service for any illegal purposes</li>
                                        <li>Attempt to reverse engineer, decompile, or hack the service</li>
                                        <li>Use automated scripts or bots to abuse the service</li>
                                        <li>Submit malicious content or attempt to harm the system</li>
                                        <li>Claim the results as absolutely definitive without human review</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Service Availability</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    We strive to provide continuous service availability, but we do not guarantee:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    <li>Uninterrupted access to the service</li>
                                    <li>Error-free operation</li>
                                    <li>Correction of all defects</li>
                                    <li>Permanent availability of features</li>
                                </ul>
                                <p className="text-muted-foreground mt-4">
                                    We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Accuracy and Limitations</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    While we use advanced algorithms for detection, you understand and agree that:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                                    <li>Results are provided as-is and may not be 100% accurate</li>
                                    <li>Our service is a tool to assist, not replace human judgment</li>
                                    <li>False positives and false negatives may occur</li>
                                    <li>Results should be reviewed and verified independently</li>
                                    <li>We are not responsible for decisions made based on our results</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Intellectual Property</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold mb-2">Your Content</h3>
                                        <p className="text-muted-foreground">
                                            You retain all rights to the documents you submit. By using our service, you grant us a temporary, non-exclusive license to process your content solely for providing plagiarism and AI detection services. This license terminates immediately upon completion of analysis.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Our Service</h3>
                                        <p className="text-muted-foreground">
                                            The service, including its code, design, and algorithms, is protected by copyright and other intellectual property laws. You may not copy, modify, or distribute any part of our service without permission.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Disclaimer of Warranties</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Limitation of Liability</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM:
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-4 ml-4">
                                    <li>Your use or inability to use the service</li>
                                    <li>Any inaccuracies in the results provided</li>
                                    <li>Unauthorized access to your submissions</li>
                                    <li>Any errors or omissions in the service</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Indemnification</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    You agree to indemnify and hold harmless Free Turnitin Checker and its operators from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the service or violation of these terms.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl mb-6">
                            <CardHeader>
                                <CardTitle>Governing Law</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="shadow-xl">
                            <CardHeader>
                                <CardTitle>Changes to Terms</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. Your continued use of the service after changes constitutes acceptance of the modified terms.
                                </p>
                            </CardContent>
                        </Card>

                        <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                            <p className="text-center text-muted-foreground">
                                <strong>Questions about our terms?</strong><br />
                                Contact us at: legal@freeturnit inchecker.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
