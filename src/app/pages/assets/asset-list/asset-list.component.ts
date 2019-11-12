import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  assets: Array<any>  = [
    {
      apartmentId: "CH000001",
      category: "Tủ lạnh",
      buyDate: "19/12/2019",
      guaranteeTime: 36
    },
    {
      apartmentId: "CH000002",
      category: "Tủ lạnh",
      buyDate: "19/12/2019",
      guaranteeTime: 36
    },
    {
      apartmentId: "CH000003",
      category: "Tủ lạnh",
      buyDate: "19/12/2019",
      guaranteeTime: 36
    },
    {
      apartmentId: "CH000004",
      category: "Tủ lạnh",
      buyDate: "19/12/2019",
      guaranteeTime: 36
    },
    {
      apartmentId: "CH000005",
      category: "Tủ lạnh",
      buyDate: "19/12/2019",
      guaranteeTime: 36
    },
    {
      apartmentId: "CH000006",
      category: "Tủ lạnh",
      buyDate: "19/12/2019",
      guaranteeTime: 36
    },
    {
      apartmentId: "CH000007",
      category: "Tủ lạnh",
      buyDate: "19/12/2019",
      guaranteeTime: 36
    },
    {
      apartmentId: "CH000008",
      category: "Tủ lạnh",
      buyDate: "19/12/2019",
      guaranteeTime: 36
    },
    {
      apartmentId: "CH000009",
      category: "Tủ lạnh",
      buyDate: "19/12/2019",
      guaranteeTime: 36
    },
    {
      apartmentId: "CH000010",
      category: "Tủ lạnh",
      buyDate: "19/12/2019",
      guaranteeTime: 36
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
