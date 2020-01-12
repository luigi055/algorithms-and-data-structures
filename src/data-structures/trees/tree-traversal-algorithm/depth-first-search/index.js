import BinarySearchTree from "../../binary-search-tree";

export default class BinarySearchTreeDFSTraversal extends BinarySearchTree {
  DFSPreOrder() {
    const data = [];
    if (!this.root) return data;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    const data = [];
    if (!this.root) return data;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    const data = [];
    if (!this.root) return data;
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}
