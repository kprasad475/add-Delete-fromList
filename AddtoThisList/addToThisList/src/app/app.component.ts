import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'addToThisList';
  newItem : string = '';
  items:string[] =[];
  editingIndex : boolean[]=[];
  editItemValue:string='';

  addItem(){
    if(this.newItem.trim()!==''){
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }
  deleteItem(index:number){
    this.items.splice(index,1)
  }

  // editItem(index:number,currentValue:string){
  //   this.editingIndex.fill(false);
  //   this.editingIndex[index]=true;
  //   this.editItemValue = currentValue;
  // }

  editItem(index:number,currentValue:string){
    this.editingIndex.fill(false);
    this.editingIndex[index]=true;
    this.editItemValue = currentValue;
  }

//   saveItem(index:number){
// if(this.editItemValue.trim()){
//   this.items[index]= this.editItemValue.trim();
//   this.editingIndex[index] = false;
//   this.editItemValue = '';
// }
 // }
 saveItem(index:number){
  if(this.editItemValue.trim()){
    this.items[index]=this.editItemValue.trim();
    this.editingIndex[index]=false;
    this.editItemValue='';
  }
 }
  
}
