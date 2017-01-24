import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';
import { DetailsPage } from '../details/details';

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
  viewItem(item){
    console.log('item', item);
    this.navCtrl.push(DetailsPage, {item: item});   //Navigate to detail page with current item
  }
  ngOnInit(){
    this.getPosts('sports', 50);
  }

}
