import { startDevServer } from '@cypress/vite-dev-server'

export default (on, config) => {
    on('dev-server:start', async (options) => startDevServer({ options }))
    return config
}
