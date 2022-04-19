import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoggingService } from "../logging.service";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadSpinnerComponent } from "./loading-spinner/load-spinner.component";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations: [
        AlertComponent,
        LoadSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadSpinnerComponent,
        PlaceholderDirective,
        DropdownDirective,
        CommonModule
    ],
    entryComponents: [
        AlertComponent
    ],     
    providers: [LoggingService]

})
export class SharedModule { }