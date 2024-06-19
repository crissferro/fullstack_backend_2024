const db = require('./src/db/dbconnection');

async function addProduct(nombre, descripcion, precio, id_tipoProducto, marca, imagen) {
    try {
        const sql = `
            INSERT INTO productos (nombre, descripcion, precio, id_tipoProducto, marca, imagen)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const [result] = await db.execute(sql, [nombre, descripcion, precio, id_tipoProducto, marca, imagen]);
        console.log('Producto agregado:', result);
    } catch (error) {
        console.error('Error al agregar producto:', error);
    }
}

addProduct('Café Perú', 'Auténtico café de Perú. ', 11000, 2, 'Cabrales', 'imagen.jpg');