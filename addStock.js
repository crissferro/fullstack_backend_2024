const db = require('./src/db/dbconnection'); // Asegúrate de que la ruta sea correcta

async function addStock(productId, quantity) {
    try {
        // Primero verifica si el producto ya tiene una entrada en la tabla de stock
        const [rows] = await db.execute(`
            SELECT cantidad FROM stock WHERE id_producto = ?
        `, [productId]);

        if (rows.length > 0) {
            // Si ya existe, actualiza la cantidad de stock
            await db.execute(`
                UPDATE stock SET cantidad = cantidad + ? WHERE id_producto = ?
            `, [quantity, productId]);
            console.log(`Stock del producto con ID ${productId} ha sido actualizado. Nueva cantidad: ${rows[0].cantidad + quantity}`);
        } else {
            // Si no existe, inserta una nueva entrada en la tabla de stock
            await db.execute(`
                INSERT INTO stock (id_producto, cantidad) VALUES (?, ?)
            `, [productId, quantity]);
            console.log(`Stock del producto con ID ${productId} ha sido agregado. Cantidad: ${quantity}`);
        }
    } catch (error) {
        console.error('Error al agregar o actualizar el stock:', error);
    }
}

// Prueba la función con un ID de producto específico y cantidad
addStock(1, 50);