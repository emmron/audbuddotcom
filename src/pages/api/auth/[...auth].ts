import type { APIRoute } from 'astro'
import { Auth } from '@auth/core'
import { authConfig } from '../../../auth'

export const all: APIRoute = async ({ request }) => {
  return await Auth(request, authConfig)
} 