/**
 * 活字印刷
 * @see https://leetcode-cn.com/problems/letter-tile-possibilities/
 */
function numTilePossibilities(tiles: string): number {
    const used = new Array(tiles.length).fill(false)
    const set = new Set();//去重

    function backtracking(s: string) {
        if (s.length) {
            set.add(s)
        }

        for (let i = 0; i < tiles.length; i++) {
            if (used[i]) continue

            used[i] = true
            s += tiles[i]
            backtracking(s)
            s = s.slice(0, s.length - 1)
            used[i] = false

        }
    }
    backtracking("")

    return set.size
};
