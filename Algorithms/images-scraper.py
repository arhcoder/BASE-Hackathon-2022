# https://www.google.com.mx/search?q=pulpos+vivos&tbm=isch&sclient=img
# https://pixabay.com/images/search/cangrejos%20vivos/?manual_search=1
busqueda = "https://pixabay.com/images/search/"
imagenDeseada = input("\nImagen que deseas buscar: ")

imagenDeseada = imagenDeseada.strip()
imagenDeseada = " ".join(imagenDeseada.split())
imagenDeseada = imagenDeseada.replace(" ", "%20")

urlBuscarImagen = busqueda+imagenDeseada+"/?manual_search=1"
print(urlBuscarImagen)
import requests
import lxml.html as html

try:
    respuesta = requests.get(urlBuscarImagen)

    if respuesta.status_code == 200:
        imagenesEncontradasHTML = respuesta.content.decode("utf-8")
        print(imagenesEncontradasHTML)
        imagenesEncontradasHTML = html.fromsting(imagenesEncontradasHTML)

        XPATH_RESULTADOS_IMG ='//a/img[[@class="photo-result-image"]'
        imagen = imagenesEncontradasHTML.xpath(XPATH_RESULTADOS_IMG)
        print(imagen)
    else:
        print("no")
except ValueError as error:
    print(error)