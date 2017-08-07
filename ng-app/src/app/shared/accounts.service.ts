import {EventEmitter, Injectable} from '@angular/core';
import {LoggingService} from "./logging.service";

@Injectable()
export class AccountsService {

  accounts = [
    {
      name: 'M1',
      status: 'active'
    },
    {
      name: 'M2',
      status: 'active'
    },
    {
      name: 'M3',
      status: 'inactive'
    },
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {
  }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatus(status);
  }

}
