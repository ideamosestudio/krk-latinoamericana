import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

const source = path.resolve("public/logos-src");
const output = path.resolve("public/logos");
await mkdir(output, { recursive: true });

for (const name of await readdir(source)) {
  const input = path.join(source, name);
  const base = sharp(input, { density: 300 }).resize(360, 120, { fit: "inside", withoutEnlargement: false }).ensureAlpha();
  const { data, info } = await base.raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const originalAlpha = data[i + 3];
    const distanceFromWhite = 255 - Math.min(data[i], data[i + 1], data[i + 2]);
    const isOpaqueCanvas = originalAlpha > 250;
    const matteAlpha = Math.max(0, Math.min(255, (distanceFromWhite - 7) * 5));
    data[i] = 255;
    data[i + 1] = 255;
    data[i + 2] = 255;
    data[i + 3] = isOpaqueCanvas ? matteAlpha : originalAlpha;
  }
  await sharp(data, { raw: info }).trim({ background: { r: 255, g: 255, b: 255, alpha: 0 } }).extend({
    top: 10, bottom: 10, left: 16, right: 16,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  }).png().toFile(path.join(output, `${name}.png`));
}
