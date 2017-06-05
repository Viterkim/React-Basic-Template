import { observable, action } from "mobx";

class ExampleStore {
@observable message = "Mobx Start Message";

@action
setMessage(msg) {
  this.message = msg;
}
}

let exampleStore = new ExampleStore();
export default exampleStore;
