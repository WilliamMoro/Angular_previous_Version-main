import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [ ];

  constructor(private foodListService: FoodListService ) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe(
      res => this.foodList = res
    )

    this.foodListService.emitEvent.subscribe(
      res => {alert(`Você adicionou => ${res.name}`)
      return this.foodList.push(res)
    }

    );
  }

  public foodListDelete(id: number) {
    return this.foodListService.foodListDelete(id).subscribe(
      res => {
        this.foodList = this.foodList.filter(
          item => {
            return id !== item.id
          }
        );
      }
    )
  };

  public foodListEdit(value: string, id: number) {
    this.foodListService.foodListEdit(value, id).subscribe(
      res => {
        return console.log(res);
      }
    )
  }

}
