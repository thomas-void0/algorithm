/**
 * 图像渲染
 * @see https://leetcode-cn.com/problems/flood-fill/
 */
namespace floodFill {
    function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
        const original = image[sr][sc]
        //如果原始像素等于新颜色，那么直接返回
        if (original === newColor) return image

        const m = image.length
        const n = image[0].length

        const queue = [[sr, sc]]

        while (queue.length) {
            const [x, y] = queue.shift()!
            image[x][y] = newColor
            if (x - 1 >= 0 && image[x - 1][y] === original) queue.push([x - 1, y]);
            if (x + 1 < m && image[x + 1][y] === original) queue.push([x + 1, y]);
            if (y - 1 >= 0 && image[x][y - 1] === original) queue.push([x, y - 1]);
            if (y + 1 < n && image[x][y + 1] === original) queue.push([x, y + 1]);
        }

        return image
    };
}