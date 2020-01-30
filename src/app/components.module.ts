import { NgModule } from '@angular/core';
import { PostCardComponent } from './components/post-card/post-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PostCardComponent],
  exports: [PostCardComponent],
  imports: [IonicModule]
})

export class ComponentsModule{}
