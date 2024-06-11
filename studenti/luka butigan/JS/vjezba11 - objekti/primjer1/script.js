var student = {
  firstName: 'Luka',
  get getName() {
    return this.firstName;
  },
  set changeName(newName) {
    this.firstName = newName;
  },
};
student.changeName('Marko');
console.log(student.firstName);
