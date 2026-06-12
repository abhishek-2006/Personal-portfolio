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
      filePath: 'app/page.jsx',
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: '/about',
      filePath: 'app/about/page.jsx',
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: '/skills',
      filePath: 'app/skills/page.jsx',
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: '/projects',
      filePath: 'app/projects/page.jsx',
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: '/games',
      filePath: 'app/games/page.jsx',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/tictactoe',
      filePath: 'app/tictactoe/page.jsx',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/chess',
      filePath: 'app/chess/page.jsx',
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: '/contact',
      filePath: 'app/contact/page.jsx',
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