/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
    constructor() {
      /**
       * 0th index not used, so null is a placeholder. Not using 0th index makes
       * calculating the left and right children's index cleaner.
       * This also effectively makes our array start at index 1.
       */
      this.heap = [null];
    }
  
    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() {
      if(this.heap.length > 1){
        return this.heap[1]
      } else {
        return null
      }
    }

    idxLeftChild(i){
      return i * 2;
    }

    idxRightChild(i){
      return i * 2 + 1
    }
  // [1,2,3,4]
    swap(i,j){
      const temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
    }

    fancySwap(i,j){
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert(num) {
      //push num
      this.heap.push(num);
      this.shiftUp();
      // 
    }

    shiftUp(){
      let idx = this.heap.length - 1;
      const element = this.heap[idx];

      while(idx > 0){
        let parentIdx = Math.floor((idx)/2);
        let parent = this.heap[parentIdx];
        if(element > parent) break;
          this.fancySwap(idx, parentIdx)
          idx = parentIdx
        }
    }
  
    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
      if (parentIdx > this.heap.length - 1) {
        return;
      }
  
      spaceCnt += spaceIncr;
      this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);
  
      console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
          `${this.heap[parentIdx]} (${parentIdx})`
      );
  
      this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
  }

  const myheap = new MinHeap();
  myheap.insert(99);
  myheap.insert(44);
  myheap.insert(33);
  myheap.insert(4);

  console.log(myheap.heap)