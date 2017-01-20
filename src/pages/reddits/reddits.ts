import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

  items: any;
  constructor(
    public navCtrl: NavController,
    private redditService: RedditService) {

  }
  getPosts(category, limit){
    this.redditService.getPosts(category, limit)
      .subscribe(response => {
        console.log('response', response);
        this.items = response.data.children;
      })
  }
  ngOnInit(){
    this.getPosts('sports', 50);
  }

}
