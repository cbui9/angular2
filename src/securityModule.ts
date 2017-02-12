import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import {SecurityRoute} from "./securityRoute";
import {Categories} from "./categories";
import {AddNewCategory} from "./addNewCategory";
@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoute],
    declarations: [DefaultPage, Categories, AddNewCategory],
    bootstrap: [DefaultPage]
})
export class SecurityModule { }
