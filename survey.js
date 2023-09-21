//const data = require('./data.js')

export class Node {
    constructor(data) {
      this.next = null;
      this.data = data;
    }
  }
  
export class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
      this.data = {
        value : 0,
        question: null,
        answer: [],
        isCorrect: null
      }
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return {
        size: this.size, 
        totalValue: this.data.value
    }
}
  
  
  
    append(data) {
      const node = new Node(data);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = node;
      }
      this.size++;
      this.data.value += data.value
    }

    
  
    insert(value, index) {
      if (index < 0 || index > this.size) {
        return;
      }
      if (index === 0) {
        this.prepend(value);
      } else {
        const node = new Node(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
        this.value += value
      }
    }
  
    removeFrom(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
      let removedNode;
      if (index === 0) {
        removedNode = this.head;
        this.head = this.head.next;
      } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        removedNode = prev.next;
        prev.next = removedNode.next;
      }
      this.size--;
      this.value -= removedNode.value;
      return removedNode.value;
    }
  
  
    search(value) {
      if (this.isEmpty()) {
        return -1;
      }
      
      let curr = this.head;
      while (curr) {
        if (curr.data.question === value) {
          return i;
        }
        curr = curr.next;
      }
      return -1;
    }
   
  
    print() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.head;
        let list = [{}]
        while (curr) {
          list.push(curr)
          curr = curr.next;
         
        }
        console.log("list: ", list, '->');
        
      }
    }
  }
  


 
  
 