import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScripts();
  }
  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/assets/js/ie11fix/fn.fix-padStart.js',
      'assets/plugins/editors/quill/quill.js',
      'assets/assets/js/apps/todoList.js',
      //Load all your script files here'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    } }
}
