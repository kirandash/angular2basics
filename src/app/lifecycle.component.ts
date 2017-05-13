import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p>{{bindable}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {// OnInit interface

  @Input() bindable = 1000;

  ngOnInit() {// OnInit interface calls the ngOnInit method
    this.log('ngOnInit');
  }
  ngOnChanges() {
    this.log('ngOnChanges');
  }
  ngDoCheck() { this.log('ngDoCheck'); } //Called multiple times in development mode
  ngAfterContentInit(){ this.log('ngAfterContentInit'); }
  ngAfterContentChecked() { this.log('ngAfterContentChecked'); }
  ngAfterViewInit(){ this.log('ngAfterViewInit'); }
  ngAfterViewChecked(){ this.log('ngAfterViewChecked'); }
  ngOnDestroy(){ this.log('ngOnDestroy'); }
  private log(hook: string){
     console.log(hook);
  }
}