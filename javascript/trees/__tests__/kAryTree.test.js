'use strict';

const { fizzBuzzTree, KaryTreeNode } = require('./fizzBuzzTree');

describe('fizzBuzzTree', () => {
  function convertTreeToObject(node) {
    if (!node) {
      return null;
    }
    return {
      value: node.value,
      children: node.children.map(convertTreeToObject),
    };
  }

  it('correctly modifies node values according to FizzBuzz rules', () => {
    const originalTree = new KaryTreeNode(15, [
      new KaryTreeNode(9),
      new KaryTreeNode(10, [
        new KaryTreeNode(7)
      ]),
      new KaryTreeNode(25)
    ]);

    const newTree = fizzBuzzTree(originalTree);

    const expectedTree = {
      value: 'FizzBuzz',
      children: [
        { value: 'Fizz', children: [] },
        {
          value: 'Buzz',
          children: [
            { value: '7', children: [] }
          ],
        },
        { value: 'Buzz', children: [] },
      ],
    };

    const convertedExpectedTree = convertTreeToObject(expectedTree);
    const convertedNewTree = convertTreeToObject(newTree);

    expect(convertedNewTree).toEqual(convertedExpectedTree);
  });
});
