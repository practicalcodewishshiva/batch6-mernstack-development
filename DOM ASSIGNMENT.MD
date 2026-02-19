
## 📚 Part 5: Assignments

### 🟢 Assignment 1: Movie List with forEach (1 hour)

Build: Netflix-style movie list using forEach


const movies = [
    { title: "Avatar", rating: 8.5, year: 2009, genre: "Sci-Fi" },
    { title: "Inception", rating: 9.0, year: 2010, genre: "Thriller" },
    { title: "RRR", rating: 8.8, year: 2022, genre: "Action" },
    { title: "KGF 2", rating: 8.3, year: 2022, genre: "Action" },
    { title: "Pushpa", rating: 7.9, year: 2021, genre: "Action" }
];

// TODO: Use forEach to:
// 1. Create div for each movie
// 2. Add title, rating, year, genre
// 3. Style each card
// 4. Append to container

// Expected output:
// ┌──────────────────────────┐
// │ Avatar (2009)            │
// │ ⭐ 8.5 | Sci-Fi          │
// └──────────────────────────┘


---

### 🟢 Assignment 2: Count the Repaints (1 hour)

Build: Console logger showing each repaint


const movies = ["Movie1", "Movie2", "Movie3", "Movie4", "Movie5"];
let repaintCount = 0;

movies.forEach(function(movie, index) {
    // TODO: Create element
    // TODO: Add content
    // TODO: Before appendChild, log:
    console.log(`Adding ${movie}...`);
    
    // TODO: appendChild
    repaintCount++;
    console.log(`Repaint #${repaintCount} triggered! 🎨`);
    
    // TODO: After appendChild, log time
    console.log(`${movie} added. Total repaints so far: ${repaintCount}`);
    console.log('---');
});

console.log(`TOTAL REPAINTS: ${repaintCount}`);
console.log(`This is why DOM is expensive! 💸`);

// Expected console output:
// Adding Movie1...
// Repaint #1 triggered! 🎨
// Movie1 added. Total repaints so far: 1
// ---
// Adding Movie2...
// Repaint #2 triggered! 🎨
// ...
// TOTAL REPAINTS: 5
// This is why DOM is expensive! 💸


---

### 🟡 Assignment 3: DOM vs Batch Comparison (1.5 hours)

Build: Compare slow (one-by-one) vs fast (batch) approach


const movies = [...100 movies...];

// Method 1: Slow way (one by one)
function slowWay() {
    const start = performance.now();
    
    movies.forEach(movie => {
        let card = document.createElement('div');
        card.textContent = movie.title;
        document.getElementById('container1').appendChild(card);
        // Each appendChild triggers repaint!
    });
    
    const end = performance.now();
    console.log(`Slow way took: ${end - start}ms`);
}

// Method 2: Fast way (batch)
function fastWay() {
    const start = performance.now();
    
    const fragment = document.createDocumentFragment();
    movies.forEach(movie => {
        let card = document.createElement('div');
        card.textContent = movie.title;
        fragment.appendChild(card);  // Add to memory, no repaint!
    });
    document.getElementById('container2').appendChild(fragment); // One repaint!
    
    const end = performance.now();
    console.log(`Fast way took: ${end - start}ms`);
}

// TODO: Run both and compare times
// TODO: Calculate how many times faster


---

### 🟡 Assignment 4: Why React? Document (2 hours)

Write: Complete analysis document

Topics to cover:

1. DOM Problems
   - What happens on each appendChild?
   - Why is it expensive?
   - Performance impact with numbers

2. React Solutions
   - What is Virtual DOM?
   - How does batching work?
   - Component benefits
   - Performance improvements

3. Code Comparison
   - Write same feature in DOM (with forEach)
   - Write same feature in React
   - Count lines of code
   - Compare complexity

4. Performance Analysis
   - Create table: 10, 50, 100, 500 movies
   - Calculate DOM time vs React time
   - Show performance graph

---

## ✅ Summary

### 🎯 What You Learned:


✅ forEach with DOM:
   - Loop through movies array
   - Create element for each movie
   - Append to page

✅ Why DOM is Expensive:
   - Each appendChild triggers repaint
   - Repaint recalculates ENTIRE page
   - 50 movies = 50 repaints = SLOW

✅ Why React:
   - Virtual DOM (fake DOM in memory)
   - Batch updates (many changes, one repaint)
   - Components (reusable code)
   - Smart updates (only what changed)
   - Better performance (50× faster!)


### 📊 Key Numbers to Remember:


DOM:
50 movies = 50 repaints = 5 seconds ⏱️💸

React:
50 movies = 1 repaint = 0.1 seconds ⚡✅

React is 50× FASTER! 


### ❓ Questions Answered:


❓ Why use forEach with DOM?
✅ Clean way to loop through array
✅ Less code than manual for loop
✅ Each item processed same way

❓ Why is DOM expensive?
✅ Every appendChild = full page repaint
✅ Recalculates entire layout
✅ Redraws everything
✅ Takes 100ms+ per repaint

❓ Why React created?
✅ Solve performance problems
✅ Virtual DOM for batching
✅ Components for reusability
✅ Make complex UIs manageable

❓ When use React vs DOM?
✅ Simple static page → DOM
✅ Complex dynamic app → React
✅ Many updates → React
✅ Performance matters → React


Tomorrow: We start learning React! 🎉 