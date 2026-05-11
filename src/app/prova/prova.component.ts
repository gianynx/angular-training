import {
  AfterViewChecked,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  OnDestroy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent
  implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{
  // esempio di utilizzo di @Input per ricevere dati da un componente genitore
  @Input() data: any;

  // esempio di dati da visualizzare nel template
  dogs = [
    {
      name: 'Shiba Inu',
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`,
    },
  ];

  // esempio di proprietà per abilitare/disabilitare un pulsante nel template
  isButtonDisabled = false;

  // esempio di immagini da visualizzare nel template tramite property binding
  image = '';
  image1 = 'https://4kwallpapers.com/images/walls/thumbs_2t/25549.jpg';
  image2 = 'https://m.media-amazon.com/images/I/61NWE9Im6dL._AC_UF894,1000_QL80_.jpg';

  // esempio di metodo per gestire un evento di click su un pulsante nel template
  onClick() {
    console.log('Button clicked!');

    alert('Button clicked!');
  }

  // esempio di metodo per gestire un evento di input su un campo di testo nel template
  onInput(e: Event) {
    console.log('Event: ', e);
    console.log('Event.target: ', e.target);
    console.log((<HTMLInputElement>e.target).value);
  }

  // esempio di utilizzo del two-way binding
  value = 'pizza';

  onInput2wb(e: Event) {
    console.log((<HTMLInputElement>e.target).value);

    this.value = (<HTMLInputElement>e.target).value;
  }

  onClick2wb() {
    this.value = 'Ho cliccato il bottone!';
  }

  onReset2wb() {
    this.value = '';
  }

  // esempio di ciclo di vita di un componente Angular
  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.data);

    // esempio di utilizzo di setInterval per modificare una proprietà del componente e triggerare il ciclo di vita
    setInterval(() => {
      this.isButtonDisabled = !this.isButtonDisabled;
    }, 2000);

    // esempio di utilizzo di setInterval per modificare una proprietà del componente e triggerare il ciclo di vita
    let counter = 0;
    setInterval(() => {
      if (counter % 2 == 0) {
        this.image = this.image1;
      } else {
        this.image = this.image2;
      }
      counter++;
    }, 2000);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
