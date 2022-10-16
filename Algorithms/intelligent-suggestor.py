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

'''

import pandas as pd

def intelligentSuggestor(clientID):

    # Encuentra los productos que compra la empresa:
    purchasesFile = pd.read_csv("global-purchases.csv", header=0, usecols=[0,1,2,3])
    print(purchasesFile.query(f"idCliente == \'{clientID}\'"))

if __name__ == "__main__":
    intelligentSuggestor("448724")