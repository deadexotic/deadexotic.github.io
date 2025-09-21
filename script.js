
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #ffffff;
    --secondary: #a0a0a0;
    --accent: #4f46e5;
    --background: #0a0a0a;
    --surface: #1a1a1a;
    --border: rgba(255, 255, 255, 0.1);
    --glow: rgba(79, 70, 229, 0.3);
}

body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--background);
    color: var(--primary);
    overflow-x: hidden;
    line-height: 1.6;
    font-weight: 400;
}


.entry-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--background);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeOut 0.8s ease-out 2.5s forwards;
}

.entry-content {
    text-align: center;
}

.entry-logo {
    font-size: 4rem;
    font-weight: 200;
    color: var(--primary);
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateY(30px);
    animation: slideUp 1s ease-out 0.5s forwards;
}

.entry-loader {
    width: 200px;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 1px;
    overflow: hidden;
    margin: 0 auto;
}

.loader-bar {
    height: 100%;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    border-radius: 1px;
    animation: loading 2s ease-in-out forwards;
}

@keyframes slideUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes loading {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

@keyframes fadeOut {
    to {
        opacity: 0;
        visibility: hidden;
    }
}

/* Background */
.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.bg-grain {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 25% 25%, rgba(139, 69, 196, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 75% 75%, rgba(79, 70, 229, 0.06) 0%, transparent 50%),
        radial-gradient(circle at 50% 10%, rgba(168, 85, 247, 0.04) 0%, transparent 60%),
        radial-gradient(circle at 80% 40%, rgba(124, 58, 237, 0.05) 0%, transparent 45%);
    animation: subtle-move 25s ease-in-out infinite;
}

.bg-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        linear-gradient(135deg, transparent 0%, rgba(139, 69, 196, 0.04) 25%, transparent 50%),
        linear-gradient(45deg, rgba(79, 70, 229, 0.03) 0%, transparent 30%, rgba(168, 85, 247, 0.02) 70%, transparent 100%),
        conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(124, 58, 237, 0.02) 60deg, transparent 120deg, rgba(139, 69, 196, 0.03) 180deg, transparent 240deg, rgba(79, 70, 229, 0.02) 300deg, transparent 360deg);
    animation: gradient-shift 20s ease-in-out infinite alternate, rotate-gradient 40s linear infinite;
}

@keyframes subtle-move {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-10px, -5px) scale(1.02); }
}

@keyframes gradient-shift {
    0% { opacity: 0.4; }
    100% { opacity: 0.15; }
}

@keyframes rotate-gradient {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Main Layout */
.main {
    opacity: 0;
    animation: mainFadeIn 1s ease-out 3s forwards;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
}

@keyframes mainFadeIn {
    to {
        opacity: 1;
    }
}

/* Profile Section */
.profile-section {
    text-align: center;
    transform: translateY(30px);
    opacity: 0;
    animation: slideUpStagger 0.8s ease-out 3.2s forwards;
}

.avatar-container {
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;
}

.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--border);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 2;
}

.avatar:hover {
    border-color: var(--accent);
    transform: scale(1.05);
}

.avatar-ring {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 1px solid transparent;
    border-radius: 50%;
    background: linear-gradient(45deg, transparent, var(--accent), transparent);
    opacity: 0;
    transition: all 0.6s ease;
    z-index: 1;
}

.avatar:hover + .avatar-ring {
    opacity: 0.6;
    transform: rotate(180deg);
}

.name {
    font-size: 3.5rem;
    font-weight: 300;
    color: var(--primary);
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
    transition: all 0.3s ease;
}

.name:hover {
    color: var(--accent);
}

.description {
    font-size: 1.1rem;
    color: var(--secondary);
    font-weight: 300;
    max-width: 400px;
    margin: 0 auto;
}

/* Interactive Section */
.interactive-section {
    transform: translateY(30px);
    opacity: 0;
    animation: slideUpStagger 0.8s ease-out 3.6s forwards;
}

