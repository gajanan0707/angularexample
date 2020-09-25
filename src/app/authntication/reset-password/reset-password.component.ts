import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  isLoading: Boolean = false
  error: string = ""
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.isLoading = true
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    this.auth.sendPasswordResetEmail(email).then(() => {

      this.isLoading = false
    })
      .catch(e => {
        this.isLoading = false
        this.error = e.message
        this.auth.showerrorForResetMail()
      })

  }

}
