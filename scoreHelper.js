/**
 * scoreHelper - Basic Score Management Utility
 * Author: IlReDelTrucco
 * License: Custom
 */

const scoreHelper = {
    /**
     * Increases the score by a given amount.
     * @param {number} currentScore - The current score.
     * @param {number} points - Points to add.
     * @returns {number} - Updated score.
     */
    add(currentScore, points) {
        if (typeof currentScore !== 'number' || typeof points !== 'number') {
            console.error('[scoreHelper] Invalid parameters.');
            return currentScore;
        }
        return currentScore + points;
    },

    /**
     * Resets the score to zero.
     * @returns {number}
     */
    reset() {
        return 0;
    },

    /**
     * Formats the score as a string with leading zeros.
     * @param {number} score - The score to format.
     * @param {number} [digits=5] - Total digits for display.
     * @returns {string}
     */
    format(score, digits = 5) {
        if (typeof score !== 'number') return '';
        return String(score).padStart(digits, '0');
    }
};

// Example usage:
// let score = 0;
// score = scoreHelper.add(score, 10);
// console.log(scoreHelper.format(score)); // Output: 00010
// score = scoreHelper.reset();

module.exports = scoreHelper;
