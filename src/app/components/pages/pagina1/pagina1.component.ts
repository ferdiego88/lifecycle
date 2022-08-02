import { AfterContentChecked, AfterContentInit,
        AfterViewChecked, AfterViewInit, Component,
        DoCheck, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: [
    `.example-container .mat-form-field + .mat-form-field {
      margin-left: 8px;
    }
    h1 {
      color: blue;
    }`
  ]
})
export class Pagina1Component
       implements OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
                  AfterViewInit, AfterViewChecked, OnDestroy {

email = new FormControl('', [Validators.required, Validators.email]);

constructor() {
  console.log('constructor');

 }

getErrorMessage() {
  if (this.email.hasError('required')) {
    return 'Debes escribir un correo';
  }

  return this.email.hasError('email') ? 'Email no válido' : '';
}




  ngOnDestroy(): void {
    console.log('ngOnDestroy.');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck.');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit.');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked.');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit.');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges.');
  }

  ngOnInit(): void {
    console.log('ngOnInit');

  }

}
