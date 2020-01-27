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
			this.post.quantLikes-=1;
			this.post.like = false;
		}
		else{
			this.post.quantLikes+=1;
			this.post.like = true;
		}
	}
	
  ngOnInit() {
  }

}
