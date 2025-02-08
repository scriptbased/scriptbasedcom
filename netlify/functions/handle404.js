export default async function handler(request, context) {
    const res = await context.next();
    return new Response(res.body, {
      headers: res.headers,
      status: 404,
    });
  }
  
  export const config = {
    path: '/404.html', // Change this to your 404 page's path
  };