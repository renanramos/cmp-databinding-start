import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements 
OnInit,
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  @Input('srvElement') 
  serverElement: {type: string, name: string, content: string};

  constructor() { 
    console.log('constructor called')

  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called!')
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnInit called!')
  }

  ngDoCheck(){
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called!')
  }
}
