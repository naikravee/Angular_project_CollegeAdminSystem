import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public user: SocialUser = new SocialUser;

  constructor(private authService: SocialAuthService) { }

  @ViewChild(MatAccordion)
  accordion!: MatAccordion;
  

  ngOnInit(): void {
    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log(user);
    });
  }
  
  public signOut(): void {
    this.authService.signOut();
  }
  
}
