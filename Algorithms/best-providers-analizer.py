'''

# ALGORITMO 02 #
# GLOBAL-PURCHASES ANALIZER TO GET BEST PROVIDERS #

* Ejecutable cada x+y tiempo
    - x = 1 dia
    - y = tiempo de ejecucion algoritmo01

* De todos los registros en global-purchases toma
    - claveProducto
    - precioUnitario
    - nombreProveedor

* Obtendra para cada claveProducto el nombreProveedor con 
menor precioUnitario

* Creara un archivo .csv que guarde
    - claveProducto
    - mejorNombreProveedor

'''

import numpy as np
import pandas as pd

def bestProvidersAnalizer():

    csvPath =("global-purchases.csv") #ubicacion .csv de global-purchases.csv
    archivoCSV = pd.read_csv(csvPath, header=0, usecols=[0,1,2]) #convierte global-purchases.csv a data frame


    archivoCSV_groupBy = archivoCSV[["claveProducto","precioUnitario"]].groupby(by="claveProducto", as_index=False).min() #extrae solo precioUnitario minimo por claveProducto

    archivoCSV_merge = pd.merge(archivoCSV_groupBy,archivoCSV,on=["claveProducto","precioUnitario"],how="left") #obtiene nombreProveedor para cada precioUnitario menor por claveProducto

    providersCSVPath = ("best-providers.csv") #ubicacion .csv de best-providers.csv
    archivoCSV_merge.to_csv(providersCSVPath, index=False) #envia archivoCSV_merge al best-providers.csv

if __name__ == "__main__":

    print("Obteniendo los mejores proveedores...")
    bestProvidersAnalizer()
    print("Mejores proveedores obtendios :3")