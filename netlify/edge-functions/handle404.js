exports.handler = async (event, context) => {
  return {
    statusCode: 404,
    body: JSON.stringify({
      message: "404 - Page Not Found",
    }),
  };
};