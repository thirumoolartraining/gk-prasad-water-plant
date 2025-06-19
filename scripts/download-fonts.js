const fs = require('fs');
const https = require('https');
const path = require('path');

const fonts = [
  {
    name: 'Lato-Light.woff2',
    url: 'https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USSwiPHw3q5d0.woff2'
  },
  {
    name: 'Lato-Regular.woff2',
    url: 'https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wXiWtFCc.woff2'
  },
  {
    name: 'Lato-Bold.woff2',
    url: 'https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVSwiPHw3q5d0.woff2'
  },
  {
    name: 'Lustria-Regular.woff2',
    url: 'https://fonts.gstatic.com/s/lustria/v13/9oRONYodvDEyjuhOnC8zM_HxEck.woff2'
  }
];

const fontsDir = path.join(process.cwd(), 'public', 'fonts');

// Create fonts directory if it doesn't exist
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Download each font
fonts.forEach(font => {
  const filePath = path.join(fontsDir, font.name);
  const file = fs.createWriteStream(filePath);
  
  https.get(font.url, response => {
    response.pipe(file);
    console.log(`Downloaded ${font.name}`);
  }).on('error', err => {
    console.error(`Error downloading ${font.name}:`, err);
    fs.unlinkSync(filePath); // Delete the file if there was an error
  });
});
