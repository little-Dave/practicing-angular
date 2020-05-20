import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  newServerContent = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput) {
    this.serverCreated.emit({
      serverName: serverNameInput.value, 
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint(serverNameInput) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent
    })
  }
}

// we're using a local reference, serverNameInput, to supply the value for serverName.
// we're using two-way databinding, via [(ngModel)], to accomplish the same for serverContent.