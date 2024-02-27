import {
  __export,
  __toESM,
  init_cjs_shims,
  require_lib
} from "../../chunk-ZHCVP3YQ.js";

// src/commands/hello/index.ts
init_cjs_shims();

// node_modules/@oclif/plugin-commands/lib/index.js
var lib_exports = {};
__export(lib_exports, {
  default: () => lib_default
});
init_cjs_shims();
var lib_default = {};

// src/commands/hello/index.ts
var import_core = __toESM(require_lib(), 1);
var Hello = class _Hello extends import_core.Command {
  static args = {
    person: import_core.Args.string({ description: "Person to say hello to", required: true })
  };
  static description = "Say hello";
  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`
  ];
  static flags = {
    from: import_core.Flags.string({ char: "f", description: "Who is saying hello", required: true })
  };
  async run() {
    const { args, flags } = await this.parse(_Hello);
    console.log(lib_exports);
    this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`);
  }
};
export {
  Hello as default
};
