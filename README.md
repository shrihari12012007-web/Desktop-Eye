# ðŸ‘ï¸ Desktop-Eye â€” AI Face & Eye Tracking Desktop App

<div align="center">
  <img src="https://img.shields.io/badge/Platform-Electron_Desktop-47848F?style=for-the-badge&logo=electron&logoColor=white" alt="Electron" />
  <img src="https://img.shields.io/badge/AI_Vision-face--api.js-FF6F00?style=for-the-badge&logo=javascript&logoColor=white" alt="face-api" />
  <a href="https://desktop-eye.vercel.app">
    <img src="https://img.shields.io/badge/Live_Web_Demo-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel Demo" />
  </a>
</div>

<br />

**Desktop-Eye** is a real-time computer vision desktop application built with **Electron** and **face-api.js**. It performs facial detection, landmark extraction, and eye tracking directly in an application window for focus monitoring, accessibility, and vision interaction.

---

## âœ¨ Features

- **ðŸ‘ï¸ Real-time Face & Eye Detection:** High-accuracy facial feature detection using lightweight neural network models.
- **ðŸ–¥ï¸ Native Cross-Platform Desktop Client:** Powered by Electron for Windows and cross-platform desktop execution.
- **âš¡ Client-Side Processing:** Neural net inferences run locally on the user's hardware via WebGL / TensorFlow.js backend â€” no external server lag.
- **ðŸ“¦ NSIS Windows Installer:** Packaged with electron-builder for one-click setup and distribution.

---

## ðŸ› ï¸ Tech Stack

- **Core Framework:** Electron (v42.x)
- **Computer Vision / AI:** ace-api.js (TensorFlow.js face landmark detection)
- **Packaging & Build:** electron-builder, electron-packager
- **Languages:** JavaScript, HTML5, CSS3

---

## ðŸ’» Installation & Setup

1. **Clone the repository:**
   `ash
   git clone https://github.com/shrihari12012007-web/Desktop-Eye.git
   cd Desktop-Eye
   `

2. **Install dependencies:**
   `ash
   npm install
   `

3. **Start the application:**
   `ash
   npm start
   `

4. **Build Windows Installer (exe):**
   `ash
   npm run dist
   `

---

Â© 2026 Desktop-Eye â€¢ Developed by Shree Hari S B