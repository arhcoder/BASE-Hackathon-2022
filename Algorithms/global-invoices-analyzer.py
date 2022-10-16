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

import requests
from datetime import date
import random

def getAllPurchases():

    # Facturas desde x días:
    invoicesSinceDays = 30

    # Formato del CSV:
    archivo = open("global-purchases.csv", "w")
    archivo.write("idCliente,claveProducto,precioUnitario,nombreProveedor")
    archivo.close()

    # Obtiene de todas las empresas clientes el dato que nos
    # permite acceder a sus facturas del SAT:
    # "SELECT id_client FROM clients"
    # urlAPIGetClients = ""
    # clients = requests.get(urlAPIGetClients).content
    # print(clients)
    clients = ["123456", "248124", "280178", "448724"]

    # Obtiene todas las facturas de los últimos n días:
    # days = 30
    # today = date.today().strftime("%Y-%b-%d")
    # "SELECT idInvoice FROM invoices WHERE clienID = ?"
    # urlAPIGetInvoices = ""
    archivo = open("global-purchases.csv", "a")
    for client in clients:
        # invoices = requests.get(urlAPIGetInvoices+client).content
        invoices = ["654321", "421842", "871082", "428724"]

        # Obtiene la lista de productos de cada factura:
        # "SELECT * from productsInInvoice WHERE invoiceID = ?"
        # urlAPIGetProducts = ""
        for invoice in invoices:
            # products = requests.get(urlAPIGetProducts+invoice).content

            #! PEQUEÑA SIMULACIÓN QUE SE INVENTA PRODUCTOS ALEATORIOS, PUESTOS ÚNICAMENTE
            #! PARA SIMULAR DATOS DE PRODUCTOS DE UNA FACTURA:
            # productos = []
            cantidadProductos = random.randint(5, 20)
            clavesRandom = ["123456", "654321", "468396", "346290", "026748", "492563", "082564", "017945", "017894", "624538"]

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
    
    archivo.close()

if __name__ == "__main__":

    print("Analizando facturas...")
    getAllPurchases()
    print("Facturas analizadas :3")