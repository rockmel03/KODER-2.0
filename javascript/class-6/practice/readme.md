## ⚒️ 10 More Real-World JavaScript Scenarios (With Breakdown)

---

### 💡 Q11: Form Validation Engine (No HTML Required)

**Problem:**  
Create a custom validation system for a sign-up form.  
**Fields:** username, email, password.

**Checks:**
- Username must be more than 3 characters
- Email must contain `@` and `.`
- Password must be more than 6 characters and contain a number

**Steps:**
1. Get input values on form submit
2. Create a function `validate(field, value)`
3. For each field, push an error if rule breaks
4. If errors array is empty, allow submit
5. Else, show all error messages below form
6. *Optional:* Highlight red borders on failed fields

---

### 💡 Q12: Cart System with Quantity Update

**Problem:**  
Build a simple cart system.

- Products have name and price
- Can add to cart
- Cart updates quantity if item already exists
- Show total cart value

**Steps:**
1. Create a product list from an array
2. Add “Add to Cart” buttons
3. On click:
    - Check if item exists in cart array
    - If yes: increase quantity
    - If no: push new item
4. Render cart table (name, quantity, subtotal)
5. Calculate and show total using `.reduce()`

---

### 💡 Q13: Keyboard Shortcuts UI

**Problem:**  
Trigger actions on keyboard shortcuts:

- Press `Ctrl + K` → open a search box
- Press `Esc` → close it

**Steps:**
1. Add a hidden search input
2. Listen to `keydown` event on document
3. Detect key combinations using `e.ctrlKey && e.key === 'k'`
4. Show/hide search box accordingly
5. Clear input on close

---

### 💡 Q14: Sticky Notes (Drag + Save in LocalStorage)

**Problem:**  
Create sticky notes like Google Keep

- Click button → add a new note
- Type inside
- Drag notes anywhere
- Save positions and content in localStorage

**Steps:**
1. Add a button to create new note
2. Each note is a `div` with `contenteditable` text
3. Make notes draggable using `mousedown`, `mousemove`, `mouseup` or use `position: absolute`
4. Store each note: `{text, x, y}`
5. Save to localStorage on drag or input
6. Restore from storage on page load

---

### 💡 Q15: Weather Fetcher with Loading State

**Problem:**  
Input a city name → fetch and show weather using open API (e.g., wttr.in or openweathermap).

**Steps:**
1. Input for city, button to search
2. On click, show loading text
3. Use `fetch()` to call weather API
4. Parse JSON response
5. Show temperature, humidity, etc.
6. Handle API errors (e.g., city not found)

---

### 💡 Q16: Notification Popups with Timeout

**Problem:**  
Show a toast-style notification when an action happens (like “Item added”). Auto-hide after 3s.

**Steps:**
1. Create a `showToast(message)` function
2. Append a new `div.toast` to DOM with message
3. Use `setTimeout()` to remove it after 3s
4. *Optional:* allow user to close manually too

---

### 💡 Q17: Password Toggle (👁️ Show/Hide)

**Problem:**  
User should be able to toggle password field visibility by clicking an eye icon.

**Steps:**
1. Add an input type password and a button/icon
2. On click of icon:
    - If type is password → change to text
    - Else → revert to password
3. Update icon based on state

---

### 💡 Q18: Countdown Timer (Quiz App Logic)

**Problem:**  
You have 30 seconds to answer a question. Show timer, auto-submit when time ends.

**Steps:**
1. Show a timer near the question
2. Use `setInterval` to update DOM every second
3. When timer hits 0:
    - Disable form
    - Show “Time’s up”
    - Trigger auto-submit logic

---

### 💡 Q19: Infinite Scroll List

**Problem:**  
Show 10 users initially. On scroll to bottom, fetch 10 more from API.

**Steps:**
1. Use an array of dummy users or fetch from [dummyjson.com/users](https://dummyjson.com/users)
2. Render first 10 on page load
3. Add scroll event on window
4. When near bottom, fetch/load next batch
5. Append to list
6. Debounce to prevent excessive calls

---

### 💡 Q20: Rating System with Stars

**Problem:**  
Let user rate something out of 5 stars.  
Stars light up as user hovers, and fix once clicked.

**Steps:**
1. Render 5 empty stars (★ using spans or SVG)
2. On mouseover, highlight up to that star
3. On mouseleave, remove highlights
4. On click, fix rating
5. Save rating in variable (or storage)
6. *Optional:* display numeric rating below