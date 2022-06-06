import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from './product';
import { getError, getProducts, State } from './state';
import * as ProductAction from './state/product.actions';

const ELEMENT_DATA:Product[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;

  displayedColumns = ['id', 'blend_name', 'origin', 'variety'];
  // dataSource:Product[];
  dataSource = new MatTableDataSource<Product>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    // Do NOT subscribe here because it uses an async pipe
    // This gets the initial values until the load is complete.
  
    this.products$ = this.store.select(getProducts);
    
    setTimeout(()=>{

    this.dataSource.paginator = this.paginator;
    });
    

    this.products$.subscribe( products => {
      this.dataSource.data = products;
    })
    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(ProductAction.loadProducts());

  }
}
