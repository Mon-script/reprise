const connection = require("../models/db");

module.exports.getSalida = (req, res) => {
  //const consult = 'SELECT * FROM SALIDA';
  const consult = `SELECT 
    S.id AS salida_id,
    P.id_codigo_barra,
    P.nombre AS producto_nombre,
    P.calidad,
    U.id AS empleado_id,
    U.usuario AS empleado_nombre,
    S.fecha,
    S.hora
FROM 
    SALIDA S
JOIN 
    PRODUCTO P ON S.id_codigo_barrafk = P.id_codigo_barra
JOIN 
    USUARIO U ON S.id_empleadofk = U.id`

  try {
    connection.query(consult, (err, results) => {
      console.log(results);
      res.json(results);
    });
  } catch (e) {
    console.log(e);
  }
};
