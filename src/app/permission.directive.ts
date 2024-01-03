import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit {
  @Input() appPermission: string[] = [];
  private _currentRole = 'agent';

  constructor(private _tmplRef: TemplateRef<any>, private vc: ViewContainerRef) { }

  ngOnInit(): void {
    if (this.appPermission.indexOf(this._currentRole) === -1) {
      this.vc.clear();
    } else {
      this.vc.createEmbeddedView(this._tmplRef);
    }
  }
}
