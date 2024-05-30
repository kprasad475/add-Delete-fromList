import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
  addUserForm!: FormGroup;
   userDetails :any [] = [];
   userType!: [{ id: string; firstName: string; lastName: string; email: string; contact: string; }];
 
  constructor(
    public dialogRef: MatDialogRef<AddEditUserComponent>, 
    public userService: UserService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public incomingData: any 
    // interface UserType {
    //   firstName: string,
    //   lastName: string,
    //   email: string,
    //   contact: string,
    //}
  ) { }
  

  ngOnInit(): void {
   let namePattern = /[a-zA-z]/;
   let numberPattern = '[- +()0-9]+';
   this.addUserForm=new FormGroup({
    id: new FormControl(''),
    firstName:new FormControl('',[Validators.required,Validators.pattern(namePattern)]),
    lastName:new FormControl('',[Validators.required,Validators.pattern(namePattern)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    contact:new FormControl('',[Validators.required,Validators.pattern(numberPattern)])
   })
   this.addUserForm.patchValue(this.incomingData)
  }

  public closePopup() {
    this.dialogRef.close();
   // this.addUserForm.reset();
  }

  public addUser() {
    console.log(this.incomingData.lastName)
    if (this.incomingData && this.incomingData.action && this.incomingData.action === 'edit') {
      this.userService.editUser(this.incomingData.id, this.addUserForm.value);
      this.dialogRef.close();
    } else {
      this.userService.addUser(this.addUserForm.value);
      console
      .log(this.addUserForm.value)
      this.dialogRef.close();
    // this.userDetails.push(this.incomingData)
    // console.log(this.addUserForm.value)
    }
  }

  public deleteUser() {
    this.dialogRef.close(true);
  }

  public cancelDelete() {
    this.dialogRef.close(false);
  }
}