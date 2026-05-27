# 🪐 Cosmic Odometer V3

**Cosmic Odometer** is a highly interactive, scientifically-grounded calculator and 3D planetarium that shows exactly how far you’ve traveled through the universe since the exact moment of your birth.

By calculating Earth’s rotation, its orbit around the Sun, the Solar System's drift, and our Galaxy's trajectory relative to the Cosmic Microwave Background (CMB), it generates a personalized, real-time “cosmic mileage” reading.

## ✨ New & Expanded Features

### 🔭 3D Interactive Solar System (Powered by Three.js)
* **Mathematically Accurate Orbits:** Planets are mapped using exact J2000 Epoch offsets and true orbital periods based on Kepler's mechanics.
* **Jupiter's Galilean Moons:** Includes Io, Europa, Ganymede, and Callisto, all tracked in their actual real-time orbital positions.
* **Celestial Environments:** Features a detailed **Asteroid Belt** and a massive, procedurally generated **Oort Cloud**.
* **Three Viewing Modes:**
  * **Cinematic:** Smooth, fast-forwarded simulation with dynamic 3D corkscrew vortex trails.
  * **Today (Vortex):** Real-world positions right now, displaying the 100-year mathematical path of the solar system.
  * **Birth Date:** Snap the entire solar system back to the exact coordinates of your birth.
* **Interstellar Tracking:** Voyager 1, Voyager 2, the Parker Solar Probe, and the ISS are rendered using true Heliocentric trajectories and JPL telemetry.

### 🌌 Universal View (3D Intergalactic Map)
* **Proximity-Based Labeling:** A smart labeling system that automatically shows names for stars, galaxies, and superclusters as you approach them in 3D space.
* **Milky Way & Sagittarius A\*:** A high-detail spiral representation of our galaxy. **Sagittarius A\*** is marked at the galactic center with a unique proximity label.
* **Deep Space Landmarks:** Explore the **Local Group**, the **Virgo Supercluster**, the **Coma Cluster**, and massive structures like the **Great Attractor**, the **Shapley Supercluster**, and the **Dipole Repeller**.
* **Accurate Mapping:** All intergalactic objects are positioned using real-world Right Ascension (RA), Declination (Dec), and Distance data.

### 🌌 Astrophysics & Human Engines
* **Astrophysics Engine:** Real-time tracking of **Time Dilation** (Special Relativity), **Universal Expansion** (Hubble Flow), **Galactic Collision** (Andromeda approach), and the **Cosmic Horizon** (~22,000 stars lost per second).
* **🧠 Micro-Relativity:** Calculates the General Relativity difference between your head and feet—tracking exactly how many nanoseconds older your brain is than your toes.
* **🫀 The Human Engine:** A biological odometer tracking roughly how many **heartbeats**, **breaths**, and **cells** your body has generated during your journey.
* **💥 Cosmic Events:** Live counters for **Supernovae** explosions (~30 per second) and **Neutrino Showers** (quadrillions) passing through your body.

### 🔭 The Lookback Telescope & Photon Travel
* **Lookback Telescope:** Calculates how far the light from your birth has traveled. It tells you exactly which star systems (Alpha Centauri, Vega, Sirius, etc.) are currently "watching" the day you were born.
* **⚡ If You Were A Photon:** A dedicated high-speed metric tracking where you would be if you traveled at the universal speed limit (*c*) since birth.

### 📊 Educational & Interactive Tools
* **Detailed Infographic Modal:** A massive 21-card visual manual explaining every calculation on the site with 100% mathematical accuracy and scientific sources (NASA JPL, IAU, NIST, etc.).
* **📍 Your Cosmic Address:** A stylized breakdown of your location from Earth to the Laniakea Supercluster.
* **👩‍🚀 Cosmic Connection:** Calculate the physical void in space between your birthplace and a friend's.
* **🎉 Party Predictor:** Predict the exact date you will cross massive milestones like 1 Trillion Miles or 1 Full Light-Year.

### 🛠️ Performance & Utilities
* **Adaptive Scaling:** Features a `PerfMonitor` that automatically adjusts rendering resolution and particle counts based on your device's FPS.
* **Extreme Optimization:** Engineered for low-end devices using **DOM caching**, **GPU culling**, and point-cloud rendering for complex galaxies.
* **100% Localization:** Fully translated into **English, French, Spanish, Japanese, Portuguese, German, Italian, Hindi, and Chinese (Simplified)**.
* **Easter Eggs:** Hidden keyboard commands for visual effects like `warp`, `blackhole` (spaghettification), and `ufo` (panel abduction).

## 💻 Technical Stack
* **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+).
* **3D Engines:** Dual `Three.js` instances + OrbitControls.
* **Performance:** Adaptive resolution scaling, RequestAnimationFrame throttling, and Point-Cloud optimization.
* **Deployment:** Cloudflare Pages with Service Worker (PWA) cache-management.

## 👨‍💻 Developer
Created by **Captain Nemo 729 (Rohan Jadhav)**.
* **GitHub:** [@rohanjadhav1880-glitch](https://github.com/rohanjadhav1880-glitch)
* **Support the project:** [Buy me a Coffee ☕](https://www.buymeacoffee.com/nemo7299)

## 📄 License & Attribution
Cosmic Odometer © 2026 Captain Nemo 729 (Rohan Jadhav).
Released under the **MIT License**. You are free to use, modify, and distribute this software, but please credit the original creator when remixing, featuring, or redistributing.
