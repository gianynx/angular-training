import { Component } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-project';

  // esempio di dati da visualizzare nel template tramite ngFor
  users: User[] = [
    { name: 'Mario', age: 30, isOnline: true, isOnHoliday: false },
    { name: 'Luigi', age: 28, isOnline: false, isOnHoliday: true },
    { name: 'Antonio', age: 25, isOnline: true, isOnHoliday: false },
    { name: 'Marco', age: 40, isOnline: false, isOnHoliday: false },
    { name: 'Daniele', age: 35, isOnline: true, isOnHoliday: false },
  ];

  // esempio di metodo per gestire un evento di click su un pulsante nel template
  onClick() {
    this.users = [
      { name: 'Andrea', age: 31, isOnline: false, isOnHoliday: true },
      { name: 'Gianmarco', age: 29, isOnline: true, isOnHoliday: false },
      { name: 'Gianfranco', age: 26, isOnline: false, isOnHoliday: true },
      { name: 'Gabriele', age: 41, isOnline: true, isOnHoliday: true },
      { name: 'Giacomo', age: 36, isOnline: false, isOnHoliday: true },
    ];
  }

  // esempio di metodo per gestire i dati ricevuti da un componente figlio tramite @Output
  onGetData(user: User) {
    console.log('Dati ricevuti dal componente figlio!', user);
  }
}
