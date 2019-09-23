import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HscRoutingModule } from './hsc.routing.module';
import { HscComponent } from './components/hsc/hsc.component';

const hscExports = [
  HscComponent
];

@NgModule({
  imports: [
    CommonModule,
    HscRoutingModule
  ],
  declarations: [HscComponent],
  exports: [...hscExports]
})
export class HscModule { }
