const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'dist', 'index.html');
const destPath = path.join(__dirname, 'dist', '404.html');

fs.copyFile(srcPath, destPath, (err) => {
  if (err) {
    console.error('Error copying file:', err);
  } else {
    console.log('index.html was copied to 404.html');
  }
});