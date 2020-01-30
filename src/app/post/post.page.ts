import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor() {}
	 post:object = {
		username: 'Jubs',
		textContents: 'SPOILERS!!!!!!!!!!!!!!!!!!!!!',
		annex: null,
		like: false,
		quantLikes: 0,
		episode: 9,
		replies: 'boba',
		time: '16h30min12seg',
		spoiler: true
	}
	likePost(post:any){
		if(post.like){
			post.quantLikes--;
			post.like = false;
		}
		else{
			post.quantLikes++;
			post.like = true;
		}
	}

	spoilerAlert(post:any){
		if(post.spoiler){

		}

	}
	
  ngOnInit() {
  }

}
