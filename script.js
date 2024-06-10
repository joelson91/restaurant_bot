/**
 * Sets the class name for the HTML document based on the Telegram WebApp color scheme.
 */
function setThemeClass() {
    document.documentElement.className = Telegram.WebApp.colorScheme;
}

// Listen for theme changes and apply them
Telegram.WebApp.onEvent('themeChanged', setThemeClass);
setThemeClass();

/**
 * Main application object with initialization and order handling methods.
 */
const DemoApp = {
    /**
     * Initializes the application by setting up the Telegram WebApp and MainButton.
     */
    init() {
        // Make the body visible
        document.body.style.visibility = 'visible';

        // Indicate that the WebApp is ready
        Telegram.WebApp.ready();

        // Configure the MainButton
        Telegram.WebApp.MainButton.setParams({
            text: 'Enviar Pedido',
            is_visible: false
        }).onClick(DemoApp.sendOrder);
    },

    /**
     * Closes the Telegram WebApp.
     */
    close() {
        Telegram.WebApp.close();
    },

    /**
     * Formats an order item string if the quantity is greater than 0.
     * @param {string} itemName - The name of the item.
     * @param {number} quantity - The quantity of the item.
     * @returns {string|null} - The formatted order string or null.
     */
    orderItem(itemName, quantity) {
        if (quantity > 0) {
            return `Pedido: ${itemName} x${quantity}`;
        }
        return null;
    },

    /**
     * Updates the visibility of the MainButton based on the total quantity of items.
     */
    updateMainButtonVisibility() {
        const quantities = document.querySelectorAll('.quantity-controls span');
        let totalQuantity = 0;
        
        // Sum the quantities of all items
        quantities.forEach(span => {
            totalQuantity += parseInt(span.textContent, 10);
        });

        // Show the MainButton if there are any items, otherwise hide it
        if (totalQuantity > 0) {
            Telegram.WebApp.MainButton.show();
        } else {
            Telegram.WebApp.MainButton.hide();
        }
    },

    /**
     * Sends the order to the Telegram bot.
     */
    sendOrder() {
        const items = [
            { id: 'salada_caesar', name: 'Salada Caesar' },
            { id: 'sopa_legumes', name: 'Sopa de Legumes' },
            { id: 'frango_grelhado', name: 'Frango Grelhado' },
            { id: 'spaghetti_carbonara', name: 'Spaghetti Carbonara' },
            { id: 'tiramisu', name: 'Tiramisu' },
            { id: 'pudim_leite', name: 'Pudim de Leite' },
        ];

        // Create an array of order strings for items with quantities greater than 0
        const orders = items.map(item => {
            const quantity = parseInt(document.getElementById(`${item.id}_quantity`).textContent, 10);
            return DemoApp.orderItem(item.name, quantity);
        }).filter(order => order !== null);

        // If there are any orders, send them to the bot and display an alert
        if (orders.length > 0) {
            const orderSummary = orders.join('\n');
            Telegram.WebApp.sendData(orderSummary);
            alert(`Seu pedido:\n${orderSummary}`);
        } else {
            alert('Por favor, adicione pelo menos um item ao seu pedido.');
        }
    }
};

/**
 * Updates the quantity of a specific menu item and updates the MainButton visibility.
 * @param {string} itemId - The ID of the item to update.
 * @param {number} delta - The change in quantity (positive or negative).
 */
function updateQuantity(itemId, delta) {
    const quantityElement = document.getElementById(`${itemId}_quantity`);
    let quantity = parseInt(quantityElement.textContent, 10) + delta;

    // Ensure the quantity does not go below 0
    if (quantity < 0) {
        quantity = 0;
    }

    // Update the quantity display
    quantityElement.textContent = quantity;

    // Update the visibility of the MainButton
    DemoApp.updateMainButtonVisibility();
}

// Initialize the application
DemoApp.init();
