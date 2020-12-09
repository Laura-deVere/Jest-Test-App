import { getLetterMatchCount } from './';

describe('getLetterMatchCount', () => {
    const secretWord = 'party';
    test('returns the correct count when there are no matching letts', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0);
    });
    test('return the correct count when there are 3 matching letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord);
        expect(letterMatchCount).toBe(3);
    });
    test('returns the correct count when theree are duplicate letters ni the guess', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3)
    });
})