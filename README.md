# Hito 4 - Pizzería Mamma Mía

Proyecto desarrollado con **React + Vite** para practicar el **consumo de APIs**. El frontend consume una API local de pizzas construida con **Node.js + Express**.

## Funcionalidades del Hito 4

- Consumo de `GET http://localhost:5000/api/pizzas` desde `Home.jsx`.
- Uso de `useEffect`, `useState` y `fetch`.
- Renderizado de tarjetas de pizzas.
- Vista de una pizza individual mediante `GET http://localhost:5000/api/pizzas/p001`.
- Visualización de nombre, precio, ingredientes, imagen y descripción.
- Navegación simple entre Home y la vista individual de pizza.
- Vistas de Login y Register heredadas de hitos anteriores.
- Total del carrito inicializado en `$0`.
- Imágenes locales de respaldo cuando las imágenes externas de la API no están disponibles.

## Estructura

```text
Hito-4-Pizzeria-Mamma-Mia/
├── frontend/   # React + Vite
├── backend/    # Node.js + Express
├── .gitignore
└── README.md
```

## Requisitos

- Node.js 18 o superior
- npm

## Ejecutar el backend

```bash
cd backend
npm install
npm start
```

El backend quedará disponible en:

```text
http://localhost:5000
```

Endpoint principal:

```text
http://localhost:5000/api/pizzas
```

> En macOS, si el puerto 5000 está ocupado por AirPlay/Control Center, desactiva temporalmente Receptor AirPlay o cambia el puerto del backend y actualiza las URLs del frontend.

## Ejecutar el frontend

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite mostrará la dirección local, normalmente:

```text
http://localhost:5173
```

## Variables de entorno

El archivo `.env` no se incluye en el repositorio. Si necesitas las funciones JWT del backend, copia:

```text
backend/.env.example
```

como:

```text
backend/.env
```

y define una clave segura para `JWT_SECRET`.

## Subir a GitHub

Desde la carpeta raíz del proyecto:

```bash
git init
git add .
git commit -m "Hito 4 - Consumo de APIs con React"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/hito-4-pizzeria-mamma-mia.git
git push -u origin main
```
