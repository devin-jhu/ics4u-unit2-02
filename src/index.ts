/**
 * the stack calling program
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022-10-31
 */

import MrCoxallStack from './MrCoxallStack'
import promptSync from 'prompt-sync'

const prompt = promptSync()
const myStack = new MrCoxallStack()

// Input & Process
while (true) {
  const userNumber = prompt('Enter number(type . to end loop): ')

  if (userNumber === '.') {
    break
  } else {
    const number = parseInt(userNumber)
    if (isNaN(number)) {
      console.log(`${userNumber} is not a number`)
    } else {
      myStack.Push(number)
    }
  }
}
let tempStack = myStack.getStack()
console.log(tempStack)

console.log('Popped')
myStack.popNumber()
tempStack = myStack.getStack()
console.log(tempStack)

console.log('\nDone.')
