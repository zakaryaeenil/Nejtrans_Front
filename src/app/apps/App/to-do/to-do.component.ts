import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TodoService} from "../../../Services/todo.service";
import {Todo} from "../../../Models/todo";


@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  todos  : Todo[];
  Item:Todo =new Todo();
  @ViewChild('closeAddExpenseModal') closeAddExpenseModal;
  @ViewChild('title') title;
  @ViewChild('desc') desc;

  constructor(private service : TodoService  ) {

  }

  ngOnInit(): void {
    this.getAllItemstodo();
  }


  getAllItemstodo(){
    this.service.gettodoItem('All').subscribe(data =>{
      this.todos = data;
      this.loadScripts();
    })
  }

  Onchecked(item : Todo , type : string){
    this.service.changeTypetodoItem(item.id,type).subscribe(data=>{
      window.location.reload();
    this.loadScripts();

    })
  }
  OnDelete(item : Todo ){
    this.service.DeleteTodoItem(item.id).subscribe(data=>{
      window.location.reload();
      this.loadScripts();

    })
  }

  onSubmit(){
   this.saveTodo();
   this.goToDoList();
  }
  saveTodo(){
    this.Item.title =this.title.nativeElement.value.toString();
    this.Item.description =this.desc.nativeElement.value.toString();
   this.service.createTodoItem(this.Item).subscribe(error=> console.log(error));

  }

  goToDoList(){
    this.closeAddExpenseModal.nativeElement.click();
    window.location.reload();
  }

  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/assets/js/ie11fix/fn.fix-padStart.js',
      'assets/plugins/editors/quill/quill.js',
      'assets/assets/js/apps/todoList.js',
      //Load all your script files here'
    ];
    for (let i of dynamicScripts) {
      const node = document.createElement('script');
      node.src = i;
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    } }
}
