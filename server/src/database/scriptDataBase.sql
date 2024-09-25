create database quillen_berries;

use quillen_berries;

create table USUARIO(
id int primary key auto_increment not null,
usuario varchar(50) not null,
contrasena text not null,
rol varchar (10) not null
);

INSERT INTO USUARIO (usuario, contrasena,rol) VALUES
    ('user1', '1234','admin'),
    ('user2', '1234','empleado'),
    ('user3', '1234','empleado'),
    ('user4', '1234','empleado');

SELECT* FROM USUARIO;

CREATE TABLE PRODUCTO (
id_codigo_barra bigint primary key  not null,
nombre varchar(50) not null,
avatar LONGBLOB not null,
calidad VARCHAR(20) NOT NULL
);
ALTER TABLE PRODUCTO MODIFY COLUMN id_codigo_barra BIGINT;
ALTER TABLE PRODUCTO
MODIFY COLUMN avatar LONGBLOB NOT NULL;


describe PRODUCTO;

select * from producto;





CREATE TABLE ENTRADA(
    id int primary key auto_increment not null,
    id_codigo_barrafk bigint not null,
    estante int not null,
    fecha date not null,
    hora time not null,
    FOREIGN KEY (id_codigo_barrafk) REFERENCES PRODUCTO(id_codigo_barra)
);

INSERT INTO ENTRADA (id_codigo_barrafk, estante, fecha, hora) VALUES
    (1234567891234, 1, '2024-07-24', '08:00:00'),
    (2365298562134, 2, '2024-07-24', '08:15:00'),
    (4565456789767, 3, '2024-07-24', '08:30:00'),
    (1234567891234, 1, '2024-07-24', '08:45:00'),
    (2365298562134, 2, '2024-07-24', '09:00:00'),
    (4565456789767, 3, '2024-07-24', '09:15:00'),
    (1234567891234, 1, '2024-07-24', '09:30:00'),
    (2365298562134, 2, '2024-07-24', '09:45:00'),
    (4565456789767, 3, '2024-07-24', '10:00:00'),
    (1234567891234, 1, '2024-07-24', '10:15:00'),
    (2365298562134, 2, '2024-07-24', '10:30:00'),
    (4565456789767, 3, '2024-07-24', '10:45:00'),
    (1234567891234, 1, '2024-07-24', '11:00:00'),
    (2365298562134, 2, '2024-07-24', '11:15:00'),
    (4565456789767, 3, '2024-07-24', '11:30:00'),
    (1234567891234, 1, '2024-07-24', '11:45:00'),
    (2365298562134, 2, '2024-07-24', '12:00:00'),
    (4565456789767, 3, '2024-07-24', '12:15:00'),
    (1234567891234, 1, '2024-07-24', '12:30:00'),
    (2365298562134, 2, '2024-07-24', '12:45:00'),
    (4565456789767, 3, '2024-07-24', '13:00:00');

CREATE TABLE SALIDA(
id int primary key auto_increment not null,
id_codigo_barrafk bigint not null,
id_empleadofk int not null,
fecha date not null,
hora time not null,
FOREIGN KEY (id_codigo_barrafk) REFERENCES PRODUCTO(id_codigo_barra),
FOREIGN KEY(id_empleadofk) REFERENCES USUARIO(id)
);
INSERT INTO SALIDA (id_codigo_barrafk, id_empleadofk, fecha, hora) VALUES
    (1234567891234, 2, '2024-07-24', '08:30:00'),
    (2365298562134, 3, '2024-07-24', '09:00:00'),
    (4565456789767, 4, '2024-07-24', '09:30:00'),
    (1234567891234, 2, '2024-07-24', '10:00:00'),
    (2365298562134, 3, '2024-07-24', '10:30:00'),
    (4565456789767, 4, '2024-07-24', '11:00:00');

-- Prueba de join
SELECT 
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
    USUARIO U ON S.id_empleadofk = U.id;




    create database quillen_berries;

use quillen_berries;

create table USUARIO(
id int primary key auto_increment not null,
usuario varchar(50) not null,
contrasena text not null,
rol varchar (10) not null
);

