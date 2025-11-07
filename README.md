# Simón Dice - Juego de Memoria

Juego interactivo de memoria inspirado en el clásico "Simón Dice". El jugador debe memorizar y repetir secuencias de colores que aumentan en dificultad progresivamente.

## Descripción del Proyecto

Este proyecto es una implementación moderna del icónico juego de memoria Simón Dice, desarrollado con tecnologías web estándar. El juego presenta cuatro botones de colores (verde, rojo, amarillo y azul) que se iluminan en secuencias aleatorias. El objetivo es reproducir correctamente la secuencia mostrada, que se vuelve más larga con cada nivel superado.

## Características Principales

- **Secuencias Progresivas**: Cada nivel añade un nuevo paso a la secuencia
- **Retroalimentación Sonora**: Cada color emite un tono único generado mediante Web Audio API
- **Efectos Visuales**: Animaciones fluidas y efectos de iluminación al activar los botones
- **Sistema de Puntuación**: Puntos acumulativos basados en el nivel alcanzado
- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y escritorio
- **Sin Almacenamiento**: El estado del juego se gestiona únicamente en memoria durante la ejecución

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica del juego
- **CSS3**: Estilos modernos con gradientes, transiciones y animaciones
- **JavaScript (ES6+)**: Lógica del juego con arquitectura modular
- **Vite**: Herramienta de desarrollo y construcción
- **Web Audio API**: Generación de sonidos en tiempo real

## Estructura del Proyecto

```
├── index.html          # Estructura HTML principal
├── src/
│   ├── main.js        # Punto de entrada y manejo de eventos
│   ├── game.js        # Lógica del juego y gestión de secuencias
│   ├── sound.js       # Gestión de audio con Web Audio API
│   └── styles.css     # Estilos y diseño visual
├── package.json       # Dependencias y scripts
└── README.md          # Documentación del proyecto
```

## Instalación y Uso

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm (gestor de paquetes de Node.js)

### Instrucciones

1. Instalar dependencias:
```bash
npm install
```

2. Iniciar servidor de desarrollo:
```bash
npm run dev
```

3. Construir para producción:
```bash
npm run build
```

4. Previsualizar build de producción:
```bash
npm run preview
```

## Cómo Jugar

1. Presiona el botón **"Iniciar"** en el centro del tablero
2. Observa atentamente la secuencia de colores que se ilumina
3. Reproduce la secuencia haciendo clic en los botones en el mismo orden
4. Si aciertas, la secuencia se alargará con un nuevo color
5. Continúa hasta donde tu memoria te permita llegar
6. Si fallas, puedes reintentar o reiniciar el juego

## Sistema de Puntuación

- Nivel 1: 10 puntos
- Nivel 2: 20 puntos adicionales
- Nivel 3: 30 puntos adicionales
- Y así sucesivamente...

La puntuación aumenta multiplicando el nivel por 10 en cada ronda superada.

## Características Técnicas

### Arquitectura Modular

El código está organizado en módulos independientes que siguen el principio de responsabilidad única:

- **Game Class**: Gestiona la lógica del juego, secuencias y puntuación
- **SoundManager Class**: Maneja la generación de tonos mediante Web Audio API
- **Main Module**: Coordina la interfaz de usuario y los eventos

### Gestión de Estado

El estado del juego se mantiene en memoria durante la sesión:
- Secuencia actual de colores
- Nivel y puntuación
- Índice del jugador en la secuencia
- Estado de juego (activo/inactivo)

### Accesibilidad y UX

- Retroalimentación visual inmediata en cada interacción
- Mensajes claros de estado del juego
- Botones deshabilitados durante secuencias automáticas
- Animaciones suaves para mejor experiencia de usuario

## Desarrollador

**Analista en Sistemas**
**González César Eduardo**

📧 Email: gonzalezeduardo_31@hotmail.com
📱 Teléfono: +5493884858907

## Licencia

Este proyecto es de código abierto y está disponible bajo licencia MIT.
