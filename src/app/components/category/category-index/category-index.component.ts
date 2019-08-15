import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/models/category';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.css']
})
export class CategoryIndexComponent implements OnInit {

  columnNames = ['CategoryType', 'buttons'];
  dataSource: MatTableDataSource<Category>;

  constructor(private _categoryService: CategoryService) { }

  ngOnInit() {
    this._categoryService.getCategories().subscribe((categories: Category[]) => { // On init, retreives all the categories from the API
      this.dataSource = new MatTableDataSource<Category>(categories);
    });

  }

}
