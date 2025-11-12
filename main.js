// F5 TTS Web Application - Main JavaScript
class F5TTSApp {
    constructor() {
        this.isGenerating = false;
        this.currentAudio = null;
        this.selectedVoice = 'alex';
        this.waveformSketch = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeAnimations();
        this.initializeWaveform();
        this.initializeVoiceGallery();
        this.setupTextCounter();
    }

    setupEventListeners() {
        // Upload zone events
        const uploadZone = document.getElementById('uploadZone');
        const voiceUpload = document.getElementById('voiceUpload');
        
        uploadZone.addEventListener('click', () => voiceUpload.click());
        uploadZone.addEventListener('dragover', this.handleDragOver.bind(this));
        uploadZone.addEventListener('dragleave', this.handleDragLeave.bind(this));
        uploadZone.addEventListener('drop', this.handleDrop.bind(this));
        voiceUpload.addEventListener('change', this.handleFileSelect.bind(this));

        // Voice selection
        document.querySelectorAll('.voice-card').forEach(card => {
            card.addEventListener('click', () => this.selectVoice(card));
        });

        // Speed slider
        const speedSlider = document.getElementById('speedSlider');
        speedSlider.addEventListener('input', this.updateSpeedValue.bind(this));

        // Play button
        document.getElementById('playButton').addEventListener('click', this.togglePlayback.bind(this));

        // Text input counter
        document.getElementById('textInput').addEventListener('input', this.updateTextCounter.bind(this));
    }

    initializeAnimations() {
        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Animate particles
        this.animateParticles();
    }

