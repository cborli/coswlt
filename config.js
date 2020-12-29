const dev = process.env.NODE_ENV === `development`
const graphql = process.env.VUE_APP_GRAPHQL_URL || `http://localhost:4000`
const sentryDSN = process.env.SENTRY_DSN || ""

const fallbackNetwork = `cosmos-hub-mainnet`

export default {
  name: `Lunie`,
  development: dev,
  network: process.env.NETWORK || fallbackNetwork,
  fallbackNetwork,
  google_analytics_uid: process.env.GOOGLE_ANALYTICS_UID || "",
  sentryDSN,
  default_gas_price: dev ? 1e-9 : 2.5e-8, // Recommended from Cosmos Docs

  // Ledger
  CosmosAppTestModeAllowed: false,
  mobileApp: Boolean(process.env.MOBILE_APP),

  graphqlHost: graphql,

  e2e: process.env.VUE_APP_E2E || false,
  enableTxAPI: process.env.VUE_APP_ENABLE_TX_API === "true" || false,

  bech32Prefixes: {
    "cosmos-hub-mainnet": "cosmos",
    "cosmos-hub-testnet": "cosmos",
    "regen-testnet": "xrn:",
    "regen-mainnet": "xrn:",
    "terra-testnet": "terra",
    "terra-mainnet": "terra"
  }
}
