# :eye: Desktop-Eye — AI Face & Eye Tracking Desktop App :robot:

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

## :sparkles: Features

- :eye: **Real-time Face & Eye Detection:** High-accuracy facial feature detection using lightweight neural network models.
- :desktop_computer: **Native Cross-Platform Desktop Client:** Powered by Electron for Windows and cross-platform desktop execution.
- :zap: **Client-Side Processing:** Neural net inferences run locally on hardware via WebGL / TensorFlow.js backend with no external server delay.
- :package: **NSIS Windows Installer:** Packaged with `electron-builder` for one-click setup and distribution.

---

## :hammer_and_wrench: Tech Stack

- :atom_symbol: **Core Framework:** Electron
- :robot: **Computer Vision / AI:** face-api.js (TensorFlow.js face landmark detection)
- :package: **Packaging & Build:** electron-builder, electron-packager
- :computer: **Languages:** JavaScript, HTML5, CSS3

---

## :computer: Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shrihari12012007-web/Desktop-Eye.git
   cd Desktop-Eye
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   npm start
   ```

4. **Build Windows Installer (exe):**
   ```bash
   npm run dist
   ```

---

:star: Developed by Shree Hari S B
