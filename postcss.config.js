module.exports = {
  plugins: [
    require('tailwindcss'),
    require('cssnano'),
    ...process.env.NODE_ENV === 'production'
      ? [
        require('@fullhuman/postcss-purgecss')({
          content: [
            './_site/**/*.html'
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
      ]
      : [],
      require('postcss-preset-env')
  ]
}