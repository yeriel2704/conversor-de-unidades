# Conversor de Monedas

Un conversor de monedas simple y elegante desarrollado con HTML, CSS y JavaScript. Esta aplicación web permite convertir entre diferentes monedas de manera rápida y eficiente.

## 🚀 Características

- Interfaz de usuario moderna y responsiva
- Conversión en tiempo real entre múltiples monedas
- Soporte para las siguientes monedas:
  - NIO (Córdoba nicaragüense)
  - USD (Dólar Estadounidense)
  - EUR (Euro)
  - GBP (Libra Esterlina)
  - JPY (Yen Japonés)
  - MXN (Peso Mexicano)
- Botón de intercambio rápido entre monedas
- Muestra la tasa de cambio actual
- Diseño intuitivo y fácil de usar

## 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome (para iconos)
- API de tasas de cambio

## 📋 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para obtener las tasas de cambio actualizadas)

## 💻 Cómo Usar

1. Abre el archivo `index.html` en tu navegador web
2. Ingresa la cantidad que deseas convertir
3. Selecciona la moneda de origen en el menú desplegable "De:"
4. Selecciona la moneda de destino en el menú desplegable "A:"
5. Haz clic en el botón "Convertir" o presiona Enter
6. El resultado se mostrará automáticamente con la tasa de cambio actual

### 🔄 Intercambio Rápido

- Puedes intercambiar rápidamente las monedas de origen y destino usando el botón circular con el icono de intercambio

## 🎨 Estructura del Proyecto

```
conversor-de-monedas/
├── index.html      # Estructura principal de la aplicación
├── styles.css      # Estilos y diseño de la interfaz
├── script.js       # Lógica de conversión y funcionalidad
└── README.md       # Documentación del proyecto
```

## 🔄 Funcionamiento

1. La aplicación utiliza una API de tasas de cambio para obtener los valores actualizados
2. Los cálculos se realizan en tiempo real
3. La interfaz se actualiza automáticamente al realizar cambios
4. Los resultados se muestran con dos decimales para mayor precisión

## 📱 Diseño Responsivo

- La aplicación se adapta a diferentes tamaños de pantalla
- Interfaz optimizada para dispositivos móviles y de escritorio
- Diseño limpio y minimalista

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto:

### 🍴 Cómo Forkear el Proyecto

1. Ve al repositorio principal en GitHub
2. Haz clic en el botón "Fork" en la esquina superior derecha
3. Selecciona tu cuenta de GitHub como destino del fork
4. Espera a que se complete el proceso de forking
5. Clona tu fork localmente:
   ```bash
   git clone https://github.com/tu-usuario/conversor-de-monedas.git
   cd conversor-de-monedas
   ```
6. Configura el repositorio remoto original:
   ```bash
   git remote add upstream https://github.com/usuario-original/conversor-de-monedas.git
   ```
7. Mantén tu fork actualizado:
   ```bash
   git fetch upstream
   git merge upstream/main
   ```

### 📤 Publicar en GitHub Pages

1. Ve a la configuración de tu repositorio en GitHub
2. En el menú lateral, haz clic en "Pages"
3. En la sección "Source", selecciona:
   - Branch: `main` (o la rama que desees publicar)
   - Folder: `/ (root)`
4. Haz clic en "Save"
5. Espera unos minutos mientras GitHub Pages procesa tu sitio
6. Tu sitio estará disponible en: `https://tu-usuario.github.io/conversor-de-monedas/`

Nota: Si tu repositorio es privado, necesitarás una cuenta de GitHub Pro para usar GitHub Pages.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## ✨ Créditos

- Iconos proporcionados por [Font Awesome](https://fontawesome.com/)
- Tasas de cambio proporcionadas por [API de tasas de cambio](https://exchangerate.host/)
