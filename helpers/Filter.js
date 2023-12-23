// Función para filtrar los datos de la base de datos
export const filter = (input) => {
    if (!input) return {};
    let query = {};
    Object.keys(input).forEach((key) => {
        // Recorrer todas las propiedades del objeto
        const value = input[key];
        if (typeof value === "number") {
            // Si el valor es un número, filtrar por igualdad
            query[key] = { $gte: value };
        } else if (Array.isArray(value)) {
            query[key] = { $in: value }; // Si el valor es un arreglo, filtrar por $in
        } else if (typeof value === "string") {
            if (value.match(/^[0-9a-fA-F]{24}$/)) {
                // Esto es para identificar si es un ID de mongo
                query[key] = { $eq: value };
            } else {
                query[key] = { $regex: `.*${value}.*`, $options: "i" }; // Si no es un ID, filtrar por $regex
            }
        }
    });

    return query; // Retornar el objeto query
};
