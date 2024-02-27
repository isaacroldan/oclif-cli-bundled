import {
  __toESM,
  init_cjs_shims,
  require_lib
} from "./chunk-ZHCVP3YQ.js";

// src/index.ts
init_cjs_shims();
var import_core = __toESM(require_lib(), 1);
async function runCLI() {
  await import_core.default.run(process.argv.slice(2));
}
export {
  runCLI as default
};
