import pandas as pd
from datetime import datetime

def bestProvidersAnalizer():

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

    csvPath =("../Backend/global-purchases.csv") #ubicacion .csv de ../Backend/global-purchases.csv
    archivoCSV = pd.read_csv(csvPath, header=0, usecols=[1,2,3]) #convierte ../Backend/global-purchases.csv a data frame

    archivoCSV_groupBy = archivoCSV[["claveProducto","precioUnitario"]].groupby(by="claveProducto", as_index=False).min() #extrae solo precioUnitario minimo por claveProducto

    archivoCSV_merge = pd.merge(archivoCSV_groupBy,archivoCSV,on=["claveProducto","precioUnitario"],how="left") #obtiene nombreProveedor para cada precioUnitario menor por claveProducto

    providersCSVPath = ("../Backend/best-providers.csv") #ubicacion .csv de ../Backend/best-providers.csv
    archivoCSV_merge.to_csv(providersCSVPath, index=False) #envia archivoCSV_merge al ../Backend/best-providers.csv

    # Elimina las filas repetidas:
    bests = pd.read_csv("../Backend/best-providers.csv", header=0, usecols=[0,1,2])
    bests = bests.drop_duplicates()
    bests.to_csv(providersCSVPath, index=False)


# Punto de ejecución:
if __name__ == "__main__":
    print("\n"+datetime.now().strftime("%d/%m/%Y %H:%M:%S"))
    print("Obteniendo los mejores proveedores...")
    bestProvidersAnalizer()
    print("Mejores proveedores obtendios :3\n")