import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import {FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
categoryForm: FormGroup;

  constructor(private _categoryService: CategoryService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }
  createForm(){
    this.categoryForm = this._form.group({
      CategoryType: new FormControl,
    });
  }

  onSubmit(){
    this._categoryService.createCategory(this.categoryForm.value).subscribe(data => {
      this._router.navigate(['/category']);
    })
  }

}
