# Hall Of Fame Of Pending Matters

Hall of fame of Pending Matters
Objetivos.
El objetivo es crear una aplicación  para administrar tareas, esta debe ser lanzada por cualquier navegador. La aplicación contará con las siguientes funciones:

Crear nuevas tareas mediante un botón.


Borrar una tarea mediante un botón (Cada tarea tendrá su propio botón para que sea improbable que el usuario se equivoque).


Borrar todas las tareas completadas (Checkeadas) mediante un solo botón.


Contador que mostrará la cantidad de tareas y la cantidad de tareas por hacer.

Diseño de la aplicación.


1 : Botón que crea una nueva tarea.

2 : Botón que elimina todas las tareas chekeadas.

3.1: Contador total de tareas.

3.2: Contador de tareas sin checkear.

4: Checkbox para la tarea.

5: Textarea donde se escribe la tarea.

6: Botón que borra la tarea a la que pertenece.
Código del programa.

newTodo() y updateList() : 

Al accionar el botón “New Matter to do”, se activa función newTodo() del archivo script.js.



Esta función crea un div que contendrá los elementos necesarios para una tarea (checkbox, textarea y botón de borrado). Tras crear el div, crea el checkbox (con la clase checkbox y una llamada a la función que actualiza la lista de tareas por hacer).  Posteriormente crea el textarea (donde se escribe la tarea). Tras esto crea el botón que tendrá la función de eliminar el div padre, eliminando así todos sus elementos. Finalmente se incrementan y actualizan los contadores con la función updateList():



updateUcheked(checkbox): 

Al marcar y desmarcar un checkbox, se llama a la función updateUcheked(checkbox).

 

Esta función recibe como parámetro un objeto checkbox y comprueba si está marcado. En caso de estar marcado decrementa el marcador de tareas desmarcadas, y en caso de no estar marcado lo incrementa. Después de esto, llama a la función updateList().

deleteTodo(element) : 

Al hacer click en el boton “Borrar tarea” este hace una llamada a la funcion deleteTodo(element). 

Esta función recibe como parámetro un elemento y le dirá a la lista que elimine a su padre.



Primero busca el padre de dicho elemento (Será el div que contiene la tarea), una vez tiene el padre, coge todos los hijos de este y los meterá en la arry elements. Comprobará si el primer elemento de esta array (Checkbox) esta marcado y en caso de no estarlo, decrementara el marcador de tareas por hacer. Después de esto, le dirá al elemento list que elimine a su hijo div.


deleteCheckedTodo() : 

Esta función elimina todas las tareas marcadas. 



Es una función simple que comprueba checkbox a checkbox si está chequeado, en caso de estarlo, llama a la función deleteTodo() que vimos antes, pasándole como elemento el propio checkbox para borrar la tarea. 
Pruebas.

Primera prueba: Comprobación de que el botón hace su función al pulsarlo repetidas veces.



Resultado: El programa funciona correctamente y genera todas las tareas solicitadas.

Segunda prueba: Escribir y marcar diversas tareas.



Resultado: Funciona todo correctamente.



Tercera prueba: Borrar una tarea independiente, en este caso borraremos “Ir a comprar”.




Resultado: La tarea es removida correctamente.
Cuarta prueba: Eliminar todas las tareas marcadas.



Resultado: Todo funciona como 

Quinta prueba: Eliminar una tarea sin marcar, en este caso “Tender la ropa”.



Resultado: Todo funciona de forma correcta.

Enlace a Git Hub: 

https://github.com/AlvaroCabreraDam2/HallOfFameOfPendingMatters

Enlace a pagina con GitCDN: 

https://gitcdn.xyz/cdn/AlvaroCabreraDam2/HallOfFameOfPendingMatters/50fc6bddfcfd361eea858a436605bae2d11c9e5a/index.html
