import { NgModule } from '@angular/core';
import { PrimaryHeaderComponent } from './primary-header.component';
import { FixedHeaderDirective } from './fixed-header.directive';
import { RouterModule } from '@angular/router';
import { OpenMobileDirective } from './open-mobile-menu.directive';
import { CloseMenuDirective } from './close-menu.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PrimaryHeaderComponent,
    FixedHeaderDirective,
    OpenMobileDirective,
    CloseMenuDirective,
  ],
  imports: [RouterModule, CommonModule],
  exports: [PrimaryHeaderComponent],
})
export class PrimaryHeaderModule {}
