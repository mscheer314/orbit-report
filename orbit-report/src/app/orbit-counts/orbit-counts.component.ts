import { Component, Input, OnInit } from "@angular/core";
import { Satellite } from "../satellite";

@Component({
  selector: "app-orbit-counts",
  templateUrl: "./orbit-counts.component.html",
  styleUrls: ["./orbit-counts.component.css"],
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() {}

  ngOnInit() {}

  getTypeCount(type): number {
    let filteredSatellites = this.satellites.filter(
      (satellite) => satellite.type === type
    );
    return filteredSatellites.length;
  }
}
