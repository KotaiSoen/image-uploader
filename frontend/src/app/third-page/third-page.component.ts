import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  image_url!: string;

  condition: boolean = false;

  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      this.image_url = params['data'];
    })
    
  }

  ngOnInit() {
    
  }

  disable() {
    this.condition = true;
  }

}
