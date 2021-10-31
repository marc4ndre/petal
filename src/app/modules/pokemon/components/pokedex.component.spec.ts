import { ComponentFixture, TestBed } from '@angular/core/testing';
import {PokedexComponent} from "./pokedex.component";
import {MatTableModule} from "@angular/material/table";
import {HarnessLoader} from "@angular/cdk/testing";
import {TestbedHarnessEnvironment, UnitTestElement} from "@angular/cdk/testing/testbed";
import {MatTableHarness} from "@angular/material/table/testing";
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterTestingModule} from "@angular/router/testing";

describe('PokedexComponent', () => {
  it('shows the table when there is inputs', async() => {
    expect(element.table()).toBeTruthy();
  });

  it('shows proper columns', async() => {
    const header = await element.header();
    expect(header.length).toBe(1);
    expect(await header[0].getText()).toContain('Nom');
  });

  it('shows proper values in columns', async() => {
    const rows = await element.rows();
    const cell = await element.cell(0, 0);
    const link = await element.link(cell);

    expect(rows.length).toBe(2);
    expect(link.attributes['href'].value).toBe('/pokemon/pokemon1');
    expect(link.textContent).toBe('pokemon1');
  });

  let fixture: ComponentFixture<PokedexComponent>;
  let component: PokedexComponent;
  let element: ComponentDSL;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexComponent ],
      imports: [
        MatTableModule,
        MatCardModule,
        MatPaginatorModule,
        BrowserAnimationsModule,
        RouterTestingModule,
      ]
    });
    fixture = TestBed.createComponent(PokedexComponent);
    component = fixture.componentInstance;
    element = new ComponentDSL(fixture);
    component.names = ['pokemon1', 'pokemon2'];
    fixture.detectChanges();
  });
});

class ComponentDSL {
  public fixture: ComponentFixture<PokedexComponent> = null;
  public loader: HarnessLoader = null;

  constructor(fixture: ComponentFixture<PokedexComponent>) {
    this.fixture = fixture;
    this.loader = TestbedHarnessEnvironment.loader(this.fixture);
  }
  table = async() => await this.loader.getHarness(MatTableHarness);
  header = async() => {
    const headerRow = (await (await this.table()).getHeaderRows())[0];
    return (await headerRow.getCells());
  }
  rows = async() => (await this.table()).getRows();
  row = async(position: number) => (await this.rows())[position];
  cells = async(r: any) => (await this.row(r)).getCells();
  cell = async(r: any, position: number) => (await this.cells(r))[position];
  query = (parent: any, selector: any) => {
    return parent.querySelector(selector);
  }
  link = async(cell: any) => {
    const host = await cell.host();
    return this.query((host as UnitTestElement).element, 'a');
  }
}
