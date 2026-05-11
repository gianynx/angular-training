import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-project';

  // esempio di dati da visualizzare nel template tramite ngFor
  users = [
    { name: 'Mario', age: 30, isOnline: true, isOnHoliday: false },
    { name: 'Luigi', age: 28, isOnline: false, isOnHoliday: true },
    { name: 'Antonio', age: 25, isOnline: true, isOnHoliday: false },
    { name: 'Marco', age: 40, isOnline: false, isOnHoliday: false },
    { name: 'Daniele', age: 35, isOnline: true, isOnHoliday: false },
  ];
}
