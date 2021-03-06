import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: 'event-thumbnail',
  template: `<div class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>
      Date: {{event?.date}}
    </div>
    <div>
      Time: {{event?.time}}
    </div>
    <div>
      Price: \${{event?.price}}
    </div>
    <div *ngIf="event?.location">
      <span>Location: {{event?.location?.address}}</span> 
      <span>&nbsp;</span> 
      <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div *ngIf="event?.onlineUrl">
    Online URL: {{event?.onlineUrl}}
    </div>
  </div>`,
  styles:[`
    .pad-left{
      padding-left:10px
    }
  `]

})
export class EventThumbnailComponent {
  @Input() event: any
  @Output() eventClick = new EventEmitter()

  handleClickMe() {
    this.eventClick.emit(this.event.name)
  }
}