import { Component, EventEmitter, OnChanges } from "@angular/core/";
import { Input,Output } from "@angular/core";

@Component({
    selector:`ai-star`,
    moduleId:module.id,
    templateUrl:'star.component.html'   

})

export class Starcomponent implements OnChanges{
  /* @Input() rating : Number;
    starwidth : Number;*/
    @Output() notify :EventEmitter<string>= new EventEmitter<string>();
    onClick()
    {
        this.notify.emit("this rating was Clicked !");
    }
    @Input() rating : number=7;
    starWidth: number;    
    ngOnChanges():void
    {
        this.starWidth=(this.rating) * 86/5;
    }
}