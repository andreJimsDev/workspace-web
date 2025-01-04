import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';

@Component({
  selector: 'app-error-404',
  imports: [NzButtonModule, NzResultModule],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.css',
})
export class Error404Component {
  router = inject(Router);

  goToHome() {
    console.log('click to go to home page');
    this.router.navigate(['/crm']);
  }
}
