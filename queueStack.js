//Create Queue Class
class MyQueue {
  //Set constructor obj
  constructor () {
    //create both a push and pop stack to hold and move values
      this.pushStack = [];
      this.popStack = [];
  }
  //create push function
  push(val) {
    //just push into the push stack
      this.pushStack.push(val);
  }

  //create pop function
  pop() {
    //if no length in popStack
      if (!this.popStack.length) {
        //while there is length within pushStack
          while (this.pushStack.length) {
            //push value popped off of pushStack
                 this.popStack.push(this.pushStack.pop())
                 }
      }
      //return value popped off of newly created popStack
      return this.popStack.pop();
  }

  //craete peek function
  peek() {
    //same as pop --
      if (!this.popStack.length) {
          while(this.pushStack.length) {
              this.popStack.push(this.pushStack.pop())
          }
      }
      //--
      //return the last item within the pop Stack
      return this.popStack[this.popStack.length - 1]
  }

  //create empty function
  //return if there is no length within both pop and push Stack
  empty() {
      return !this.pushStack.length && !this.popStack.length
  }
}