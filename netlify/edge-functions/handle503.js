export default async (request, context) => {
  return new Response("503 - Service Unavailable", {
    status: 503,
    headers: {
      "content-type": "text/plain",
    },
  });
};