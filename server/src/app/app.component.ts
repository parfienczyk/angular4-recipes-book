import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements = [
    {
      type: 'server',
      name: 'Testserver',
      content: 'Just a test!'
    },
    {
      type: 'server',
      name: 'Testserver',
      content: 'Just a test!'
    }
  ];

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onFirstChange() {
    console.log('onFirstChange');
    this.serverElements[0].name = 'Changed!';
  }

  onIntervalFired(firedNumber: number) {
    console.log(firedNumber);

    if (firedNumber % 2 === 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }
}
