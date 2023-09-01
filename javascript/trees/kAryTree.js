class KAryTree {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  fizzBuzzTree(KAryTree) {
    let current = this.head;
    let kAryQ = [{ogNode: this.value, newNode: this.newVal}];
    const newKaryTree = new KAryTree(current.value);

    while(kAryQ.length) {
      const { ogNode, newNode } = kAryQ.shift();
      // const child = ogNode.children;
      for(let child of ogNode.newChild) {
        const newChild = new KAryTree(child.value);
        newNode.newChild.push(newChild);
        kAryQ.push({ogNode: child, newNode: newChild});
      }
    }
    return newKaryTree;
  }
}

module.exports = {KAryTree};
