# Memory Cards

A fun, interactive memory game built with React. The objective is to click each card only once, with the cards shuffling after every click to increase the difficulty.

### Overview
Memory Cards is a React-based game designed to test and improve a user's memory. Built using modern functional components, it demonstrates the effective use of state and side effects to create a dynamic, engaging user experience.

### Features
- **Dynamic Shuffling:** Cards are automatically randomized after every click to keep the game challenging.
- **Real-time Scoring:** Tracks the current score and stores the player's "Best Score" for the session.
- **Component-Based UI:** A clean, responsive interface built with reusable React components.
- **Interactive Feedback:** Visual cues when a player wins or resets their score.

### Tech Stack
**Frontend:**
- React (Vite)
- Vanilla CSS

### Installation
```bash
git clone https://github.com/Faizan0994/memory-cards.git
cd memory-cards
npm install
```

### Usage
```bash
npm run dev
```

### What I Learned
- **React Hooks:** Mastered the use of `useState` for game state and `useEffect` for handling side effects like shuffling.
- **Array Manipulation:** Implemented an efficient Fisher-Yates shuffle algorithm (or similar) within the React lifecycle.
- **Conditional Logic:** Developed complex logic to detect repeated clicks and reset the game state accordingly.

### Future Improvements
- Adding difficulty levels by increasing the number of cards in the grid.
- Implementing a timer to track how quickly a user can reach a perfect score.
- Adding theme support for different card visual styles.
