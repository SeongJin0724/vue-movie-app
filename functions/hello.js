exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'LEESEONGJIN',
      age: 25,
      email: 'thls702464@gmail.com'
    })
  }
}