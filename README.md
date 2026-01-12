# Pedro Cavve - Site Oficial

Site profissional one-page para o artista Pedro Cavve (R&B, Soul, Pop Contemporâneo).

## 🎨 Características

- **Design Premium**: Estética noturna e urbana com paleta monocromática
- **Identidade Visual Forte**: Não é um linktree genérico, mas um hub artístico premium
- **Minimalismo Elegante**: Foco em espaço negativo e hierarquia tipográfica
- **Animações Sutis**: Transições suaves e hover states elegantes
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile

## 🎵 Seções

1. **Hero**: Apresentação impactante com nome em destaque
2. **Bio**: História e propósito artístico
3. **Destaque Musical**: Último lançamento com link direto para Spotify
4. **Plataformas**: Conexões para Spotify, YouTube e Instagram
5. **Footer**: Informações de contato e copyright

## 🛠️ Stack Técnica

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Otimizado para deploy na Vercel**

## 🚀 Como Executar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Build para Produção

```bash
npm run build
npm start
```

## 🎨 Paleta de Cores

- **Deep Black**: `#0a0a0a` - Background principal
- **Graphite**: `#1a1a1a` - Cards e elementos secundários
- **Dark Brown**: `#1f1814` - Acentos sutis
- **Midnight Blue**: `#0f1419` - Overlays e gradientes
- **Subtle Gray**: `#6a6a6a` - Textos secundários

## 📝 Personalização

### Atualize os links das plataformas

Edite [components/Platforms.tsx](components/Platforms.tsx):

```typescript
const platforms = [
  { name: "Spotify", url: "SUA_URL_SPOTIFY" },
  { name: "YouTube", url: "SUA_URL_YOUTUBE" },
  { name: "Instagram", url: "SUA_URL_INSTAGRAM" },
];
```

### Adicione suas imagens

1. Coloque suas imagens na pasta `public/`
2. Substitua os placeholders nos componentes Hero e Bio

### Atualize informações do single

Edite [components/MusicHighlight.tsx](components/MusicHighlight.tsx)

## 🌐 Deploy na Vercel

1. Faça push do código para GitHub
2. Importe o projeto na Vercel
3. Deploy automático!

Ou use o Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 📂 Estrutura do Projeto

```
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── Bio.tsx
│   ├── MusicHighlight.tsx
│   ├── Platforms.tsx
│   └── Footer.tsx
├── public/
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 📱 Contato

- Instagram: [@pedrocavve](https://instagram.com/pedrocavve)
- Email: contato@pedrocavve.com

---

© 2026 Pedro Cavve. Todos os direitos reservados.
