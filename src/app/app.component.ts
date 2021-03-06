import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-pwa";
  update: boolean = false;
  joke: any;

  constructor(updates: SwUpdate, private data: DataService) {
    updates.available.subscribe((event) => {
      // this.update = true;
      updates.activateUpdate().then(() => {
        document.location.reload();
      });
    });
  }

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    this.data.giveMeJokes().subscribe((res) => {
      this.joke = res;
    });
  }
}
