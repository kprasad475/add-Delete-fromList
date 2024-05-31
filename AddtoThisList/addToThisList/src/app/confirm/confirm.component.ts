import { Component, Inject ,ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss',
  encapsulation: ViewEncapsulation.None 
})
export class ConfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}
  
  onNoClick():void{
this.dialogRef.close(false);
  }

  onYesClick():void{
    this.dialogRef.close(true)
  }

}
