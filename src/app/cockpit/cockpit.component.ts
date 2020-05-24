import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  // newServerName = '';
  // newServerContent = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value, 
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}

// we're using a local reference, serverNameInput, to supply the value for serverName.
// we're using two-way databinding, via [(ngModel)], to accomplish the same for serverContent.