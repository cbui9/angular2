import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: "src/categories.html"
})

export class Categories {
    private routera: Router;
    constructor(router: Router) {
        this.routera = router;
    }
    public onEditClicked(id: any) {
        this.routera.navigate(["/editCategory", id]);
    }
}