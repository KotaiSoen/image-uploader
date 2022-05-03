import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { WebService } from '../web.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
  
  image_url: any;

  constructor(private webService: WebService, private router: Router) { }

  ngOnInit(): void {
  }

  files: File[] = [];

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }


  async onSelect(event: any) {

    this.files.push(...event.addedFiles);

    await this.sleep(4000);

    const file = this.files[0];
    console.log(file);

    const formdata = new FormData();
    formdata.append('file', file)

    this.router.navigate(['/second-page']);

    this.webService.getData(formdata)
    .subscribe((data) => {
      console.log(data);
      this.image_url = data;
      this.router.navigate(['/third-page', { data }]);
    },
    (error) => {
      console.log(error)
    })

  }

 

  async upload(event: any) {

    const file = event.target.files[0];
    this.files.push(file);
    console.log(file)

    await this.sleep(4000);

    const formdata = new FormData();
    formdata.append('file', file)

    this.router.navigate(['/second-page']);

    this.webService.getData(formdata)
    .subscribe((data) => {
      console.log(data);
      this.image_url = data;
      this.router.navigate(['/third-page', { data }]);
      
    },
    (error) => {
      console.log(error)
    })
  }



  
}
