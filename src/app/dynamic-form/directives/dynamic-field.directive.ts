import {ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef} from '@angular/core';
import {InputComponent} from '../input/input.component';
import {FormGroup} from '@angular/forms';
import {FieldConfig} from '../field-config.types';

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
  @Input() field: FieldConfig;
  @Input() group: FormGroup;
  componentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}

const componentMapper = {
  input: InputComponent
};
