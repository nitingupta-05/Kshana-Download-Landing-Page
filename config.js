
const CONFIG = {
    // App Information
    app: {
        name: 'Kshana',
        tagline: 'Relieve Your Moments',
        description: 'Connect, Share & Celebrate with Kshana',
        longDescription: 'Experience real-time messaging with a modern twist. Share stories, react to moments, and stay connected with the people who matter most.',
    },

    // Download Links
    downloads: {
        direct: 'https://github.com/nitingupta-05/Kshana-Download-Landing-Page/raw/main/downloads/Kshana.apk',
        ios: 'https://apps.apple.com/app/kshana',
        android: 'https://play.google.com/store/apps/details?id=com.kshana',
        web: 'https://kshana.app',
    },

    // Social Media Links
    social: {
        twitter: 'https://twitter.com/kshana',
        instagram: 'https://instagram.com/kshana',
        facebook: 'https://facebook.com/kshana',
        linkedin: 'https://linkedin.com/company/kshana',
    },

    // Features (displayed on website)
    features: [
        {
            icon: '💬',
            title: 'Real-Time Messaging',
            description: 'Instant message delivery with live typing indicators and read receipts',
        },
        {
            icon: '📸',
            title: 'Stories',
            description: 'Share your moments with stories that disappear after 24 hours',
        },
        {
            icon: '😊',
            title: 'Reactions',
            description: 'React to messages with emojis - ❤️ 😂 😮 😢 👍 🔥',
        },
        {
            icon: '🎨',
            title: 'Chat Themes',
            description: 'Customize your chat bubbles with beautiful color themes',
        },
        {
            icon: '⏰',
            title: 'Disappearing Messages',
            description: 'Set messages to auto-delete after 30 seconds to 7 days',
        },
        {
            icon: '👥',
            title: 'Online Status',
            description: 'See who\'s online and their current mood in real-time',
        },
        {
            icon: '💬',
            title: 'Reply to Messages',
            description: 'Quote and reply to specific messages in conversations',
        },
        {
            icon: '🔔',
            title: 'Smart Notifications',
            description: 'Get notified about new messages and stories instantly',
        },
    ],

    // Screenshots
    screenshots: [
        {
            image: 'images/chat-screen.png',
            label: 'Chat Screen',
            description: 'Real-time messaging interface',
        },
        {
            image: 'images/stories-screen.png',
            label: 'Stories',
            description: 'Share and view stories',
        },
        {
            image: 'images/profile-screen.png',
            label: 'Profile',
            description: 'User profile management',
        },
        {
            image: 'images/notifications-screen.png',
            label: 'Notifications',
            description: 'Stay updated with notifications',
        },
    ],

    // Colors (CSS variables)
    colors: {
        primary: '#6366f1',
        primaryDark: '#4f46e5',
        primaryLight: '#818cf8',
        secondary: '#ec4899',
        accent: '#f59e0b',
        success: '#10b981',
        danger: '#ef4444',
        dark: '#1f2937',
        darkLight: '#374151',
        gray: '#6b7280',
        grayLight: '#e5e7eb',
        grayLighter: '#f3f4f6',
        white: '#ffffff',
    },

    // Analytics
    analytics: {
        googleAnalyticsId: 'GA_ID_HERE',
        enableVisitorTracking: true,
        enableDownloadTracking: true,
    },

    // SEO
    seo: {
        title: 'Kshana - Relieve Your Moments',
        description: 'Real-time messaging app with stories, reactions, and chat themes. Download Kshana for iOS, Android, or Web.',
        keywords: 'messaging, chat, stories, real-time, social',
        author: 'Kshana Team',
        ogImage: 'images/og-image.png',
    },

    // Footer
    footer: {
        copyright: '© 2024 Kshana. All rights reserved.',
        companyName: 'Kshana',
        email: 'support@kshana.app',
        phone: '+1 (555) 123-4567',
    },

    // Feature Flags
    features_enabled: {
        visitorTracking: true,
        downloadTracking: true,
        analyticsExport: true,
        socialSharing: true,
    },
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
