# Especificações Técnicas - Pedro Cavve Site

## 📐 Especificações de Design

### Breakpoints Responsivos

```css
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1919px
- Large Desktop: 1920px+
```

### Espaçamento (Tailwind)

```css
- Seções: py-24 md:py-32 (96px/128px)
- Container máximo: max-w-6xl (1152px)
- Gap de grid: gap-8 md:gap-12
- Padding lateral: px-6 (24px)
```

### Paleta de Cores Completa

```css
--deep-black: #0a0a0a      (Background principal)
--graphite: #1a1a1a        (Cards e elementos)
--graphite-light: #2a2a2a  (Cards hover)
--dark-brown: #1f1814      (Acentos sutis)
--midnight-blue: #0f1419   (Overlays)
--accent-gray: #4a4a4a     (Bordas e detalhes)
--subtle-gray: #6a6a6a     (Textos secundários)
--white: #ffffff           (Textos principais)
```

### Tipografia

#### Tamanhos

```css
- Hero Title: text-6xl md:text-8xl (60px/96px)
- Section Titles: text-4xl md:text-5xl (36px/48px)
- Card Titles: text-2xl md:text-3xl (24px/30px)
- Body: text-lg (18px)
- Small: text-sm (14px)
```

#### Weights

```css
- Light: font-light (300)
- Regular: (400 - default)
- Medium: font-medium (500)
```

#### Tracking

```css
- Wide: tracking-wide (0.025em)
- Wider: tracking-wider (0.05em)
- Widest: tracking-widest (0.1em)
```

### Animações

#### Timing Functions

```css
- Default: ease (Cubic-bezier(0.25, 0.1, 0.25, 1))
- In-Out: ease-in-out
- Out: ease-out
```

#### Durations

```css
- Fast: 0.3s (transitions)
- Medium: 0.6s (slides)
- Slow: 0.8s (fades)
- Very Slow: 0.5s (hover)
```

#### Custom Animations

```css
@keyframes fadeIn {
  0%: opacity 0
  100%: opacity 1
}

@keyframes slideUp {
  0%: opacity 0, translateY(20px)
  100%: opacity 1, translateY(0)
}

@keyframes slideDown {
  0%: opacity 0, translateY(-20px)
  100%: opacity 1, translateY(0)
}
```

## 🖼️ Especificações de Imagens

### Hero Background

```
- Formato: JPG/WebP
- Resolução: 1920x1080px (mínimo)
- Peso: < 500KB (após otimização)
- Aspect: 16:9
- Mood: Noturno, cinematográfico
```

### Portrait (Bio)

```
- Formato: JPG/WebP
- Resolução: 1000x1000px
- Peso: < 300KB
- Aspect: 1:1 (quadrado)
- Mood: Intimista, profissional
```

### Single Cover

```
- Formato: JPG/WebP
- Resolução: 1400x1400px (mínimo)
- Peso: < 400KB
- Aspect: 1:1
- Padrão: Spotify artwork specs
```

### Otimização de Imagens

```bash
# Usando ImageMagick
convert input.jpg -resize 1920x1080^ -quality 85 output.jpg

# Usando WebP
cwebp -q 85 input.jpg -o output.webp
```

## 🔧 Performance

### Lighthouse Targets

```
- Performance: > 90
- Accessibility: 100
- Best Practices: 100
- SEO: 100
```

### Core Web Vitals

```
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
```

### Otimizações Implementadas

- ✅ Static Site Generation (SSG)
- ✅ CSS-in-JS com Tailwind (PurgeCSS)
- ✅ Code splitting automático (Next.js)
- ✅ Lazy loading de componentes
- ✅ Preload de recursos críticos
- ✅ Minificação automática

## 📦 Estrutura de Arquivos

```
pedro-cavve-site/
├── .github/
│   └── copilot-instructions.md
├── .next/                    # Build output (auto)
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout root + metadata
│   └── page.tsx             # Homepage
├── components/
│   ├── Bio.tsx              # Seção biografia
│   ├── Footer.tsx           # Rodapé
│   ├── Hero.tsx             # Hero section
│   ├── MusicHighlight.tsx   # Destaque de single
│   └── Platforms.tsx        # Links de plataformas
├── public/                   # Assets estáticos
│   ├── hero-bg.jpg          # (adicionar)
│   ├── artist-portrait.jpg  # (adicionar)
│   └── single-cover.jpg     # (adicionar)
├── node_modules/            # Dependências
├── .eslintrc.json          # ESLint config
├── .gitignore              # Git ignore
├── CONTENT-GUIDELINES.md   # Guia de conteúdo
├── CUSTOMIZATION.md        # Guia de customização
├── next.config.ts          # Next.js config
├── package.json            # Dependencies
├── postcss.config.mjs      # PostCSS config
├── README.md               # Documentação principal
├── TECHNICAL-SPECS.md      # Este arquivo
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json           # TypeScript config
└── vercel.json             # Vercel config
```

## 🌐 Deploy na Vercel

### Variáveis de Ambiente

Nenhuma necessária para versão atual.

### Build Settings

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

### Custom Domain

1. Vá em Settings > Domains na Vercel
2. Adicione seu domínio (ex: pedrocavve.com)
3. Configure DNS conforme instruções

### Recommended DNS

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 🔒 Segurança

### Headers (Next.js)

```typescript
// Em next.config.ts
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];
```

## 📊 Analytics (Opcional)

### Google Analytics

```typescript
// Em app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```tsx
// Em app/layout.tsx
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🧪 Testing

### Testar Build Localmente

```bash
npm run build
npm start
```

### Testar Responsividade

```
Chrome DevTools > Toggle Device Toolbar (Cmd+Shift+M)
Testar em: iPhone SE, iPad, Desktop HD
```

### Lighthouse Audit

```
Chrome DevTools > Lighthouse > Generate Report
```

## 🐛 Troubleshooting

### Tailwind não funciona

```bash
rm -rf .next
npm run dev
```

### Build fails

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Imagens não aparecem

- Verificar que estão em `/public`
- Path correto: `/image.jpg` (sem `public/`)

## 📞 Suporte Técnico

### Documentação Oficial

- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel: https://vercel.com/docs

### Comunidades

- Next.js Discord
- Tailwind Discord
- Stack Overflow

---

**Versão**: 1.0.0
**Última atualização**: Janeiro 2026
**Compatibilidade**: Next.js 15, React 19, Tailwind 3
