/**
 * AI Content Detection Service
 * Uses RapidAPI AI Content Detector to check if text is AI-generated
 */

export async function detectAIContent(text) {
    try {
        const apiKey = process.env.RAPIDAPI_KEY;
        const apiHost = process.env.RAPIDAPI_HOST;

        if (!apiKey || !apiHost) {
            console.error('RapidAPI credentials not found in environment variables');
            return {
                status: false,
                error: 'AI detection service not configured',
                aiWords: null,
                fakePercentage: null,
                isHuman: null,
                textWords: null,
                sentences: null
            };
        }

        const response = await fetch('https://ai-content-detector-ai-gpt.p.rapidapi.com/api/detectText/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-host': apiHost,
                'x-rapidapi-key': apiKey
            },
            body: JSON.stringify({ text })
        });

        if (!response.ok) {
            throw new Error(`API returned status ${response.status}`);
        }

        const data = await response.json();

        console.log('RapidAPI Raw Response:', JSON.stringify(data, null, 2));
        console.log('Sentences from API:', data.sentences);
        console.log('Sentences type:', typeof data.sentences);
        console.log('Sentences is array:', Array.isArray(data.sentences));

        // Handle error responses from the API
        if (!data.status) {
            console.error('AI detection API error:', data.otherFeedback);
            return {
                status: false,
                error: data.otherFeedback || 'AI detection failed',
                aiWords: null,
                fakePercentage: null,
                isHuman: null,
                textWords: null,
                sentences: null
            };
        }

        const result = {
            status: true,
            aiWords: data.aiWords,
            fakePercentage: data.fakePercentage,
            isHuman: data.isHuman,
            textWords: data.textWords,
            sentences: data.sentences || [],
            humanPercentage: data.isHuman === 1 ? 100 : (100 - (data.fakePercentage || 0))
        };

        console.log('Returning AI detection result:', JSON.stringify(result, null, 2));

        return result;

    } catch (error) {
        console.error('Error detecting AI content:', error);
        return {
            status: false,
            error: error.message || 'Failed to detect AI content',
            aiWords: null,
            fakePercentage: null,
            isHuman: null,
            textWords: null,
            sentences: null
        };
    }
}
