const htmlMin = require('html-minifier-terser')

module.exports = eleventyConfig => {
    eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
        if(outputPath.endsWith('.html')){
            let minifiedHTML = htmlMin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true,
                minifyJS: true
            })
            return minifiedHTML
        }
        return content
    })

    eleventyConfig.setBrowserSyncConfig({
		files: './_site/assets/css/**/*.css'
	})


    eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));
    eleventyConfig.addPassthroughCopy({ "./src/admin/config.yml": "./admin/config.yml" });
    
    eleventyConfig.addPassthroughCopy({ './src/_assets': 'assets'})

    eleventyConfig.addPassthroughCopy({ './src/_scripts': 'assets/js'})

    eleventyConfig.addPassthroughCopy('./src/robots.txt')
    
    eleventyConfig.addWatchTarget('./src/_assets/')
    eleventyConfig.addWatchTarget('./src/_styles/')
    eleventyConfig.addWatchTarget('./src/_script/')

    return{
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: '_site',
            data: '_data',
            layouts: '_layouts',
            inlcudes: '_includes'
        },
        templateFormats: ['njk', 'md', '11ty.js'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: "njk"
    }
}
