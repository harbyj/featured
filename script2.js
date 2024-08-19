// Load the font dynamically
async function loadFont() {
  const font = new FontFace('Noto Kufi Arabic', 'url(https://fonts.gstatic.com/s/notokufiarabic/v17/CSRk4ydQnPyaDxEXLFF6LZVLKrodrOYFFg.woff2)', { weight: 700 });
  await font.load();
  document.fonts.add(font);
}

// Preload the base64 image
async function preloadBase64Image() {
  return new Promise((resolve) => {
    const embeddedImage = new Image();
    embeddedImage.onload = () => resolve(embeddedImage);
    embeddedImage.src = 'data:image/png;base64,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aWNjOm1vZGVsAElFQyA2MTk2Ni0yLjEgRGVmYXVsdCBSR0IgY29sb3VyIHNwYWNlIC0gc1JHQkRTSKkAAAASdEVYdGxhYmVsAExvZ28gYWxhcmFieWZodi4AAAAVdEVYdHBob3Rvc2hvcDpDb2xvck1vZGUAM1YCs0AAAAAmdEVYdHBob3Rvc2hvcDpJQ0NQcm9maWxlAHNSR0IgSUVDNjE5NjYtMi4xHC9sCwAAABN0RVh0dGlmZjpYUmVzb2x1dGlvbgA3Mg5QcYUAAAATdEVYdHRpZmY6WVJlc29sdXRpb24ANzKTX5DzAAAAKHRFWHR4bXA6Q3JlYXRlRGF0ZQAyMDIzLTAzLTA2VDEyOjI5OjIzKzAzOjAwNEiakgAAAC50RVh0eG1wOkNyZWF0b3JUb29sAEFkb2JlIFBob3Rvc2hvcCAyNC4yIChXaW5kb3dzKdSO1BUAAAAqdEVYdHhtcDpNZXRhZGF0YURhdGUAMjAyMy0xMS0wOVQxNTo0MToxOSswMzowMI/Fe9oAAAAodEVYdHhtcDpNb2RpZnlEYXRlADIwMjMtMTEtMDlUMTU6NDE6MTkrMDM6MDCzYShkAAAAS3RFWHR4bXBNTTpEb2N1bWVudElEAGFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3YzBjZmY2Yi1kMDZhLWMzNGQtYTVkZS05YjUyOGRlN2ZhYma7x3o4AAAAPXRFWHR4bXBNTTpJbnN0YW5jZUlEAHhtcC5paWQ6ZmY2ZWMxMzItYjM2ZS1kODQ3LWFhZjAtYzBjNTU0NGI3NjU58c+/HQAAAEV0RVh0eG1wTU06T3JpZ2luYWxEb2N1bWVudElEAHhtcC5kaWQ6NGRkMTAwMTctY2UzZS1jYTQ1LThlYWItY2JiOGUxN2NhZmUwMtf9bwAAAABJRU5ErkJggg==';
        
  });
}

