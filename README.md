  
# BASE-Hackathon-2022
Sistema que analiza las facturas de compraventa de una empresa de importaciones y exportaciones, y crea una base de conocimiento con la que crea sugerencias de abastecimiento para las empresas clientes de Banco BASE, con el fin de ahorrarles dinero.

![](https://raw.githubusercontent.com/arhcoder/BASE-Hackathon-2022/master/Sketches/ScalonR.png)

------------

## Nuestros algoritmos


![](https://raw.githubusercontent.com/arhcoder/BASE-Hackathon-2022/master/Sketches/diagramaAlgorimoDecisionV2.png)

### Primer algoritmo
Esta es una representación visual de nuestros algoritmos, como primer paso deberemos procesar los datos deseados de las facturas obtenidas del api del SAT o podemos simular unas 500 facturas (Lo que fue lo que hicimos) y almacenarlas en una base de datos, para hacer un api con nodeJS que obtiene datos de estas facturas simuladas.

### Segundo algoritmo
La segunda parte de nuestra operación es sacar la mejor opción de compra, para esto se necesitaron la clave del producto, el precio del producto y el proveedor, con esto podemos darles tratamiento a los datos para obtener los mejores proveedores en ese momento.

### Tercer Algoritmo
El tercer algoritmo obtiene los productos más recurrentes de cada empresa según sus facturas, esto con el fin de brindar las recomendaciones correctas, ya que no todas las empresas se dedican a lo mismo o consumen lo mismo.

------------
## SatWS
![](https://raw.githubusercontent.com/arhcoder/BASE-Hackathon-2022/master/Sketches/satimage2.png)

Con esta API podemos obtener en poco tiempo todas las facturas emitidas por las empresas que desean usar nuestro proyecto, esto es de bastante utilidad ya que los usuarios evitaran subir a mano cada una de sus facturas para el funcionamiento de nuestro sistema, otra ventaja que nos ofrece este api es que ya nos da el archivo xml y facilita la extracción de datos para el tratamiento de estos.

------------

## Tecnologías usadas
### NodeJS (JavaScript)
EL uso de JavaScript fue y es importante en este proyecto ya que nos permite instalar módulos importantes, como:
- Express
- mysql
- body-parser
- dotenv
- Jason web token
- Axios
- ejs


Estos módulos son importantes ya que nos permite conectarnos a una base de datos, pedir y recibir peticiones, guardar contraseñas de forma más segura con los archivos `.env`, gestionar con mayor seguridad el manejo de sesiones en caso de inactividad y muchas cosas más.

`ejs` nos permite incrustar código JavaScript en un lenguaje de plantillas que luego se utiliza para generar `HTML`.


### Python y algoritmos de búsqueda
Python nos permite desarrollar nuestros algoritmos inteligentes, ya que es un lenguaje bastante usado para aplicar los métodos de ciencias de datos gracias a la gran cantidad de librerías disponibles.

- Pandas

Utilizamos la librería `pandas` para el análisis y manipulación de datos de las facturas, y estos datos mostrarlos como recomendaciones en el frontend

### XPath para scraping

Los archivos xml nos permitieron poder obtener imágenes de la red para poder obtener imágenes de internet y asignarlas al producto que estamos obteniendo de las recomendaciones del algoritmo




