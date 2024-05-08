# Interactive Preview

This repository contains a web-based application designed to provide an interactive preview of various URLs within an iframe. Users can select predefined URLs from buttons or enter their own URL to display content dynamically.

## Features

- **Dynamic Content Loading**: Change the content displayed in the iframe dynamically by clicking buttons or entering a URL.
- **Responsive Design**: The interface adapts to different screen sizes, ensuring functionality across both desktop and mobile devices.
- **Animated Interface**: Uses CSS animations to enhance user interaction.

## File Structure

- `index.html` - The main HTML document.
- `styles.css` - Contains all the style definitions used in the project.
- `script.js` - JavaScript file that manages the iframe source changes based on user interaction.

## How It Works

### HTML

The main structure is set up in `index.html`, which includes the iframe, buttons for predefined URLs, and an input field for custom URLs.

### CSS

`styles.css` defines the visual aspects of the project, including:
- Styles for containers and buttons.
- Responsive design features for optimal viewing on different devices.
- Animation effects for interactive elements.

### JavaScript

`script.js` includes functions to update the iframe's source based on predefined buttons or a user-input URL:
- `changePreview(url)`: Updates the iframe source to the specified URL.
- `changePreviewFromInput()`: Fetches the URL from the input field and updates the iframe source accordingly.

## Usage

1. Clone this repository to your local machine.
2. Open `index.html` in a modern web browser to view and interact with the project.

## Contributing

Feel free to contribute to this project by submitting pull requests or suggesting features.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Example URLs to Embed

Here are some example URLs that typically allow iframe embedding:
- Alamy - Barquisimeto Map: `https://www.alamy.com/stock-photo/barquisimeto-map.html?sortBy=relevant`
- Open Library: `https://openlibrary.org`
- Wikipedia - Barquisimeto: `https://en.wikipedia.org/wiki/Barquisimeto`

Please note that some sites may have restrictions that prevent them from being displayed properly in an iframe. Always check the site's policies on embedding content if unsure.

## Contact

For any questions or feedback, feel free to contact [Peppecoding](https://github.com/Peppecoding).

## Acknowledgments

- Media Collage Generator: [View Project](https://peppecoding.github.io/Media-Collage-Generator/)
- Rock Paper Scissors Johnson Edition: [View Project](https://peppecoding.github.io/RockPaperScissorsJohnsonEdition/)
- Wikipedia: [View Page](https://en.wikipedia.org/wiki/Main_Page)
