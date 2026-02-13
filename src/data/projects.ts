export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    techStack: string[];
    highlights: string[];
    role: string;
    status: 'Live' | 'In Development';
    github: string;
    image: string;
    videoUrl?: string;
    liveUrl?: string;
}

export const projects: Project[] = [
    {
        id: 'hotel-harriet',
        title: 'Hotel Harriet Guest Assistant',
        subtitle: 'Server-to-Server WhatsApp Integration',
        description:
            'A headless middleware solution bridging WhatsApp Business API with hotel management systems. Allows guests to access hotel services directly through WhatsApp without downloading additional software.',
        longDescription: `
      The Hotel Harriet Guest Assistant is a sophisticated middleware solution designed to revolutionize the hospitality experience. By leveraging the WhatsApp Business API, it enables seamless, server-to-server communication between guests and the hotel's property management system.

      Key Features:
      - **Zero-UI Interface**: Guests interact entirely through WhatsApp, a platform they already know and trust.
      - **Automated Service Requests**: Room service, housekeeping, and maintenance requests are automatically routed to the correct department.
      - **Secure Authentication**: System user integration ensures that guest data remains secure while allowing personalized interactions.
      - **Rich Media Support**: The system can send menus, invoices, and welcome guides as PDFs or videos directly within the chat.

      This project significantly reduces the workload on front-desk staff while improving guest satisfaction scores by providing instant, 24/7 assistance.
    `,
        techStack: ['Python', 'FastAPI', 'WhatsApp API', 'Render', 'Webhooks'],
        highlights: [
            'Zero-UI Guest Experience via WhatsApp',
            'System User Integration with secure tokens',
            'Rich Media Messaging with PDFs & videos',
            'Intelligent Webhook Handling',
        ],
        role: 'Backend Engineer & API Architect',
        status: 'Live',
        github: 'https://github.com/VIMAL3107',
        image: '/projects/hotel-harriet.png',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
        liveUrl: 'https://example.com', // Placeholder
    },
    {
        id: 'ai-zero',
        title: 'AI Zero',
        subtitle: 'Intelligent Enterprise Operating System',
        description:
            'A next-generation all-in-one business management platform unifying CRM, Marketing, Sales, and Service. Leverages embedded AI for natural language data querying and workflow automation.',
        longDescription: `
      AI Zero represents the future of enterprise resource planning. It unifies disparate business functions—CRM, Marketing, Sales, and Customer Service—into a single, cohesive operating system.

      The core differentiator is its embedded AI engine, which allows non-technical users to query complex datasets using natural language. For example, a sales manager can simply ask, "Show me all leads from California who haven't been contacted in the last 30 days," and the system generates the report instantly.

      The platform also features a "calm" aesthetic design, prioritizing focus and reducing cognitive load for users who spend their entire workday in the application.
    `,
        techStack: ['React.js', 'FastAPI', 'SQLAlchemy', 'NLP', 'Tailwind CSS'],
        highlights: [
            'Unified Dashboard for all business metrics',
            'AI-Powered CRM with natural language queries',
            'Comprehensive Suite: CRM, CMS, Sales, Service',
            'Modern UI with "calm" aesthetic design',
        ],
        role: 'Full-Stack Architect',
        status: 'In Development',
        github: 'https://github.com/VIMAL3107',
        image: '/projects/ai-zero.png',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
        liveUrl: 'https://example.com', // Placeholder
    },
    {
        id: 'event-horizon',
        title: 'Event Horizon AI',
        subtitle: 'Next-Gen Multimodal AI Assistant with RAG',
        description:
            'A fully integrated AI workspace designed for speed, context, and intelligent document retrieval. Bridges Google Gemini with a custom local knowledge base using RAG.',
        longDescription: `
      Event Horizon isn't just another wrapper; it's a fully integrated AI workspace designed for speed, context, and intelligent document retrieval.

      It bridges Google's Gemini models with a custom local knowledge base, allowing you to "teach" the AI by uploading your own documents (PDFs, text). The system uses Retrieval-Augmented Generation (RAG) powered by LangChain and ChromaDB to provide precise, context-aware answers.

      Key Features include multimodal intelligence for analyzing images and docs, token-by-token streaming responses for a "live" feel, and persistent memory using SQLite to manage multiple sessions. All wrapped in a sleek, custom-built Glassmorphism UI.
    `,
        techStack: ['Python', 'FastAPI', 'SQLite', 'Google Gemini', 'LangChain', 'ChromaDB'],
        highlights: [
            'RAG Knowledge Base with ChromaDB',
            'Multimodal Intelligence (Images & Docs)',
            'Real-time Streaming Responses',
            'Persistent Memory (SQLite)',
            'Custom Glassmorphism UI',
        ],
        role: 'Full-Stack Developer',
        status: 'In Development',
        github: 'https://github.com/VIMAL3107',
        image: '/projects/event-horizon.png',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
        liveUrl: 'https://example.com', // Placeholder
    },
];
