import { NgModule } from "@angular/core";
import { TitleComponent } from './title/title.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [TitleComponent],
    imports:[
        CommonModule,
        IonicModule,
    ],
    exports: [TitleComponent]
})
export class ComponentModule { }