import {Component, OnInit} from '@angular/core';
import {LoggingService} from "./shared/logging.service";
import {AccountsService} from "./shared/accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [LoggingService, AccountsService]
})
export class AppComponent implements OnInit {
  name = '';

  loadedFeature = 'recipe';
  accounts: { name: string, status: string }[];

  constructor(private loggingService: LoggingService, private accountService: AccountsService) {

  }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  statusUpdate(id: number, status: string) {
    this.accountService.updateStatus(id, status);
    this.accountService.statusUpdated.emit(status);
  }

}
