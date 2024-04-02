/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class ListNode {
  /**
   * Constructs a new Node instance. Executed when the 'new' keyword is used.
   * @param {any} data The data to be added into this new instance of a Node.
   *    The data can be anything, just like an array can contain strings,
   *    numbers, objects, etc.
   * @returns {ListNode} This new Node instance is returned automatically without
   *    having to be explicitly written (implicit return).
   */
  constructor(data) {
    this.data = data;
    /**
     * This property is used to link this node to whichever node is next
     * in the list. By default, this new node is not linked to any other
     * nodes, so the setting / updating of this property will happen sometime
     * after this node is created.
     *
     * @type {ListNode|null}
     */
    this.next = null;
  }
}
const newNode = new ListNode(1);
//   const secNode = new ListNode(2);

//   newNode.next = secNode;

//   console.log(newNode);

/**
 * This class keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SinglyLinkedList {
  /**
   * Constructs a new instance of an empty linked list that inherits all the
   * methods.
   * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
   *    returned without having to explicitly write "return".
   */
  constructor() {
    /** @type {ListNode|null} */
    this.head = null;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    const newBack = new ListNode(data);

    if (this.isEmpty()) {
      this.head = newBack;
      return this;
    }

    let runner = this.head;

    while (runner.next !== null) {
      runner = runner.next;
    }

    runner.next = newBack;
    return this;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(n) linear due to the call stack.
   * @param {any} data The data to be added to the new node.
   * @param {?ListNode} runner The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackRecursive(data, runner = this.head) {
    if (this.isEmpty()) {
      this.head = new ListNode(data);
      return this;
    }

    if (runner.next === null) {
      runner.next = new ListNode(data);
      return this;
    }
    return this.insertAtBackRecursive(data, runner.next);
  }

  /**
   * Calls insertAtBack on each item of the given array.
   * - Time: O(n * m) n = list length, m = arr.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals The data for each new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackMany(vals) {
    for (const item of vals) {
      this.insertAtBack(item);
    }
    return this;
  }

  /**
   * Converts this list into an array containing the data of each node.
   * - Time: O(n) linear.
   * - Space: O(n).
   * @returns {Array<any>} An array of each node's data.
   */
  toArr() {
    const arr = [];
    let runner = this.head;

    while (runner) {
      arr.push(runner.data);
      runner = runner.next;
    }
    return arr;
  }

  /**
   * Determines the length of this list.
   * - Time: O(n) linear, n = length of list
   * - Space: O(1) constant
   * @returns {number} The length.
   */
  length() {
    let len = 0;
    let runner = this.head;

    while (runner) {
      len += 1;
      runner = runner.next;
    }
    return len;
  }
  /**
   * Creates a new node with the given data and inserts that node at the front
   * of the list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} data The data for the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtFront(data) {
    const newHead = new ListNode(data);
    newHead.next = this.head;
    this.head = newHead;
    return this;
  }

  /**
   * Removes the first node of this list.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    if (this.isEmpty()) {
      return null;
    }

    const oldHead = this.head;
    this.head = oldHead.next;
    return oldHead.data;
  }

  /**
   * Calculates the average of this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @returns {number|NaN} The average of the node's data.
   */
  average() {
    let runner = this.head;
    let sum = 0;
    let cnt = 0;

    while (runner) {
      cnt++;
      sum += runner.data;
      runner = runner.next;
    }

    /**
     * Dividing by 0 will give you NaN (Not a Number), so an empty list
     * will return NaN in this case, it may make sense to allow NaN to be
     * returned, because the average of an empty list doesn't make sense and
     * it could be misleading to return 0 since 0 is the average of any
     * list with a sum of 0 (due to negatives or all zeros).
     */
    return sum / cnt;
  }

  /**
   * Removes the last node of this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @returns {any} The data from the node that was removed.
   */
  removeBack() {
    if (this.isEmpty()) {
      return null;
    }

    // Only 1 node.
    if (this.head.next === null) {
      return this.removeHead();
    }

    // More than 1 node.
    let runner = this.head;

    while (runner.next.next) {
      runner = runner.next;
    }

    // after while loop finishes, runner is now at 2nd to last node
    const removedData = runner.next.data;
    runner.next = null; // remove it from list
    return removedData;
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
  contains(val) {
    let runner = this.head;

    while (runner) {
      if (runner.data === val) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  /**
   * Retrieves the data of the second to last node in this list.
   * - Time: O(n - 1) n = list length -> O(n) linear.
   * - Space: O(1) constant.
   * @returns {any} The data of the second to last node or null if there is no
   *    second to last node.
   */
  secondToLast() {
    if (this.isEmpty() || this.length() <= 2) {
      return null;
    } else {
      const arrNode = this.toArr();
      const secLastIndex = arrNode.length - 2;
      return arrNode[secLastIndex];
    }
  }

  /**
   * Removes the node that has the given val.
   * - Time: O(n) linear, n = list length since the last node could be the one
   *    that is removed.
   * - Space: O(1) constant.
   * @param {any} val The value to compare to the node's data to find the
   *    node to be removed.
   * @returns {boolean} Indicates if a node was removed or not.
   */
  removeVal(val) {
    if (this.isEmpty()) {
      return false;
    }
    if (this.head.data === val) {
      this.removeHead();
      return true;
    }

    let runner = this.head;
    while (runner.next) {
      if (runner.next.data === val) {
        runner.next = runner.next.next;
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  /**
   * Inserts a new node before a node with that has a specified value.
   * - Time: O(n) linear, n = list length, because we could end up pre-pending
   *    to the last node.
   * - Space: O(1) constant.
   * @param {any} newVal The value to use for the new node that is being added.
   * @param {any} targetVal The value to use to find the node that the newVal
   *    should be inserted in front of.
   * @returns {ListNode|null} The added node, or null.
   */
  prepend(newVal, targetVal) {
    if (!this.head) {
      return null;
    }
    let newNode = new ListNode(newVal); //create new node
    if (this.head.data === targetVal) {
      //if the target val we are replacing is the head
      newNode.next = this.head; //set the newNode.next to the previous head and make the new head of the list the new Node
      this.head = newNode;
      return newNode;
    }

    let currentNode = this.head; //setting pointer to iterate through the list to find value
    while (currentNode.next) {
      // while loop to run while there is a value at .next
      if (currentNode.next.data === targetVal) {
        // if the runner reaches the target value then...
        newNode.next = currentNode.next; // set the newNodes next to current next - this is making space for the newNode and essentially connecting them
        currentNode.next = newNode; // set the current node we are on to the new node
        return newNode; // return newNode
      }
      currentNode = currentNode.next; // moving the value from the current to the next node value
    }
    return null; // if we can't find the target value, return null
  }

  /**
   * Concatenates the nodes of a given list onto the back of this list.
   * - Time: O(n) n = "this" list length -> O(n) linear.
   *    addList does not need to be looped over.
   * - Space: O(1) constant, although this list grows by addList's length,
   *    our algo doesn't create extra objects or arrays to take up more space.
   * @param {SinglyLinkedList} addList An instance of a different list whose
   *    whose nodes will be added to the back of this list.
   * @returns {SinglyLinkedList} This list with the added nodes.
   */
  concat(addList) {
    if (!this.head) {
      //if the head is null
      this.head = addList.head; // set the head to the addList's head
      return this; // return this
    }

    let currentNode = this.head;
    while (currentNode.next) {
      //while the current node has a next node
      currentNode = currentNode.next;
    }

    currentNode.next = addList.head; //set curerentNode's next to the addList's head
    return this;
  }
  
    /**
     * Splits this list into two lists where the 2nd list starts with the node
     * that has the given value.
     * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3),
     * and the return value will be a new list containing (5=>2=>4)
     * - Time: O(n) linear, n = list length, could split on last node.
     * - Space: O(1) constant.
     * @param {any} val The value in the node that the list should be split on.
     * @returns {SinglyLinkedList} The split list containing the nodes that are
     *    no longer in this list.
     */
    splitOnVal(val) {
      const newList = new SinglyLinkedList();

      if(this.isEmpty()) {
        return newList;
      }

      if(this.head.data === val){
        newList.head = this.head;
        return newList;
      }

      let runner = this.head;
      while(runner.next){
        if(runner.next.data === val){
          newList.head = runner.next
          return newList;
        }
        runner = runner.next;
      }
      return newList;
    }
  
    /**
     * Retrieves the data of the middle node of this list.
     * - Time: O(1.5n) -> O(n) linear, n = length of list.
     * - Space: O(1) constant.
     * @returns {any} The data of the middle node or null if there is no middle.
     */
    getMiddleData() {
      if(this.isEmpty()) {
        return null;
      }

      if(this.length() % 2 === 0){
        return null;
      }

      let middle = Math.floor(this.length()/2);

      let listArr = this.toArr()

      return listArr[middle];
    }

}

const newSingly = new SinglyLinkedList();
const node1 = new ListNode(4);
const node2 = new ListNode(5);
node1.next = node2
const node3 = new ListNode(6);
node2.next = node3;
const node4 = new ListNode(7);
node3.next = node4;
// const node5 = new ListNode(8);
// node4.next = node5;

newSingly.head = node1;

console.log(newSingly);
console.log(newSingly.splitOnVal(2));
console.log(newSingly.splitOnVal(6));

// console.log(newSingly.getMiddleData());
