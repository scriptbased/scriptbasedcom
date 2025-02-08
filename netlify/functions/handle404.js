import type {Config, Context} from '@netlify/functions'

export default async function(_ : Request, context : Context) {
  const res = await context.next()
  return new Response(res.body, {
    headers: res.headers,
    status: 404
  })
}

export const config : Config = {
  path: '/404.html' // Change this to your 404 page's path
}