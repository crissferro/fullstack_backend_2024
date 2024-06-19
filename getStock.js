const db = require('./src/db/dbconnection'); // Asegúrate de que la ruta sea correcta

async function getStock(productId) {
    try {
        const [rows] = await db.execute(`
            SELECT p.nombre, p.descripcion, p.precio, p.imagen, t.nombre AS tipo_producto, s.cantidad 
            FROM productos p
            JOIN tipoProducto t ON p.id_tipoProd = t.id_tipoProd
            JOIN stock s ON p.id_producto = s.id_producto
            WHERE p.id_producto = ?
        `, [productId]);

        if (rows.length > 0) {
            console.log('Información del producto y su stock:', rows[0]);
        } else {
            console.log('No se encontró stock para el producto con ID', productId);
        }
    } catch (error) {
        console.error('Error al obtener el stock:', error);
    }
}

// Prueba la función con un ID de producto específico
getStock(1);
