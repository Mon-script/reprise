import { Avatar, Badge, Button, Popover, Table, DatePicker  } from 'keep-react'
import { ArrowsDownUp, Crown, Cube, DotsThreeOutline, Pencil, Trash, FileXls } from 'phosphor-react';
import { FechayHora } from '../DatePicker';
import { ExcelExporter } from "../botones/exportExelBoton";
import react,{useState, useEffect, useContext} from'react'
import { UserContext } from '../../../userContext';
import { format } from 'date-fns';


export const TablaEntrada = ( ) => {

  const [dataArray, setData] = useState([]);
  const { user } = useContext(UserContext);

   // Función para convertir fecha y hora en objeto Date
   const createDateTime = (fecha, hora) => {
    const datePart = fecha.split('T')[0]; // Solo obtenemos la parte de la fecha
    const timePart = hora; // La hora permanece igual
    const dateTimeString = `${datePart}T${timePart}`; // Formato: 'YYYY-MM-DDTHH:mm:ss'
    const date = new Date(dateTimeString);
    console.log(`Fecha: ${datePart}, Hora: ${timePart}, Date Object: ${date}`); // Verifica el objeto Date
    return date;
  };

  // Función para ordenar los datos por fecha y hora utilizando el método de inserción
  const insertionSort = (data) => {
    const sortedArray = [];
    data.forEach(item => {
      const dateTime = createDateTime(item.fecha, item.hora);
      console.log(`Item: ${item.producto_nombre}, DateTime: ${dateTime}`); // Verifica el objeto Date

      // Insertar en el lugar correcto
      let j = sortedArray.length - 1;
      while (j >= 0 && createDateTime(sortedArray[j].fecha, sortedArray[j].hora) < dateTime) {
        j--;
      }
      sortedArray.splice(j + 1, 0, item);
    });
    return sortedArray;
  };

  useEffect(() => {
    fetch('http://localhost:3000/entrada', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => {
        console.log('Datos recibidos:', result); // Verifica los datos
        const sortedData = insertionSort(result);
        setData(sortedData);
        console.log('Datos ordenados:', sortedData); // Verifica los datos ordenados
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
   // Función para formatear la fecha como en TarjetaStock
   const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Función para formatear la hora como en TarjetaStock
  const formatTime = (time) => {
    return time.substring(0, 5); // Cortamos para obtener solo HH:mm
  };

  const deleteRow = (id)=>{
    fetch('http://localhost:3000/deleteEntrada', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    })
      .then(resp => {
        if (!resp.ok) {
          throw new Error(`HTTP error! status: ${resp.status}`);
        }
        if(resp.ok){
          message.success('operacion exitosa')
        }
        return resp.text();
      })
      .then(respText => {console.log(respText)
        
        
      })
      .catch(error => {console.error('Error:', error)
        message.error(error)
      });

  }



  return (
    <Table showCheckbox={true}>
      <Table.Caption>
        <div className="my-5 flex items-center justify-between px-6">
          <div className="flex items-center gap-5">
            <p className="text-body-1 font-semibold text-metal-600">Entrada-Stock</p>
          </div>
          <div className="flex items-center gap-5">
            {/* Aquí va el botón */}
            <ExcelExporter data={dataArray} fileName="table_data" />
            {/* Aquí termina el espacio del botón */}
            <FechayHora />
          </div>
        </div>
      </Table.Caption>
      <Table.Body className="divide-gray-25 divide-y">
        {dataArray.map((item, index) => (
          <Table.Row className="bg-white" key={index}>
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar shape="circle" img={item.avatar} size="md" />
                    <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{item.producto_nombre}</p>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">{item.id_codigo_barra}</p>
                      <span className="text-body-6 font-normal text-metal-500">{item.calidad}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">{formatDate(item.fecha)}</p>
              <p className="text-body-6 font-normal text-metal-500">{formatTime(item.hora)} hs</p>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Estanteria: {item.estante}</p>
            </Table.Cell>
            <Table.Cell>
              <div className="inline-block">
                <Badge colorType="light" color="success" icon={<Crown size={18} weight="light" />} iconPosition="left">
                  Delivered
                </Badge>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-body-5 font-medium text-metal-500">Marca</p>
              <p className="text-body-6 font-normal text-metal-500">{item.marca}</p>
            </Table.Cell>
            <Table.Cell>
              <Popover showDismissIcon={false} showArrow={false} className="w-52 border border-metal-100 p-2">
                <Popover.Container className="!mt-0 !block">
                  <ul>
                    <li className="rounded px-2 py-1 hover:bg-metal-100">
                      <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                        <span>Delete</span>
                        <span><Trash /></span>
                      </button>
                    </li>
                  </ul>
                </Popover.Container>
                <Popover.Action>
                  {user && user.role === 'admin' ? (
                    <Button type="outlineGray" size="xs" circle={true}
                    onClick={()=>{deleteRow(item.id)}}>
                      <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                    </Button>
                  ) : (
                    ''
                  )}
                </Popover.Action>
              </Popover>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};