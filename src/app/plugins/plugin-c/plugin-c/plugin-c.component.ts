import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plugin-c',
  templateUrl: './plugin-c.component.html',
  styles: []
})
export class PluginCComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
