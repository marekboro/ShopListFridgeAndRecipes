import { Directive, HostBinding, HostListener, Input,ElementRef  } from '@angular/core'

@Directive({
    selector: '[appDropdownCustomDirective]'
})
export class DropDownDirective{ // shoudl allow to add a certain CSS class to the element it sits on upon a CLICK and then revert back on another click.. a class toggle. 

    @HostBinding('class.open') toggledToShowDropdown = false; // binds to class 'open' -- class is 'open' if toggledToShoDropdown === true. 

    @HostListener('document:click',['$event']) toggleOpen(event: Event) {   
        this.toggledToShowDropdown =  this.elRef.nativeElement.contains(event.target) ?  !this.toggledToShowDropdown : false;
           
    }

  constructor(private elRef: ElementRef) {}
   
}