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
  category: any;
  limit: any;
  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();
  }
  getDefaults(){
    this.category = 'sports';
    this.limit = 10;
  }
  getPosts(category, limit){
    this.redditService.getPosts(category, limit)
      .subscribe(response => {
        console.log('response', response);
        this.items = response.data.children;
      })
  }
  viewItem(item){
    this.navCtrl.push(DetailsPage, {item: item});   //Navigate to detail page with current item
  }
  ngOnInit(){
    this.getPosts(this.category, this.limit);
  }
  changeCategory(){
    this.getPosts(this.category, this.limit);
  }

}
