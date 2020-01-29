import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(public alertController: AlertController, public toastController:ToastController){}
  async alerta(){
	  const alert = await this.alertController.create({
		  header:'Irado',
		  subHeader: '',
		  message: 'Gostaria de avaliar o filme?',
		  buttons: ['NÃO', 'SIM']
	  });
	  await alert.present();
  }
  
  async presentToast() {
	  const toast = await this.toastController.create({
		  message: 'adicionado a sua lista',
		  duration: 1500
	  });
	  toast.present();
  }
  
 
  /* post:object = {
		username: 'Jubs',
		textContents: 'texto teste',
		annex: null,
		
		like: false,
		quantLikes: 0,
		episode: 9,
		replies: 'boba',
		time: '16h30min12seg'
	}
	likePost(post:any){
		if(this.post.like){
			this.post.quantLikes--;
			this.post.like = false;
		}
		else{
			this.post.quantLikes++;
			this.post.like = true;
		}
	} */
  
		
}
