import requests
from bs4 import BeautifulSoup
import lxml.html as html

def scrapImage(about):

    '''
        ALGORITMO DE BÚSQUEDA DE IMÁGENES:

        * Recibe "about", que es un string que representa aquello
          de lo que se quiere buscar una imágen ("Gatitos bonitos");
        
        * Hace scraping con XPATH para obtener del html de imágenes
          google, habiendo hecha la búsqueda.
        
        * Habiendo obtenido las imágenes, toma el url de la primera
          y la retorna.
        
        Este algoritmo se utilizará en el algoritmo de recomendaciones
        para complementar el nombre de producto de una sugerencia de
        compra, con el url de una imágen perrona :3
    '''

    # URL con el que buscará en imágenes Google:
    urlSearch = "https://www.google.com.mx/search?q="

    # Se modifica el texto del objeto a buscar, para adaptarlo al
    # formato de un url de búsqueda; sin espacios en ningún lado:
    # about = input("\nImágen que deseas buscar: ")
    about = about.strip()
    about = " ".join(about.split())
    about = about.replace(" ", "+")

    # URL de donde se hará scraping:
    urlBuscarImagen = urlSearch+about+"&tbm=isch&sclient=img"
    # print(urlBuscarImagen)

    # Se hace request al html de la búsqueda:
    try:
        pagina = requests.get(urlBuscarImagen)

        if pagina.status_code == 200:
            # Se convierte el html en un objeto que se pueda procesar con xpath:
            htmlImages = BeautifulSoup(pagina.content, 'html.parser')
            htmlImages = htmlImages.decode("utf-8")
            htmlImages = html.fromstring(htmlImages)

            # Efectúa la consulta para obtener el url de la primer imágen que
            # arroje Google [0]:
            XPATH_GET_IMAGES_URLS ='//img[@class="yWs4tf"]/@src'
            imagesURL = htmlImages.xpath(XPATH_GET_IMAGES_URLS)
            return str(imagesURL[0])
        else:
            # Imágen de ejemplo para cuando no encuetra imágen:
            return "https://baja.website/wp-content/uploads/2021/04/error-404-not-found.jpg"
    
    except ValueError as error:
        print(error)