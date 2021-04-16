
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;
  ContactForm: FormGroup;
  pattern1 = "^[0-9_-]{10,12}";
  pattern2 = '^-?[0-9]+$';

  constructor(
    private fb: FormBuilder,
    private http:HttpClient
  ) {}

    

  ngOnInit() {

    this.ContactForm = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'budget': new FormControl('', [Validators.required, Validators.pattern(this.pattern2)]),
      'phone': new FormControl('', [Validators.required, Validators.pattern(this.pattern1)])
    });

    
  }
 
  get ContactFormControl() {
    return this.ContactForm.controls;
   
    
  }

  onSubmit() {
    this.submitted = true;
    if (this.ContactForm.valid) {

      alert('Form Submitted succesfully!!!.');
      console.log(this.ContactForm.value);
     this.ContactForm.reset();
    }
  }
  

storeData(){
  let Form = JSON.stringify(this.ContactForm.value);
 return this.http.post('https://contactform-ac5e5-default-rtdb.firebaseio.com/form.json',
   Form
).subscribe(responseData =>{

  console.log(responseData);
})

}
getData(){
this.http.get('https://contactform-ac5e5-default-rtdb.firebaseio.com/form.json'
).subscribe(form=>{
  console.log(form);
})

}
}



