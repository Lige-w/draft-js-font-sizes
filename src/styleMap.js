const fontSizes = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 38, 46, 54, 62, 72]

const styleMap = () => {
    const map = {}

    fontSizes.forEach(size => {
        const fontSize = `font-size-${size}`
        map[fontSize] = {fontSize: `${size}px`}
    })

    return map
}





export {styleMap, fontSizes}
