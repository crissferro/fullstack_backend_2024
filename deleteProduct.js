const db = require('./src/db/dbconnection'); // Asegúrate de que la ruta sea correcta

async function deleteProduct(productId) {
    try {
        await db.promise().execute(`
            DELETE FROM stock
            WHERE id_producto = ?
        `, [productId]);

        await db.promise().execute(`
            DELETE FROM productos
            WHERE id = ?
        `, [productId]);

        console.log(`Producto con ID ${productId} y su stock asociado han sido eliminados.`);
    } catch (error) {
        console.error('Error al eliminar el producto y su stock:', error);
    }
}

// Prueba la función con un ID de producto específico
deleteProduct(1);