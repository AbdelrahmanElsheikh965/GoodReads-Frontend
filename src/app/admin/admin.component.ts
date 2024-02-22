import { Component } from '@angular/core';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CategoryComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
