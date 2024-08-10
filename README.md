# Juego de tipeo ⌨️
## Explicación del Juego 🕹️


  - El juego consiste en escribir las palabras en un margen de tiempo 
  (inicialmente 60s, aunque es posible que se añada la opción de configurar este paramentro 🕙).
  - Luego de que se hallan escrito todas las palabras o el contador haya llegado a 0 se mostrará 
  una estadistica de acierto y la cantidad de letras escritas en daterminado periodo de tiempo. ⚡
  - En un futuro se implentará la opción de guardar los datos y compararlos con anteriores. ☁️



## Explicación del software 💻


  * Programa diseñado con HTML, CSS, JS (Con posible implementacion de JSON, MySQL, NodeJS, D3). 🌐


### Funcionamiento ⚙️


  **Idioma e Interface 🗺️** 
  - Dependiendo del idioma elegido se retorna una u otra array con 200 palabras en el idioma seleccionado.
  Esta array se imprime en el DOM. Esto por medio de la función ```gameElement()``` Y ```textContent()```.
  **Escritura 🖊️** 
  - Hay un evento keyup que recibe las teclas precionadas cuando el contenedor del juego #game esta en el foco.
  Por medio de una condicional se corrobora si la tecla es una letra; si así es, y existe una letra actual,si así es, y si la letra es la que corresponde a la palabra actual, la letra se pone en blanco; si es incorrecta se tiñe de rojo.
  **Borrar :arrow_left** 
    *~~En proceso~~*

  **Estadísticas**
   - Al terminarse el tiempo previsto de 60 segundos, se muestra la cantidad de palabras escritas y el porcentaje de acierto total.

## Licencia 🔑

 - MIT
