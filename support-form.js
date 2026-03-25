/**
 * Support Form Handler
 * Manages bug report form submission and validation
 */

document.addEventListener('DOMContentLoaded', function() {
    const supportForm = document.getElementById('supportForm');
    
    if (supportForm) {
        supportForm.addEventListener('submit', handleSupportFormSubmit);
    }
});

function handleSupportFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Validate required fields
    const email = formData.get('email');
    const app = formData.get('app');
    const issueType = formData.get('issueType');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    if (!email || !app || !issueType || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Disable submit button during submission
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Submitting...</span>';
    
    // Prepare submission data
    const submissionData = {
        email: email,
        app: app,
        issueType: issueType,
        subject: subject,
        message: message,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
    };
    
    // Simulate form submission (replace with actual API endpoint)
    setTimeout(() => {
        // Log submission (in production, send to backend)
        console.log('Support ticket submitted:', submissionData);
        
        // Show success message
        showNotification('Thank you! Your report has been submitted. We\'ll review it shortly.', 'success');
        
        // Reset form
        form.reset();
        
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // Store in localStorage for record keeping
        storeSupportTicket(submissionData);
        
    }, 1500);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        min-width: 300px;
    `;
    notification.textContent = message;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    
    if (!document.querySelector('style[data-notification-styles]')) {
        style.setAttribute('data-notification-styles', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

function storeSupportTicket(ticketData) {
    try {
        const tickets = JSON.parse(localStorage.getItem('support_tickets') || '[]');
        tickets.push(ticketData);
        // Keep only last 50 tickets
        if (tickets.length > 50) {
            tickets.shift();
        }
        localStorage.setItem('support_tickets', JSON.stringify(tickets));
    } catch (err) {
        console.error('Error storing support ticket:', err);
    }
}

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                item.classList.toggle('active');
                const answer = item.querySelector('.faq-answer');
                if (answer) {
                    answer.style.maxHeight = item.classList.contains('active') 
                        ? answer.scrollHeight + 'px' 
                        : '0px';
                }
            });
        }
    });
});
