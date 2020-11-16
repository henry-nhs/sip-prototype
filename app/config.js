// Use this file to change prototype configuration.

module.exports = {
  // Service name
  serviceName: 'Apply for a Test and Trace Support Payment',

  step1Label: 'Login or register with NHS login',
  step2Label: 'Enter personal details',
  step3Label: 'Register with NHS Test and Trace',
  step4Label: 'Apply to your local authority',
  step5Label: 'Receive your payment',

  // Port to run nodemon on locally
  port: 2000,

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'true',

  // Enable cookie-based session store (persists on restart)
  // Please note 4KB cookie limit per domain, cookies too large will silently be ignored
  useCookieSessionStore: 'false',

  // Enable or disable built-in docs and examples.
  useDocumentation: true,
}
