/* eslint-disable @typescript-eslint/dot-notation */
import { Component } from '@angular/core';
import { NewsFeedService } from '../news-feed.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  articles: any;

  constructor(private newsService: NewsFeedService) {
    this.loadNews();
  }

  loadNews() {
    this.newsService.getNews('top-headlines?country=cz').subscribe((news) => {
      this.articles = news['articles'];
      console.log(this.articles);
    });
  }
}
