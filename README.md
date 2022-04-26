# Ejercicio Angular

### Puntos del ejercicio

1. Crear proyecto en Angular 13.
2. Implementar “angular material”.
3. Implementar Bootstrap 4 mediante los assets.
4. Rutas:
- login
- user (lazy loading) (guard)
  + "" (landig page)
  + form
  + conversions
  + calculatedate
6. Crear el pipe "cambioLetras": 
- Dada una cadena de texto cambia las letras “a” por el número 4, la letra “e” por el número 3, la letra “i” por el número 1, la letra “o” por el número 0 y la letra “u” por el número 9.
7. Login con formularios reactivos.
8. Redirección a la pagina de inico cuando hay credenciales correctas.
9. Página de bienvenida.
10. Para poder navegar de un componente a otro puedes colocar un Sidebar o un
Navbar, lo dejo a tu gusto.
11. Conversiones: Solo el titulo del componente.
12. Calcular fecha: Dada una fecha puedas sumarle días/meses/años dinámicamente.
13. Formulario reactivo con validaciones.
  - nombres: "",
  - apellidos: "",
  - fumas: true/false,
  - actualmentePracticasLectura: true/false,
  - librosLeidosUltimosTresMeses: [ "Libro 1", "Libro 2", "Libro 3" ]
  - estadoCivil: 12, 13 o 14
  Reglas:
  a) Todos los campos son obligatorios menos estadoCivil.
  b) El nodo actualmentePracticasLectura determinará si se activa y se muestra el nodo
  librosLeidosUltimosTresMeses.
  c) El nodo librosLeidosUltimosTresMeses es de tipo FormArray.
  d) Los nodos nombres y apellidos tendrán una validación personalizada que no permitirá tener
  espacios al final (ocupar mat-error).
  e) Estado civil viene de un catálogo.
