# 🪐 Cosmic Odometer

**Cosmic Odometer** is a highly interactive, scientifically-grounded calculator and 3D planetarium that shows exactly how far you’ve traveled through the universe since the exact moment of your birth. 

By calculating Earth’s rotation, its orbit around the Sun, the Solar System's drift, and our Galaxy's trajectory, it generates a personalized, real-time “cosmic mileage” reading.

![Version](https://img.shields.io/badge/version-2.0.0-00d4ff)
![License](https://img.shields.io/badge/license-MIT-00ff41)
![Tech Stack](https://img.shields.io/badge/tech-HTML%20%7C%20Vanilla%20JS%20%7C%20Three.js-9d4edd)

---

## ✨ Features

### 🔭 3D Interactive Solar System (Powered by Three.js)
- **Mathematically Accurate Orbits:** Planets are mapped using exact J2000 Epoch offsets and true orbital periods based on Kepler's mechanics.
- **Three Viewing Modes:**
  - **Cinematic:** Sit back and watch a smooth, fast-forwarded simulation of planetary motion.
  - **Today (Vortex):** Maps the planets to their exact real-world positions right now. Generates a majestic **100-Year 3D Corkscrew Trail** showing the mathematical path the solar system has carved through the galaxy.
  - **Birth Date:** Time-travel mode. Enter your birthday and watch the planets snap to the exact coordinates they were at when you were born.
- **Real-Time Earth Tracking:** In "Today" mode, click **Track Earth** to lock the camera onto a low-poly Earth. The planet rotates exactly 360° every 24 hours based on your device's live UTC time, rendering real-time sunrise and sunset terminator lines.
- **3D Orbit Controls:** Fully interactive canvas. Drag to pan, scroll to zoom, and explore the solar system from any angle.
- **not implemented for mobiles or small screens yet** 

### 🧮 The Cosmic Calculator
- **Personalized Telemetry:** Live tracking of distance traveled via Earth's Spin, Solar Orbit, Solar System Travel, and Galactic Travel.
- **Linear Displacement Estimate:** Calculates your straight-line vector travel through the void.
- **Milestone Tracker:** Translates your total distance into tangible metrics (e.g., Round trips to the Moon, laps past Pluto, and progress toward a Light Year).
- **Session Tracker:** Watch your mileage tick up live from the moment you open the app.

### 👩‍🚀 Cosmic Connection (Multiplayer)
- **Compare Flight Paths:** Enter a friend's birth date to calculate the exact distance Earth traveled between your two birthdays (the "Distance Gap" at birth).
- **Shared Journey:** Calculates the exact mileage you and your friend have traveled *together* since you both existed.

### 🛠️ Utilities & Accessibility
- **Progress Web App (PWA):** Fully installable on iOS and Android devices for a native app experience.
- **Localization:** Playable in English, French, Spanish, and Japanese.
- **Shareable Receipts:** Generates a downloadable, retro-styled PNG "Travel Log Receipt" of your current stats.
- **Privacy First:** 100% client-side rendering. Your birth date, time, and latitude are processed locally in your browser and are never sent to a server.

---

## 💻 Technical Stack
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+).
- **3D Engine:** [Three.js](https://threejs.org/) (r128) + OrbitControls.
- **Math:** J2000 Epoch astronomical offsets, Spherical Trigonometry, UTC timestamp fractional rotation.
- **Deployment:** Vercel / Cloudflare (with Cache-Control/Service Workers for PWA).

---

## 👨‍💻 Developer

Created by **Captain Nemo 729 (Rohan Jadhav)**.  
GitHub: [@rohanjadhav1880-glitch](https://github.com/rohanjadhav1880-glitch)  
Support the project: [Buy me a Coffee ☕](https://www.buymeacoffee.com/nemo7299)

---

## 📄 License & Attribution

Cosmic Odometer © 2026 Captain Nemo 729 (Rohan Jadhav).  

Released under the **MIT License**. You are free to use, modify, and distribute this software, but please credit the original creator when remixing, featuring, or redistributing.

