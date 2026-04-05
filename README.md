<<<<<<< HEAD
# C21 — Collision Algorithm

A visual demonstration of custom 2D collision detection built with [p5.js](https://p5js.org/) and [p5.play](https://molleindustria.github.io/p5.play/).

---

## What this project does

Two collision detection functions are implemented **from scratch** in `myownlibrary.js` without relying on p5.play's built-in collision system:

| Function | Behaviour |
|---|---|
| `isTouching(obj1, obj2)` | Detects overlap between two sprites and turns them **red** on collision, **green** when clear |
| `bounceOff(obj1, obj2)` | Reverses the velocity of two sprites when they collide, making them bounce apart |

---

## How the collision math works

Both functions use **AABB (Axis-Aligned Bounding Box)** detection.

Two rectangles overlap only when they overlap on **both** axes simultaneously:

```
X overlap:  |obj1.x - obj2.x|  <  (obj1.width/2  + obj2.width/2)
Y overlap:  |obj1.y - obj2.y|  <  (obj1.height/2 + obj2.height/2)
```

If both conditions are true → collision detected.

---

## Sprites in the scene

| Sprite | Colour | Behaviour |
|---|---|---|
| `fixedRect` | Blue | Bounces vertically from the top of the canvas |
| `movingRect` | Yellow | Follows the mouse cursor |
| `gameObject1–3` | Green/Red | Static targets; turn red when `movingRect` touches them |
| `gameObject4` | Green/Red | Moves upward; bounces off `fixedRect` via `bounceOff()` |

---

## File structure

```
C21/
├── index.html          ← Entry point (loads all scripts)
├── sketch.js           ← p5.js setup() and draw() loop
├── myownlibrary.js     ← Custom collision functions (isTouching, bounceOff)
├── style.css           ← Minimal page styles
├── p5.js               ← p5.js core library
├── p5.dom.min.js       ← p5.js DOM add-on
├── p5.sound.min.js     ← p5.js sound add-on
├── p5.play.js          ← p5.play sprite library
└── README.md           ← This file
```

---

## Bug fixed

The original `index.html` had a **missing closing quote** on the `myownlibrary.js` script tag:

```html
<!-- ❌ Broken — browser never loads myownlibrary.js -->
<script src="./myownlibrary.js></script>

<!-- ✅ Fixed -->
<script src="./myownlibrary.js"></script>
```

This caused `isTouching` and `bounceOff` to be undefined at runtime, breaking all collision detection.

---

## How to run

No build step needed. Just open `index.html` in a browser — or serve the folder locally:

```bash
# Python 3
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

> **Note:** browsers block local file imports (`file://`), so a local server is required.

---

## Extending the project

Ideas to explore next:

- **Circle collision** — use distance formula instead of AABB for round objects
- **Velocity correction** — push sprites apart on collision to prevent sticking
- **Multiple bounce types** — elastic vs. inelastic collision using mass
- **Score system** — count how many times `movingRect` touches targets

---

## Dependencies

| Library | Version | Purpose |
|---|---|---|
| p5.js | 0.x (bundled) | Canvas drawing and game loop |
| p5.play | 0.x (bundled) | Sprite management |
| p5.dom | 0.x (bundled) | DOM elements |
| p5.sound | 0.x (bundled) | Audio (unused in this sketch) |

---

## Author

[AKIB2005](https://github.com/AKIB2005)
=======
# collisionAlgorithm
Algorithm to detect collision between two objects
>>>>>>> 236d9520db9a97b46cb73e95ed49afd3954c0274
