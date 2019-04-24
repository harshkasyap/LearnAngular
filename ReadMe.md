# ReadMe - Learn Angular4

* The structure of Angular is based on component/services architecture.
* Angular Js was based on model view architecture.
* Animation in Angular 4 is available as a separate package and needs to be imported from @angular/animations. In Angular2, it was available with @angular/core.
* Angular 4 uses <ng-template> as the tag instead of <template>;
* Angular 4 is updated to a recent version of TypeScript, which is 2.2.
* e2e − end to end test folder. Mainly e2e is used for integration testing and helps ensure the application works fine.
* src − This folder is where we will work on the project using Angular 4.
* .angular-cli.json − It basically holds the project name, version of cli, etc.
* Major part of the development with Angular 4 is done in the components. Components are basically classes that interact with the .html file
* Module in Angular refers to a place where you can group the components, directives, pipes, and services, which are related to the application.
  * It starts with @NgModule and contains an object which has declarations,   imports, providers and bootstrap.
  * declarations − In declarations, reference to the components is stored. 
  * imports − This will have the modules imported as shown above. 
  * providers − This will have reference to the services created.
  * bootstrap − This has reference to the default component created.
* We use curly braces for data binding - {{}}; this process is called interpolation.
* Component Directives - Main class having details of how the component should be processed, instantiated and used at runtime.
* Structural Directives - deals with manipulating the dom elements. Structural directives have a * sign before the directive. ex- *ngIf
* Attribute Directives - deal with changing the look and behavior of the dom element. You can create your own directives.
* Pipes were earlier called filters in Angular1 and called pipes in Angular 2 and 4.
* Services - contains @Injectable method and className
* If you change the property of the service in any component, the same is changed in other components too.
* Http Service will help us fetch external data, post to it, etc.
* With a template driven form, most of the work is done in the template; and with the model driven form, most of the work is done in the component class.