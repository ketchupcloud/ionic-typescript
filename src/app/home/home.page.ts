import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  post:object = {
		username: 'Jubs',
		textContents: 'texto teste',
		annex: null,
		/* quantLikes: 2,
		quantDislikes: 1, */
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
	}
  
		
}