    animateParticles() {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            anime({
                targets: particle,
                translateY: [0, -100],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
                rotate: [0, 360],
                duration: 6000,
                delay: index * 200,
                loop: true,
                easing: 'easeInOutSine'
            });
        });
    }

    initializeWaveform() {
        // Create p5.js sketch for waveform visualization
        const waveformContainer = document.getElementById('waveformContainer');
        
        this.waveformSketch = new p5((p) => {
            let waves = [];
            let time = 0;

            p.setup = () => {
                const canvas = p.createCanvas(waveformContainer.offsetWidth, waveformContainer.offsetHeight);
                canvas.parent('waveformContainer');
                
                // Initialize wave data
                for (let i = 0; i < 5; i++) {
                    waves.push({
                        amplitude: p.random(20, 60),
                        frequency: p.random(0.01, 0.03),
                        phase: p.random(0, p.TWO_PI),
                        color: p.color(13, 148, 136, 100 - i * 15)
                    });
                }
            };

            p.draw = () => {
                p.clear();
                
                // Draw multiple wave layers
                waves.forEach((wave, index) => {
                    p.stroke(wave.color);
                    p.strokeWeight(2);
                    p.noFill();
                    
                    p.beginShape();
                    for (let x = 0; x < p.width; x += 2) {
                        const y = p.height / 2 + 
                            p.sin(x * wave.frequency + time + wave.phase) * wave.amplitude +
                            p.sin(x * wave.frequency * 2 + time * 1.5) * wave.amplitude * 0.5;
                        p.vertex(x, y);
                    }
                    p.endShape();
                });
                
                time += 0.02;
            };

            p.windowResized = () => {
                p.resizeCanvas(waveformContainer.offsetWidth, waveformContainer.offsetHeight);
            };
        });
    }

    initializeVoiceGallery() {
        const splide = new Splide('#voiceGallery', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            breakpoints: {
                768: {
                    perPage: 1,
                },
                1024: {
                    perPage: 2,
                }
            }
        });
        splide.mount();
    }

    setupTextCounter() {
        this.updateTextCounter();
    }

    updateTextCounter() {
        const textInput = document.getElementById('textInput');
        const charCount = document.getElementById('charCount');
        charCount.textContent = textInput.value.length;
    }

    handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('dragover');
    }

    handleDragLeave(e) {
        e.currentTarget.classList.remove('dragover');
    }

    handleDrop(e) {
        e.preventDefault();
        e.currentTarget.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            this.processAudioFile(files[0]);
        }
    }

    handleFileSelect(e) {
        const file = e.target.files[0];
        if (file) {
            this.processAudioFile(file);
        }
    }

    processAudioFile(file) {
        // Simulate file upload with progress
        const progressContainer = document.getElementById('uploadProgress');
        const progressBar = document.getElementById('progressBar');
        const progressPercent = document.getElementById('progressPercent');
        
        progressContainer.classList.remove('hidden');
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => {
                    progressContainer.classList.add('hidden');
                    this.showUploadSuccess(file.name);
                }, 500);
            }
            
            progressBar.style.width = `${progress}%`;
            progressPercent.textContent = `${Math.round(progress)}%`;
        }, 100);
    }

    showUploadSuccess(filename) {
        const uploadZone = document.getElementById('uploadZone');
        uploadZone.innerHTML = `
            <div class="text-center">
                <svg class="w-12 h-12 text-green-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <p class="text-white font-medium">${filename}</p>
                <p class="text-sm text-gray-400">Voice sample uploaded successfully</p>
            </div>
        `;
    }

    selectVoice(card) {
        // Remove previous selection
        document.querySelectorAll('.voice-card').forEach(c => {
            c.classList.remove('ring-2', 'ring-teal-500');
        });
        
        // Add selection to clicked card
        card.classList.add('ring-2', 'ring-teal-500');
        this.selectedVoice = card.dataset.voice;
        
        // Animate selection
        anime({
            targets: card,
            scale: [1, 1.05, 1],
            duration: 300,
            easing: 'easeOutBack'
        });
    }

    updateSpeedValue() {
        const slider = document.getElementById('speedSlider');
        const valueDisplay = document.getElementById('speedValue');
        valueDisplay.textContent = `${slider.value}x`;
    }

    async generateSpeech() {
        if (this.isGenerating) return;
        
        const textInput = document.getElementById('textInput');
        const generateBtn = document.getElementById('generateBtn');
        const statusContainer = document.getElementById('generationStatus');
        const progressBar = document.getElementById('generationProgress');
        
        if (!textInput.value.trim()) {
            this.showNotification('Please enter some text to synthesize', 'warning');
            return;
        }
        
        this.isGenerating = true;
        generateBtn.disabled = true;
        generateBtn.innerHTML = `
            <div class="flex items-center justify-center space-x-2">
                <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Generating...</span>
            </div>
        `;
        
        statusContainer.classList.remove('hidden');
        
        // Simulate generation process
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 20;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                this.completeGeneration();
            }
            progressBar.style.width = `${progress}%`;
        }, 200);
    }

    completeGeneration() {
        const generateBtn = document.getElementById('generateBtn');
        const statusContainer = document.getElementById('generationStatus');
        
        // Simulate audio generation
        this.currentAudio = {
            duration: 12.5,
            text: document.getElementById('textInput').value.substring(0, 50) + '...',
            voice: this.selectedVoice,
            speed: document.getElementById('speedSlider').value,
            emotion: document.getElementById('emotionSelect').value
        };
        
        // Update UI
        document.getElementById('audioDuration').textContent = this.formatDuration(this.currentAudio.duration);
        this.addToRecentGenerations();
        
        // Reset button
        generateBtn.disabled = false;
        generateBtn.innerHTML = 'Generate Speech';
        statusContainer.classList.add('hidden');
        
        this.isGenerating = false;
        
        // Show success notification
        this.showNotification('Speech generated successfully!', 'success');
        
        // Animate the audio player
        anime({
            targets: '.audio-controls',
            scale: [0.95, 1],
            opacity: [0.7, 1],
            duration: 500,
            easing: 'easeOutBack'
        });
    }

    togglePlayback() {
        const playButton = document.getElementById('playButton');
        const isPlaying = playButton.classList.contains('playing');
        
        if (isPlaying) {
            // Pause
            playButton.classList.remove('playing');
            playButton.innerHTML = `
                <svg class="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                </svg>
            `;
        } else {
            // Play
            playButton.classList.add('playing');
            playButton.innerHTML = `
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
            `;
            
            // Simulate playback completion
            if (this.currentAudio) {
                setTimeout(() => {
                    this.togglePlayback();
                }, this.currentAudio.duration * 1000);
            }
        }
    }

    addToRecentGenerations() {
        const recentContainer = document.getElementById('recentGenerations');
        const generationElement = document.createElement('div');
        generationElement.className = 'flex items-center justify-between p-3 bg-white/5 rounded-lg';
        generationElement.innerHTML = `
            <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
                <div>
                    <p class="text-white text-sm font-medium">${this.currentAudio.text}</p>
                    <p class="text-xs text-gray-400">${this.selectedVoice} • ${this.currentAudio.speed}x • ${this.currentAudio.emotion}</p>
                </div>
            </div>
            <button class="text-gray-400 hover:text-white" onclick="downloadAudio()">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
            </button>
        `;
        
        recentContainer.insertBefore(generationElement, recentContainer.firstChild);
        
        // Keep only last 5 generations
        while (recentContainer.children.length > 5) {
            recentContainer.removeChild(recentContainer.lastChild);
        }
    }

    formatDuration(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `fixed top-24 right-6 z-50 p-4 rounded-lg shadow-lg max-w-sm transform translate-x-full transition-transform duration-300`;
        
        // Set colors based on type
        const colors = {
            success: 'bg-green-600 text-white',
            warning: 'bg-yellow-600 text-white',
            error: 'bg-red-600 text-white',
            info: 'bg-teal-600 text-white'
        };
        
        notification.className += ` ${colors[type]}`;
        notification.innerHTML = `
            <div class="flex items-center space-x-3">
                <div class="flex-shrink-0">
                    ${this.getNotificationIcon(type)}
                </div>
                <p class="text-sm font-medium">${message}</p>
                <button onclick="this.parentElement.parentElement.remove()" class="ml-auto text-white hover:text-gray-200">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(full)';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }

    getNotificationIcon(type) {
        const icons = {
            success: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
            warning: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/></svg>',
            error: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>',
            info: '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
        };
        return icons[type] || icons.info;
    }
}

// Global functions
function scrollToSynthesize() {
    document.getElementById('synthesize').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function playDemo() {
    // Simulate playing a demo audio
    const playButton = document.getElementById('playButton');
    if (!playButton.classList.contains('playing')) {
        app.togglePlayback();
    }
    
    app.showNotification('Playing demo audio...', 'info');
}

function clearText() {
    document.getElementById('textInput').value = '';
    app.updateTextCounter();
}

function generateSpeech() {
    app.generateSpeech();
}

function downloadAudio() {
    if (app.currentAudio) {
        // Simulate download
        const link = document.createElement('a');
        link.href = '#';
        link.download = `f5-tts-${Date.now()}.wav`;
        link.click();
        
        app.showNotification('Audio downloaded successfully!', 'success');
    } else {
        app.showNotification('No audio to download', 'warning');
    }
}

function shareAudio() {
    if (app.currentAudio && navigator.share) {
        navigator.share({
            title: 'F5 TTS Generated Audio',
            text: 'Check out this AI-generated speech!',
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href);
        app.showNotification('Link copied to clipboard!', 'success');
    }
}

function previewVoice(voiceName) {
    app.showNotification(`Previewing ${voiceName} voice...`, 'info');
    
    // Simulate voice preview
    setTimeout(() => {
        const demoTexts = {
            alex: "Hello, this is Alex with a professional voice demonstration.",
            sarah: "Hi there! I'm Sarah, and this is how I sound in conversation.",
            mike: "Welcome to this narrative journey. I'm Mike, your storyteller.",
            emma: "Hey everyone! Emma here with an energetic and friendly voice sample."
        };
        
        app.showNotification(`"${demoTexts[voiceName]}"`, 'info');
    }, 1000);
}

// Initialize app when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new F5TTSApp();
});

// Handle window resize for responsive waveform
window.addEventListener('resize', () => {
    if (app && app.waveformSketch) {
        app.waveformSketch.windowResized();
    }
});