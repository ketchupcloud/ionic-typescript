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
		like: false,
		quantLikes: 0,
		spoiler: true
	},
	{
		username: 'Tef',
		like: true,
		quantLikes: 25,
		spoiler: false
	}];
	
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
	
  ngOnInit() {
  }

}
