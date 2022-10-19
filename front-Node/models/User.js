class User {
  constructor(name, password,permission) {
    this.name = name;
    this.password = password;
    this.permission=permission;
  }

  static getName() {
    return this.name;
  }
  static setName() {
    return this.name;
  }
}

module.exports = User;