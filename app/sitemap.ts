import { MetadataRoute } from 'next'
import fs from 'fs';
import path from 'path';

function getLastModified(filePath: string) {
  const fullPath = path.join(process.cwd(), filePath)

  try {
    const stats = fs.statSync(fullPath)
    return stats.mtime
  } catch {
    return new Date()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://abhishekshah-portfolio.vercel.app'

  const routes = [
    {
      url: '/',
      filePath: 'src/app/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: '/about',
      filePath: 'src/app/about/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: '/skills',
      filePath: 'src/app/skills/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: '/projects',
      filePath: 'src/app/projects/page.tsx',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: '/games',
      filePath: 'src/app/games/page.tsx',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/tictactoe',
      filePath: 'src/app/tictactoe/page.tsx',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/chess',
      filePath: 'src/app/chess/page.tsx',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/contact',
      filePath: 'src/app/contact/page.tsx',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: getLastModified(route.filePath),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}