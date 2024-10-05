const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
    const files = await imagemin(['src/images/*.{jpg,png}'], {
        destination: 'dist/images',
        plugins: [
            imageminMozjpeg({quality: 75}), // Ajusta la calidad de las imágenes JPEG
            imageminPngquant({
                quality: [0.6, 0.8] // Ajusta la calidad de las imágenes PNG
            })
        ]
    });

    console.log('Imágenes optimizadas:', files);
})();