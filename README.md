Counter App

A simple and responsive counter application built with HTML5, CSS3, and vanilla JavaScript.

The app allows users to increase, decrease, and reset a counter while choosing a custom step value. Counter data, step value, and theme preference can be persisted using browser "localStorage".

---

Features

- Increase counter
- Decrease counter
- Reset counter
- Custom step value
- Prevent negative counter values
- Persist counter value
- Persist step value
- Light/dark theme
- Persist theme preference
- Responsive layout
- Keyboard-accessible controls
- Simple vanilla JavaScript architecture

---

Tech Stack

- HTML5
- CSS3
- JavaScript ES6
- Browser "localStorage"

No JavaScript framework or CSS framework is required.

---

How It Works

The application follows a simple flow:

User Action
    ↓
Event Handler
    ↓
Counter Logic
    ↓
State Update
    ↓
UI Render
    ↓
localStorage

For example, when the user clicks Increase:

Increase Button
      ↓
countUp()
      ↓
Read Step
      ↓
Increase Count
      ↓
renderCount()
      ↓
Update Screen
      ↓
Save Count

---

Step Value

The user can define how much the counter should change.

Example:

Count = 10
Step = 5

Clicking Increase:

10 + 5 = 15

Clicking Decrease:

10 - 5 = 5

The step value should be at least "1".

---

Counter Persistence

The application uses browser "localStorage" to preserve the counter value.

The counter can therefore remain available after refreshing the page.

Storage key:

countNum

---

Step Persistence

The selected step value can also be stored in "localStorage".

Storage key:

locstp

---

Theme System

The application supports light and dark themes.

The JavaScript layer controls the theme state by adding or removing the "dark" class from the "<body>".

The CSS layer controls the visual appearance.

JavaScript
    ↓
body.dark
    ↓
CSS Theme Variables
    ↓
Dark Interface

The selected theme is stored using:

theme

---

Architecture

The project follows a simple separation of responsibilities.

HTML

Responsible for:

- Structure
- Content
- Buttons
- Input
- Labels

CSS

Responsible for:

- Colors
- Layout
- Typography
- Responsive design
- Theme appearance
- Hover states
- Focus states

JavaScript

Responsible for:

- Counter logic
- Step handling
- Theme switching
- Event handling
- "localStorage"
- UI updates

---

Main JavaScript Functions

"countUp()"

Increases the counter using the selected step.

"countDown()"

Decreases the counter using the selected step while preventing invalid negative results.

"resetCount()"

Resets the counter to zero.

"renderCount()"

Updates the counter displayed in the interface and persists the value.

"toggleTheme()"

Switches between light and dark mode.

---

Accessibility

The project should use:

- Semantic HTML
- Proper "<label>" and "<input>" relationship
- Real "<button>" elements
- Keyboard-accessible controls
- Visible focus styles
- Descriptive button labels
- Accessible theme toggle

---

Responsive Design

The counter should remain usable across:

- Desktop
- Tablet
- Mobile

The interface should avoid horizontal overflow and maintain comfortable button/input sizes on small screens.

---

Design Principles

The project follows these principles:

1. Keep the code simple.
2. Separate structure, style, and behavior.
3. Avoid unnecessary abstractions.
4. Use descriptive names.
5. Reuse code when repetition exists.
6. Keep theme values centralized.
7. Validate user input.
8. Keep application state predictable.

---

Learning Goals

This project is useful for practicing:

- DOM selection
- Event listeners
- Functions
- State
- Conditional logic
- Input validation
- "localStorage"
- CSS variables
- Dark mode
- Responsive CSS
- Basic application architecture

---

Future Improvements

Possible future versions could include:

- Keyboard shortcuts
- Counter history
- Multiple counters
- Animated count changes
- Statistics
- Better accessibility feedback

These features are intentionally outside the basic V1 scope.

---

License

This project is licensed under the MIT License.

See the "LICENSE" file for details.