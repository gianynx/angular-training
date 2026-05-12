import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-project';

  // esempio di utilizzo del decorator ViewChild per accedere a un elemento del template
  @ViewChild('inputSaluti') inputSaluti!: ElementRef;

  users: User[] = [
    { name: 'Mario', age: 30, isOnline: true, isOnHoliday: false },
    { name: 'Luigi', age: 28, isOnline: false, isOnHoliday: true },
    { name: 'Antonio', age: 25, isOnline: true, isOnHoliday: false },
    { name: 'Marco', age: 40, isOnline: false, isOnHoliday: false },
    { name: 'Daniele', age: 35, isOnline: true, isOnHoliday: false },
  ];

  // esempio di metodo per gestire i dati ricevuti da un componente figlio tramite @Output
  onGetData(user: User) {
    console.log('Dati ricevuti dal componente figlio!', user);
  }

  ngOnInit(): void {
    console.log("Valore dell'input:", this.inputSaluti);
  }

  ngAfterViewInit(): void {
    console.log("Valore dell'input dopo la view init:", this.inputSaluti);
  }

  onClick() {
    console.log('Button clicked in AppComponent!');
    console.log(this.inputSaluti);
    console.log('Value:', this.inputSaluti.nativeElement.value);
  }
}
