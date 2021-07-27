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

export const geBiggestImage = (currentArray) => {
    return currentArray.images.reduce((smallest, image) => {
        if (smallest.height > image.height) return smallest
        return image;
    }, currentArray.images[0]);
}

export const formatMinutes = (duration) => {
    const timeInSeconds = Math.ceil(duration / 1000);
    const minutes = Math.round((timeInSeconds / 60));
    let seconds = Math.round((timeInSeconds % 60));
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
}