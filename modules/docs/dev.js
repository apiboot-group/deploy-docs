const { join } = require('path')
const DocsServer = require('./server')

async function main() {
	const docsServer = new DocsServer({
    port: 3003,
    docsDir: join(__dirname, '..', '..', 'docs'),
    repo: 'apiboot-group/docs',
    watch: true
  })
	await docsServer.cloneRepo()
	await docsServer.init()
	await docsServer.listen()
}

main()
