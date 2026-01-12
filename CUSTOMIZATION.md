# Guia de Customização - Pedro Cavve Site

## 🎯 Próximos Passos

### 1. Adicionar Suas Imagens

#### Hero Background

1. Coloque uma imagem artística na pasta `public/` (ex: `hero-bg.jpg`)
2. Edite [components/Hero.tsx](components/Hero.tsx), linha 7-9:

```tsx
<div className="absolute inset-0 z-0">
  <div className="absolute inset-0 bg-gradient-to-b from-midnight-blue/90 via-deep-black/80 to-deep-black z-10" />
  <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
</div>
```

#### Bio Portrait

1. Adicione sua foto em `public/` (ex: `artist-portrait.jpg`)
2. Edite [components/Bio.tsx](components/Bio.tsx), linha 10-12:

```tsx
<div className="aspect-square bg-graphite-light rounded-sm overflow-hidden">
  <img
    src="/artist-portrait.jpg"
    alt="Pedro Cavve"
    className="w-full h-full object-cover"
  />
</div>
```

#### Single Cover

1. Adicione a capa do single em `public/` (ex: `single-cover.jpg`)
2. Edite [components/MusicHighlight.tsx](components/MusicHighlight.tsx), linha 18-23:

```tsx
<div className="aspect-square bg-gradient-to-br from-dark-brown to-midnight-blue rounded-sm overflow-hidden">
  <img
    src="/single-cover.jpg"
    alt="Nome do Single"
    className="w-full h-full object-cover"
  />
</div>
```

### 2. Atualizar Informações do Single

Edite [components/MusicHighlight.tsx](components/MusicHighlight.tsx):

```tsx
<h3 className="text-3xl md:text-4xl font-light text-white mb-2">
  Nome Real do Seu Single
</h3>

<p className="text-subtle-gray leading-relaxed">
  Descrição real e envolvente sobre o single
</p>

<a href="https://open.spotify.com/track/SEU_TRACK_ID" ...>
  Ouvir no Spotify
</a>
```

### 3. Configurar Links das Plataformas

Edite [components/Platforms.tsx](components/Platforms.tsx), linhas 3-16:

```tsx
const platforms = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/SEU_ID",
    description: "Ouça minhas músicas",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@pedrocavve",
    description: "Videoclipes e conteúdo",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/pedrocavve",
    description: "Acompanhe o dia a dia",
  },
];
```

### 4. Atualizar Contatos no Footer

Edite [components/Footer.tsx](components/Footer.tsx):

```tsx
<a href="https://instagram.com/SEU_INSTAGRAM">
  Instagram
</a>

<a href="mailto:SEU_EMAIL@exemplo.com">
  seu_email@exemplo.com
</a>
```

### 5. Personalizar Bio

Edite [components/Bio.tsx](components/Bio.tsx), linhas 23-36:

Substitua os parágrafos placeholder pela sua história real.

### 6. SEO e Metadata

Edite [app/layout.tsx](app/layout.tsx), linhas 4-15:

```tsx
export const metadata: Metadata = {
  title: "Pedro Cavve | R&B • Soul • Pop Contemporâneo",
  description: "Sua descrição otimizada para SEO",
  keywords: ["Pedro Cavve", "R&B", "Soul", "Pop", ...],
};
```

## 🎨 Ajustes de Design

### Alterar Cores

Edite [tailwind.config.ts](tailwind.config.ts), linhas 11-18 para modificar a paleta de cores.

### Modificar Animações

Edite [tailwind.config.ts](tailwind.config.ts), linhas 24-42 para ajustar timing e estilos de animação.

### Ajustar Tipografia

Edite [app/globals.css](app/globals.css), linha 5 para mudar a fonte principal.

## 🚀 Deploy

### Vercel (Recomendado)

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Deploy automático! ✨

### Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Testar build localmente
npm start

# Limpar cache
rm -rf .next
npm run build
```

## 📱 Responsividade

O site já está otimizado para:

- Desktop (1920px+)
- Laptop (1366px)
- Tablet (768px)
- Mobile (375px+)

Todas as seções usam classes responsivas do Tailwind (`md:`, `lg:`).

## 🎯 Próximas Funcionalidades (Expansão Futura)

- [ ] Seção de agenda/shows
- [ ] Galeria de fotos
- [ ] Press kit downloadável
- [ ] Loja de merchandise
- [ ] Newsletter signup
- [ ] Seção de vídeos
- [ ] Player de música integrado

## 💡 Dicas

- **Imagens**: Use formatos WebP para performance
- **Resolução**: Hero bg mínimo 1920x1080px
- **Otimização**: Next.js otimiza imagens automaticamente com `next/image`
- **Testes**: Sempre teste em mobile antes do deploy

---

**Desenvolvido com foco em identidade artística premium**
