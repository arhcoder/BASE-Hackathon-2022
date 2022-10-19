# https://www.google.com.mx/search?q=pulpos+vivos&tbm=isch&sclient=img
# https://pixabay.com/images/search/cangrejos%20vivos/?manual_search=1
# https://sp.depositphotos.com/stock-photos/pulpos-vivos.html?filter=all

busqueda = "https://www.google.com.mx/search?q="
imagenDeseada = input("\nImagen que deseas buscar: ")

imagenDeseada = imagenDeseada.strip()
imagenDeseada = " ".join(imagenDeseada.split())
imagenDeseada = imagenDeseada.replace(" ", "+")

urlBuscarImagen = busqueda+imagenDeseada+"&tbm=isch&sclient=img"
print(urlBuscarImagen)

from bs4 import BeautifulSoup
import requests
import pandas as pd

try:
    pagina = requests.get(urlBuscarImagen)

    if pagina.status_code == 200:
        soup = BeautifulSoup(pagina.content, 'html.parser')

        img = soup.find_all('img', class_= 'rg_i Q4LuWd')
        src = img[0].src
        print(src)
        # XPATH_RESULTADOS_IMG ='//img[@class="rg_i Q4LuWd"]'
        # imagen = imagenesEncontradasHTML.xpath(XPATH_RESULTADOS_IMG)
        # print(imagen)
    else:
        print("no")
except ValueError as error:
    print(error)