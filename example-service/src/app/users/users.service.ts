import {Injectable} from '@angular/core';

@Injectable()
export class UsersService {

  activeUsers = ['Anna', 'Max'];
  inactiveUsers = ['Bob', 'Chris'];

  constructor() {
  }


  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

  setToInctive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

}
