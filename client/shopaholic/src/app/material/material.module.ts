import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
declarations: [],
imports: [
CommonModule,
BrowserAnimationsModule,
FlexLayoutModule,
MatListModule,
MatCardModule,
MatIconModule,
MatFormFieldModule,
MatInputModule,
MatProgressSpinnerModule
],
exports: [
BrowserAnimationsModule,
FlexLayoutModule,
MatListModule,
MatCardModule,
MatIconModule,
MatFormFieldModule,
MatInputModule,
MatProgressSpinnerModule
]
})
export class MaterialModule { }
