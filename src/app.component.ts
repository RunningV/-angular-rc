import {Component} from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

let Heroes: Hero[] = [
  {'id': 1, 'name': 'Alicia Keys - In Common'},
  {'id': 2, 'name': 'Calvin Harris、Rihanna - This Is What You Came For'},
  {'id': 3, 'name': 'Zedd、Ke$ha - True Colors'},
  {'id': 4, 'name': 'Florida Georgia Line - H.O.L.Y.'},
  {'id': 5, 'name': 'Imagine Dragons - Not Today'},
  {'id': 6, 'name': 'Yuna、Usher - Crush'},
  {'id': 7, 'name': 'Fantasia - Ugly'},
  {'id': 8, 'name': 'Desiigner - Panda'},
  {'id': 9, 'name': 'Fetty Wap - Wake Up'},
  {'id': 10, 'name': 'X Ambassadors - Unsteady(Erich Lee Gravity Remix) 【遇见你之前主题曲】'},
  {'id': 11, 'name': 'Meghan Trainor、Yo Gotti - Better'},
  {'id': 12, 'name': 'Flume、Tove Lo - Say It'},
  {'id': 13, 'name': 'The 1975 - Love Me'},
  {'id': 14, 'name': 'Ariana Grande、Lil Wayne - Let Me Love You'},
  {'id': 15, 'name': 'P!NK - Just Like Fire【爱丽丝梦游仙境2：镜中奇遇记主题曲】'},
  {'id': 16, 'name': 'Adam Levine - Go Now【唱街主题曲】'},
  {'id': 17, 'name': 'Blake Shelton - Friends【愤怒的小鸟主题曲】'},
  {'id': 18, 'name': 'will.i.am、Pia Mia - Boys & Girls'},
  {'id': 19, 'name': 'Nick Jonas - Champagne Problems'},
  {'id': 20, 'name': 'Trent Harmon - Falling【美国偶像冠军单曲】'}
]

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <ul>
    <li *ngFor="let h of heroes">
      <span class="badge">{{h.id}}</span>
      <span>{{h.name}}</span>
    </li>
  </ul>
  `
})
export class AppComponent {
  title = 'Tour of Heros !';
  heroes: Hero[] = Heroes;
}