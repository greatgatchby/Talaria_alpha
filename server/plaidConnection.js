const config = require('./config')
const plaid = require('plaid')
const configuration = new plaid.Configuration({
  basePath: plaid.PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': config.plaid.PLAID_CLIENT_ID,
      'PLAID-SECRET': config.plaid.PLAID_SECRET,
    },
  },
})

const plaidClient = new plaid.PlaidApi(configuration)

module.exports = plaidClient
