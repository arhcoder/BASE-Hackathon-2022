![](https://raw.githubusercontent.com/arhcoder/BASE-Hackathon-2022/master/Sketches/ScalonR.png)




# BASE-Hackathon-2022
💸 Sistema que analiza las facturas de compra-venta de una empresa de importaciones y exportaciones, y crea una base de conocimiento con la que crea sugerencias de abastecimiento para las empresas clientes de Banco BASE, con el fin de ahorrarles dinero.

##Nuestros algoritmos


![](https://raw.githubusercontent.com/arhcoder/BASE-Hackathon-2022/master/Sketches/diagramaAlgorimoDecisionV2.png)

###Primer algoritmo
Esta es una representacion visual de nuetros algormitmos, como primer paso deberemos procesar los datos deseados de las facturas obtenidas de la api del SAT o podemos simular unas 500 facturas(Lo que fue lo que hicimos) y almacenarlas en una base de datos, para hacer una api con nodeJS que obtiene datos de estas facturas simuladas.

###Segundo algoritmo
La segunda parte de nuestra operacion es sacar la mejor opcion de compra, para esto se necesitaron la clave del producto, el precio del producto y el proveedor, con esto podemos darle tratamiento a los datos para obtener los mejores proveedores en ese momento.

###Tercer Algoritmo
El tercer algoritmo obtiene los productos mas recurrentes de cada empresa segun sus facturas, esto con el fin de brindar las recomendaciones correctas, ya que no todas las empresas se dedican a lo mismo o consumen lo mismo.

------------
## Tecnologias usadas
### NodeJS (javascript)
EL uso de javascript fue y es importante en este proyecto ya que nos permite instalar modulos importantes, como:
- Express
- mysql
- body-parser
- dotenv
- Jason web token
- Axios
- ejs


Estos modulos son importantes ya que nos permite conectarnos a una base de datos, pedir y recibir peticiones,  guardar contrasenias de forma mas segura con los archivos .env, gestionar con mayor seguridad el manejo de sesioes en caso de inactividad y muchas cosas mas.

ejs nos permite incrustar código JavaScript en un lenguaje de plantillas que luego se utiliza para generar HTML.


### Python y algoritmos de busqueda
Python nos permitio desarrollar nuestros algoritmos inteligentes, ya que es un lenguaje bastante usado para aplicar los métodos de ciencias de datos gracias a la gran cantidad de librerías disponibles

- Pandas

Utilizamos la libreria `pandas` para el analisis y manipulacion de datos de las facturas, y estos datos mostrarlos como recomendaciones en el frontend

### XPath para scraping

Los archivos xml nos permitieron poder obtener imagenes de la red para poder obtener imagenes de internet y asignarlas al producto que estamos obteniendo de las recomendaciones del algoritmo




