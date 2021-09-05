const plaid = require('plaid')

const plaidClient = new plaid.Client({
  clientID: '5ee69e7df9c7ee0013150dc8',
  secret: '8519b849cce770ff99ffc35e69c291',
  env: 'https://sandbox.plaid.com',
  options: {
    timeout: 30 * 60 * 1000,
    version: '2020-09-14',
  },
})

module.exports = plaidClient
