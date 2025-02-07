function CreateCustomer(name: string, age?: number): string {
    //return name + age?.toString();
    //return name + (age == undefined ? '' : age?.toString());
    //var ageStr = age == undefined ? '' : age?.toString();
    //return `${name} ${ageStr}`;
    return `${name} ${age == undefined ? '' : age?.toString()}`;
}