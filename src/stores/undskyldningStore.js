import { observable, action } from "mobx";
const URL = "https://viter.dk/BackUnd/api/undskyld";

class UndskyldningStore{
  @observable messageFromServer = "sut mig";

  @action
  setMessageFromServer(msg) {
    this.messageFromServer = msg;
  }

  @action
  getData = () => {
    this.messageFromServer = "";
    fetch(URL, {
    method: 'get',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
    }).then(res=>res.json())
      .then(res => this.setMessageFromServer(res.indhold));
    }
}
let undskyldningStore = new UndskyldningStore(URL);

export default undskyldningStore;
