import Block from "./Block";
import renderDom from './render';

export class Route {
  private block: Block | null = null;

  constructor(
    private pathname: string,
    private readonly blockClass: typeof Block,
    private readonly query: string
  ) {}

  leave() {
    this.block = null;
  }

  match(pathname: string) {
    return pathname === this.pathname;
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass({});

      renderDom(this.query, this.block);
      return;
    }
  }
}
