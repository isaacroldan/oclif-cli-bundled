import {
  __toESM,
  init_cjs_shims,
  require_lib
} from "../../chunk-ZHCVP3YQ.js";

// src/commands/hello/world.ts
init_cjs_shims();
var import_core = __toESM(require_lib(), 1);
var World = class extends import_core.Command {
  static args = {};
  static description = "Say hello world";
  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`
  ];
  static flags = {};
  async run() {
    this.log("hello world! (./src/commands/hello/world.ts)");
  }
};
export {
  World as default
};
