import oclif from '@oclif/core'

// await execute({development: true, dir: import.meta.url})

export default async function runCLI() {
  await oclif.run(process.argv.slice(2))
}
