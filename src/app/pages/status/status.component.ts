import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.css',
})
export class StatusComponent {
  applicationarray: any = [];
  constructor(private userserv: UserService,private toast:ToastrService) {
    let userid = userserv.getUserFromLocalStorage('user').userid;
    userserv.viewuserapplication(userid).subscribe(
      (res) => {
        this.applicationarray = res;
        console.log(res);
      },
      (err) => {
        this.toast.error(err.error.message);
      }
    );
  }
}
