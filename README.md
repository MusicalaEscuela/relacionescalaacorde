# MusiMapa Armónico

Aplicativo web interactivo para explicar y practicar la relación **Escala–Acorde** para cualquier instrumento.

Está pensado para clases de teoría, armonía, improvisación, composición o práctica autónoma. No depende de piano, guitarra ni digitaciones específicas: trabaja con notas, grados, funciones y colores.

## Cómo usarlo

1. Descomprime el ZIP.
2. Abre `index.html` en cualquier navegador moderno.
3. También puedes subir la carpeta completa a Firebase Hosting, GitHub Pages, Netlify, Vercel o cualquier hosting estático.

No requiere instalación, base de datos ni npm. La humanidad puede descansar tres segundos.

## Secciones incluidas

### 1. Explorador escala–acorde
Permite seleccionar:

- Tónica del acorde
- Tipo de acorde
- Tónica de la escala
- Escala o modo

La app muestra:

- Notas de la escala clasificadas como notas del acorde, tensiones disponibles, tensiones fuertes o notas de cuidado.
- Porcentaje de compatibilidad.
- Explicación pedagógica de por qué funciona o por qué choca.
- Ruta de práctica.

### 2. Comparador
Compara varias escalas sobre un mismo acorde para entender diferentes colores posibles.

Ejemplo: sobre `G7` puedes comparar mixolidio, blues, alterada y disminuida semitono-tono.

### 3. Escala → Acordes
Construye acordes diatónicos desde una escala seleccionada usando apilamiento por terceras.

Incluye:

- Grados
- Triadas
- Acordes con séptima
- Notas de cada acorde

### 4. Progresiones
Incluye rutas armónicas listas para estudiar:

- ii–V–I mayor
- I–vi–IV–V pop
- iiø–V7–i menor
- Blues I7–IV7–V7
- Vamp dórico i–IV

Cada progresión muestra acordes, escalas sugeridas, notas guía y una forma de practicar.

### 5. Modo práctica
Genera preguntas interactivas sobre:

- Función de una nota dentro de una escala sobre un acorde
- Escalas compatibles
- Acordes diatónicos
- Colores armónicos
- Fórmulas de escalas

Guarda puntaje y racha en `localStorage` del navegador.

### 6. Biblioteca
Referencia rápida de escalas y acordes con buscador.

## Estructura del proyecto

```txt
musimapa-armonico/
├── index.html
├── styles.css
├── app.js
├── manifest.json
├── README.md
└── assets/
    └── logo.svg
```

## Personalización rápida

### Cambiar nombre
En `index.html`, busca `MusiMapa Armónico` y cambia el texto.

### Cambiar colores
En `styles.css`, modifica las variables al inicio:

```css
:root {
  --primary: #6d28d9;
  --primary-2: #a855f7;
  --blue: #0ea5e9;
}
```

### Agregar escalas
En `app.js`, edita el objeto `SCALE_TYPES`:

```js
miEscala: {
  label: "Mi escala",
  short: "Mi escala",
  intervals: [0, 2, 4, 7, 9],
  degrees: ["1", "2", "3", "5", "6"],
  formula: "1 2 3 5 6",
  mood: "descripción sonora",
  use: "uso pedagógico"
}
```

### Agregar acordes
En `app.js`, edita el objeto `CHORD_TYPES`:

```js
miAcorde: {
  label: "Mi acorde",
  symbol: "add11",
  intervals: [0, 4, 7, 5],
  formula: "1 3 5 11",
  family: "major",
  use: "descripción de uso"
}
```

## Recomendación pedagógica

Úsalo con esta secuencia:

1. Acorde: identificar notas estructurales.
2. Escala: reconocer territorio completo.
3. Clasificación: diferenciar reposo, color y tensión.
4. Progresión: practicar movimiento armónico real.
5. Improvisación: crear frases cortas terminando en notas del acorde.

## Próximas mejoras sugeridas

- Audio real de acordes y escalas con Web Audio API.
- Modo profesor con creación de ejercicios personalizados.
- Exportar ejercicios a PDF.
- Login de estudiantes y progreso en Firebase.
- Banco de progresiones editable.
- Entrenamiento auditivo de tensiones.

## Licencia sugerida

Uso interno educativo para Musicala. Si se publica comercialmente, conviene agregar una licencia formal y créditos.
