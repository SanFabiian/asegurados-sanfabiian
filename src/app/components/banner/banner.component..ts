import { Component, OnInit } from '@angular/core';
import banners from './banners.json'
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ListBanners: any = banners;
}
