# F5 TTS Web Application

A comprehensive web application for F5 TTS voice synthesis and voice cloning with advanced AI technology.

## Features

### 🎯 Core Functionality
- **Zero-Shot Voice Cloning**: Clone any voice with just 10-15 seconds of audio
- **Real-Time Processing**: Generate speech faster than real-time (0.15 RTF)
- **Multi-Language Support**: English and Chinese with expanding language options
- **Emotion Expression**: Control emotional tone and speaking style
- **Professional Quality**: High-quality audio output with natural intonation

### 🚀 Advanced Features
- **Batch Voice Processing**: Upload and process multiple voice samples simultaneously
- **Voice Comparison Tools**: Side-by-side comparison of original vs cloned voices
- **Training Dashboard**: Real-time monitoring of model training progress
- **Quality Metrics**: Audio quality assessment and similarity scoring
- **Performance Analytics**: Training performance and resource utilization charts

### 🛠️ Technical Integration
- **Google Colab Support**: Complete setup guide for cloud deployment
- **Gradio Interface**: User-friendly web interface for voice synthesis
- **API Integration**: Programmatic access to voice synthesis capabilities
- **Cross-Platform**: Compatible with any platform via standard HTTP requests

## Technology Stack

### Frontend
- **HTML5 & CSS3**: Modern web standards with responsive design
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **JavaScript ES6+**: Modern JavaScript with async/await and modules
- **Anime.js**: Smooth animations and micro-interactions
- **p5.js**: Audio waveform visualization and creative coding

### Libraries & Frameworks
- **ECharts.js**: Professional data visualization
- **Splide.js**: Touch-friendly carousels and sliders
- **Prism.js**: Syntax highlighting for code blocks
- **Matter.js**: Physics-based interactions (ready for future enhancements)

### Design System
- **Glass Morphism**: Modern translucent card design
- **Liquid Metal Background**: Animated shader effects
- **Responsive Grid**: Mobile-first responsive layout
- **Accessibility**: WCAG compliant with keyboard navigation

## Project Structure

```
/
├── index.html              # Main TTS synthesis interface
├── cloning.html             # Voice cloning workshop
├── setup.html              # Google Colab setup guide
├── main.js                 # Core JavaScript functionality
├── resources/              # Images and assets
│   ├── hero-bg.png         # Hero background image
│   ├── interface-mockup.png # Interface visualization
│   ├── neural-voice.png     # Neural network visualization
│   └── recording-studio.png # Professional recording setup
├── design.md               # Visual design guide
├── interaction.md          # Interaction design specification
├── outline.md              # Project structure outline
└── README.md               # This file
```

## Getting Started

### Quick Start
1. **Clone the repository** or download the project files
2. **Open `index.html`** in a modern web browser
3. **Explore the interface** - no server required for basic functionality

### Full Deployment
1. **Google Colab Setup**: Follow the complete guide in `setup.html`
2. **Install Dependencies**: Use the provided installation scripts
3. **Configure Models**: Download pre-trained F5-TTS models
4. **Launch Interface**: Start the Gradio web interface

## Usage Guide

### Voice Synthesis
1. **Enter Text**: Type or paste the text you want to synthesize
2. **Select Voice**: Choose from pre-loaded voices or upload your own
3. **Adjust Parameters**: Control speed, emotion, and other settings
4. **Generate**: Click to generate speech with real-time progress
5. **Download**: Save the generated audio as WAV file

### Voice Cloning
1. **Upload Samples**: Drag and drop multiple voice samples (10-15 seconds each)
2. **Configure Training**: Set training parameters and quality preferences
3. **Monitor Progress**: Track training status and quality metrics
4. **Test Voices**: Preview cloned voices with sample text
5. **Export Results**: Download successful voice clones

### Google Colab Integration
1. **Open Notebook**: Access the provided Colab notebook
2. **Run Setup Cells**: Execute installation and configuration code
3. **Download Models**: Get pre-trained models from HuggingFace
4. **Launch Interface**: Start the web interface with GPU acceleration
5. **Test Deployment**: Validate functionality with sample inferences

## Browser Compatibility

- **Chrome**: 90+ (Recommended)
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

### Mobile Support
- **iOS**: Safari 14+
- **Android**: Chrome 90+
- **Responsive Design**: Optimized for mobile devices

## Performance Optimization

### Frontend
- **Lazy Loading**: Images and heavy components load on demand
- **Code Splitting**: JavaScript bundles split by route
- **Asset Optimization**: WebP images and minified assets
- **Caching Strategy**: Service worker for offline capability

### Backend (Colab)
- **GPU Acceleration**: Tesla T4/V100 for optimal performance
- **Memory Management**: Efficient tensor operations and caching
- **Batch Processing**: Multiple samples processed simultaneously
- **Model Optimization**: Quantized models for faster inference

## Customization

### Theming
- **Color Palette**: Modify CSS custom properties in `:root`
- **Typography**: Update font families in the stylesheet
- **Animations**: Adjust timing and easing in Anime.js configurations

### Functionality
- **Voice Libraries**: Add new pre-trained voice samples
- **Language Support**: Extend to additional languages
- **Audio Effects**: Implement post-processing filters
- **Export Formats**: Add support for additional audio formats

## Troubleshooting

### Common Issues
1. **Audio Not Playing**: Check browser autoplay policies
2. **Slow Generation**: Verify GPU availability and memory
3. **Model Loading Errors**: Ensure all dependencies are installed
4. **Interface Not Responding**: Refresh page and check console errors

### Solutions
- **Browser Console**: Check for JavaScript errors
- **Network Tab**: Verify all assets load correctly
- **GPU Status**: Confirm CUDA availability in Colab
- **Model Files**: Validate model integrity and paths

## Contributing

This project demonstrates advanced web development techniques for AI applications. Contributions are welcome for:

- **Bug Fixes**: Report and fix issues
- **Feature Enhancements**: Add new functionality
- **Performance Improvements**: Optimize loading and rendering
- **Documentation**: Improve guides and examples

## License

This project is created for educational and demonstration purposes. F5-TTS is developed by SWivid and available under their respective license.

## Support

For technical support:
- **Documentation**: Check the setup guide in `setup.html`
- **Troubleshooting**: Review the troubleshooting section
- **Community**: Join the F5-TTS community for model-specific questions
- **Issues**: Report bugs through the project repository

---

**Built with ❤️ using modern web technologies and AI innovation**