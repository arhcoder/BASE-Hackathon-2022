from operator import index
from pickle import FALSE
import numpy as np
import pandas as pd

catalogoPath = ("CatalogoProductoServiciosSAT.csv")
catalogoCSV = pd.read_csv(catalogoPath, header=0)

providersPath = ("best-providers.csv")
providersCSV = pd.read_csv(providersPath, header=0)

input = ("Gatos vivos")
busqueda = np.in1d(catalogoCSV['nombreProducto'], [input])
output = catalogoCSV.loc[busqueda, ['claveProducto','nombreProducto']]

dato = str(output.claveProducto.astype(str).values[0])
dato = "'"+dato+"'"
#dato="'11172002'"

print(dato)

search = np.in1d(providersCSV['claveProducto'], dato)
retorno = providersCSV.loc[search, ['claveProducto','nombreProveedor']]

print(retorno)