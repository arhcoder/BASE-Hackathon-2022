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

def intelligentSuggestor(clientID):

    