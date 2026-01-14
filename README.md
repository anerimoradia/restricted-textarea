# Restricted TextArea

A lightweight, modern textarea component with character limit enforcement and real-time counter display. Built with vanilla JavaScript, HTML, and CSS for maximum compatibility and minimal dependencies.

## 📋 Description

Restricted TextArea is a simple yet elegant web component that provides a text input area with a configurable character limit. It features real-time character counting, visual feedback when the limit is reached, and a clean, modern design that fits seamlessly into any web application.

### Key Features

- ✨ **Real-time Character Counter** - Live updates as you type
- 🎨 **Visual Feedback** - Border color changes when limit is reached
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🚀 **Lightweight** - Zero dependencies, pure vanilla JavaScript
- 🎯 **Easy to Customize** - Simple CSS variables and JavaScript configuration
- ♿ **Accessible** - Built with accessibility best practices

## 📁 Project Structure

```
restricted-textarea/
│
├── index.html          # Main HTML structure
├── script.js           # JavaScript logic for character counting
├── styles.css          # Styling and visual design
└── README.md           # Project documentation
```

## 🚀 Installation

### Option 1: Direct Download

1. Clone or download this repository:
   ```bash
   git clone https://github.com/anerimoradia/restricted-textarea.git
   cd restricted-textarea
   ```

2. Open `index.html` in your web browser - that's it!

### Option 2: Integration into Your Project

1. Copy the following files to your project:
   - `index.html` (or extract the relevant HTML)
   - `script.js`
   - `styles.css`

2. Include the CSS and JavaScript files in your HTML:
   ```html
   <link rel="stylesheet" href="styles.css">
   <script src="script.js"></script>
   ```

3. Add the HTML structure where needed:
   ```html
   <div class="container">
       <h2>Write your message</h2>
       <div class="textarea-wrapper">
           <textarea 
               id="message"
               placeholder="Start typing..."
               maxlength="250"
           ></textarea>
           <div id="counter">0 / 250</div>
       </div>
   </div>
   ```

### Customization

To change the character limit, update the `maxLength` variable in `script.js`:

```javascript
const maxLength = 250; // Change this to your desired limit
```

Also update the `maxlength` attribute in the HTML and the initial counter display.

## 🆕 What's New

### Version 1.0.0 (Current)

- ✨ Initial release
- 🎨 Modern gradient background design
- 📊 Real-time character counter
- 🔴 Visual feedback on limit reached
- 📱 Responsive layout
- ♿ Accessibility improvements

## 🗺️ Roadmap

See the [Roadmap](https://roadmap.sh/projects/restricted-textarea) for project details


## 💻 Usage

### Basic Usage

Simply type in the textarea and watch the counter update in real-time. When you reach the character limit (250 characters), the border will turn red to indicate the limit has been reached.


## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and transitions
- **Vanilla JavaScript** - No dependencies, pure ES6+

---

Made with ❤️ by [Aneri Moradia]

