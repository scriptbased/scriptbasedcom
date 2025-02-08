exports.handler = async (event, context) => {
  return {
    statusCode: 503,
    body: JSON.stringify({
      message: "503 - Service Unavailable",
    }),
  };
};