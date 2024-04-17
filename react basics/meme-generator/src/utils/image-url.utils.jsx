export function getImageUrl(imageName) {
    return new URL(`../assets/${imageName}.png`, import.meta.url).href
}