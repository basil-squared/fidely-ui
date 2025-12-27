import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    short_name: 'Fidely UI',
    name: 'Fidely UI – React Design System',
    description:
      'Fidely UI is a modern, beautifully crafted React design system powered by Ark UI and Panda CSS, delivering accessible and themeable components for building exceptional web apps.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    theme_color: '#FFF',
    background_color: '#000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '192x192',
        type: 'image/x-icon',
      },
    ],
  }
}
