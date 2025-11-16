import { Component, OnInit } from '@angular/core';
import { Data } from '../service/data';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [JsonPipe],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class Post implements OnInit{
  apiData:any;
    dataService:Data;
    
    constructor(dataService:Data) {
      this.dataService = dataService;
    }
  
    ngOnInit(): void {
      this.fetchPosts();
    }
  
    fetchPosts():void{
      this.dataService.getApiData().subscribe((response):void=>{
        this.apiData = response;
      })
    }
}
