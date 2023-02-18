# PHP - Español

> Este tutorial para principiantes de php es de [este video](https://www.youtube.com/watch?v=BUCiSSyIGGU) y este es el [repositorio original](https://github.com/Olivertraversy/php-crash)

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
function nombre ($argumento) {
  // código a ejecutar
}

nombre(parameter);
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

Para este ejemplo, dividiremos el array en dos partes, pero se pude hacer en cuantas partes se quiera y pueda.

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

Para combinar estos dos arrays, usamos la función `array_combine()`:

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

Si tenemos texto que tuviera una parte fija y otra que cambia dependiendo del dato, podemos usar la función `printf()` , que podemos usar con una subcadena :

```php
printf('A %s le gusta %s','Juan','zonabit');
// A Juan le gusta zonabit
```

El `%s` es la sustitución de la cadena. Ahora, veamos un ejemplo con números:

```php
printf('1+1=%d',1+2);
// 1+1=3
```

En este caso, el `%d` reemplaza el número pasado como argumento.

### Manejar cadenas de html

Si hacemos un `echo` de cualquier etiqueta html, como `h1` o `hr`, se visualizará como html normal ya que no se 'parsea'.

Esto, en términos de seguridad, teniendo un formulario o algo parecido pude ser muy peligroso, ya que si hacemos lo siguiente:

```php
echo '<script>alert(1)</script>';
```

El `script` se ejecutará como si fuera una etiqueta `script` normal.

A primera vista puede parecer un gran problema, pero si tenemos algún `input` como hemos dicho anteriormente, y hacemos un `echo` del valor dado por el usuario en ese `input`, si pone su nombre, el resultado sería algo como esto:

```php
$valor_input = 'Felipe';

echo $valor_input;// Felipe
```

Pero, si ponemos un `script` en el campo del `field`, se interpretará como html normal.

```php
$valor_input = '<script>alert(10)</script>';

echo $valor_input;
// esto dará una alerta en el navegador
```

Imagina que todos los usuarios pueden ejecutar cualquier JavaScript y cambiar la funcionalidad de tu web, e incluso peor, !cambiar o borrar información importante como la guardada en tu base de datos!

Para este problema tenemos vamos a ver dos formas de arreglarlo:

- Caracteres especiales de Html (Html Special Chars)
  :
  ```php
  echo htmlspecialchars($valor_input);
  // <script>alert(1)</script>
  ```
- Entidades Html (Html Entities)
  :
  ```php
  echo htmlentities($valor_input);
  // <script>alert(1)</script>
  ```

## Superglobales

Ya hemos visto que en php hay algunas funciones incorporadas por defecto ('built in'), pero también hay variables por defecto, que son variables que están disponibles en cualquier ámbito o scope (dentro y fuera de una función). Normalmente empiezan con `$_` todas con arrays :

- `$_GET`
  : Contiene información sobre variables pasadas por URL o por un formulario con el método 'get'.
- `$_POST`
  : Contiene información sobre variables pasadas por un formulario con el método 'post'.
- `$_COOKIE`
  : Contiene información sobre variables pasadas por cookies.
- `$_SESSION`
  : Contiene información sobre variables pasadas por sesiones.
- `$_SERVER`
  : Contiene información sobre el entorno del servidor.
- `$_ENV`
  : Contiene información sobre las variables de entorno.
- `$_FILES`
  : Contiene información sobre archivos subidos al script.
- `$_REQUEST`
  : Contiene información sobre variables pasadas por un formulario o URL.

## GET y POST

En la sección de [manejar cadenas de html](#manejar-cadenas-de-html) hemos hablado de 'inputs' y recoger datos que le usuario escribe. Para hacer eso necesitaremos los superglobales.

Podemos pasar datos a través de las urls (`$_GET`) y formularios (`$_GET`, `$_POST`) usando estos superglobales.

### GET

`$_GET` puede leer datos desde un formulario y una url.

Si tenemos algún argumento que queremos pasar a través de páginas, podemos añadirlo al atributo `href` de la etiqueta `<a>` así:

```php
<a href="/perfil.php?nombre=Oliver">Pulsa</a>
```

En esa pieza de código, estamos diciendo que queremos ir a esta url:

`/perfil.php?nombre=Oliver`

Si echamos un vistazo, tenemos un atributo `nombre` que es igualado a `Oliver`, que es el atributo que se leerá en el `$_GET`.
Y como es una url válida, irá a esa página.

Ahora, en el archivo **perfil.php**, tenemos el `$_GET` preparado, escuchando por el atributo nombre:

```php
<?php
  echo $_GET['nombre'];
  // Oliver
?>
```

El `$_GET` lee el atributo `nombre` desde la url.

Si queremos añadir más datos, podemos usar el `&` :

```php
<a href="/perfil.php?nombre=Oliver&activo=true">Pulsa</a>
```

Y, en el archivo **perfil.php** :

```php
<?php
  echo $_GET['nombre'];
  echo $_GET['activo'] ? 'está activo' : 'no está activo';
?>
// Oliver está activo
```

Ahora, intentemos esto con formularios.

Primero, necesitaremos construir nuestro formulario:

```php
<form>
  <label>Nombre :</label>
  <input type="text" />
  <br />
  <label>Edad</label>
  <input type="number" />
  <br />
  <input type="submit" />
</form>
```

Este es un formulario normal, pero como estamos trabajando con PHP, necesitamos añadir ciertos atributos al formulario:

```php
<form action="/perfil.php" method="GET">
  <label>Nombre :</label>
  <input type="text" name="nombre" />
  <br />
  <label>Edad</label>
  <input type="number" name="edad" />
  <br />
  <input type="submit" name="submit" />
</form>
```

Hemos añadido unas cuantas cosas :

- name
  : para permitir a `$_POST` y `$_GET` leer el valor cuando se envié.
- method
  : para especificar si lo queremos con POST o GET cuando se envié (por defecto es GET).
- action
  : esto especifica el archivo php al que se le enviarán los datos (con '/' envía la información a si mismo).

Ahora, si pulsamos el botón de enviar, seremos redirigidos al archivo `perfil.php`, y se le pasarán los datos :

```php
<?php
  echo $_GET['nombre'];
  echo '<br/>';
  echo $_GET['edad'];
?>
// Oliver
// 30
```

La edad y nombre vienen del atributo `name` de cada input.

Pero, si miramos a la url del perfil.php, veremos algo como esto :

```
/perfil.php?nombre=Oliver&edad=30&submit=Submit
```

Esto no queda muy limpio, es por ello por lo que usamos el método POST y el `$_POST` para obtener los datos de forma más limpia y amigable con la url.

### POST

`$_POST` solo es usado con formularios ya que no tiene acceso a los parámetros de la url.

Para usarlo, solo cambiamos el atributo `method` en la función que envía los datos :

```php
<form action="perfil.php" method="POST">
    <label>Nombre :</label>
    <input type="text" name="nombre" />
    <br />
    <label>Edad</label>
    <input type="number" name="edad" />
    <br />
    <input type="submit" name="submit" />
</form>
```

Y, tenemos que cambiar el `$_GET` del archivo **perfil.php** por el `$_POST` donde aparezca :

```php
<?php
  echo $_POST['nombre'];
  echo '<br/>';
  echo $_POST['edad'];
?>
// Oliver
// 30
```

Ahora, tenemos el mismo resultado que antes, pero con una url mucho más limpia.

### Problema del 'Undefined array key'

Si probamos los métodos GET y POST en nuestro propio archivo, o intentamos acceder a ellos directamente desde la url del archivo **perfil.php**, veremos este error :

```
Warning: Undefined array key "nombre" in /var/www/html/perfil.php on line 14
```

Esto ocurre porque a la hora de hacer la primera petición al servidor, no hay ningún parámetro `nombre` ni tampoco ningún atributo por url, así que es indefinido ('undefined').

Pero, ¿Cómo podemos evitar esto?, porqué está claro que la primera vez que cargue la página , no habrá ningún atributo definido.

La forma de solucionar este error es con la función `isset()` :

```php
<?php
if(isset($_POST['submit'])){
  echo $_POST['nombre'];
  echo '<br/>';
  echo $_POST['edad'];
}
?>
```

## Agregar seguridad

Hemos hablado antes sobre algunos [riesgos en la seguridad](#manejar-cadenas-de-html) que pueden conllevar los inputs, así que vamos a profundizar en este tema añadiendo formas para hacer los inputs más seguros.

Aparte del `htmlspecilchars` o `htmlentities` podemos usar otra función por defecto llamada `filter_input()`.

Esta función necesitas 3 argumentos:

1. El tipo, que solo puede ser uno de estos :

   - INPUT_GET
   - INPUT_POST
   - INPUT_COOKIE
   - INPUT_SERVER
   - INPUT_ENV

   Cada uno corresponde a una [variable superglobal](#superglobales). En nuestro caso, como tenemos el método POST, usaremos el `INPUT_POST`.

2. El nombre de la variable :

   Este es el nombre de la variable, que va dentro de los corchetes (`[]`) después del `$_POST`.

   En este caso, como solo vamos a añadir seguridad al input del nombre, el nombre que le pasaremos será `nombre`.

3. El filtro :

   En este argument, necesitamos especificar el ID del filtro que aplicar.

   En nuestro caso, usaremos el `FILTER_SANITIZE_SPECIAL_CHARS`.

Una vez hecho esto, el resultado sería algo como esto :

```php
<?php
if (isset($_POST['submit'])) {
  $nombre = filter_input(INPUT_POST, 'nombre', FILTER_SANITIZE_SPECIAL_CHARS);
  echo $nombre;
  echo '<br/>';
  echo $_POST['edad'];
}
?>
```

Otra forma de añadir seguridad a los inputs es usando la función `filter_var()`, que es parecida a `filter_input()`, pero esta puede ser usada con más cosas aparte de inputs.

Un ejemplo :

```php
<?php
if (isset($_POST['submit'])) {
  $nombre = filter_var($_POST['nombre'], FILTER_SANITIZE_SPECIAL_CHARS);
  echo $nombre;
  echo '<br/>';
  echo $_POST['edad'];
}
?>
```

## Cookies

Las cookies son un mecanismo para guardar datos en el navegador e identificar de vuelta a los usuarios. Puedes poner datos específicos para que sean guardados en el navegador in the browser, y volver a cogerlos cuando el usuario vuelva a visitar la página.

### Crear una cookie

Para crear una cookie, necesitaremos 3 parámetros:

- Key
  : Para referenciar la cookie en un futuro.
- Valor
  : El valor que tendrá la cookie.
- Tiempo de expiración
  : Cuándo queremos que esa cookie caduque.

Un ejemplo :

```php
setcookie('nombre','Oliver',time()+86400);
// hemos puesto la cookie para un día
```

### Leer una cookie

Para esto usaremos La variable superglobal `$_COOKIE`:

```php
if(isset($_COOKIE['nombre'])){
  echo $_COOKIE['nombre'];
}
```

### Borrar una cookie

Borrar una cookie es tan simple y lógico como ponerle una fecha de expiración pasada:

```php
setcookie('nombre','',time()-86400);
```

## Sesiones

Las sesiones son una forma de guardar información (en variables) para usarlas a través de multiples páginas.

A diferencia de las cookies, las sesiones son guardadas en el servidor y no en el cliente.

Primero de todo, para poder usar sesiones en cualquier archivo php, necesitamos indicar un "inicializador" :

```php
<?php
session_start();
// código
?>
```

### Crear una sesión

```php
$nombre_usuario = $_POST["nombre_usuario"];
$_SESSION['nombre_usuario'] = $nombre_usuario;
```

### Leer una sesión

```php
$nombre_usuario = $_SESSION['nombre_usuario'];
```

### Borrar una sesión

```php
session_destroy();

// podemos redirigir a otra página
header('Location:/index.php');
```

## Manejo de archivos

El manejo de archivos es la habilidad de leer y escribir archivos en el servidor.

PHP tiene funciones por defecto para leer y escribir archivos.

Primero, necesitamos crear un archivo, que vamos a llamar `usuarios.txt`, que tendrá el siguiente contenido :

```txt
Oliver
Juan
Sara
Esteban
Enrique
```

También crearemos una variable llamada `archivop` que contendrá la ruta de `usuarios.txt` :

```php
$archivop = './usuarios.txt';
```

### ¿Existe el archivo?

```php
file_exists($archivop);
```

### Leer el archivo

```php
echo readfile($archivop);
// Oliver Juan Sara Esteban Enrique
```

Otra forma de leer un archivo es con el `fread()`, que necesita 2 argumentos : el stream y la longitud (length) :

```php
$handle = fopen($archivop,'r');
// r significa abrir el archivo solo para leer (read)
$contents = fread($handle,filesize($archivop));
fclose($handle);
echo $contents;
// Oliver Juan Sara Esteban Enrique
```

### Escribiendo en un archivo

```php
$handle = fopen($archivop,'w');
// w significa abrir el archivo para escribir (write)
$contents = 'Oliver Juan Miguel';
fwrite($handle,$contents);
fclose($handle);
```

Si queremos saltos de linea, podemos usar `PHP_EOL`:

```php
$handle = fopen($archivop,'w');
// w significa abrir el archivo para escribir (write)
$contents = 'Oliver'.PHP_EOL.'Juan'.PHP_EOL.'Miguel';
fwrite($handle,$contents);
fclose($handle);
```

## Subir archivos

Para subir un archivo, primero necesitamos un formulario, así que, vamos a crearlo :

```php
<form action="/" method="POST" enctype="multipart/form-data">
    Selecciona una imagen para subir:
    <input type="file" name="subida">
    <br />
    <input type="submit" name="submit" value="Submit" />
</form>
```

Algo muy importante a la hora de subir archivos es que el atributo `enctype` debe estar indicado, si no está puesto, no funcionará.

Para la subida de archivos, usaremos uno de los [superglobales](#superglobales), el superglobal `$_FILES`.

En este caso, necesitaremos el directorio objetivo y el directorio temporal (tmp) del archivo. Este último viene por defecto en el `$_FILES`.

```php
$archivo_nombre = $_FILES['subida']['name']
$dir_objetivo = "subidas/{$archivo_nombre}";
$archivo_tmp = $_FILES['subida']['tmp_name'];

move_uploaded_file($archivo_tmp,$dir_objetivo);
```

## Excepciones

PHP tiene un modelo de excepciones parecido a otros lenguajes de programación. Un excepción puede ser lanzada, y cogida ("cached") dentro de PHP. EL código puede estar rodeado por un bloque `try`, para facilitar el cacheo ('guardado en cache') de potenciales excepciones. Cada `try` debe tener al menos un `catch` o bloque final correspondiente.

Por ejemplo, queremos lanzar un error si intentamos dividir por 0:

```php
function inverso($x) {
  if(!$x) {
    throw new Exception('División por 0');
  }
  return 1/$x;
}

echo inverso(10); // 0.1
echo inverso(0);
// Fatal error: Uncaught Exception: División por 0
```

Pero hagamos algo con la excepción.

Haremos un `echo` dentro del bloque `try...catch` y veamos que pasa :

```php
try {
  echo inverso(10);
  echo inverso(0);
} catch (Exception $e) {
  echo ' Excepción ', $e->getMessedad();
}
// 0.1 Excepción División por 0
```

También tenemos el bloque final (`finally`), que es agnóstico sobre lo que pase en el bloque `try...catch` :

```php
try {
  echo inverso(10);
  echo inverso(0);
} catch (Exception $e) {
  echo ' Excepción ', $e->getMessedad();
} finally {
  echo ' ¡Finalmente!';
}
// 0.1 Excepción División por 0 ¡Finalmente!
```

## POO

Desde PHP5 en adelante se puede escribir PHP de forma funcional o orientada a objetos. La POO consiste en clases que pueden tener "propiedades" y "métodos".Los Objetos pueden ser creados a partir de clases.

Vamos a crear usuarios con POO:

```php
class Usuario {
  public $nombre;
  public $email;
  public $contra;
}
```

Esas son propiedades, que son atributos que pertenecen a una clase.

Ahora, podemos instanciar un objeto del usuario :

```php
$usuario1 = new Usuario();

var_dump($usuario1);
// object(Usuario)#1 (3) { ["nombre"]=> NULL ["email"]=> NULL ["contra"]=> NULL }
```

Todo es `NULL` (nulo) porque no hemos especificado esos valores, por lo tanto, vamos a crearlos :

```php
$usuario1 = new Usuario();
$usuario1->nombre = 'Federico';
$usuario1->email = 'fedevalverde@gmail.com';
$usuario1->contra = '1234';
print_r($usuario1);
// Usuario Object ( [nombre] => Federico [email] => fedevalverde@gmail.com [contra] => 1234 )
```

### Modificadores de acceso

Hay 3 tipos de modificadores de acceso :

- Public (público)
  : puede ser accedido desde cualquier parte.
- Private (privado)
  : solo puede ser accedido desde dentro de la clase.
- Protected (protegidos)
  : solo puede ser accedido desde dentro de la clase y clases heredadas.

### Método

El método ('method') es una función que pertenece a una clase.

```php
class Usuario {
  public $nombre;
  public $email;
  public $contra;
  function set_nombre($nombre){
    $this->nombre = $nombre;
  }
}
```

Ahora, podemos acceder a esa función desde fuera de la clase :

```php
$usuario2 = new Usuario();

$usuario2->set_nombre('Oliver');

var_dump($usuario2);
// object(Usuario)#2 (3) { ["nombre"]=> string(4) "Oliver" ["email"]=> NULL ["contra"]=> NULL }
```

### Constructor

Un constructor es un método que se ejecuta cuando un objeto es creado.

```php
class Usuario {
  public $nombre;
  public $email;
  public $contra;
  public function __construct($nombre,$email,$contra){
    $this->nombre = $nombre;
    $this->email = $email;
    $this->contra = $contra;
  }
}
```

Ahora, gracias al constructor, cuando instanciemos a algún Usuario podemos pasarle esos valores :

```php
$usuario1 = new Usuario('Oliver','oliver@gmail.com','securePassword');
$usuario2 = new Usuario('Federico','fedevalverde@gmail.com','1234');

print_r($usuario1);
// Usuario Object ( [nombre] => Oliver [email] => oliver@gmail.com [contra] => securePassword )
echo '<br/>';
print_r($usuario2);
// Usuario Object ( [nombre] => Federico [email] => fedevalverde@gmail.com [contra] => 1234 )
```

### Herencia

Esto es cuando una clase pertenece a otra clase

```php
class Trabajador extends Usuario{
  public function __construct($nombre,$email,$contra,$titulo){
    parent::__construct($nombre,$email,$contra);
    $this->titulo = $titulo;
  }
  function get_titulo(){
    return $this->titulo;
  }
}
```

Ahora, podemos crear un Trabajador:

```php
$trabajador1 = new Trabajador('Sara', 'sara@gmail.com', '1password','Informática');
echo $trabajador1->get_titulo();// Informática
```
