//stack->LIFO example callstack
//Queue->FIFO example callback queue or event queue

//stack
function recursive(val) {
  console.log("Value ::", val, "started");
  if (val > 0) {
    recursive(val - 1);
  }
  console.log("Vallue::", val, "ended");
}
recursive(10);