INSERT INTO USUARIO (usuario, contrasena,rol) VALUES
    ('user1', '1234','admin'),
    ('user2', '1234','empleado'),
    ('user3', '1234','empleado'),
    ('user4', '1234','empleado');

SELECT* FROM USUARIO;

CREATE TABLE PRODUCTO (
id_codigo_barra bigint primary key  not null,
nombre varchar(50) not null,
avatar LONGBLOB not null,
calidad VARCHAR(20) NOT NULL
);
ALTER TABLE PRODUCTO MODIFY COLUMN id_codigo_barra BIGINT;
ALTER TABLE PRODUCTO
MODIFY COLUMN avatar LONGBLOB NOT NULL;


describe PRODUCTO;

select * from producto;





CREATE TABLE ENTRADA(
    id int primary key auto_increment not null,
    id_codigo_barrafk bigint not null,
    estante int not null,
    fecha date not null,
    hora time not null,
    FOREIGN KEY (id_codigo_barrafk) REFERENCES PRODUCTO(id_codigo_barra)
);

INSERT INTO ENTRADA (id_codigo_barrafk, estante, fecha, hora) VALUES
    (1234567891234, 1, '2024-07-24', '08:00:00'),
    (2365298562134, 2, '2024-07-24', '08:15:00'),
    (4565456789767, 3, '2024-07-24', '08:30:00'),
    (1234567891234, 1, '2024-07-24', '08:45:00'),
    (2365298562134, 2, '2024-07-24', '09:00:00'),
    (4565456789767, 3, '2024-07-24', '09:15:00'),
    (1234567891234, 1, '2024-07-24', '09:30:00'),
    (2365298562134, 2, '2024-07-24', '09:45:00'),
    (4565456789767, 3, '2024-07-24', '10:00:00'),
    (1234567891234, 1, '2024-07-24', '10:15:00'),
    (2365298562134, 2, '2024-07-24', '10:30:00'),
    (4565456789767, 3, '2024-07-24', '10:45:00'),
    (1234567891234, 1, '2024-07-24', '11:00:00'),
    (2365298562134, 2, '2024-07-24', '11:15:00'),
    (4565456789767, 3, '2024-07-24', '11:30:00'),
    (1234567891234, 1, '2024-07-24', '11:45:00'),
    (2365298562134, 2, '2024-07-24', '12:00:00'),
    (4565456789767, 3, '2024-07-24', '12:15:00'),
    (1234567891234, 1, '2024-07-24', '12:30:00'),
    (2365298562134, 2, '2024-07-24', '12:45:00'),
    (4565456789767, 3, '2024-07-24', '13:00:00');
-- jion entrada
SELECT 
    E.id AS entrada_id,
    P.id_codigo_barra,
    P.nombre AS producto_nombre,
    P.calidad,
    E.estante,
    E.fecha,
    E.hora
FROM 
    ENTRADA E
JOIN 
    PRODUCTO P ON E.id_codigo_barrafk = P.id_codigo_barra;
    
CREATE TABLE SALIDA(
id int primary key auto_increment not null,
id_codigo_barrafk bigint not null,
id_empleadofk int not null,
fecha date not null,
hora time not null,
FOREIGN KEY (id_codigo_barrafk) REFERENCES PRODUCTO(id_codigo_barra),
FOREIGN KEY(id_empleadofk) REFERENCES USUARIO(id)
);
INSERT INTO SALIDA (id_codigo_barrafk, id_empleadofk, fecha, hora) VALUES
    (1234567891234, 2, '2024-07-24', '08:30:00'),
    (2365298562134, 3, '2024-07-24', '09:00:00'),
    (4565456789767, 4, '2024-07-24', '09:30:00'),
    (1234567891234, 2, '2024-07-24', '10:00:00'),
    (2365298562134, 3, '2024-07-24', '10:30:00'),
    (4565456789767, 4, '2024-07-24', '11:00:00');

-- Prueba de join
SELECT 
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
    USUARIO U ON S.id_empleadofk = U.id;
    
select rol from usuario where usuario = 'user1' and contrasena= 1234;

select * from usuario;