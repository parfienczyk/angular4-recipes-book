import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = {
      id: this.router.snapshot.params['id'],
      name: 'xx'
    };


    this.paramsSubscription = this.router.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
      },
    );
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
