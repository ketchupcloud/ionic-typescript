import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  constructor() {}
	Posts= [{
		username: 'Jubs',
		StatusLike: null,
		quantLikes: 0,
		quantDislikes: 0,
		spoiler: true
	},
	{
		username: 'Tef',
		statusLike: null,
		quantLikes: 25,
		quantDislikes: 4,
		spoiler: false
	}];
	
	likePost(post:any){
		if(post.statusLike===true){
			post.quantLikes--;
			post.statusLike = null;
		}
		else if(post.statusLike===false){
			post.quantLikes++;
			post.statusLike = true;
			post.quantDislikes--;
		}
		else {
			post.quantLikes++;
			post.statusLike = true;
		}
	}
	
	dislikePost(post:any){
		if(post.statusLike===true){
			post.quantDislikes++;
			post.quantLikes--;
			post.statusLike = false;
		}
		else if(post.statusLike===false){
			post.statusLike = null;
			post.quantDislikes--;
		}
		else {
			post.quantDislikes++;
			post.statusLike = false;
		}
	}
	
  ngOnInit() {
  }

}
