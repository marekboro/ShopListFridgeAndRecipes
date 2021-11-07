import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router, private route:ActivatedRoute){

  }
  // selectedView: string = "recipes";
  
  // onNavigate(choice: string) {
  //   this.router.navigate([`../${choice}`],{relativeTo:this.route})
  // }


}
