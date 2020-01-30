import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostPageRoutingModule } from './post-routing.module';

import { PostPage } from './post.page';

import { ComponentsModule } from '../components.module';


@NgModule({
  imports: [
	ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PostPageRoutingModule
  ],
  declarations: [PostPage]
})
export class PostPageModule {}
