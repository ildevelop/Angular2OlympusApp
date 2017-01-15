/**
 * Created by Radu on 1/13/2017.
 */
export class UserInfo{

  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  title7: string;
  constructor(){}

  toString(){
    let string = '';
    for (let property in this) {
      if (this.hasOwnProperty(property)) {
        string+=' '+property;
      }
    }
    return string;
  }
}
