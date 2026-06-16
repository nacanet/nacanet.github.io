# nacanet.es — portfolio

Web estática (HTML + CSS, sin build) para GitHub Pages con dominio `nacanet.es`.

## Estructura
```
index.html      → página
style.css       → estilos + fondo animado
assets/logo.png → logo
CNAME           → dominio personalizado (nacanet.es)
```

## Desplegar en GitHub Pages

1. Crea un repositorio en GitHub llamado **`nacanet.github.io`**.
2. Sube estos archivos (Add file → Upload files, o por git):
   ```bash
   git init
   git add .
   git commit -m "Portfolio nacanet.es"
   git branch -M main
   git remote add origin https://github.com/nacanet/nacanet.github.io.git
   git push -u origin main
   ```
3. En el repo: **Settings → Pages → Source: `main` / root** → Save.
4. La web estará en `https://nacanet.github.io`.

## Dominio personalizado (nacanet.es)

1. El archivo `CNAME` ya está incluido con `nacanet.es`.
2. En tu proveedor de dominio, configura el DNS:
   - 4 registros **A** apuntando a las IP de GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Un registro **CNAME** para `www` → `nacanet.github.io`
3. En **Settings → Pages → Custom domain** escribe `nacanet.es` y marca **Enforce HTTPS**.
4. La propagación DNS puede tardar de minutos a 24 h.
