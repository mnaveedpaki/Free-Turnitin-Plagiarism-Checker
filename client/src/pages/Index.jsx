import { useState, useRef } from "react";
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Loader2, FileSearch, AlertCircle, Bot, User, Upload, FileText, X, Download } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { checkTextSchema } from "../../../shared/schema";
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';

const Index = () => {
  const [text, setText] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [inputMode, setInputMode] = useState("text"); // "text" or "file"
  const fileInputRef = useRef(null);
  const reportRef = useRef(null);
  const {
    toast
  } = useToast();

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
      const allowedExtensions = ['.pdf', '.docx', '.doc'];
      const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'));

      if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF, DOCX, or DOC file",
          variant: "destructive"
        });
        return;
      }

      // Validate file size (10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "File size must be less than 10MB",
          variant: "destructive"
        });
        return;
      }

      setSelectedFile(file);
      setText(""); // Clear text input when file is selected
      setInputMode("file");
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setInputMode("text");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFileUpload = async () => {
    if (!selectedFile) {
      toast({
        title: "Error",
        description: "Please select a file to upload",
        variant: "destructive"
      });
      return;
    }

    setIsChecking(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('/api/upload-file', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to upload file');
      }

      const data = await response.json();

      // Debug logging
      console.log('API Response:', data);
      console.log('AI Detection:', data.aiDetection);
      console.log('AI Sentences:', data.aiDetection?.sentences);
      console.log('AI Sentences Length:', data.aiDetection?.sentences?.length);

      setResult(data);

      const aiStatus = data.aiDetection?.status
        ? `AI: ${data.aiDetection.fakePercentage}%`
        : 'AI detection unavailable';

      toast({
        title: "Check Complete",
        description: `Plagiarism: ${data.plagiarismPercentage}% | ${aiStatus}`
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to process file. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsChecking(false);
    }
  };

  const handleCheck = async () => {
    if (inputMode === "file") {
      return handleFileUpload();
    }

    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Please enter some text to check",
        variant: "destructive"
      });
      return;
    }

    // Validate using Zod schema
    const validation = checkTextSchema.safeParse({ text });
    if (!validation.success) {
      const errorMessage = validation.error.errors[0]?.message || "Validation failed";
      toast({
        title: "Validation Error",
        description: errorMessage,
        variant: "destructive"
      });
      return;
    }

    setIsChecking(true);
    setResult(null);
    try {
      const response = await fetch('/api/plagiarism-check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text
        })
      });
      if (!response.ok) {
        throw new Error('Failed to check plagiarism');
      }
      const data = await response.json();

      // Debug logging
      console.log('API Response:', data);
      console.log('AI Detection:', data.aiDetection);
      console.log('AI Sentences:', data.aiDetection?.sentences);
      console.log('AI Sentences Length:', data.aiDetection?.sentences?.length);

      setResult(data);

      const aiStatus = data.aiDetection?.status
        ? `AI: ${data.aiDetection.fakePercentage}%`
        : 'AI detection unavailable';

      toast({
        title: "Check Complete",
        description: `Plagiarism: ${data.plagiarismPercentage}% | ${aiStatus}`
      });
    } catch (error) {
      console.error('Error checking plagiarism:', error);
      toast({
        title: "Error",
        description: "Failed to check plagiarism. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsChecking(false);
    }
  };

  const downloadPDF = async () => {
    if (!result) return;

    try {
      toast({
        title: "Generating PDF",
        description: "Please wait while we generate your report..."
      });

      const pdf = new jsPDF('p', 'mm', 'a4');
      let yPosition = 20;

      // Title
      pdf.setFontSize(22);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(37, 99, 235);
      pdf.text('Plagiarism & AI Detection Report', 105, yPosition, { align: 'center' });

      yPosition += 10;
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(107, 114, 128);
      pdf.text(`Generated: ${new Date().toLocaleString()}`, 105, yPosition, { align: 'center' });

      if (result.fileName) {
        yPosition += 5;
        pdf.text(`File: ${result.fileName}`, 105, yPosition, { align: 'center' });
      }

      yPosition += 15;

      // Summary Table
      autoTable(pdf, {
        startY: yPosition,
        head: [['Analysis Summary', 'Results']],
        body: [
          ['Total Sentences Analyzed', result.totalSentences.toString()],
          ['Plagiarism Score', `${result.plagiarismPercentage}%`],
          ['Plagiarized Sentences', `${result.plagiarizedSentences} of ${result.totalSentences}`],
          ['Overall Similarity', `${result.overallScore}%`]
        ],
        headStyles: {
          fillColor: [37, 99, 235],
          textColor: [255, 255, 255],
          fontSize: 12,
          fontStyle: 'bold'
        },
        styles: {
          fontSize: 10,
          cellPadding: 4
        },
        columnStyles: {
          0: { fontStyle: 'bold', cellWidth: 80 },
          1: { halign: 'right' }
        },
        didParseCell: function (data) {
          if (data.row.index === 1 && data.column.index === 1) {
            data.cell.textColor = result.plagiarismPercentage > 20 ? [220, 38, 38] : [22, 163, 74];
          }
          if (data.row.index === 2 && data.column.index === 1) {
            data.cell.textColor = result.plagiarizedSentences > 0 ? [220, 38, 38] : [22, 163, 74];
          }
        }
      });

      yPosition = pdf.lastAutoTable.finalY + 10;

      // AI Detection Table
      if (result.aiDetection?.status) {
        autoTable(pdf, {
          startY: yPosition,
          head: [['AI Content Detection', 'Results']],
          body: [
            ['AI Content', `${result.aiDetection.fakePercentage || 0}%`],
            ['Human Content', `${result.aiDetection.humanPercentage || 0}%`],
            ['Total Words', (result.aiDetection.textWords || 0).toString()],
            ['AI-Generated Words', (result.aiDetection.aiWords || 0).toString()]
          ],
          headStyles: {
            fillColor: [234, 88, 12],
            textColor: [255, 255, 255],
            fontSize: 12,
            fontStyle: 'bold'
          },
          styles: {
            fontSize: 10,
            cellPadding: 4
          },
          columnStyles: {
            0: { fontStyle: 'bold', cellWidth: 80 },
            1: { halign: 'right' }
          },
          didParseCell: function (data) {
            if (data.row.index === 0 && data.column.index === 1) {
              data.cell.textColor = [220, 38, 38];
            }
            if (data.row.index === 1 && data.column.index === 1) {
              data.cell.textColor = [22, 163, 74];
            }
          }
        });

        yPosition = pdf.lastAutoTable.finalY + 10;
      }

      // Plagiarized Content Details
      const plagiarizedSentences = result.results.filter(item => item.isPlagiarized);
      if (plagiarizedSentences.length > 0) {
        const plagiarizedData = plagiarizedSentences.map((item, index) => [
          (index + 1).toString(),
          item.sentence,
          `${item.similarity}%`,
          item.sources.length > 0 ? item.sources.slice(0, 2).map(s => s.url).join('\\n') : 'No sources'
        ]);

        autoTable(pdf, {
          startY: yPosition,
          head: [['#', 'Plagiarized Sentence', 'Similarity', 'Sources']],
          body: plagiarizedData,
          headStyles: {
            fillColor: [220, 38, 38],
            textColor: [255, 255, 255],
            fontSize: 11,
            fontStyle: 'bold'
          },
          styles: {
            fontSize: 9,
            cellPadding: 3,
            overflow: 'linebreak'
          },
          columnStyles: {
            0: { cellWidth: 10, halign: 'center' },
            1: { cellWidth: 80 },
            2: { cellWidth: 20, halign: 'center' },
            3: { cellWidth: 70, fontSize: 7 }
          },
          bodyStyles: {
            textColor: [220, 38, 38]
          }
        });

        yPosition = pdf.lastAutoTable.finalY + 10;
      }

      // AI-Generated Content
      if (result.aiDetection?.status && result.aiDetection.sentences && result.aiDetection.sentences.length > 0) {
        const aiData = result.aiDetection.sentences.map((sentence, index) => [
          (index + 1).toString(),
          sentence
        ]);

        autoTable(pdf, {
          startY: yPosition,
          head: [['#', 'AI-Generated Sentence']],
          body: aiData,
          headStyles: {
            fillColor: [234, 88, 12],
            textColor: [255, 255, 255],
            fontSize: 11,
            fontStyle: 'bold'
          },
          styles: {
            fontSize: 9,
            cellPadding: 3,
            overflow: 'linebreak'
          },
          columnStyles: {
            0: { cellWidth: 10, halign: 'center' },
            1: { cellWidth: 170 }
          },
          bodyStyles: {
            textColor: [234, 88, 12]
          }
        });

        yPosition = pdf.lastAutoTable.finalY + 10;
      }

      // Complete Sentence Analysis
      const allSentencesData = result.results.map((item, index) => [
        (index + 1).toString(),
        item.sentence,
        `${item.similarity}%`,
        item.isPlagiarized ? 'YES' : 'NO',
        item.sources.length.toString()
      ]);

      autoTable(pdf, {
        startY: yPosition,
        head: [['#', 'Sentence', 'Similarity', 'Plagiarized', 'Sources']],
        body: allSentencesData,
        headStyles: {
          fillColor: [107, 114, 128],
          textColor: [255, 255, 255],
          fontSize: 11,
          fontStyle: 'bold'
        },
        styles: {
          fontSize: 8,
          cellPadding: 2,
          overflow: 'linebreak'
        },
        columnStyles: {
          0: { cellWidth: 10, halign: 'center' },
          1: { cellWidth: 110 },
          2: { cellWidth: 20, halign: 'center' },
          3: { cellWidth: 20, halign: 'center' },
          4: { cellWidth: 20, halign: 'center' }
        },
        didParseCell: function (data) {
          if (data.column.index === 3 && data.row.index >= 0 && data.section === 'body') {
            if (data.cell.text[0] === 'YES') {
              data.cell.styles.textColor = [220, 38, 38];
              data.cell.styles.fontStyle = 'bold';
            } else {
              data.cell.styles.textColor = [22, 163, 74];
            }
          }
        }
      });

      // Save the PDF
      const fileName = result.fileName
        ? `plagiarism-report-${result.fileName.replace(/\.[^/.]+$/, '')}.pdf`
        : `plagiarism-report-${new Date().toISOString().split('T')[0]}.pdf`;

      pdf.save(fileName);

      toast({
        title: "PDF Downloaded",
        description: "Your report has been saved successfully!"
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive"
      });
    }
  };

  const getScoreColor = score => {
    if (score < 20) return "text-green-600 dark:text-green-400";
    if (score < 50) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const getAIScoreColor = (fakePercentage) => {
    if (fakePercentage < 20) return "text-green-600 dark:text-green-400";
    if (fakePercentage < 50) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  return (
    <Layout>
      <Helmet>
        <title>Free Turnitin Plagiarism Checker & AI Detector | 100% Free Alternative</title>
        <meta name="description" content="Free Turnitin alternative for plagiarism and AI detection. Check documents for originality instantly. No signup required. Get accurate plagiarism reports and AI content detection - completely free forever." />
        <meta name="keywords" content="free turnitin, plagiarism checker, AI detector, turnitin alternative, free plagiarism detection, AI content checker, academic integrity, plagiarism report, check for plagiarism free, turnitin free alternative" />
        <meta property="og:title" content="Free Turnitin Plagiarism Checker & AI Detector" />
        <meta property="og:description" content="Get authentic AI & plagiarism reports. Your documents are never saved. 100% free forever." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Turnitin Plagiarism Checker & AI Detector" />
        <meta name="twitter:description" content="Check documents for plagiarism and AI content. Completely free, no signup required." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
              <FileSearch className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Academic Plagiarism & AI Checker
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Free plagiarism and AI content detection using advanced algorithms
            </p>
          </div>

          <div className="w-full -mx-4">
            <Card className="shadow-xl border-2" data-testid="card-input">
              <CardHeader>
                <CardTitle>Check Your Content</CardTitle>
                <CardDescription>
                  Choose to paste text or upload a file (PDF, DOCX, DOC) to check for plagiarism and AI-generated content
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Mode Selection Tabs */}
                <div className="flex gap-2 p-1 bg-secondary rounded-lg">
                  <Button
                    variant={inputMode === "text" ? "default" : "ghost"}
                    onClick={() => {
                      setInputMode("text");
                      setSelectedFile(null);
                    }}
                    className="flex-1"
                    disabled={isChecking}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Text Input
                  </Button>
                  <Button
                    variant={inputMode === "file" ? "default" : "ghost"}
                    onClick={() => setInputMode("file")}
                    className="flex-1"
                    disabled={isChecking}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Upload File
                  </Button>
                </div>

                {/* Text Input Mode */}
                {inputMode === "text" && (
                  <>
                    <Textarea
                      data-testid="input-text"
                      placeholder="Paste your text here (minimum 100 characters)..."
                      value={text}
                      onChange={(e) => {
                        setText(e.target.value);
                        setSelectedFile(null);
                      }}
                      className="min-h-[200px] text-base"
                      disabled={isChecking}
                    />
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <p className="text-sm text-muted-foreground" data-testid="text-character-count">
                        {text.length} characters
                      </p>
                      <Button
                        data-testid="button-check-plagiarism"
                        onClick={handleCheck}
                        disabled={isChecking || text.length < 100}
                        size="lg"
                      >
                        {isChecking && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isChecking ? "Analyzing..." : "Check Plagiarism & AI"}
                      </Button>
                    </div>
                  </>
                )}

                {/* File Upload Mode */}
                {inputMode === "file" && (
                  <>
                    <div className="border-2 border-dashed rounded-lg p-8 text-center space-y-4">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.docx,.doc,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword"
                        onChange={handleFileSelect}
                        className="hidden"
                        disabled={isChecking}
                      />

                      {!selectedFile ? (
                        <>
                          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                            <Upload className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">Upload a document</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Supported formats: PDF, DOCX, DOC (Max 10MB)
                            </p>
                            <Button
                              onClick={() => fileInputRef.current?.click()}
                              variant="outline"
                              disabled={isChecking}
                            >
                              <Upload className="mr-2 h-4 w-4" />
                              Choose File
                            </Button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                            <FileText className="w-8 h-8 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">{selectedFile.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {(selectedFile.size / 1024).toFixed(2)} KB
                            </p>
                          </div>
                          <div className="flex gap-2 justify-center">
                            <Button
                              onClick={handleRemoveFile}
                              variant="outline"
                              size="sm"
                              disabled={isChecking}
                            >
                              <X className="mr-2 h-4 w-4" />
                              Remove
                            </Button>
                            <Button
                              onClick={handleCheck}
                              size="sm"
                              disabled={isChecking}
                            >
                              {isChecking && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                              {isChecking ? "Analyzing..." : "Check Plagiarism & AI"}
                            </Button>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}

                {isChecking && <Alert data-testid="alert-checking">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Analyzing your {inputMode === "file" ? "file" : "text"} for plagiarism and AI content. This may take 30-60 seconds...
                  </AlertDescription>
                </Alert>}
              </CardContent>
            </Card>

            {result && <div ref={reportRef} className="mt-8 space-y-6">
              <Card className="shadow-xl border-2" data-testid="card-report">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Analysis Report</CardTitle>
                    <Button onClick={downloadPDF} variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Plagiarism Results */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-3">Plagiarism Detection</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-6 bg-secondary rounded-md">
                          <p className="text-sm text-muted-foreground mb-2">Plagiarism</p>
                          <p className={`text-4xl font-bold ${getScoreColor(result.plagiarismPercentage)}`} data-testid="text-plagiarism-percentage">
                            {result.plagiarismPercentage}%
                          </p>
                        </div>
                        <div className="text-center p-6 bg-secondary rounded-md">
                          <p className="text-sm text-muted-foreground mb-2">Similarity</p>
                          <p className={`text-4xl font-bold ${getScoreColor(result.overallScore)}`} data-testid="text-overall-score">
                            {result.overallScore}%
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Sentences Analyzed</span>
                          <span className="font-semibold" data-testid="text-total-sentences">{result.totalSentences}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Plagiarized Sentences</span>
                          <span className="font-semibold text-red-600 dark:text-red-400" data-testid="text-plagiarized-sentences">{result.plagiarizedSentences}</span>
                        </div>
                        <Progress value={result.plagiarizedSentences / result.totalSentences * 100} className="h-2" />
                      </div>
                    </div>

                    {/* AI Detection Results */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold mb-3">AI Content Detection</h3>
                      {result.aiDetection?.status ? (
                        <>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-6 bg-secondary rounded-md">
                              <div className="flex items-center justify-center gap-2 mb-2">
                                <Bot className="w-4 h-4 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">AI Content</p>
                              </div>
                              <p className="text-4xl font-bold text-red-600 dark:text-red-400" data-testid="text-ai-percentage">
                                {result.aiDetection.fakePercentage || 0}%
                              </p>
                            </div>
                            <div className="text-center p-6 bg-secondary rounded-md">
                              <div className="flex items-center justify-center gap-2 mb-2">
                                <User className="w-4 h-4 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">Human Content</p>
                              </div>
                              <p className="text-4xl font-bold text-green-600 dark:text-green-400" data-testid="text-human-percentage">
                                {result.aiDetection.humanPercentage || (100 - (result.aiDetection.fakePercentage || 0))}%
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Total Words</span>
                              <span className="font-semibold">{result.aiDetection.textWords || 0}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span>AI-Generated Words</span>
                              <span className="font-semibold text-red-600 dark:text-red-400">{result.aiDetection.aiWords || 0}</span>
                            </div>
                            <Progress value={result.aiDetection.fakePercentage || 0} className="h-2" />
                            <p className="text-xs text-center mt-2 text-muted-foreground">
                              {result.aiDetection.isHuman === 1 ? "✓ Likely Human-Written" : "⚠ AI Content Detected"}
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="text-center p-6 bg-secondary rounded-md">
                          <AlertCircle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            {result.aiDetection?.error || "AI detection unavailable"}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Two-Column Layout: Plagiarism vs AI Detection */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Plagiarism Column */}
                <Card className="shadow-xl border-2 border-red-200 dark:border-red-900" data-testid="card-plagiarism-details">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <FileSearch className="w-5 h-5 text-red-600 dark:text-red-400" />
                      <CardTitle>Plagiarized Content</CardTitle>
                    </div>
                    <CardDescription>
                      {result.plagiarizedSentences} of {result.totalSentences} sentences flagged as potential plagiarism
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {result.results.filter(item => item.isPlagiarized).length > 0 ? (
                        result.results.filter(item => item.isPlagiarized).map((item, originalIndex) => {
                          const index = result.results.indexOf(item);
                          return (
                            <div
                              key={index}
                              className="p-4 rounded-md border-2 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900"
                              data-testid={`plagiarism-sentence-${index}`}
                            >
                              <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                                <p className="text-sm font-medium flex-1" data-testid={`text-plagiarism-sentence-${index}`}>
                                  {item.sentence}
                                </p>
                                <span data-testid={`badge-plagiarism-similarity-${index}`} className="px-3 py-1 rounded-full text-sm font-bold bg-red-600 text-white">
                                  {item.similarity}%
                                </span>
                              </div>
                              {item.sources.length > 0 && (
                                <div className="mt-2 pt-2 border-t border-current/20">
                                  <p className="text-xs font-semibold mb-1 text-red-600 dark:text-red-400">Potential Sources:</p>
                                  <div className="space-y-1">
                                    {item.sources.slice(0, 3).map((source, idx) => (
                                      <div key={idx} className="flex items-start gap-2">
                                        <a
                                          href={source.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          data-testid={`link-plagiarism-source-${index}-${idx}`}
                                          className="flex-1 text-xs hover:underline truncate text-red-600 dark:text-red-400 font-semibold"
                                        >
                                          {source.url}
                                        </a>
                                        <span className="text-xs font-bold text-red-600 dark:text-red-400" data-testid={`text-plagiarism-source-similarity-${index}-${idx}`}>
                                          {source.similarity}%
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        })
                      ) : (
                        <div className="text-center p-6 bg-green-50 dark:bg-green-950/20 rounded-md border-2 border-green-200 dark:border-green-900">
                          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                            ✓
                          </div>
                          <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                            No plagiarism detected!
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            All sentences appear to be original
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* AI Detection Column */}
                <Card className="shadow-xl border-2 border-orange-200 dark:border-orange-900" data-testid="card-ai-details">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Bot className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      <CardTitle>AI-Generated Content</CardTitle>
                    </div>
                    <CardDescription>
                      {result.aiDetection?.status && result.aiDetection.sentences?.length > 0
                        ? `${result.aiDetection.sentences.length} sentence${result.aiDetection.sentences.length !== 1 ? 's' : ''} identified as potentially AI-generated`
                        : 'AI content detection results'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {result.aiDetection?.status && Array.isArray(result.aiDetection.sentences) && result.aiDetection.sentences.length > 0 ? (
                        result.aiDetection.sentences.map((sentence, index) => (
                          <div
                            key={index}
                            className="p-4 rounded-md border-2 bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900"
                            data-testid={`ai-sentence-${index}`}
                          >
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-6 h-6 rounded-full bg-orange-600 dark:bg-orange-500 flex items-center justify-center text-white text-xs font-bold">
                                  {index + 1}
                                </div>
                              </div>
                              <p className="text-sm font-medium flex-1 text-foreground" data-testid={`ai-sentence-text-${index}`}>
                                {sentence}
                              </p>
                              <Bot className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                            </div>
                          </div>
                        ))
                      ) : result.aiDetection?.status ? (
                        <div className="text-center p-6 bg-green-50 dark:bg-green-950/20 rounded-md border-2 border-green-200 dark:border-green-900">
                          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                            <User className="w-6 h-6" />
                          </div>
                          <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                            No AI content detected!
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Content appears to be human-written
                          </p>
                        </div>
                      ) : (
                        <div className="text-center p-6 bg-secondary rounded-md">
                          <AlertCircle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            {result.aiDetection?.error || "AI detection unavailable"}
                          </p>
                        </div>
                      )}
                    </div>
                    {result.aiDetection?.status && Array.isArray(result.aiDetection.sentences) && result.aiDetection.sentences.length > 0 && (
                      <div className="mt-4 p-3 bg-secondary rounded-md">
                        <p className="text-xs text-muted-foreground text-center">
                          ⚠️ These sentences were flagged by the AI detector as potentially AI-generated content
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* All Sentences Analysis (for reference) */}
              <Card className="shadow-xl border-2" data-testid="card-all-sentences">
                <CardHeader>
                  <CardTitle>Complete Sentence Analysis</CardTitle>
                  <CardDescription>All analyzed sentences with similarity scores and sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {result.results.map((item, index) => (
                      <div
                        key={index}
                        data-testid={`result-sentence-${index}`}
                        className={`p-4 rounded-md border-2 ${item.isPlagiarized ? "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900" : "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900"}`}
                      >
                        <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                          <p className="text-sm font-medium flex-1" data-testid={`text-sentence-${index}`}>{item.sentence}</p>
                          <span data-testid={`badge-similarity-${index}`} className={`px-3 py-1 rounded-full text-sm font-bold ${item.isPlagiarized ? "bg-red-600 text-white" : "bg-green-600 text-white"}`}>
                            {item.similarity}%
                          </span>
                        </div>
                        {item.sources.length > 0 && (
                          <div className="mt-2 pt-2 border-t border-current/20">
                            <p className="text-xs font-semibold mb-1">Potential Sources:</p>
                            <div className="space-y-1">
                              {item.sources.map((source, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <a
                                    href={source.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-testid={`link-source-${index}-${idx}`}
                                    className={`flex-1 text-xs hover:underline truncate ${source.similarity >= 50 ? "text-red-600 dark:text-red-400 font-semibold" : "text-orange-600 dark:text-orange-400"}`}
                                  >
                                    {source.url}
                                  </a>
                                  <span className={`text-xs font-bold ${source.similarity >= 50 ? "text-red-600 dark:text-red-400" : "text-orange-600 dark:text-orange-400"}`} data-testid={`text-source-similarity-${index}-${idx}`}>
                                    {source.similarity}%
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Index;