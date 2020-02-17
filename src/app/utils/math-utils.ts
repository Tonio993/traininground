export class MathUtils {

  private constructor() {};

  public static range(from : number, to : number) : number[] {
    var range = [];
    var current = from;
    do {
      range.push(current);
      current += from < to ? 1 : from > to ? -1 : 0;
    } while (current != to);
    range.push(to);
    return range;

  }

}