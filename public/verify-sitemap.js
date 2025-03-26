// Simple verification script to confirm sitemap.xml exists
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sitemapPath = path.join(__dirname, 'sitemap.xml');
const robotsPath = path.join(__dirname, 'robots.txt');

console.log('\n--- Sitemap Verification ---');

if (fs.existsSync(sitemapPath)) {
  console.log('✅ sitemap.xml found');
  const stats = fs.statSync(sitemapPath);
  console.log(`   Size: ${stats.size} bytes`);
  console.log(`   Created: ${stats.mtime}`);
} else {
  console.error('❌ sitemap.xml not found!');
}

if (fs.existsSync(robotsPath)) {
  console.log('✅ robots.txt found');
  const stats = fs.statSync(robotsPath);
  console.log(`   Size: ${stats.size} bytes`);
  console.log(`   Created: ${stats.mtime}`);
} else {
  console.error('❌ robots.txt not found!');
}

console.log('--- End Verification ---\n'); 