# PHP

> Este tutorial para principiantes de php es de [este video](https://www.youtube.com/watch?v=BUCiSSyIGGU) y este es el [repositorio original](https://github.com/bradtraversy/php-crash)

## Index

- [Empezar php](#initialize-php)
- [Salida](#output)
- [Variables](#variables)
- [Constantes](#constants)
- [Arrays](#arrays)
- [Operadores](#operators)
- [Condicionales](#conditionals)
- [Bucles](#loops)
- [Funciones](#functions)
- [Funciones de Array](#array-functions)
- [Funciones de Cadena](#string-functions)
- [Superglobales](#superglobals)
- [GET y POST](#get-and-post)
- [Securizar Inputs](#sanitize-inputs)
- [Cookies](#cookies)
- [Sesiones](#sessions)
- [Manejo de ficheros](#file-handling)
- [Subida de ficheros](#file-uploading)
- [Excepciones](#exceptions)
- [POO](#oop)

## Empezar php

Para usar php, necesitamos crear un archivo .php.
Una vez eso, escribiremos las etiquetas php:

```php
<?php
// el código aquí
?>
```

### Como trabaja PHP

Primero de todo, PHP corre en el servidor con lo cual, para hacerlo funcionar necesitaremos un servidor. Recomiendo para principiantes el iniciar con XAMPP, que instalará todo lo que necesitamos : [web de xampp](https://www.apachefriends.org/es/index.html)

Cuando entramos a una página, el navegador manda una petición al servidor, entonces es cuando el código PHP es procesado (el navegador no entiende ni procesa el código php), depués de eso, el servidor envía el html correcto de vuelta al navegador y es entonces cuando el usuario ve y puede interactuar con la página.

### Comentarios

- comentarios de una sola línea: `//comentarios en línea`

- comentarios de multiples líneas:
  ```php
  /*
  Este es un comentario
  multilínea en php
  */
  ```

> ¿Los puntos y comas (;) al final de la línea son vitales!

## Salida

### `echo`

Puede renderizar cadenas de texto, números, html, etc....

```php
echo 123, 'Hola', 10.5; //123Hola10.5
```

### `print`

Parecido a `echo` pero solo pudiendo renderizar un elemento.

```php
print 123; // 123
```

### `print_r()`

Es una función y es usada sobre todo para renderizar arrays y valores únicos.

```php
print_r([1,2,3]);
// Array ( [0] => 1 [1] => 2 [2] => 3 )
```

### `var_dump()`

Una función que devuelve más información (tipo de dato y longitud).

```php
var_dump('Hola'); // string(4) "Hola"

var_dump([1,2,3]);
// array(3) { [0]=> int(1) [1]=> int(2) [2]=> int(3) }
```

### var_export()

Similar al `var_dump()` pero esto devuelve una string representation of a variable.

```php
var_export('Hola'); // 'Hola'

var_export([1,2,3]);
// array ( 0 => 1, 1 => 2, 2 => 3, )
```

## Variables

### Tipos

- String
  : Una serie de caracteres rodeados por comillas o comillas dobles
- Integer
  : Número entero
- Float
  : Número decimal
- Boolean
  : Verdadero o falso
- Array
  : Esta es una variable especial, la cual puede tener más de un valor
- Object
  : Una clase
- NULL
  : Variable vacía
- Resource
  : Variable special que tiene un recurso

### Reglas

- Las variables deben tener como prefijo `$`.
- Las variables deben empezar con una letra o barra baja ( \_ ).
- Las variables no pueden empezar con un número.
- Las variables solo pueden contener caracteres alfanuméricos y barras bajas :
  - A-z
  - 0-9
  - \_
- Las variables distinguen entre mayúsculas y minúsculas ($nombre no es igual que $NOMBRE o $Nombre).

### DEclarando variables

```php
$nombre = 'Federico'; // String
$edad = 25; //Number
$dinero_en_el_banco = 763.83; // Float
$tiene_hijos = false; // Boolean
```

#### Texto con variables

Para renderizar el valor de una variable en una cadena de texto, la puedes concatenar :

```php
echo $nombre . ' tiene ' . $edad . ' años';
// Federico tiene 25 años
```

o, con comillas dobles :

```php
echo "$nombre tiene $edad años";
// Federico tiene 25 años
```

también, como en javascript, puedes añadir `{}` a las variables :

```php
echo "${nombre} tiene ${edad} años";
// Federico tiene 25 años
```

### Operaciones

```php
echo 10 + 5; // 15
echo '10' + '5'; // 15
echo 10 - 5; // 5
echo 10 * 5 ; // 50
echo 10 / 5; // 2
echo 10 % 5; // 0
```

## Constantes

Una constante es un dato o valor que nunca va a cambiar a lo largo de nuestra aplicación (base de datos, credenciales, hosts, etc...)

Para crear una constante tienes que usar lo función `define()` :

```php
define('HOST','localhost');
define('PUERTO','3000');

echo HOST; // localhost
var_dump(PUERTO); // int(3000)
```

## Arrays

Los arrays son tipos o estructuras de datos que tienen o albergan multiples valores.

Hay principalmente, dos formas distintas de crearlos :

- ```php
  $numeros = [15,22,36,41];
  ```
- ```php
  $frutas = array('manzana','naranja','pera');
  ```

Para renderizar los valores del array, podemos usar los métodos específicos mencionados en la sección de [salida](#salida) :

```php
print_r($numeros);
// Array ( [0] => 15 [1] => 22 [2] => 36 [3] => 41 )

var_dump($numeros);
// array(4) { [0]=> int(15) [1]=> int(22) [2]=> int(36) [3]=> int(41) }

var_export($numeros)
// array ( 0 => 15, 1 => 22, 2 => 36, 3 => 41, )
```

Si queremos acceder a un valor concreto, podemos hacerlo con su índice, pero, ten cuidado, porque **el índice de los arrays empieza en 0**, por lo tanto, el primer valor guardado está en la posición 0:

```php
echo $frutas[0] // manzana
echo $frutas[1] // naranja
```

### Array asociativo

El array asociativo es una forma de crear un array y personalizar el índice.

_Las keys (índices) pueden ser números o texto_

1. **Con Números :**

- ```php
    $colores = [
    1 => 'rojo',
    2 => 'azul',
    3 => 'verde',
    5 => 'morado',
    7 => 'gris',
    11 => 'marrón'
    ];
  ```
- ```php
  print_r($colores);
  // Array ( [1] => rojo [2] => azul [3] => verde [5] => morado [7] => gris [11] => marrón )

  var_dump($colores);
  // array(6) { [1]=> string(3) "rojo" [2]=> string(4) "azul" [3]=> string(5) "verde" [5]=> string(6) "morado" [7]=> string(4) "gris" [11]=> string(5) "marrón" }

  var_export($colores);
  // array ( 1 => 'rojo', 2 => 'azul', 3 => 'verde', 5 => 'morado', 7 => 'gris', 11 => 'marrón', )

  echo $colores[1]; // rojo
  ```

2. **Con texto:**

- ```php
    $hex = [
    'rojo'=>'#f00',
    'verde'=>'#0f0',
    'azul'=>'#00f',
    'negro'=>'#000',
    'blanco'=>'#fff'
    ];
  ```
- ```php
    print_r($hex);
    // Array ( [rojo] => #f00 [verde] => #0f0 [azul] => #00f [negro] => #000 [blanco] => #fff )

    var_dump($hex);
    // array(5) { ["rojo"]=> string(4) "#f00" ["verde"]=> string(4) "#0f0" ["azul"]=> string(4) "#00f" ["negro"]=> string(4) "#000" ["blanco"]=> string(4) "#fff" }

    var_export($hex);
    // array ( 'rojo' => '#f00', 'verde' => '#0f0', 'azul' => '#00f', 'negro' => '#000', 'blanco' => '#fff', )

    echo $hex['rojo']; // #f00
  ```

  _Esta forma es parecida a los objetos en javascript o los diccionarios de python_

### Array Multidimensional

Este tipo de arrays son los que incluyen un array dentro (un array dentro de otro array).

```php
$personas = [
    [
        'primer_nombre' => 'Federico',
        'primer_apellido' => 'Valverde',
        'email' => 'fedevalverde@gmail.com'
    ],
    [
        'primer_nombre' => 'Toni',
        'primer_apellido' => 'Kross',
        'email' => 'tonikross@gmail.com'
    ],
    [
        'primer_nombre' => 'Luka',
        'primer_apellido' => 'Modric',
        'email' => 'modric.luka@gmail.com'
    ]
];
```

Y para conseguir algún valor específico usamos, al igual que antes, el índice:

```php
echo $personas[1]['email']; // tonikross@gmail.com
```

Como este tipo de array es similar al formato json, podemos hacer que devuelva los valores en ese formato usando la función `json_encode`:

```php
print_r(json_encode($personas));
/* [
    {
        "primer_nombre":"Federico",
        "primer_apellido":"Valverde",
        "email":"fedevalverde@gmail.com"
    },
    {
        "primer_nombre":"Toni",
        "primer_apellido":"Kross",
        "email":"tonikross@gmail.com"
    },
    {
        "primer_nombre":"Luka",
        "primer_apellido":"Modric",
        "email":"modric.luka@gmail.com"
    }
    ]
*/
```

## Operadores

- <
  : Menor que
- \>
  : Mayor que
- <=
  : Menor o igual a
- \>=
  : Mayor o igual a
- ==
  : Igual a
- ===
  : Idéntico a
- !=
  : No igual a
- !==
  : No idéntico a

## Condicionales

### `if`

La sintaxis del `if` es así :

```php
if (condition) {
    // código a ejecutar si la condición es verdadera
}
```

Un ejemplo :

```php
$edad = 19;
if ($edad >= 18) {
    echo 'Eres mayor de edad';
}
// Eres mayor de edad
```

Como la edad es igual o mayor que 18 (19) devolverá lo que hay en el interior del `if` ya que la condición se cumple.

#### `else`

Pero, ¿y si quisiéramos devolver otro valor si la condición no se cumple, es decir, el `if` es `false`? Este caso lo podemos manejar usando un `else`:

```php
if (condition) {
    // código a ejecutar si la condición es verdadera
} else {
    // si el código anterior no es true, se ejecuta este código
}
```

Un ejemplo :

```php
$edad = 19;
if ($edad >= 18) {
    echo 'Eres mayor de edad';
} else {
    echo 'Aún eres menor de edad';
}
// Aún eres menor de edad
```

Si todas las condiciones anteriores no son verdaderas (`true`), el código del `else` se ejecutará, pero si alguna de las condiciones anteriores se cumple, PHP nunca llegará hasta el `else`.

#### `elseif`

Ahora tenemos hasta 2 condiciones: si una se cumple (`true`), será ejecutada, pero si no,el `else` será el que se ejecute. ¿Pero que ocurre si necesitamos más de 2 condiciones?

Es en este caso donde necesitamos la sentencia `elseif`:

```php
if (condition1) {
    // código a ejecutar si la condición es verdadera
} elseif (condition2) {
    // código a ejecutar si la condition2 es verdadera
} else {
    // si ninguna de las anteriores condiciones se cumple,
    // se ejecuta esto
}
```

Un ejemplo :

```php
$hora = 16;

if ($hora < 12) {
    echo 'Buenos días';
} elseif ($hora < 17) {
    echo 'Buenas tardes';
} else {
    echo 'Buenas noches';
}
```

Ahora, con la sentencia `elseif()`, se pueden comprobar tantas condiciones necesitemos!

Sin embargo, puedes comprobar más cosas aparte de si algo es mayor, menor o igual a otra cosa, vamos a ver algunos ejemplos que no usen estos operadores:

- Verdadero (`true`) o Falso (`false`):

  ```php
     $clasificado = true;

     if ($clasificado) {
         echo 'Enhorabuena, estás ¡clasificado!';
     } else {
         echo 'Vaya, no estas clasificado :(';
     }
     // Enhorabuena, ¡estás clasificado!
  ```

- Vacío o no:

  ```php
  $usuarios_activos = ['Felipe','Juan','Toni'];

  if (!empty($usuarios_activos)) {
      echo "Hay algunos usuarios activos, como $usuarios_activos[0]";
  } else {
      echo 'No hay usuarios activos';
  }
  // Hay algunos usuarios activos, como Felipe
  ```

### Ternary operators

La sentencia `if` completa ocupa bastante espacio, la manera más simple ya ocupa 3 líneas. Esto se puede resolver usando un operador ternario:

```php
echo condition ? /*si es true */ : /*si es false*/;
```

Un ejemplo :

```php
$usuarios_activos = ['Felipe','Juan','Toni'];

echo !empty($usuarios_activos) ? 'Hay algunos usuarios activos' : 'No hay usuarios activos';
// Hay algunos usuarios activos
```

También podemos usar estos operadores ternarios para asignar un valor a una condición.

Un ejemplo:

```php
$usuarios_activos = ['Felipe','Juan','Toni'];

$primer_usuario_activo = !empty($usuarios_activos) ? $usuarios_activos[0] : 'No hay usuarios activos';

echo $primer_usuario_activo;
// Felipe
```

Pero, ¿y si no quisiéramos que la variable tenga un valor si el `if` no se cumple?. ¿Qué pasaría si no queremos la sentencia `else`?

para esto existen dos posibles soluciones:

- ```php
    $usuarios_activos = ['Felipe','Juan','Toni'];

    $primer_usuario_activo = !empty($usuarios_activos) ? $usuarios_activos[0] : null ;
    echo $primer_usuario_activo; // Felipe
  ```

- ```php
    $usuarios_activos = ['Felipe','Juan','Toni'];

    $primer_usuario_activo = $usuarios_activos[0] ?? null;
    echo $primer_usuario_activo; // Felipe
  ```

Ambas indican lo mismo, pero la última es más corta.

### `switch`

Este tipo de condicional es bastante útil cuando tenemos varias condiciones, lo que ayuda a tener un código más limpio, sin tantos `elseif`.

```php
switch (variable) {
    case valor :
    // código a ejecutar
    break;
    case otro_valor :
    // código a ejecutar
    break;
    // más condiciones
    default:
    // si ninguna de las anteriores es verdadera
}
```

Un ejemplo :

```php
$color_favorito = 'amarillo';

switch ($color_favorito) {
    case 'azul':
    echo 'Tu color favorito es el azul';
    break;
    case 'rojo':
    echo 'Tu color favorito es el rojo';
    break;
    case 'verde':
    echo 'Tu color favorito es el verde';
    break;
    default:
    echo 'Tu color favorito no es el rojo, azul o verde'
}
// Tu color favorito no es el not rojo, azul o verde
```

Vamos a explicar que ha ocurrido aquí. Cada `case` funciona como una condición `elseif`, pero, si todas son falsas (`false`), ejecutará el `default`, que es como un `else`.

## Bucles

Los bucles son usados para ejecutar un bloque de código mientras se cumple una condición específica y se seguirá ejecutando hasta que se deje de cumplir dicha condición.

Hay distintos tipos de bucles en PHP:

### `for`

```php
for (initialize; condition; increment) {
    // código a ejecutar mientras la condición es true
}
```

Un ejemplo :

```php
for ($x = 0; $x < 10; $x++) {
   echo $x;
}
// 0123456789
```

### `while`

```php
while (condition) {
    // código a ejecutar
}
```

Un ejemplo :

```php
$x = 0;

while ($X < 10) {
    echo $x;
    $x++;
}
// 0123456789
```

### `do...while`

```php
do {
  // código a ejecutar
} while (condition);
```

Un ejemplo :

```php
$x = 1;

do {
  echo $x;
  $x++;
} while ($x < 10);
// 0123456789
```

**Ten cuidado**: `do...while` siempre se ejecuta primero y hace la comprobación después:

```php
$x = 50;

do {
  echo $x;
  $x++;
} while ($x < 10);
// 50
```

### `foreach`

Este bucle se suele usar para arrays

```php
foreach ($array as $value) {
  // código a ejecutar
}
```

Un ejemplo :

```php
$posts = ['primero','segundo','tercero','cuarto'];

foreach ($posts as $post) {
  echo $post . ' ';
}
// primero segundo tercero cuarto
```

Además, con el `foreach` podemos obtener el índice de los valores del array:

```php
$posts = ['primero','segundo','tercero','cuarto'];

foreach ($posts as $indice => $post) {
  echo $indice . '-' . $post . ' ';
}
// 0-first 1-second 2-third 3-fourth
```

Como hemos dicho, hay distintos tipos de arrays así que vamos a probar el bucle `foreach`con un [array asociativo](#array-asociativo)

```php
$hex = [
  'rojo'=>'#f00',
  'verde'=>'#0f0',
  'azul'=>'#00f',
  'negro'=>'#000',
  'blanco'=>'#fff'
];

foreach($hex as $key => $color) {
  echo "$key is $color <br/>";
}
/*rojo is #f00
verde is #0f0
azul is #00f
negro is #000
blanco is #fff
*/
```

## Funciones

Las funciones son bloques de código que puedes nombrar y ejecutar donde sea.

Para crear funciones se usa la palabra reservada `function` seguida del nombre de la función.

```php
function nombre () {
  // bloque de código que se ejecute
}
```

Un ejemplo :

```php
function saludar () {
  echo 'Hola!';
}
```

Lo que hemos hecho ahí es declarar la función y ahora mismo no ejecutará el código que lleva dentro. Para que se ejecute, tenemos que llamarla:

```php
function saludar () {
  echo 'Hola!';
}

saludar(); // Hola!
```

### Scope

Como en otros lenguajes, las funciones en php tienen su propio scope o alcance.

¿Qué significa exactamente esto? Esto quiere decir que si declaramos cualquier variable solamente dentro de la función, fuera de ella no existirá.

Un ejemplo :

```php
function saludar () {
  $hola = 'Hola!';
  echo $hola;
}

saludar(); // Hola!
```

Como hemos declarado la función `$hola` dentro de la función `saludar`, tendrá acceso a su valor, pero, si intentamos acceder a esta misma variable desde fuera de la función, nos dará un error:

```php
function saludar () {
  $hola = 'Hola!';
  echo $hola;
}

saludar(); // Hola!

echo $hola; // Warning: Undefined variable $hola
```

Nos da ese error porque `$hola` solo está en el scope de la función y estamos intentando acceder a su valor como si fuera una variable en el scope global.

Lo mismo ocurre si intentamos leer una variable global dentro de una función:

```php
  $hola = 'Hola!';
function saludar () {
  echo $hola;
}

saludar(); // Warning: Undefined variable $hola

echo $hola; // Hola!
```

Pero, ¿cómo podemos leer una variable global dentro de una función? Para esto se usa `global` :

```php
  $hola = 'Hola!';
function saludar () {
  global $hola;
  echo $hola;
}

saludar(); // Hola!

echo $hola; // Hola!
```

### Argumentos

Los argumentos definen que va dentro de la función y los parámetros son pasados a la función dentro de `()` cuándo es llamada.

```php
function name ($argumento) {
  // código a ejecutar
}

name(parameter);
```

Un ejemplo :

```php
function saludar ($hora_del_dia) {
  echo "Hola!, son las $hora_del_dia";
}

saludar("12"); //Hola!, son las 12
```

#### Valores por defecto

Si declaramos una función con argumentos, pero no le pasamos ningún parámetro cuando la llamamos, nos dará un error. Para evitar esto, tenemos los valores por defecto:

```php
function saludar ($hora_del_dia = '3') {
  echo "Hola!, son las $hora_del_dia";
}

saludar(); //Hola!, son las 3
```

### Salida

En los ejemplos anteriores, siempre estamos haciendo algún `echo` dentro de la función, pero hay una forma distinta de tener el valor y es devolver el valor con un `return`:

```php
function nombre() {
  return // código a devolver
}

nombre();
```

Pero si probamos esto, nada se muestra en el navegador.

Esto se debe a que necesitamos un `echo` explícito para mostrar el valor devuelto:

Un ejemplo:

```php
function suma ($n1,$n2) {
  return $n1 + $n2;
}

echo suma(1,5); // 6
```

Además, podemos asignar el valor devuelto por una función a una variable:

```php
function suma ($n1,$n2) {
  return $n1 + $n2;
}

$result = suma(1,5);

echo $result; // 6
```

### Funciones anónimas

También podemos tener funciones sin un nombre, estas son llamadas funciones anónimas, y son así:

```php
$variable = function() {
  return // código a devolver
};
```

Funcionan como una función normal, pudiendo tener argumentos y todas las capacidades de una función.

Un ejemplo:

```php
$suma = function ($n1,$n2) {
  return $n1 + $n2;
};
echo $suma(1,5); // 6
```

### Funciones de flecha

Las funciones tiene su propia sintaxis corta, que es así:

```php
$variable = fn($argumento) => argumento;
```

Cuando hablamos de `return` de una sola línea, podemos desechar las llaves (`{}`) y el propio `return`. También podemos cambiar la palabra reservada `function` por `fn`, que es más corta y fácil.

Un ejemplo :

```php
$suma = fn($n1,$n2) => $n1 + $n2;

echo $suma(1,5); // 6
```

**Cuidado :** Se el `return` no es de una sola línea, hay que usar las llaves (`{}`) y también la palabra reservada `return`.

## Funciones de array

Este tipo de funciones son útiles para obtener información sobre un array o para manipular y trabajar con sus valores.

Para los siguientes ejemplos usaremos los siguientes arrays :

```php
$frutas = ['manzana','naranja','pera'];
```

### Conseguir longitud

Para obtener la longitud de un array usaremos la función `count()`:

```php
echo count($frutas); // 3
```

### Buscar en un array

Buscar por un valor específico dentro de un array.

Para ello, usamos la función `in_array()`, que devuelve `true` o `false`, `true` si cualquiera de los valores cumple la condición, y `false` si no.

```php
echo in_array('naranja',$frutas); // 1
```

Nos devuelve 1 porque el `echo` de un valor `true` muestra 1, mientras que si el valor fuera `false` no mostraría nada.

### Añadir a un array

Si queremos añadir cierto valor a un array, hay algunas formas de hacerlo:

**Añadir al final:**

- ```php
  $frutas[] = 'uva';

  print_r($frutas);
  // Array ( [0] => manzana [1] => naranja [2] => pera [3] => uva )
  ```

- ```php
    array_push($frutas,'uva','cereza');

    print_r($frutas);
    // Array ( [0] => manzana [1] => naranja [2] => pera [3] => uva [4] => cereza )
  ```

  **Añadir al inicio:**

- ```php
  array_unshift($frutas,'uva');

  print_r($frutas);
  // Array ( [0] => uva [1] => manzana [2] => naranja [3] => pera )
  ```

### Eliminar de un array

**Eliminar del final:**

```php
array_pop($frutas);

print_r($frutas);
// Array ( [0] => manzana [1] => naranja )
```

**Eliminar del inicio:**

```php
array_shift($frutas);

print_r($frutas);
// Array ( [0] => naranja [1] => pera )
```

**Eliminar un elemento específico:**

```php
unset($frutas[1]);

print_r($frutas);
// Array ( [0] => manzana [2] => pera )
```

### Dividir un array

Para este ejemplo, dividiremos el array  en dos partes, pero se pude hacer en cuantas partes se quiera y pueda.

```php
$array_dividido = array_chunk($frutas,2);

print_r($array_dividido);
// Array ( [0] => Array ( [0] => manzana [1] => naranja ) [1] => Array ( [0] => pera ) )
```

### Concatenar arrays

Para este ejemplo usaremos estos nuevos arrays:

```php
$arr1 = [1,2,3];
$arr2 = [4,5,6];
```

para concatenar los arrays podemos usar la función `array_merge()`:

```php
$arr3 = array_merge($arr1,$arr2);

print_r($arr3);
// Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => 6 )
```

También podemos usar el spread operator como en JavaScript :

```php
$arr3 = [...$arr1, ...$arr2];

print_r($arr3);
// Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => 6 )
```

### Combinar arrays

Para este ejemplo usaremos this example we will use this new arrays:

```php
$a = ['rojo','verde','azul'];
$b = ['aguacate','manzana','plátano'];
```

Para combinar estos dos arrays, usamos la función  `array_combine()`:

```php
$c = array_combine($a,$b);

print_r($c);
// Array ( [rojo] => aguacate [verde] => manzana [azul] => plátano )
```

_¿Qué ha pasado?_ El array `$a` es escogido como índice y el array `$b` representa los valores, así que, el primer valor de `$a` es el índice del primer valor del array `$b`

Ahora, como tenemos un array combinado (`$c`), podemos divertirnos con el:

**Crear un array de las keys:**
_Esto devolverá el array `$a`_

```php
$keys = array_keys($c);

print_r($keys);
// Array ( [0] => rojo [1] => verde [2] => azul )
```

**Voltear el array**

```php
$volteado = array_flip($c);

print_r($volteado);
// Array ( [aguacate] => rojo [manzana] => verde [plátano] => azul )
```

### Array con rango numérico

Muchas veces vamos a querer tener un array con números del 1 al 9, O de un número a otro y con la función `range()` eso es posible. Esta función tiene algunos argumentos como el inicio y el final del rango:

```php
$nums = range(1,9);

print_r($nums)
// Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => 6 [6] => 7 [7] => 8 [8] => 9 )
```

### Mapear un array

```php
$newNums = array_map(function($num){
  return "Number {$num}";
},$nums);
```

Pero como ya hemos aprendido, el `return` por si solo no muestra nada, necesitamos visualizarlo de manera explícita:

```php
print_r($newNums);
// Array ( [0] => Number 1 [1] => Number 2 [2] => Number 3 [3] => Number 4 [4] => Number 5 [5] => Number 6 [6] => Number 7 [7] => Number 8 [8] => Number 9 )
```

### Filtrar un array

```php
$menosde10 = array_filter($nums,fn($num)=> $num < 10);

print_r($menosde10);
// Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 [5] => 6 [6] => 7 [7] => 8 [8] => 9 )
```

### Reducir un array

¿Y si queremos sumar, multiplicar, dividir o lo que sea con todos los valores de un array? Para ello, tenemos la función `array_reduce()`.

Este función tiene 2 argumentos, rl primerio es el array que queremos reducir, y el segundo una función que coge otros dos argumentos , el primero es el `$carry` que lleva el valor de la iteración previa, y el segundo es el nombre de los valores.

```php
$reducir = array_reduce(
    $array,
    function ($carry, $arr) {
        return $carry + $arr;
    }
);
```

Un ejemplo :

```php
$sum_nums = array_reduce($nums, fn($carry, $num)=> $carry + $num);

echo $sum_nums
// 45
```

## Funciones para Strings

Para estas funciones de cadena, trabajaremos con la cadena `Hola Mundo` string.

```php
$cadena = 'Hola Mundo';
```

### Longitud de una cadena

```php
echo strlen($cadena); // 10
```

### Índice de una subcadena

- Primera ocurrencia
  :
  ```php
  echo strpos('a'); // 3
  ```
- Última ocurrencia
  :
  ```php
  echo strrpos('o'); // 9
  ```

### Voltear una cadena

```php
echo strrev($cadena); // odnuM aloH
```

### Convertir caracteres de una cadena

- Todos a minúsculas
  :
  ```php
  echo strtolower($cadena); // hola mundo
  ```
- Todos a mayúsculas
  :
  ```php
  echo strtoupper($cadena); // HOLA MUNDO
  ```
- La primera mayúscula
  :
  ```php
  echo ucwords($cadena); // Hola mundo
  ```

### Reemplazar una subcadena

```php
echo str_replace('Mundo','A Todos',$cadena); // Hola A Todos
```

### Porción de una cadena

```php
echo substr($cadena, 0, 3); // Hola

echo substr($cadena, 4); // Mundo
```

### Empieza o acaba con

- Empieza con
  :
  ```php
  var_dump(str_starts_with($cadena,'Hola'));
  // bool(true)
  ```
- Acaba con
  :
  ```php
  var_dump(str_ends_with($cadena,'do'));
  // bool(true)
  ```

### Visualizar cadena formateada

If e have some string that will have a part that will be fixed and other tha will change depending on the data, we can use the `printf()` built in function, that we could use with substrinsg :

```php
printf('%s likes to %s','Juan','code');
// Juan likes to code
```

The `%s` is the substitution of the string. Now, an example with numbers :

```php
printf('1+1=%d',1+2);
// 1+1=3
```

In this case, the `%d` replace the number passed in the next argument.

### Handle html strings

If we `echo` any html tag, like `h1` or `hr`, it will be displayed as it was normal html as it isn't parsed.

That, in terms of security, while having a form or something like that can be extremely dangerous, as if we do the following :

```php
echo '<script>alert(1)</script>';
```

The `script` will be executed as if it was the common `script` tag.

At first look it may be not seems like a big problem, but if we have some input as i said before, and we echo the value given by the user in that input, if he puts his name, the result will be something like this :

```php
$input_value = 'Juan';

echo $input_value;// Juan
```

But, if he puts an `script` in the input field, it will be interpreted as common html.

```php
$input_value = '<script>alert(10)</script>';

echo $input_value;
// this will give an alert in the browser
```

Imagine that the users could run any javascript and change the functionality of your web, and even worst, change or delete important information like the storojo in your database!

For this we have two ways to fix it :

- Html Special Chars
  :
  ```php
  echo htmlspecialchars($input_value);
  // <script>alert(1)</script>
  ```
- Html Entities
  :
  ```php
  echo htmlentities($input_value);
  // <script>alert(1)</script>
  ```

## Superglobals

We already have seen that in php there are some built in functions, but also there are built in variables, that are available in all scopes (inside or outside a function). They usually start with `$_` and all of them are arrays :

- `$_GET`
  : Contains information about variables passed through a URL or a form.
- `$_POST`
  : Contains information about variables passed through a form.
- `$_COOKIE`
  : Contains information about variables passed through a cookie.
- `$_SESSION`
  : Contains information about variables passed through a session.
- `$_SERVER`
  : Contains information about the server environment.
- `$_ENV`
  : Contains information about the environment variables.
- `$_FILES`
  : Contains information about files uploaded to the script.
- `$_REQUEST`
  : Contains information about variables passed through the form or URL.

## GET and POST

In the [handle html strings section](#handle-html-strings) we have talked about inputs and getting data that an user type. For doing that we will need this superglobals.

We can pass data through urls (`$_GET`) and forms (`$_GET`, `$_POST`) using this superglobals.

### GET

`$_GET` can read data from an form and from an url.

If we have some argument that we want to pass trough pages, we can add it to the anchor `href` atribute like this:

```php
<a href="/profile.php?name=Brad">Click me</a>
```

In that piece of code, we are saying that we want to go the this url:

`/profile.php?name=Brad`

If we take a look, we have a `name` atribute that is equal to `Brad`, that's the atribute we will read in the `$_GET`.
And as it is a valid url, we will go there.

Now, in the **profile.php** file, we have the `$_GET` ready, listening to the name :

```php
<?php
  echo $_GET['name'];
  // Brad
?>
```

The `$_GET` reads the `name` atribute from the url.

If we want to add more data, we can use the `&` :

```php
<a href="/profile.php?name=Brad&active=true">Click me</a>
```

And, in the **profile.php** file :

```php
<?php
  echo $_GET['name'];
  echo $_GET['active'] ? ' is active' : ' is not active';
?>
// Brad is active
```

Now, lets try this with forms.

First, we need to built our form:

```php
<form>
  <label>Name :</label>
  <input type="text" />
  <br />
  <label>Age</label>
  <input type="number" />
  <br />
  <input type="submit" />
</form>
```

This is a regular form, but as we are working with PHP, we need to add some atributes to it :

```php
<form action="/profile.php" method="GET">
  <label>Name :</label>
  <input type="text" name="name" />
  <br />
  <label>Age</label>
  <input type="number" name="age" />
  <br />
  <input type="submit" name="submit" />
</form>
```

We have added several things :

- name
  : to let `$_POST` and `$_GET` read the value when submiting.
- method
  : to specify if we want it as POST or GET when submiting (default is GET).
- action
  : this will send the data to the specified php file in this atribute ('/' send to the same file).

Now, if we click in the submit button, we will be rojoirected to the `profile.php` file, and we will pass to it the data :

```php
<?php
  echo $_GET['name'];
  echo '<br/>';
  echo $_GET['age'];
?>
// Brad
// 30
```

The age and name stands for the `name` atribute in each input.

But, if look at the url of this progilr.php, we will see something like this :

```
/profile.php?name=Brad&age=30&submit=Submit
```

This does not look very clean, that is why we will use the POST method and the `$_POST` to get that data with a much cleaner and friendly url.

### POST

`$_POST` is only used with forms as it hasn't access to the url parameters.

For using it, we only change the `method` atribute in the main php file :

```php
<form action="profile.php" method="POST">
    <label>Name :</label>
    <input type="text" name="name" />
    <br />
    <label>Age</label>
    <input type="number" name="age" />
    <br />
    <input type="submit" name="submit" />
</form>
```

And, we have to change the `$_GET` in the **profile.php** file for the `$_POST` ones :

```php
<?php
  echo $_POST['name'];
  echo '<br/>';
  echo $_POST['age'];
?>
// Brad
// 30
```

Now, we have the same result as before, but with a cleaner url.

### Undefined array key problem

If we tr this GET and POST methods to our own file, or we try to access directly (from the url) to the **profile.php** file, we will see this error :

```
Warning: Undefined array key "name" in /var/www/html/profile.php on line 14
```

This is thrown because at the time to make that request to the server, any `name` parameter or ulr-atribute is set, so it's undefined.

But, how can we avoid this, as at the first time that page loads, it will be none atribute set.

The way to solve this problem is with the `isset()` built in function :

```php
<?php
if(isset($_POST['submit'])){
  echo $_POST['name'];
  echo '<br/>';
  echo $_POST['age'];
}
?>
```

## Sanitize Inputs

We have talked early about some [security risks](#handle-html-strings) that inputs can have, so let's upgrade that knowledge adding a new wat to sanitize your inputs and make them more safe.

Apart from the `htmlspecilchars` or `htmlentities` we can use other built in function called `filter_input()`.

This function needs 3 atributes:

1. The type, that can be any of this :

   - INPUT_GET
   - INPUT_POST
   - INPUT_COOKIE
   - INPUT_SERVER
   - INPUT_ENV

   Each one corresponds to a [superglobal variable](#superglobals) In our case, as we have the POST method,we will use the `INPUT_POST`.

2. The variable name :

   This is the string that goes inside the `[]` in the `$_POST`.

   In this case, as we only need to sanitize the name input, this string will be `name`.

3. The filter :

   In this argument, we have to specify the ID of the filter to apply.

   In our case, we will use the `FILTER_SANITIZE_SPECIAL_CHARS`.

Once said that, the result will look like this :

```php
<?php
if (isset($_POST['submit'])) {
  $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
  echo $name;
  echo '<br/>';
  echo $_POST['age'];
}
?>
```

Other way to sanitize our inputs is using `filter_var()`, that works similar as `filter_input()`, but this can be used with mora things than inputs.

Un ejemplo :

```php
<?php
if (isset($_POST['submit'])) {
  $name = filter_var($_POST['name'], FILTER_SANITIZE_SPECIAL_CHARS);
  echo $name;
  echo '<br/>';
  echo $_POST['age'];
}
?>
```

## Cookies

Cookies ara a mechanism for storing data in the remote browser and thus tracking or identifying return users. You can set specific data to be storojo in the browser, and then retrieve it when the user visits the site again.

### Set cookie

For setting the cookie, we will need 3 parameters:

- Key
  : For referencing that cookie in the future.
- value
  : The value of that cookie.
- Expiration time
  : When we want that the cookie expire.

Un ejemplo :

```php
setcookie('name','Brad',time()+86400);
// we set the cooki for one day
```

### Read cookie

For this we will use the `$_COOKIE` superglobal :

```php
if(isset($_COOKIE['name'])){
  echo $_COOKIE['name'];
}
```

### Delete a cookie

For deleting a cookie is as simple and logical as set to it an passed expiration date:

```php
setcookie('name','',time()-86400);
```

## Sessions

Sessions are a way to store information (in variables) to be used across multiple pages.

Unlike cookies, sessions are storojo on the server and not in the client.

First of all, for using sessions in any php file, you need to put the "initializer" :

```php
<?php
session_start();
// code
?>
```

### Set session

```php
$username = $_POST["username"];
$_SESSION['username'] = $username;
```

### Read session

```php
$username = $_SESSION['username'];
```

### Delete session

```php
session_destroy();

// we can rojoirect to other page
header('Location:/index.php');
```

## File handling

File handling is the ability to read and write files on the server.

PHP has built in functions for reading and writing files.

First, we need to create a file, that we will call `users.txt`, that will have the following content :

```txt
Brad
Juan
Sara
Steve
Harry
```

Also we will create a variable called `filep` that will contain the path to the `users.txt` :

```php
$filep = './users.txt';
```

### File exists

```php
file_exists($filep);
```

### Read file

```php
echo readfile($filep);
// Brad Juan Sara Steve Harry26
```

Other way to read a file is with `fread()`, that need 2 arguments : stream and length :

```php
$handle = fopen($filep,'r');
// r means open for reading only
$contents = fread($handle,filesize($filep));
fclose($handle);
echo $contents;
// Brad Juan Sara Steve Harry
```

### Writing file

```php
$handle = fopen($filep,'w');
// r means open for writing only
$contents = 'Brad Juan Mike';
fwrite($handle,$contents);
fclose($handle);
```

If we want it with line breacks, we will use `PHP_EOL`:

```php
$handle = fopen($filep,'w');
// r means open for writing only
$contents = 'Brad'.PHP_EOL.'Juan'.PHP_EOL.'Mike';
fwrite($handle,$contents);
fclose($handle);
```

## File uploading

For uploading a file, first we need a form so let's make it :

```php
<form action="/" method="POST" enctype="multipart/form-data">
    Select image to upload:
    <input type="file" name="upload">
    <br />
    <input type="submit" name="submit" value="Submit" />
</form>
```

Something really important when uploading files is that the `enctype` atribute must be set, if it in's, it will not work.

For the file uploading, we will use one of the [superglobals](#superglobals), the `$_FILES` one.

In this case, we will need the target directory and the file tmp directory. This last one is within the `$_FILES` superglobal.

```php
$file_name = $_FILES['upload']['name']
$target_dir = "uploads/{$file_name}";
$file_tmp = $_FILES['upload']['tmp_name'];

move_uploaded_file($file_tmp,$target_dir);
```

## Exceptions

PHP has an exception model similar to that of other programming languages. An exception can be thrown, and caught ("cached") within PHP. Code may be surrounded in a try block, to facilitate the catching of potential exceptions. Each tru must hav at least one corresponding catch or finally block.

For example, we want to throw an error if we try to divide by 0:

```php
function inverse($x) {
  if(!$x) {
    throw new Exception('Division by zero');
  }
  return 1/$x;
}

echo inverse(10); // 0.1
echo inverse(0);
// Fatal error: Uncaught Exception: Division by zero
```

But let do something with that uncaught exception.

We will do the `echo` inside a `try...catch` block and see what happens :

```php
try {
  echo inverse(10);
  echo inverse(0);
} catch (Exception $e) {
  echo ' Caught Exception ', $e->getMessage();
}
// 0.1 Caught Exception Division by zero
```

We also have `finally` block, that is agnostic about what happens in the `try...catch` :

```php
try {
  echo inverse(10);
  echo inverse(0);
} catch (Exception $e) {
  echo ' Caught Exception ', $e->getMessage();
} finally {
  echo ' Finally!';
}
// 0.1 Caught Exception Division by zero Finally!
```

## OOP

From PHP5 onwards you can write PHP in either procedural or object orientated way. OOP consists of classes that can hold "properties" and "methods", Objects can be created from classes.

Lets create a user using OOP!

```php
class User {
  public $name;
  public $email;
  public $password;
}
```

Those are properties, that are atributes that belong to a class.

Now, we can instantiate a user object :

```php
$user1 = new User();

var_dump($user1);
// object(User)#1 (3) { ["name"]=> NULL ["email"]=> NULL ["password"]=> NULL }
```

Everything is `NULL` as we didn't specify that values, so let's into it :

```php
$user1 = new User();
$user1->name = 'Juan';
$user1->email = 'fedevalverde@gmail.com';
$user1->password = '1234';
print_r($user1);
// User Object ( [name] => Juan [email] => fedevalverde@gmail.com [password] => 1234 )
```

### Access modifiers

There are 3 types of access modifiers :

- Public
  : can be accessed from anywhere.
- Private
  : can only be accessed from inside the class.
- Protected
  : can only be accessed from inside the class and by inheriting classes.

### Method

Method is a function that belongs to a class.

```php
class User {
  public $name;
  public $email;
  public $password;
  function set_name($name){
    $this->name = $name;
  }
}
```

Now, we can acced that function outside the class :

```php
$user2 = new User();

$user2->set_name('Brad');

var_dump($user2);
// object(User)#2 (3) { ["name"]=> string(4) "Brad" ["email"]=> NULL ["password"]=> NULL }
```

### Constructor

A constructor is a method that runs when an object is created.

```php
class User {
  public $name;
  public $email;
  public $password;
  public function __construct($name,$email,$password){
    $this->name = $name;
    $this->email = $email;
    $this->password = $password;
  }
}
```

Now, thanks to the constructor, when we instantiate a user we can pass it the values :

```php
$user1 = new User('Brad','brad@gmail.com','securePassword');
$user2 = new User('Juan','fedevalverde@gmail.com','1234');

print_r($user1);
// User Object ( [name] => Brad [email] => brad@gmail.com [password] => securePassword )
echo '<br/>';
print_r($user2);
// User Object ( [name] => Juan [email] => fedevalverde@gmail.com [password] => 1234 )
```

### Inheritence

When a class belong to other class

```php
class Employee extends User{
  public function __construct($name,$email,$password,$title){
    parent::__construct($name,$email,$password);
    $this->title = $title;
  }
  function get_title(){
    return $this->title;
  }
}
```

Now, we can create an Employee

```php
$employee1 = new Employee('Sara', 'sara@gmail.com', '1password','Manager');
echo $employee1->get_title();// Manager
```
