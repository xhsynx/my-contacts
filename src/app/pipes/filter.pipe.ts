import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../model/user";
@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(users: User[], searchTerm: string): User[] {
    if (!users || !searchTerm) {
      return users;
    }
    return users.filter(
      user => user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
