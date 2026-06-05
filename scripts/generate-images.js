import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const outputDir = path.join(__dirname, '../src/data');
const outputFile = path.join(outputDir, 'available-images.json');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read public directory and filter image files
const files = fs.readdirSync(publicDir);
const images = files.filter(file => {
  const ext = path.extname(file).toLowerCase();
  return ['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif'].includes(ext);
}).map(file => `/${file}`);

// Write to JSON
fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));

console.log(`Successfully generated available-images.json with ${images.length} images.`);
