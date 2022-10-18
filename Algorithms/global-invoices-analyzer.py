import requests
import random


def getAllPurchases():

    '''
	# ALGORITMO 01 #
	# GLOBAL INVOICES ANALIZER #

	ESTE ALGORITMO ES LA BASE DEL FUNCIONAMIENTO DEL SISTEMA:

	* Se ejecuta cada "x" tiempo;
			- x = 1 día;

	* Recupera las facturas de compra del plazo "y"; de todas
	las empresas clientes de BASE, directo de la fuente "z";
			- y = El último mes;
			- z = Base de datos de facturas (SIMULADA);
			NOTA:
			- z será el servicio de obtención de facturas del SAT:
			https://sat.ws/

	* PARA PODER CLASIFICAR VARIOS PRODUCTOS, QUE SEGÚN SU NOMBRE
	GENÉRICO SE PUEDAN CATEGORIZAR A UN MISMO TIPO, SE UTILIZARÁ
	EL DATO DE UNA FACTURA QUE DESIGNA EL SAT ().

	* Teniendo una lista con los productos comprados, obtiene su
	precio unitario.

	* Guarda en un CSV todos los productos que han comprado los
	clientes de BASE, mediante los siguientes datos:

		- claveProducto;
		- precioUnitario;
		- nombreProveedor;
    '''

    # Facturas desde x días:
    invoicesSinceDays = 30

    # Formato del CSV:
    archivo = open("global-purchases.csv", "w")
    archivo.write("idCliente,claveProducto,precioUnitario,nombreProveedor")
    archivo.close()

    # Obtiene de todas las empresas clientes el dato que nos
    # permite acceder a sus facturas del SAT:
    # "SELECT id_Client FROM clients"
    urlAPIGetClients = "http://localhost:3000/getClients"
    clients = requests.get(urlAPIGetClients).content
    print(clients)
    # clients = ["123456", "248124", "280178", "448724"]

    # Obtiene todas las facturas de los últimos n días:
    days = 30
    # today = date.today().strftime("%Y-%b-%d")
    # "SELECT idInvoice FROM invoices WHERE clienID = ?"
    archivo = open("global-purchases.csv", "a")
    urlAPIGetInvoices = "http://localhost:3000/getInvoices/"
    for client in clients:
        invoices = requests.get(str(urlAPIGetInvoices+client+"/"+days)).content
        # invoices = ["654321", "421842", "871082", "428724"]

        # Obtiene la lista de productos de cada factura:
        # "SELECT * from productsInInvoice WHERE invoiceID = ?"
        urlAPIGetProducts = "http://localhost:3000/getPurchases/"
        for invoice in invoices:
            products = requests.get(str(urlAPIGetProducts+invoice)).content
            print(products)

            #! PEQUEÑA SIMULACIÓN QUE SE INVENTA PRODUCTOS ALEATORIOS, PUESTOS ÚNICAMENTE
            #! PARA SIMULAR DATOS DE PRODUCTOS DE UNA FACTURA:
            # productos = []
            # cantidadProductos = random.randint(5, 20)
            # clavesRandom = ["42321710", "11172002", "50324441", "50303603", "42192101", "40174912", "41116500", "42295120", "50375803", "50446616"]

            '''
            for _ in range(0, cantidadProductos):

                # compradorRandom = "Comprador Random "+str(random.randint(1, 1000))
                claveRandom = clavesRandom[random.randint(0, len(clavesRandom)-1)]
                precioRandom = random.randint(1, 400)
                proveedorRandom = "Proveedor Random "+str(random.randint(1, 1000))

                # productoRandom =
				# {
                #     // "compradorRandom": compradorRandom
                #     "claveProducto": claveRandom,
                #     "precioUnitario": precioRandom,
                #     "proveedorRandom": proveedorRandom
                # }
                # productos.append(productoRandom)
                
                # Escribe la información de cada producto en el CSV:
                archivo.write(f"\n\'{client}\',\'{claveRandom}\',{precioRandom},\'{proveedorRandom}\'")
				'''

        # archivo.close()


if __name__ == "__main__":

    print("Analizando facturas...")
    getAllPurchases()
    print("Facturas analizadas :3")