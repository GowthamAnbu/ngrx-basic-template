import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SimpleLayoutComponent } from './components/simple-layout/simple-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SimpleLayoutComponent
  ]
})
export class CoreModule { }
