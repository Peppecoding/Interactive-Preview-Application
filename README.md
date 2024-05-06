# Interactive Preview Application

## Description

This repository hosts an interactive preview application designed to showcase various web projects and media content dynamically. The main feature of this application is an embedded iframe that can display different websites based on user interaction with button controls.

## Features

- **Dynamic Iframe Content:** Users can switch the content displayed in the iframe by clicking on different buttons, each representing a different website or project.
- **Responsive Design:** The application layout adjusts based on the screen size, ensuring a good user experience on both desktop and mobile devices.
- **Animated UI Elements:** Utilizes CSS animations to enhance the visual appearance and interactivity of the webpage.

## Technologies Used

- **HTML5** for structuring the web page.
- **CSS3** for styling, including gradients, animations, and media queries to ensure the site is fully responsive.
- **JavaScript** for dynamic behaviors such as changing iframe sources.

## Setup

To run this project locally:

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.

## Code Snippets

Here's a brief overview of the core functionality:

### HTML

The core of the application lies in its ability to change the iframe's source dynamically. This is implemented using simple button elements that trigger a JavaScript function:

```html
<button class="bear-button" onclick="changePreview('https://example.com')">Load Example.com</button>

## JavaScript

The `changePreview` function changes the source of the iframe, allowing the user to view different content:

```javascript
function changePreview(url) {
    document.getElementById('previewFrame').src = url;
}

## CSS

Responsive design is critical for modern web applications. Media queries are used to adjust the layout according to different device widths:

```css
@media (max-width: 600px) {
    .container {
        padding: 10px;
    }
    #previewFrame {
        width: 100%;
        height: 300px;
    }
}

## Contact

- **LinkedIn:** [Giuseppe Mendoza Noto](https://www.linkedin.com/in/giuseppe-mendoza-noto)

Feel free to reach out to me on LinkedIn for any questions about the project or potential collaborations.

This excerpt from your README provides instructions on responsive design and offers a clear way for people to contact you for further inquiries or potential collaborations. Make sure you use the correct link to your LinkedIn profile to facilitate connections.
