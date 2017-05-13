import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagrpah>{{bindable}}</p>
    <p>{{boundParagrpah.textContent}}</p>
  `,// #boundParagrpah is a local variable accessible only in the template
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {// OnInit interface

  @Input() bindable = 1000;

  @ViewChild('boundParagrpah')
  boundParagrpah: HTMLElement;// Use ViewChild to use local variable in component

  @ContentChild('boundContent')
  boundContent: HTMLElement; // This will get all content from viewchild plus also any external content being injected from ng-content

  ngOnInit() {// OnInit interface calls the ngOnInit method
    this.log('ngOnInit');
  }
  ngOnChanges() {
    this.log('ngOnChanges');
  }
  ngDoCheck() { this.log('ngDoCheck'); } //Called multiple times in development mode
  ngAfterContentInit(){ 
    this.log('ngAfterContentInit'); 
    console.log(this.boundContent);
  }
  ngAfterContentChecked() { this.log('ngAfterContentChecked'); }
  ngAfterViewInit(){ 
    this.log('ngAfterViewInit'); 
    console.log(this.boundParagrpah);
  }
  ngAfterViewChecked(){ this.log('ngAfterViewChecked'); }
  ngOnDestroy(){ this.log('ngOnDestroy'); }
  private log(hook: string){
     console.log(hook);
  }
}