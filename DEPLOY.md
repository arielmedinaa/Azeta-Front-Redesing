# Despliegue de Azeta Vite

Tu proyecto está listo para desplegar. La carpeta `dist/` contiene los archivos optimizados para producción.

## 🌐 Opciones de Despliegue

### 1. **Vercel (Recomendado) - Gratuito**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desde la carpeta del proyecto
vercel --prod
```
- ✅ Muy fácil de usar
- ✅ HTTPS automático
- ✅ Despliegue continuo
- ✅ Dominio personalizado gratuito

### 2. **Netlify (Alternativa Gratuita)**
```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Desplegar
netlify deploy --prod --dir=dist
```

### 3. **GitHub Pages (Gratis con GitHub)**
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar script en package.json
"deploy": "gh-pages -d dist"

# Desplegar
npm run deploy
```

### 4. **Surge.sh (Rápido y Simple)**
```bash
# Instalar Surge
npm install -g surge

# Desplegar
surge dist/ nombre-unico.surge.sh
```

### 5. **Firebase Hosting**
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Inicializar y desplegar
firebase init hosting
firebase deploy
```

## 🚀 Instrucciones Rápidas (Vercel)

1. **Crear cuenta en** [vercel.com](https://vercel.com)
2. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```
3. **Iniciar sesión:**
   ```bash
   vercel login
   ```
4. **Desplegar desde el proyecto:**
   ```bash
   cd /Users/hola/CascadeProjects/azeta-vite
   vercel --prod
   ```

## 📱 Para Compartir con Colegas

Una vez desplegado, obtendrás una URL como:
- `https://azeta-vite.vercel.app`
- `https://azeta-grupo.netlify.app`

Esta URL puedes compartirla por:
- WhatsApp
- Email  
- Redes sociales
- QR code

## 🔧 Configuración Adicional

Para producción, considera:
- Agregar favicon personalizado
- Configurar meta tags para SEO
- Optimizar imágenes
- Configurar dominio personalizado

¿Cuál prefieres usar? Te puedo guiar paso a paso en la opción que elijas.
