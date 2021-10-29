import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'pokedex-component',
  styleUrls: ['./pokedex.component.scss'],
  templateUrl: './pokedex.component.html'
})
export class PokedexComponent implements OnInit, AfterViewInit {
  @Input() names: string[];
  public displayedColumns: string[] = ['name'];
  public dataSource: MatTableDataSource<any>;

  constructor() {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.names);
  }
}
