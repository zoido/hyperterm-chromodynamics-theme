const backgroundColor = '#222222'
const foregroundColor = '#f1f1f0'

exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
        backgroundColor,
        foregroundColor,
        cursorColor: '#ffffff',
        colors: [
            backgroundColor, // black (background color)
            '#e8364f', // red (normal)
            '#a6e22e', // green (normal)
            '#e99c42', // yellow (normal)
            '#44727b', // blue (normal)
            '#9a79d7', // magenta (normal)
            '#66d9ef', // cyan (normal)
            '#f1f1f0', // grey (normal)

            '#555555', // black (bright)

            '#e8364f', // red (bright)
            '#a6e22e', // green (bright)
            '#d3c970', // yellow (bright)
            '#44727b', // blue (bright)
            '#9a79d7', // magenta (bright)
            '#66d9ef', // cyan (bright)
            foregroundColor // white (foreground color)
        ]
    })
}