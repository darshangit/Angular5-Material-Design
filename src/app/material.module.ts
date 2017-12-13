import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule],
    exports: [MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule]
})
export class MaterialModule { }
