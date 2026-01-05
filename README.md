>[!IMPORTANT]
> The site is currently facing functional issues. If it is not working, it will be fixed soon.  
> In the meantime, if you need a [Turnitin report PDF](https://www.turnitin.com/) for anything, you can reach out to me at **sanjaychoudharycu@gmail.com**.  
> I will share the report PDF whenever I get free and see your request. Please wait patiently.  
> ⭐ Don't forget to star the repo and support the work!

# **Turnitin Free Plagiarism & AI Content Checker**

A lightweight, user-friendly plagiarism and AI content detector for those who may not have access to Turnitin. Designed to help users quickly identify potential plagiarism and AI-generated content, this project is entirely free and open-source. It aims to assist students, educators, and professionals in ensuring content integrity and authenticity.

> **Note**: While the tool is functional, it is still a simple project, and bugs or issues may be present. I created this to simplify the plagiarism and AI detection process for everyone, so your feedback and suggestions are highly welcome. Feel free to join me in improving the tool.

### **Current Features (v4.1):**

- ✅ **Advanced Plagiarism Detection** - Multi-layer similarity analysis using cosine similarity and N-gram algorithms
- ✅ **AI Content Detection** - Powered by RapidAPI AI Content Detector to identify AI-generated text
- ✅ **Dual Analysis** - Check both plagiarism and AI content in a single scan
- ✅ **Visual Analytics** - Side-by-side reports showing plagiarism and AI percentages
- ✅ **Sentence-level Analysis** - Detailed breakdown of plagiarized sentences with source URLs
- ✅ **Real-time Web Scraping** - Searches DuckDuckGo and CrossRef for matching content
- ✅ **Modern UI** - Clean, responsive design with dark mode support
- ✅ **Responsive Design** - Works perfectly on all devices

### **What's New in v4.1:**

- 🤖 **AI Content Detection** - Integrated RapidAPI AI detector to identify AI-generated text
- 📊 **Dual Metrics Dashboard** - View both plagiarism and AI detection results side-by-side
- 👤 **Human vs AI Percentage** - Clear visualization of human-written vs AI-generated content
- 🔍 **Word-level Analysis** - Shows total words and AI-generated word count
- ⚡ **Parallel Processing** - AI detection runs simultaneously with plagiarism check for faster results


### **Why Use This Checker?**

It is a **free** alternative for plagiarism and AI detection, ideal if you don't have access to Turnitin or other paid tools. Quickly paste your content, check for both plagiarism and AI-generated text, and get comprehensive results. Whether you're a student ensuring originality or an educator verifying content integrity and authenticity, it provides an easy-to-use platform.

### **Setup Instructions:**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/Free-Turnitin-Plagiarism-Checker.git
   cd Free-Turnitin-Plagiarism-Checker
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure API Keys**
   - Copy `.env.example` to `.env`
   - Get your free RapidAPI key from [AI Content Detector](https://rapidapi.com/ai-content-detector-ai-gpt/api/ai-content-detector-ai-gpt)
   - Add your API key to `.env`:
     ```
     RAPIDAPI_KEY=your_api_key_here
     RAPIDAPI_HOST=ai-content-detector-ai-gpt.p.rapidapi.com
     ```

4. **Run the Application**
   ```bash
   npm run dev
   ```
   
5. **Access the App**
   - Open your browser and navigate to `http://localhost:3000`

### **How It Works:**

1. **Paste Your Text**: Enter at least 100 characters of text to analyze
2. **Click "Check Plagiarism & AI"**: The system will analyze your content for both plagiarism and AI-generated text
3. **View Dual Results**: 
   - **Plagiarism Detection**: Shows similarity percentage, plagiarized sentences, and source URLs
   - **AI Content Detection**: Shows AI-generated percentage, human percentage, and word counts
4. **Review Detailed Analysis**: Sentence-by-sentence breakdown with matching sources

### **Contributing & Feedback:**

I would love for you to contribute to this project! Here's how you can help:

- **Fork the Repository**: Make a personal copy to work on.
- **Open Issues**: Report bugs or suggest new features.
- **Submit Pull Requests**: Help improve the project with your code contributions.

### **Contribution Guidelines**: 

For detailed instructions on how to contribute, please see [CONTRIBUTING.md](./CONTRIBUTING.md).

### **Credits & Acknowledgments:**

- **Turnitin**: The inspiration behind this project.
- **RapidAPI**: For providing the AI Content Detector API.
- **Radix UI**: For beautiful, accessible React components.
- **DuckDuckGo & CrossRef**: For web search and academic paper sources.

### **Join the Project**

If you're interested in contributing to this project, your ideas, suggestions, and coding skills are more than welcome. Let's build a better plagiarism and AI detection tool together!

---

> **Caution**: This is a personal project created to make plagiarism and AI content checking easy and accessible. It is not a replacement for professional tools like Turnitin but a free option for those in need. Please note that it may have bugs or limitations, but I'm constantly working to improve it.
