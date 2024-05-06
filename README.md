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
