import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private loggedIn = false;
  private users: any[] = [
    {
      userEmail: 'katarinamarj@gmail.com',
      userPassword: 'katarina11', 
      userProfile: {
        firstName: 'Katarina',
        lastName: 'Marjanovic',
        email: 'katarinamarj@gmail.com',
        phone: '+381653788921',
        address: 'Beograd',
        favoriteItems: 'Brides'
      }
    },
    {
      userEmail: 'bojana22@gmail.com',
      userPassword: 'bojana22',
      userProfile: {
        firstName: 'Bojana',
        lastName: 'Marjanovic',
        email: 'bojana22@gmail.com',
        phone: '+381643670186',
        address: 'Novi Sad',
        favoriteItems: 'Bridesmade'
      }
    },
    {
      userEmail: 'ivana33@gmail.com',
      userPassword: 'ivana33', 
      userProfile: {
        firstName: 'Ivana',
        lastName: 'Petrovic',
        email: 'ivana33@gmail.com',
        phone: '+381624537832',
        address: 'Loznica',
        favoriteItems: 'Bridesmade'
      }
    }
  ];
  userEmail: string | undefined;
  userPassword: string | undefined;
  userProfile: any;

  constructor(private router: Router) { }

  login(email: string, password: string) {
    const user = this.users.find(u => u.userEmail === email && u.userPassword === password);
    if (user) {
      this.loggedIn = true;
      this.userEmail = email;
      this.userPassword = password;
      this.userProfile = user.userProfile;
      this.router.navigate(['/userpanel']);
    } else {
      console.log('Wrong email or password');
    }
  }

  logout() {
    this.loggedIn = false;
    this.userEmail = '';
    this.userPassword = '';
    this.userProfile = {};
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getUserEmail() {
    return this.userEmail;
  }

  getUserPassword() {
    return this.userPassword;
  }

  setUserPassword(newPassword: string) {
    this.userPassword = newPassword;
  }

  getUserProfile() {
    return this.userProfile;
  }

  updateUserProfile(profile: any) {
    this.userProfile = { ...this.userProfile, ...profile };
  }

  registerUser(email: string, password: string, userProfile: { firstName: string; email: string; phone: string; address: string; favoriteItems: string; }) {
    this.users.push({
      userEmail: email,
      userPassword: password,
      userProfile: userProfile
    });
    console.log('User registered successfully');
  }
}
