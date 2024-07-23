import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})

export class UserpanelComponent  implements OnInit{

  userProfile: any;
  currentPassword: string = '';
  newPassword: string = '';
  newAddress: string = '';
  showPasswordReset: boolean = false;
  showAddressEdit: boolean = false;

  constructor(public authService: AuthService) {
    this.userProfile = this.authService.getUserProfile();
  }

  ngOnInit() {
    this.userProfile = this.authService.getUserProfile(); 
  }

  logout() {
    this.authService.logout();
  }

  togglePasswordReset() {
    this.showPasswordReset = !this.showPasswordReset;
  }

  toggleAddressEdit() {
    this.showAddressEdit = !this.showAddressEdit;
  }

  changePassword() {
    if (this.currentPassword === this.authService.getUserPassword()) {
      this.authService.setUserPassword(this.newPassword);
      console.log('Password changed successfully.');
      this.newPassword = '';
      this.currentPassword = '';
      this.showPasswordReset = false;
    } else {
      console.log('Current password is incorrect.');
    }
  }

  saveProfile() {
    if (this.newAddress) {
      this.userProfile.address = this.newAddress;
      this.newAddress = '';
    }
    this.authService.updateUserProfile(this.userProfile);
    alert('Profile updated successfully');
    this.showAddressEdit = false;
  }
}
