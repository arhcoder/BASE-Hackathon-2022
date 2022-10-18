import requests
from datetime import datetime

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

    # Formato del CSV:
    archivo = open("../Backend/global-purchases.csv", "w")
    archivo.write("idCliente,claveProducto,precioUnitario,nombreProveedor")
    archivo.close()

    # Obtiene de todas las empresas clientes el dato que nos
    # permite acceder a sus facturas del SAT:
    # "SELECT id_Client FROM clients"
    urlAPIGetClients = "http://localhost:3000/getClients"
    clientsJSON = requests.get(urlAPIGetClients).json()

    clients = []
    for clientID in clientsJSON:
        clients.append(str(clientID["rfcUserCompany"]))

    # Obtiene todas las facturas de los últimos n días:
    days = 30
    archivo = open("../Backend/global-purchases.csv", "a")

	# Para cada cliente, obtiene sus facturas:
	# "SELECT idInvoice FROM invoices WHERE clienID = ?"
    urlAPIGetInvoices = "http://localhost:3000/getInvoices/"
    for client in clients:
        invoices = []
        invoiceProviders = []
        invoicesJSON = requests.get(urlAPIGetInvoices+client+"/30").json()
        for invoiceID in invoicesJSON:
            invoices.append(str(invoiceID["uuid"]))
            invoiceProviders.append(str(invoiceID["rfcProvider"]))

        # Para cada factura, obtiene la lista de todos los productos:
        # "SELECT * from productsInInvoice WHERE invoiceID = ?"
        urlAPIGetProducts = "http://localhost:3000/getPurchases/"
        for i, invoice in enumerate(invoices):
            products = requests.get(str(urlAPIGetProducts+invoice)).json()

            #! PEQUEÑA SIMULACIÓN QUE SE INVENTA PRODUCTOS ALEATORIOS, PUESTOS ÚNICAMENTE
            #! PARA SIMULAR DATOS DE PRODUCTOS DE UNA FACTURA:
            # productos = []
            # cantidadProductos = random.randint(5, 20)
            # clavesRandom = ["42321710", "11172002", "50324441", "50303603", "42192101", "40174912", "41116500", "42295120", "50375803"]

            # for _ in range(0, len(invoices)):

                # compradorRandom = "Comprador Random "+str(random.randint(1, 1000))
                # claveRandom = clavesRandom[random.randint(0, len(clavesRandom)-1)]
                # precioRandom = random.randint(1, 400)
                # productoRandom =
				# {
                #     // "compradorRandom": compradorRandom
                #     "claveProducto": claveRandom,
                #     "precioUnitario": precioRandom,
                #     "proveedorRandom": proveedorRandom
                # }
                # productos.append(productoRandom)

            # Para cada producto, obtiene toda su información:
            for product in products:
                productKey = str(product["productKey"])
                productUnitaryValue = str(product["unitaryValueProduct"])
                productProvider = str(invoiceProviders[i])
                # proveedorRandom = "Proveedor Random " + str(random.randint(1, 1000))

				# Escribe la información de cada producto en el CSV:
                archivo.write(f"\n\'{client}\',\'{productKey}\',{productUnitaryValue},\'{productProvider}\'")

    archivo.close()

# Punto de ejecución:
if __name__ == "__main__":
    print("\n"+datetime.now().strftime("%d/%m/%Y %H:%M:%S"))
    print("Analizando facturas...")
    getAllPurchases()
    print("Facturas analizadas :3\n")