// Main function to update the image
async function updateImage() {
  // Load the font dynamically
  await loadFont();

  const imageInput = document.getElementById('imageInput');
  const textInput = document.getElementById('textInput');
  const fontSizeInput = document.getElementById('fontSize');
  const textColorInput = document.getElementById('textColor');
  const fontStyleInput = document.getElementById('fontStyle');
  const shadowIntensityInput = document.getElementById('shadowIntensity');
  const outputImage = document.getElementById('outputImage');
  const downloadLink = document.getElementById('downloadLink');

  // Preload the base64 image
  const embeddedImage = await preloadBase64Image();

  // Initialize the FileReader
  const reader = new FileReader();

  // Set up onload function for the FileReader
  reader.onload = function (e) {
    const img = new Image();
    img.src = e.target.result;

    img.onload = function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // Set canvas size to 1080x1350
      canvas.width = 1080;
      canvas.height = 1350;

      // Calculate the aspect ratio of the input image and the target canvas
      const inputAspectRatio = img.width / img.height;
      const canvasAspectRatio = canvas.width / canvas.height;

      let sourceWidth, sourceHeight, sourceX, sourceY;

      // Determine the cropping dimensions based on the aspect ratio
      if (inputAspectRatio > canvasAspectRatio) {
        // Input image is wider, crop the height
        sourceWidth = img.height * canvasAspectRatio;
        sourceHeight = img.height;
        sourceX = (img.width - sourceWidth) / 2;
        sourceY = 0;
      } else {
        // Input image is taller, crop the width
        sourceWidth = img.width;
        sourceHeight = img.width / canvasAspectRatio;
        sourceX = 0;
        sourceY = (img.height - sourceHeight) / 2;
      }

      ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, canvas.width, canvas.height);

      // Add gradual shadow at the lower part
      const gradientShadow = ctx.createLinearGradient(0, canvas.height * (1 - shadowIntensityInput.value), 0, canvas.height);
      gradientShadow.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradientShadow.addColorStop(1, 'rgba(0, 0, 0, 1)');
      ctx.fillStyle = gradientShadow;
      ctx.fillRect(0, canvas.height * (1 - shadowIntensityInput.value), canvas.width, canvas.height);

      // Add a white rectangular background at position X = 0 and Y = 1055
      ctx.fillStyle = '#ffffff'; // White color
      ctx.fillRect(0, 1055, canvas.width, 174);

      // Add a gradient rectangular background with border radius at position X = 26 and Y = 910
      const gradient1 = ctx.createLinearGradient(26, 910, 26 + 894, 910 + 278);
      gradient1.addColorStop(0, '#3978b8');
      gradient1.addColorStop(1, '#03489c');
      ctx.fillStyle = gradient1;

      // Draw rounded rectangle with border radius
      const borderRadius1 = 10; // You can adjust the border radius
      ctx.beginPath();
      ctx.moveTo(26 + borderRadius1, 910);
      ctx.lineTo(26 + 894 - borderRadius1, 910);
      ctx.quadraticCurveTo(26 + 894, 910, 26 + 894, 910 + borderRadius1);
      ctx.lineTo(26 + 894, 910 + 278 - borderRadius1);
      ctx.quadraticCurveTo(26 + 894, 910 + 278, 26 + 894 - borderRadius1, 910 + 278);
      ctx.lineTo(26 + borderRadius1, 910 + 278);
      ctx.quadraticCurveTo(26, 910 + 278, 26, 910 + 278 - borderRadius1);
      ctx.lineTo(26, 910 + borderRadius1);
      ctx.quadraticCurveTo(26, 910, 26 + borderRadius1, 910);
      ctx.closePath();

      ctx.fill();
/// Calculate the available width inside the box
      const availableWidth = 720;

      // Set the maximum width for the text
      ctx.font = `700 ${fontStyleInput.value} ${fontSizeInput.value}px 'Noto Kufi Arabic', Arial, sans-serif`;
      ctx.fillStyle = textColorInput.value;
      ctx.textAlign = 'right';  // Keep this as 'left' for English text
      ctx.textBaseline = 'top';

      // Split the input text into an array of lines based on the line break ("\n")
      const lines = textInput.value.split('\n');

      // Starting Y-coordinate for the first line
      let currentY = 970;

ctx.direction = 'rtl';

 // Loop through each line and draw it on the canvas
lines.forEach((line, index) => {
  let words = line.split(' ');
  let currentLine = '';

  // Loop through each word in the line
  for (let i = 0; i < words.length; i++) {
    const testLine = currentLine + words[i] + ' ';
    const metrics = ctx.measureText(testLine);

    // Check if the line width exceeds the available width
    if (metrics.width > availableWidth) {
      // Exclude the last line from justification
      if (i < words.length - 1 || index === lines.length - 1) {
        // Calculate the scaling factor to fit the text within availableWidth
        const scale = availableWidth / ctx.measureText(currentLine.trim()).width;

        // Draw the scaled line on the canvas
        ctx.save();
        ctx.translate(782, currentY);
        ctx.scale(scale, 1);
        ctx.fillText(currentLine.trim(), 0, 0);
        ctx.restore();
      }

      // Start a new line
      currentLine = words[i] + ' ';
      currentY += fontSizeInput.value * 1.5;
    } else {
      // Continue adding words to the current line
      currentLine = testLine;
    }
  }

  // Draw the remaining portion of the line on the last line (without justification)
  if (index === lines.length - 1) {
    ctx.fillText(currentLine.trim(), 782, currentY);
  }

  // Update the Y-coordinate for the next line
  currentY += fontSizeInput.value * 1.5; // Adjust the multiplier as needed
});

ctx.direction = 'ltr';

      // Add another gradient rectangular background with border radius at position X = 832 and Y = 990
      const gradient2 = ctx.createLinearGradient(832, 990, 832 + 215, 990 + 111);
      gradient2.addColorStop(0, '#a00303');
      gradient2.addColorStop(1, '#800101');
      ctx.fillStyle = gradient2;

      // Draw rounded rectangle with border radius
      const borderRadius2 = 5; // You can adjust the border radius
      ctx.beginPath();
      ctx.moveTo(832 + borderRadius2, 990);
      ctx.lineTo(832 + 215 - borderRadius2, 990);
      ctx.quadraticCurveTo(832 + 215, 990, 832 + 215, 990 + borderRadius2);
      ctx.lineTo(832 + 215, 990 + 111 - borderRadius2);
      ctx.quadraticCurveTo(832 + 215, 990 + 111, 832 + 215 - borderRadius2, 990 + 111);
      ctx.lineTo(832 + borderRadius2, 990 + 111);
      ctx.quadraticCurveTo(832, 990 + 111, 832, 990 + 111 - borderRadius2);
      ctx.lineTo(832, 990 + borderRadius2);
      ctx.quadraticCurveTo(832, 990, 832 + borderRadius2, 990);
      ctx.closePath();

      ctx.fill();

      // Calculate the available width inside the box
      const availableWidth2 = 175;

      // Set the maximum width for the text
      ctx.font = `700 62px 'Noto Kufi Arabic'`;
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';

      ctx.fillText(
        'عاجل',
        919.5, // Start X position
        1020, // Start Y position
        availableWidth2
      );

      // Draw the preloaded base64 image at position X = 50 and Y = 53
// Draw the preloaded base64 image at position X = 50 and Y = 53
ctx.drawImage(embeddedImage, 50, 53);

// Add white text at Y=1265 and X=50
ctx.font = '25px Arial';  // Use Arial for the white text
ctx.fillStyle = '#ffffff';  // White color
ctx.textAlign = 'left';
ctx.textBaseline = 'top';

const websiteText = 'www.alaraby.co.uk';
const wwwWidth = ctx.measureText('www').width;

// Draw the text without underline for 'www'
ctx.fillText(websiteText.substring(0, 3), 50, 1265);

// Draw the remaining part of the text in white
ctx.fillText(websiteText.substring(3), 50 + wwwWidth, 1265);

// Draw the underline with a 2-pixel gap
const underlineY = 1265 + 25; // Adjust the vertical position as needed
ctx.fillStyle = 'yellow';  // Yellow color for the underline
ctx.fillRect(50, underlineY, wwwWidth, 2);  // Underline with a 2-pixel gap


      outputImage.src = canvas.toDataURL('image/png');
      outputImage.style.display = 'block';
      downloadLink.href = canvas.toDataURL('image/png');
      downloadLink.style.display = 'inline-block';
    };
  };

  // If an image is selected, read the input image file
  if (imageInput.files.length > 0) {
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    // If no image is selected, still trigger the rendering without an image
    reader.readAsDataURL(new Blob()); // Pass an empty blob
  }
}

// Attach the updateImage function to input events
document.getElementById('imageInput').addEventListener('change', updateImage);
document.getElementById('textInput').addEventListener('input', updateImage);
document.getElementById('fontSize').addEventListener('input', updateImage);
document.getElementById('textColor').addEventListener('input', updateImage);
document.getElementById('fontStyle').addEventListener('change', updateImage);
document.getElementById('shadowIntensity').addEventListener('input', updateImage);

// Trigger the updateImage function on page load
updateImage();
