import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/Employer/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:AuthService,private router:Router) { }
  loginForm=this.fb.group({
    emailId:'',
    password:''
  })

  ngOnInit(): void {
  }
  submit(){
    return this.service.login(this.loginForm.value).subscribe(res=>{
      const data=JSON.parse(JSON.stringify(res));    
      
      localStorage.setItem("res",JSON.stringify(data.data.token));
      localStorage.setItem("users",JSON.stringify(data.data.id));
      this.router.navigateByUrl("/dashboard")
    },err=>{
      console.log(err);
      
    })
    
  }

}
