import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Categories } from "./categories";
import { AddNewCategory } from "./addNewCategory";
let routes: Routes = [
    { path: "", redirectTo: "categories", pathMatch: "full" },
    { path: "categories", component: Categories },
    { path: "addNewCategory", component: AddNewCategory },
    { path: "editCategory/:id", component: AddNewCategory }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class SecurityRoute {

}
