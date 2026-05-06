import { AfterViewChecked, AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // esempio di dati da visualizzare nel template
  dogs = [
    {
      name: "Shiba Inu",
      description: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.`
    }
  ]

  // esempio di proprietà per abilitare/disabilitare un pulsante nel template
  isButtonDisabled = false;

  // esempio di ciclo di vita di un componente Angular
  constructor() {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
}
