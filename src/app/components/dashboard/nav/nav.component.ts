import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public router:Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  clicked()
  {
    this.router.navigate(['app-admin'],{relativeTo:this.route});
  }
  clicked1()
  {
    this.router.navigate(['app-employee'],{relativeTo:this.route});
  }

}
