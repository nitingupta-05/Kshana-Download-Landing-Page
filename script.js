// Visitor Tracking System
class VisitorTracker {
    constructor() {
        this.storageKey = 'kshana_visitors';
        this.visitors = this.loadVisitors();
        this.initializeVisitor();
        this.updateStats();
    }

    loadVisitors() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : [];
    }

    saveVisitors() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.visitors));
    }

    initializeVisitor() {
        const now = new Date();
        const visitor = {
            id: this.generateId(),
            timestamp: now.toISOString(),
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString(),
            userAgent: navigator.userAgent.substring(0, 50),
            referrer: document.referrer || 'Direct',
        };

        this.visitors.push(visitor);
        this.saveVisitors();
        this.updateNavbarCount();
    }

    generateId() {
        return `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }

    updateNavbarCount() {
        const count = this.visitors.length;
        const element = document.getElementById('visitorCount');
        if (element) {
            element.textContent = count;
            this.animateNumber(element, count);
        }
    }

    animateNumber(element, target) {
        let current = 0;
        const increment = Math.ceil(target / 20);
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(interval);
            } else {
                element.textContent = current;
            }
        }, 30);
    }
    updateStats() {
        const totalElement = document.getElementById('totalVisitors');

        if (totalElement) this.animateNumber(totalElement, this.visitors.length);
    }

    getVisitorStats() {
        return {
            total: this.visitors.length,
            visitors: this.visitors,
        };
    }
}

// Initialize tracker
let tracker;

document.addEventListener('DOMContentLoaded', () => {
    tracker = new VisitorTracker();
    
    // Update stats every 30 seconds
    setInterval(() => {
        tracker.updateStats();
    }, 30000);
});

// Smooth scroll functions
function scrollToDownload() {
    const element = document.getElementById('download');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToFeatures() {
    const element = document.getElementById('features');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Download handler
function downloadApp(platform) {
    const directUrl = 'downloads/kshana.apk';

    if (platform === 'direct') {
        window.location.href = directUrl;
        logDownload(platform);
        return;
    }

    alert('Available soon');
}

// Log download attempts
function logDownload(platform) {
    const downloads = JSON.parse(localStorage.getItem('kshana_downloads') || '{}');
    downloads[platform] = (downloads[platform] || 0) + 1;
    localStorage.setItem('kshana_downloads', JSON.stringify(downloads));
    
    console.log(`Download attempt: ${platform}`, downloads);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature cards
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });
});

// Export visitor data as JSON
function exportVisitorData() {
    if (!tracker) return;
    
    const data = tracker.getVisitorStats();
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kshana_visitors_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

// Get visitor analytics
function getAnalytics() {
    if (!tracker) return null;
    
    const stats = tracker.getVisitorStats();
    const browsers = {};
    const referrers = {};

    stats.visitors.forEach(visitor => {
        // Count browsers
        const browser = visitor.userAgent.includes('Chrome') ? 'Chrome' :
                       visitor.userAgent.includes('Safari') ? 'Safari' :
                       visitor.userAgent.includes('Firefox') ? 'Firefox' :
                       'Other';
        browsers[browser] = (browsers[browser] || 0) + 1;

        // Count referrers
        const ref = visitor.referrer.split('/')[2] || visitor.referrer;
        referrers[ref] = (referrers[ref] || 0) + 1;
    });

    return {
        ...stats,
        browsers,
        referrers,
        averageVisitorsPerDay: Math.round(stats.total / 30),
    };
}

// Console commands for analytics
console.log('%c🎉 Kshana Analytics Available', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cUse these commands:', 'color: #6366f1; font-weight: bold;');
console.log('%cgetAnalytics() - Get detailed visitor analytics', 'color: #6366f1;');
console.log('%cexportVisitorData() - Export visitor data as JSON', 'color: #6366f1;');
console.log('%ctracker.getVisitorStats() - Get raw visitor stats', 'color: #6366f1;');
