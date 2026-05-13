import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Navbar } from "./navbar/navbar";

@NgModule({
    imports: [
        CommonModule,
        Navbar
    ],
    exports: [
        Navbar
    ]

})
export class LayoutModule { }