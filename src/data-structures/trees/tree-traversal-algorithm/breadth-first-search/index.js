import BinarySearchTree from "../../binary-search-tree";

export default class BinarySearchTreeBFSTraversal extends BinarySearchTree {
  BFS() {
    let node = this.root;
    const data = [];
    const queue = [];

    if (!node) return data;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}
