import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from './confirm/confirm.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}
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
  // deleteItem(index:number){
  //   this.items.splice(index,1)
  // }
  deleteItem(index: number) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '250px',
      data: { message: 'Are you sure you want to delete this item?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (index > -1) {
          this.items.splice(index, 1);
          this.editingIndex.splice(index, 1);
        }
      }
    });
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


 saveItem(index:number){
  if(this.editItemValue.trim()){
   
    this.items[index]=this.editItemValue.trim();
    //this.items.push(this.editItemValue);
 
    this.editingIndex[index]=false;
    this.editItemValue='';
  }
 }

  
}
