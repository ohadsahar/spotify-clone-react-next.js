export const getRandomColor = () => {
    const r = () => Math.random() * 256 >> 0;
    const color = `rgb(${r()}, ${r()}, ${r()})`;
    return color;
}

export const getSmallestImage = (currentArray) => {
    return currentArray.images.reduce((smallest, image) => {
        if (smallest.height < image.height) return smallest
        return image;
    }, currentArray.images[0]);
}