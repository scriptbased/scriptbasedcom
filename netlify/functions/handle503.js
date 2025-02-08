export default async function handler(request, context) {
    const res = await context.next();
    return new Response(res.body, {
      headers: res.headers,
      status: 503,
    });
  }
  
  export const config = {
    path: '/public/503.html', // Change this to your 503 page's path
  };