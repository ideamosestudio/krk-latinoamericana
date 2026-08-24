import { cp, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { spawn } from "node:child_process";

const nextBinary = resolve("node_modules", "next", "dist", "bin", "next");

await Promise.all([
  rm(resolve(".next"), { recursive: true, force: true }),
  rm(resolve("out"), { recursive: true, force: true }),
]);

const child = spawn(process.execPath, [nextBinary, "build"], {
  stdio: "inherit",
  shell: false,
  env: {
    ...process.env,
    SITE_URL: "https://krk.com.ar",
  },
});

const exitCode = await new Promise((resolveExit, reject) => {
  child.once("error", reject);
  child.once("exit", (code) => resolveExit(code ?? 1));
});

if (exitCode !== 0) {
  process.exit(exitCode);
}

await rm(resolve("site"), { recursive: true, force: true });
await cp(resolve("out"), resolve("site"), { recursive: true });

console.log("Static cPanel release generated in site/");
