import { Component, OnInit } from '@angular/core';
import {Category } from 'src/app/models/category';
import {FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: Category;

  editCategoryForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _categoryService: CategoryService,
              private _ar: ActivatedRoute,
              private _router: Router) { 
        this._ar.paramMap.subscribe(p => {
          this._categoryService.getCategory(p.get('id')).subscribe((singleCategory: Category) => {
            this.category = singleCategory;
            this.createForm();
          });
        });
              }

  ngOnInit() {
  }

  createForm(){
    this.editCategoryForm = this._form.group({
      CategoryID: new FormControl(this.category.CategoryID),
      CategoryType: new FormControl(this.category.CategoryType),
    });
  }

  onSubmit(form){
    const updateCategory: Category = {
      CategoryID: form.value.CategoryID,
      CategoryType: form.value.CategoryType,
    
    };
    this._categoryService.updateCategory(updateCategory).subscribe(d => {
      this._router.navigate(['/category']);
    })
  }

}
