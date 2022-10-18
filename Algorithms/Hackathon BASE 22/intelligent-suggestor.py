import numpy as np
import pandas as pd

def intelligentSuggestor(clientID):

    '''
    # ALGORITMO 03 #
    # INTELLIGENT SUGGESTOR #

    * Se ejecuta cada que "x";
        - x = El usuario inicia sesión en el dashboard;
        NOTA:
        Una opción para el futuro es que:
        - x = Cada día para actualizar las sugerencias y enviar notificaciones.

    * Encuentra los "n" productos que ha comprado el usuario "clientID", desde
    el archivo "global-purchases.csv".

    * Para cada uno de estos productos, busca la mejor opción de proveedor desde
    el archivo "best-providers.csv" y la archiva como sugerencia.

    * RETORNA una lista con las mejores sugerencias para el usuario.
    '''

    # Encuentra los productos que compra la empresa:
    purchasesFile = pd.read_csv("global-purchases.csv", header=0, usecols=[0,1,2,3])
    clientPurchases = purchasesFile.loc[purchasesFile['idCliente'].str.contains(clientID, case=False)]
    productsDataFrame = clientPurchases["claveProducto"]
    products = list(set(clientPurchases["claveProducto"].to_list()))
    # print(purchasesFile)
    # print(clientPurchases)
    # print(productsDataFrame)
    # print(products)

    # Obtiene el catálogo de productos del SAT, para poder conocer los
    # nombres genéricos según la clave de producto:
    SATCatalog = pd.read_csv("CatalogoProductoServiciosSAT.csv", header=0)

    # Encuentra los mejores proveedores para cada producto
    # que la empresa cliente compre:
    suggestions = []
    bestProvidersFile = pd.read_csv("best-providers.csv", header=0, usecols=[0,1,2])

    for product in products:

        bestOption = bestProvidersFile.loc[bestProvidersFile["claveProducto"].str.contains(str(product), case=False)]
        
        buscado = str(bestOption["claveProducto"].values[0]).rstrip("'").lstrip("'")
        print(buscado)

        #problema a resolver
        busqueda = np.in1d(SATCatalog["claveProducto"], buscado)
        output = SATCatalog.loc[busqueda, "nombreProducto"]
        print(output)

        bestOption = dict({
            "claveProducto": str(bestOption["claveProducto"].values[0]),
            "nombreProducto": str(output["nombreProducto"].values[0]),
            "precioUnitario": int(bestOption["precioUnitario"].values[0]),
            "nombreProveedor": str(bestOption["nombreProveedor"].values[0])
        })
        suggestions.append(bestOption)
        # print(f"\n{bestOption}")
    
    # print(suggestions)
    return suggestions


if __name__ == "__main__":

    clientID = "448724"
    bests = intelligentSuggestor(clientID)
    print(f"\n\n| MEJORES SUGERENCIAS DE COMPRA PARA EL CLIENTE \"{clientID}\" |\n\n")

    for best in bests:
        print("* Nombre clave del producto: " + str(best["claveProducto"]))
        print("* Precio unitario: " + str(best["precioUnitario"])+"$ MXN")
        print("* Nombre del proveedor: " + str(best["nombreProveedor"]))
        print("* Nombre del producto: " + str(best["nombreProducto"]))