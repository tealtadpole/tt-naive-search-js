const naive = require('./index.js')

test('Naive string search test pattern found', () => {
    const text = 'this is random sentence'
    const pattern = 'random'
    expect(naive.naiveSearch(text, pattern)).toBe(8);
});

test('Naive string search test pattern not found', () => {
    const text = 'this is random sentence'
    const pattern = 'test'
    expect(naive.naiveSearch(text, pattern)).toBe(-1);
});

test('Naive multi string search test', () => {
    const text = 'this is random sentence, which is purely random'
    const pattern = 'random'
    expect(naive.naiveSearchMulti(text, pattern)).toStrictEqual([8, 41]);
});

test('Naive multi string search test 2', () => {
    const text = 'tttt'
    const pattern = 'tt'
    expect(naive.naiveSearchMulti(text, pattern)).toStrictEqual([0, 1, 2]);
});

test('Naive multi string search test pattern not found', () => {
    const text = 'this is random sentence, which is purely random'
    const pattern = 'test'
    expect(naive.naiveSearchMulti(text, pattern)).toStrictEqual([]);
});
