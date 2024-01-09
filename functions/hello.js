// functions/hello.js

exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello, World!",serverlessresponse:"Response of serverless function" }),
    };
  };
  