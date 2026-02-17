# 🪐 Cosmic Odometer

**Cosmic Odometer** is a highly interactive, scientifically-grounded calculator and 3D planetarium that shows exactly how far you’ve traveled through the universe since the exact moment of your birth.

By calculating Earth’s rotation, its orbit around the Sun, the Solar System's drift, and our Galaxy's trajectory relative to the Cosmic Microwave Background (CMB), it generates a personalized, real-time “cosmic mileage” reading.
  
## ✨ Features

### 🔭 3D Interactive Solar System (Powered by Three.js)
* **Mathematically Accurate Orbits:** Planets are mapped using exact J2000 Epoch offsets and true orbital periods based on Kepler's mechanics.
* **Three Viewing Modes:**
  * **Cinematic:** Sit back and watch a smooth, fast-forwarded simulation of planetary motion that leaves behind a dynamic, real-time 3D corkscrew vortex as the Sun drags the planets through space.
  * **Today (Vortex):** Maps the planets to their exact real-world positions right now, displaying the 100-year mathematical path the solar system has carved through the galaxy.
  * **Birth Date:** Time-travel mode. Enter your birthday and watch the planets snap to the exact coordinates they were at when you were born.
* **Deep Space Interstellar Probes:** Voyager 1 and Voyager 2 are actively rendered using their true Heliocentric escape trajectories, Heliographic coordinates (lat/lon), and terminal JPL velocities. Watch them physically pierce through the solar system boundaries into deep space.
* **Dynamic Camera Tracking:** In "Today" mode, smoothly lock the 3D camera onto specific celestial bodies:
  * **🌍 Earth:** Tracks a texture-mapped Earth rotating exactly 360° every 24 hours based on your device's live UTC time (with an accurately orbiting Moon).
  * **🔴 Voyager 1 & 🔵 Voyager 2:** The camera pans across billions of miles of empty space to track humanity's furthest creations in real-time.
* **Fully Responsive & Mobile Optimized:** On desktop, the 3D engine sits beautifully behind the UI. On mobile, a dedicated "View Solar System" toggle seamlessly hides the calculator and expands the 3D universe to full screen.

### 🌌 3D Galactic Context Panel
* **Procedural Milky Way:** A secondary, independent Three.js engine renders a 6,000-particle interactive galaxy that slowly rotates in real-time.
* **"You Are Here" Beacon:** A pulsating neon-green marker mathematically locked into the Orion Arm of the spiral.
* **Cosmic Orbit Tracker:** Compares your exact age in seconds to the 225-million-year galactic orbit of the Sun, calculating the precise percentage of a "Cosmic Year" you have completed since birth.

### 🧮 The Cosmic Calculator
* **Personalized Telemetry:** Live tracking of distance traveled via Earth's Spin, Solar Orbit, Solar System Travel, and Galactic Travel.
* **🎉 Party Predictor:** Select a massive cosmic milestone (like 1 Trillion Kilometers) and the engine calculates the exact future date you will cross it. Includes a one-click 'Share to X' (Twitter) button to send out invitations to your space party.
* **Net Displacement Estimate:** Calculates your straight-line vector travel through the void, featuring an interactive UI breakdown of astrophysics constraints (CMB rest frame, telescopic margin of error, and General Relativity).
* **Milestone Tracker:** Translates your total distance into tangible metrics (Round trips to the Moon, laps past Pluto, and progress toward a Light Year).
* **Session Tracker:** Watch your mileage tick up live from the moment you open the app.

### 👩‍🚀 Cosmic Connection (Multiplayer)
* **Compare Flight Paths:** Enter a friend's birth date to calculate the exact distance Earth traveled between your two birthdays (the "Distance Gap" at birth).
* **Shared Journey:** Calculates the exact mileage you and your friend have traveled *together* since you both existed.

### 🛠️ Utilities & Accessibility
* **Progressive Web App (PWA):** Fully installable on iOS and Android devices for a native app experience.
* **Localization:** Playable in English, French, Spanish, and Japanese.
* **Shareable Receipts:** Generates a downloadable, retro-styled PNG "Travel Log Receipt" of your current stats.
* **Privacy First:** 100% client-side rendering. Your birth date, time, and latitude are processed locally in your browser and are never sent to a server.

## 💻 Technical Stack
* **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+).
* **3D Engines:** Dual `Three.js` (r128) instances + OrbitControls.
* **Math:** J2000 Epoch astronomical offsets, spherical-to-Cartesian trigonometry, heliocentric linear regression (probes), and UTC timestamp fractional rotation.
* **Deployment:** Cloudflare Pages edge network (with Cache-Control/Service Workers for PWA).

## 👨‍💻 Developer
Created by **Captain Nemo 729 (Rohan Jadhav)**.
* **GitHub:** [@rohanjadhav1880-glitch](https://github.com/rohanjadhav1880-glitch)
* **Support the project:** [Buy me a Coffee ☕](https://www.buymeacoffee.com/nemo7299)

## 📄 License & Attribution
Cosmic Odometer © 2026 Captain Nemo 729 (Rohan Jadhav).
Released under the **MIT License**. You are free to use, modify, and distribute this software, but please credit the original creator when remixing, featuring, or redistributing.
