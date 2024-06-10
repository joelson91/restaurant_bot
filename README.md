# Restaurant Menu Telegram WebApp

This is a simple Telegram WebApp that displays a restaurant menu with options to add or remove items, and allows users to send their orders through the Telegram bot.

## Project Structure

The project consists of the following files:

- `index.html`: The main HTML file that contains the structure of the menu.
- `styles.css`: The CSS file that styles the menu.
- `script.js`: The JavaScript file that contains the logic for updating item quantities and handling orders.

## Features

- Display a menu with different sections (Appetizers, Main Courses, Desserts).
- Allow users to increase or decrease the quantity of each item.
- Show the Telegram WebApp MainButton when at least one item is added.
- Send the order summary to the Telegram bot when the MainButton is clicked.

## How to Use

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/restaurant-menu-telegram-webapp.git
    ```

2. **Open `index.html` in a browser:**
    - Ensure you have a Telegram bot set up to handle the data sent from the WebApp.
    - Open the HTML file in a browser to see the menu and interact with it.

## File Descriptions

### `index.html`

This file contains the HTML structure of the restaurant menu. It includes sections for Appetizers, Main Courses, and Desserts, each with items that can be incremented or decremented in quantity.

### `styles.css`

This file contains the CSS styles for the menu. It defines the appearance of the menu sections, items, and quantity control buttons.

### `script.js`

This file contains the JavaScript logic for the WebApp. It includes functions to:

- Update item quantities.
- Show or hide the Telegram WebApp MainButton based on the total quantity of items.
- Send the order summary to the Telegram bot when the MainButton is clicked.

## Example Order Flow

1. User opens the menu and sees the available items.
2. User increases the quantity of items they want to order.
3. The Telegram WebApp MainButton appears when at least one item is added.
4. User clicks the MainButton to send the order.
5. The order summary is sent to the Telegram bot, and the user sees an alert with their order details.

## Contributions

Feel free to contribute to this project by creating pull requests, submitting issues, or suggesting new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
