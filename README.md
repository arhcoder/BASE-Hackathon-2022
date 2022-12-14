
# BASE-Hackathon-2022
馃捀 Sistema que analiza las facturas de compraventa de una empresa de importaciones y exportaciones, y crea una base de conocimiento con la que crea sugerencias de abastecimiento para las empresas clientes de Banco BASE, con el fin de ahorrarles dinero.

![](https://raw.githubusercontent.com/arhcoder/BASE-Hackathon-2022/master/Sketches/ScalonR.png)

### Aplicaci贸n accesible en [34.227.231.244:8080](http://34.227.231.244:8080);
Se prevee (por mera) cuesti贸n est茅tica cambiar al puerto 80; adem谩s de
que se planea la integraci贸n de llaves de autenticaci贸n para agregar una
capa extra de seguridad a las peticiones y la recuperaci贸n de datos.

------------

## Nuestros algoritmos


![](https://raw.githubusercontent.com/arhcoder/BASE-Hackathon-2022/master/Sketches/diagramaAlgorimoDecisionV2.png)

### Primer algoritmo
Esta es una representaci贸n visual de nuestros algoritmos, como primer paso deberemos procesar los datos deseados de las facturas obtenidas del api del SAT o podemos simular unas 500 facturas (Lo que fue lo que hicimos) y almacenarlas en una base de datos, para hacer un api con nodeJS que obtiene datos de estas facturas simuladas.

### Segundo algoritmo
La segunda parte de nuestra operaci贸n es sacar la mejor opci贸n de compra, para esto se necesitaron la clave del producto, el precio del producto y el proveedor, con esto podemos darles tratamiento a los datos para obtener los mejores proveedores en ese momento.

### Tercer Algoritmo
El tercer algoritmo obtiene los productos m谩s recurrentes de cada empresa seg煤n sus facturas, esto con el fin de brindar las recomendaciones correctas, ya que no todas las empresas se dedican a lo mismo o consumen lo mismo.

------------
## SatWS
![](https://raw.githubusercontent.com/arhcoder/BASE-Hackathon-2022/master/Sketches/satimage2.png)

Con esta API podemos obtener en poco tiempo todas las facturas emitidas por las empresas que desean usar nuestro proyecto, esto es de bastante utilidad ya que los usuarios evitaran subir a mano cada una de sus facturas para el funcionamiento de nuestro sistema, otra ventaja que nos ofrece este api es que ya nos da el archivo xml y facilita la extracci贸n de datos para el tratamiento de estos.

------------

## Tecnolog铆as usadas
### NodeJS (JavaScript)
EL uso de JavaScript fue y es importante en este proyecto ya que nos permite instalar m贸dulos importantes, como:
- Express
- mysql
- body-parser
- dotenv
- Jason web token
- Axios
- ejs


Estos m贸dulos son importantes ya que nos permite conectarnos a una base de datos, pedir y recibir peticiones, guardar contrase帽as de forma m谩s segura con los archivos `.env`, gestionar con mayor seguridad el manejo de sesiones en caso de inactividad y muchas cosas m谩s.

`ejs` nos permite incrustar c贸digo JavaScript en un lenguaje de plantillas que luego se utiliza para generar `HTML`.


### Python y algoritmos de b煤squeda
Python nos permite desarrollar nuestros algoritmos inteligentes, ya que es un lenguaje bastante usado para aplicar los m茅todos de ciencias de datos gracias a la gran cantidad de librer铆as disponibles.

- Pandas

Utilizamos la librer铆a `pandas` para el an谩lisis y manipulaci贸n de datos de las facturas, y estos datos mostrarlos como recomendaciones en el frontend

### XPath para scraping

Los archivos xml nos permitieron poder obtener im谩genes de la red para poder obtener im谩genes de internet y asignarlas al producto que estamos obteniendo de las recomendaciones del algoritmo




