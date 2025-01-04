/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

Ejemplo de funcionamiento:
createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
*/

function createFrame(names) {
    const maxNameLength = Math.max(...names.map(name => name.length));
    const borderLine = '*'.repeat(maxNameLength + 4);

    return [
        borderLine,
        ...names.map(name => `* ${name}${' '.repeat(maxNameLength - name.length)} *`),
        borderLine
    ].join('\n');
}

createFrame(['midu', 'madeval', 'educalvolpz'])

createFrame(['midu'])

createFrame(['a', 'bb', 'ccc'])

createFrame(['a', 'bb', 'ccc', 'dddd'])