import { fromEvent, Observable, interval, Subscription } from "rxjs";
import { map, tap, switchMap } from "rxjs/operators";

class Card {
  private card: Element;

  private clicks$: Observable<Event>;
  private spin$: Observable<Event>;

  constructor(card:Element) {
    this.card = card;

    this.initClicks(this.card).subscribe();
    // this.initSpin();
  };

  initClicks(card:Element) {
    return this.clicks$ = fromEvent(card, "click").pipe(
      tap(ev => this.card.classList.toggle('is-flipped'))
    );
  };

  initSpin():void {
    this.spin$ = interval(2000).pipe(
      switchMap(() => this.clicks$)
    );
  };

};

export { Card };