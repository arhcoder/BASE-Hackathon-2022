import numpy as np
import pandas as pd

def searchBestOptionOf(product):

    catalogoPath = ("../Database/CatalogoProductoServiciosSAT.csv")
    catalogoCSV = pd.read_csv(catalogoPath, header=0)

    providersPath = ("best-providers.csv")
    providersCSV = pd.read_csv(providersPath, header=0)

    # producto = input("Producto a buscar: ")
    busqueda = np.in1d(catalogoCSV["nombreProducto"], [str(product)])
    output = catalogoCSV.loc[busqueda, ["claveProducto","nombreProducto"]]

    dato = str(output.claveProducto.astype(str).values[0])
    dato = "'"+dato+"'"
    # dato="'11172002'"

    # print(dato)
    search = np.in1d(providersCSV["claveProducto"], dato)
    return providersCSV.loc[search, ["claveProducto","nombreProveedor"]]