  import { Component, OnInit } from '@angular/core';
  import { CategoryService } from 'src/app/service/category.service';
  import { ActivatedRoute, Router } from '@angular/router';
  import { Category } from 'src/app/models/category';
  
  @Component({
    selector: 'app-category-delete',
    templateUrl: './category-delete.component.html',
    styleUrls: ['./category-delete.component.css'] })

  export class CategoryDeleteComponent implements OnInit {
    category: Category;
  
    constructor(private _categoryService: CategoryService, private _ar: ActivatedRoute, private _router: Router) {
      this._ar.paramMap.subscribe(p => {
        this._categoryService.getCategory(p.get('id')).subscribe((singleCategory: Category) => {
          this.category = singleCategory;
        });
      });
     }
  
  
    ngOnInit() {
    }
  
    onDelete(){
      this._categoryService.deleteCategory(this.category.CategoryID).subscribe(()=> {
        this._router.navigate(['/category']);
      });
    }
  
  }
