const backgroundColor = '#222222'
const foregroundColor = '#f1f1f0'

exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
        backgroundColor,
        foregroundColor,
        cursorColor: '#ffffff',
        colors: [
            backgroundColor, // black (background color)
            '#ff4136', // red (normal)
            '#2ecc40', // green (normal)
            '#ff851b', // yellow (normal)
            '#0074d9', // blue (normal)
            '#b10dc9', // magenta (normal)
            '#7fdbff', // cyan (normal)
            '#f1f1f0', // grey (normal)

            '#555555', // black (bright)
            '#ff4136', // red (bright)
            '#2ecc40', // green (bright)
            '#ffdc00', // yellow (bright)
            '#0074d9', // blue (bright)
            '#b10dc9', // magenta (bright)
            '#7fdbff', // cyan (bright)
            foregroundColor // white (foreground color)
        ]
    })
}