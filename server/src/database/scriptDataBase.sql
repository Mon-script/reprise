create database Reprise;
use Reprise;

create table USUARIO(
id int primary key auto_increment not null,
usuario varchar (20) not null,
nombre varchar(50) not null,
apellido varchar (50) not null,
contrasena text not null,
rol varchar (10) not null,
activo boolean not null,
fecha_inicio date not null
);

DROP TABLE USUARIO;
ALTER TABLE USUARIO
CHANGE COLUMN usuario nombre VARCHAR(50) NOT NULL,
ADD COLUMN apellido VARCHAR(50) NOT NULL;

ALTER TABLE USUARIO
DROP COLUMN activo;
ALTER TABLE USUARIO
ADD COLUMN fecha_inicio date NOT NULL;
update USUARIO set activo = 1 where id=13;

describe USUARIO;

ALTER TABLE USUARIO ADD COLUMN usuario varchar(20) not null;

ALTER TABLE USUARIO ADD COLUMN activo BOOLEAN DEFAULT TRUE;
select * from USUARIO;


INSERT INTO USUARIO (nombre, contrasena, rol, apellido, activo, usuario, fecha_inicio) VALUES
    ('octavio', '1234','admin', 'balberdi',1 , 'octis', '2024-10-17'),
    ('user2', '1234','empleado'),
    ('user3', '1234','empleado'),
    ('user4', '1234','empleado');

DELETE FROM USUARIO where id = 12;

INSERT INTO USUARIO (nombre, contrasena, rol, apellido, activo, usuario, fecha_inicio) VALUES
    ('octavio', '$2b$10$Zkpz1ijaeSeBDKlmNFS4Pe8wBEd7nff..RKitSsMG8USp7oJ72496','admin', 'balberdi',1 , 'octis', '2024-10-17');
CREATE TABLE PRODUCTO (
id_codigo_barra bigint primary key  not null,
nombre varchar(50) not null,
avatar LONGBLOB not null,
-- marca varchar (50) not null,
calidad VARCHAR(20) NOT NULL,
 activo boolean not null
);
describe PRODUCTO;
ALTER TABLE PRODUCTO
CHANGE COLUMN calidad marca VARCHAR(50) NOT NULL;
alter table PRODUCTO
drop activo;
ALTER TABLE PRODUCTO ADD COLUMN activo boolean not null;
ALTER TABLE PRODUCTO ADD COLUMN activo BOOLEAN DEFAULT TRUE;
select * from PRODUCTO;
UPDATE PRODUCTO
SET activo = 1
WHERE condicion;
DELETE FROM PRODUCTO;

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
    
    select * from entrada;

DELETE FROM ENTRADA;

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
    (1234567891234, 13, '2024-07-24', '08:30:00'),
    (2365298562134, 14, '2024-07-24', '09:00:00'),
    (4565456789767, 13, '2024-07-24', '09:30:00'),
    (1234567891234, 14, '2024-07-24', '10:00:00'),
    (2365298562134, 13, '2024-07-24', '10:30:00'),
    (4565456789767, 13, '2024-07-24', '11:00:00');

DELETE FROM SALIDA;