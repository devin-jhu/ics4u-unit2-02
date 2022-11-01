/**
 * the stack
 *
 * By:      Devin Jhu
 * Version: 1.0
 * Since:   2022 10 31
 */

class MrCoxallStack {
  // private array
  private readonly stack: number[] = []

  // gathers the pushed number
  public Push(pushedNumber: number): void {
    this.stack.push(pushedNumber)
  }

  // getter
  public getStack(): any {
    return this.stack
  }

  // gets pops top number
  public popNumber(): any {
    return this.stack.pop()
  }
}
export = MrCoxallStack
