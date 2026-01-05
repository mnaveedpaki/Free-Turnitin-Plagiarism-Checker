import { createRequire } from 'module';
import mammoth from 'mammoth';

const require = createRequire(import.meta.url);
const { PDFParse } = require('pdf-parse');

/**
 * Extract text from uploaded file based on file type
 * @param {Buffer} buffer - File buffer
 * @param {string} mimetype - File MIME type
 * @param {string} originalname - Original filename
 * @returns {Promise<string>} - Extracted text
 */
export async function extractTextFromFile(buffer, mimetype, originalname) {
    try {
        // Handle PDF files
        if (mimetype === 'application/pdf' || originalname.toLowerCase().endsWith('.pdf')) {
            console.log('Processing PDF file...');
            const parser = new PDFParse({ data: buffer });
            const result = await parser.getText();
            return result.text;
        }

        // Handle DOCX files
        if (mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
            originalname.toLowerCase().endsWith('.docx')) {
            console.log('Processing DOCX file...');
            const result = await mammoth.extractRawText({ buffer });
            return result.value;
        }

        // Handle DOC files (older Word format)
        if (mimetype === 'application/msword' || originalname.toLowerCase().endsWith('.doc')) {
            console.log('Processing DOC file...');
            // Mammoth can handle some .doc files, but not all
            try {
                const result = await mammoth.extractRawText({ buffer });
                return result.value;
            } catch (error) {
                throw new Error('Unable to parse .doc file. Please convert to .docx format or use PDF.');
            }
        }

        throw new Error('Unsupported file type. Please upload PDF, DOCX, or DOC files.');

    } catch (error) {
        console.error('Error extracting text from file:', error);
        throw error;
    }
}

/**
 * Validate file before processing
 * @param {Object} file - Multer file object
 * @returns {Object} - Validation result
 */
export function validateFile(file) {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedMimeTypes = [
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword'
    ];

    const allowedExtensions = ['.pdf', '.docx', '.doc'];

    if (!file) {
        return { valid: false, error: 'No file uploaded' };
    }

    if (file.size > maxSize) {
        return { valid: false, error: 'File size exceeds 10MB limit' };
    }

    const fileExtension = file.originalname.toLowerCase().substring(file.originalname.lastIndexOf('.'));
    const isMimeTypeValid = allowedMimeTypes.includes(file.mimetype);
    const isExtensionValid = allowedExtensions.includes(fileExtension);

    if (!isMimeTypeValid && !isExtensionValid) {
        return { valid: false, error: 'Invalid file type. Only PDF, DOCX, and DOC files are allowed.' };
    }

    return { valid: true };
}
