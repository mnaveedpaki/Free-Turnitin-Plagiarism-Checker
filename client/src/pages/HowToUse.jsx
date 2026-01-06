import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, FileText, Download, CheckCircle, FileSearch } from 'lucide-react';

export default function HowToUse() {
    const steps = [
        {
            icon: FileText,
            title: 'Step 1: Enter or Upload Your Text',
            description: 'Paste your text directly into the text box or upload a document file (PDF, DOCX, DOC). Our system supports files up to 10MB.'
        },
        {
            icon: CheckCircle,
            title: 'Step 2: Click Check Button',
            description: 'Click the "Check Plagiarism & AI" button to start the analysis. The process typically takes 30-60 seconds depending on text length.'
        },
        {
            icon: FileSearch,
            title: 'Step 3: Review Results',
            description: 'View detailed reports showing plagiarism percentage, AI-generated content, similarity scores, and matched sources for each sentence.'
        },
        {
            icon: Download,
            title: 'Step 4: Download Report',
            description: 'Download your complete analysis report as a professional PDF document with all the details and sources.'
        }
    ];

    return (
        <Layout>
            <Helmet>
                <title>How to Use - Free Turnitin Plagiarism & AI Checker</title>
                <meta name="description" content="Learn how to use our free Turnitin alternative for plagiarism and AI detection. Simple 4-step process to check your documents for originality." />
                <meta name="keywords" content="how to use turnitin, plagiarism checker guide, AI detection tutorial, free turnitin, check plagiarism online" />
            </Helmet>

            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 py-16">
                <div className="container mx-auto px-4">
                    {/* Hero Section */}
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                            How to Use Our Free Turnitin Checker
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Follow these simple steps to check your documents for plagiarism and AI-generated content completely free
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                                    <CardHeader>
                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-primary/10 rounded-lg">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-xl">{step.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Tips Section */}
                    <Card className="max-w-4xl mx-auto shadow-xl">
                        <CardHeader>
                            <CardTitle className="text-2xl">Tips for Best Results</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Use Proper Formatting:</strong> Ensure your text is properly formatted with clear sentence structures for accurate analysis.
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Minimum Length:</strong> Submit at least 100 characters for meaningful plagiarism and AI detection results.
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Check Individual Sentences:</strong> Our tool analyzes each sentence individually for more precise source matching.
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Review Sources:</strong> Always review the matched sources to understand where similarities were found.
                                    </div>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong>Download Report:</strong> Save your PDF report for future reference and documentation.
                                    </div>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}
