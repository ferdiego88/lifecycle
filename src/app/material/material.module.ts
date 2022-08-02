import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    CommonModule,
    BrowserAnimationsModule
  ], exports: [
    MatFormFieldModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
