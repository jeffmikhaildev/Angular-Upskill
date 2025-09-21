import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interface/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-json-server',
  imports: [FormsModule],
  templateUrl: './json-server.component.html',
  styleUrl: './json-server.component.css',
})
export class JsonServerComponent {
  userData: User[] = [];

  selectedUser: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.userData = data.reverse();
    });
  }

  addUser(user: User) {
    if (!this.selectedUser) {
      this.userService.saveUser(user).subscribe((data: User) => {
        if (data) {
          this.getUsers();
        }
      });
    } else {
      const userData = { ...user, id: this.selectedUser.id };

      this.userService.updateUser(userData).subscribe((data: User) => {
        if (data) {
          this.getUsers();
        }
      });
    }
  }

  selectUser(id: string | number) {
    this.userService.getSelectedUser(id).subscribe((data: User) => {
      this.selectedUser = data;
    });
  }

  deleteUser(id: string | number) {
    const confirmed = confirm('Are you sure you want to delete this user?');

    if (confirmed) {
      this.userService.deleteUser(id).subscribe((data: User) => {
        if (data) {
          this.getUsers();
        }
      });
    }
  }
}