.button-container {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.frog-button {
    display: inline-block;
    padding: 14px 32px;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d1b2f 50%, #1a1a1a 100%);
    color: #ffffff;
    border: 1px solid #8b45c4;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    text-decoration: none;
    box-shadow: 
        0 4px 12px rgba(139, 69, 196, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.frog-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(139, 69, 196, 0.1) 50%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.frog-button:hover {
    transform: translateY(-3px);
    border-color: #a855f7;
    box-shadow: 
        0 8px 25px rgba(139, 69, 196, 0.25),
        0 0 20px rgba(139, 69, 196, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    background: linear-gradient(135deg, #2a1a2a 0%, #3d2040 50%, #2a1a2a 100%);
}

.frog-button:hover::before {
    opacity: 1;
}

.frog-button:active {
    transform: translateY(-1px);
    box-shadow: 
        0 4px 12px rgba(139, 69, 196, 0.2),
        inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.frog-button .button-shimmer {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}

.frog-button:hover .button-shimmer {
    left: 100%;
}

.contact-button {
    display: inline-block;
    padding: 14px 32px;
    background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #2a2a2a 100%);
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    text-decoration: none;
    box-shadow: 
        0 4px 12px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.contact-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(79, 70, 229, 0.1) 50%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.contact-button:hover {
    transform: translateY(-3px);
    border-color: var(--accent);
    color: var(--accent);
    box-shadow: 
        0 8px 25px rgba(79, 70, 229, 0.2),
        0 0 20px rgba(79, 70, 229, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    background: linear-gradient(135deg, #333333 0%, #2a2a2a 50%, #333333 100%);
}

.contact-button:hover::before {
    opacity: 1;
}

.contact-button:active {
    transform: translateY(-1px);
    box-shadow: 
        0 4px 12px rgba(79, 70, 229, 0.15),
        inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.button-shimmer {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}

.contact-button:hover .button-shimmer {
    left: 100%;
}

/* Modal Styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
}

.modal-overlay.active {
    opacity: 1;
    visibility: visible;
}

.modal {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 2rem;
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    transform: scale(0.9) translateY(20px);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-overlay.active .modal {
    transform: scale(1) translateY(0);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
}

.modal-header h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--primary);
    margin: 0;
}

.modal-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: var(--secondary);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.3s ease;
}

.modal-close:hover {
    background: var(--border);
    color: var(--primary);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group label {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--primary);
}

.form-group input,
.form-group textarea {
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    color: var(--primary);
    transition: all 0.3s ease;
    font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 100px;
}

.submit-button {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #4f46e5 100%);
    color: white;
    border: 1px solid #6366f1;
    border-radius: 8px;
    padding: 14px 32px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    margin-top: 1rem;
    width: 100%;
    box-shadow: 
        0 4px 12px rgba(79, 70, 229, 0.25),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.submit-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.submit-button:hover {
    transform: translateY(-3px);
    border-color: #8b5cf6;
    box-shadow: 
        0 8px 25px rgba(79, 70, 229, 0.35),
        0 0 20px rgba(79, 70, 229, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    background: linear-gradient(135deg, #5b21b6 0%, #8b5cf6 50%, #5b21b6 100%);
}

.submit-button:hover::before {
    opacity: 1;
}

.submit-button:active {
    transform: translateY(-1px);
    box-shadow: 
        0 4px 12px rgba(79, 70, 229, 0.3),
        inset 0 2px 4px rgba(0, 0, 0, 0.2);
}

.submit-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.1);
    background: linear-gradient(135deg, #6b7280 0%, #9ca3af 50%, #6b7280 100%);
    border-color: #6b7280;
}

.submit-button:disabled::before {
    opacity: 0;
}

.submit-button .button-shimmer {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}

.submit-button:hover .button-shimmer {
    left: 100%;
}

@keyframes slideUpStagger {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Music Control */
.music-control {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(20px);
    z-index: 100;
}

.music-control:hover {
    border-color: var(--accent);
    transform: scale(1.1);
    box-shadow: 0 10px 20px var(--glow);
}

.music-icon {
    width: 20px;
    height: 20px;
    fill: var(--primary);
    transition: all 0.3s ease;
}

.pause-icon {
    display: none;
}

.music-control.playing .play-icon {
    display: none;
}

.music-control.playing .pause-icon {
    display: block;
}

.music-control.playing .music-icon {
    fill: var(--accent);
}

/* Floating Elements */
.floating-elements {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
}

.float-element {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--accent);
    border-radius: 50%;
    opacity: 0.3;
    animation: float 20s linear infinite;
}

.float-1 {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
    animation-duration: 25s;
}

.float-2 {
    top: 60%;
    right: 15%;
    animation-delay: 5s;
    animation-duration: 30s;
}

.float-3 {
    bottom: 30%;
    left: 70%;
    animation-delay: 10s;
    animation-duration: 20s;
}

@keyframes float {
    0% {
        transform: translateY(0) translateX(0) scale(1);
        opacity: 0;
    }
    10% {
        opacity: 0.3;
    }
    50% {
        transform: translateY(-100px) translateX(50px) scale(1.5);
        opacity: 0.6;
    }
    90% {
        opacity: 0.3;
    }
    100% {
        transform: translateY(-200px) translateX(100px) scale(0.5);
        opacity: 0;
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 1rem;
        gap: 3rem;
    }
    
    .name {
        font-size: 2.8rem;
    }
    
    .avatar {
        width: 100px;
        height: 100px;
    }
    
    .card-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .card {
        padding: 1.5rem 1rem;
    }
    
    .music-control {
        bottom: 1rem;
        right: 1rem;
        width: 45px;
        height: 45px;
    }
    
    .music-icon {
        width: 18px;
        height: 18px;
    }
    
    .entry-logo {
        font-size: 3rem;
    }
}

@media (max-width: 480px) {
    .container {
        gap: 2rem;
    }
    
    .name {
        font-size: 2.2rem;
    }
    
    .avatar {
        width: 80px;
        height: 80px;
    }
    
    .description {
        font-size: 1rem;
    }
    
    .card {
        padding: 1.2rem 0.8rem;
    }
    
    .card h3 {
        font-size: 1.1rem;
    }
    
    .card p {
        font-size: 0.85rem;
    }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
    
    .entry-overlay {
        display: none;
    }
    
    .main {
        opacity: 1;
    }
    
    .profile-section,
    .interactive-section,
    .contact-section {
        opacity: 1;
        transform: translateY(0);
    }
}
