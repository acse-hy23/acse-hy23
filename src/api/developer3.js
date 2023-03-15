class Developer {
  constructor(name, language) {
    this.name = name;
    this.language = language;
  }

  getName() {
    return this.name;
  }

  getLanguage() {
    return this.language;
  }

  setName(name) {
    this.name = name;
  }

  setLanguage(language) {
    this.language = language;
  }

  code() {
    switch (this.language) {
      case "nodejs":
        return 'console.log("Hello, ' + this.name + '!")';
      case "java":
        return 'System.out.println("Hello, ' + this.name + '!")';
      case "python":
        return 'print("Hello, ' + this.name + '!")';
      default:
        throw new Error("Unsupported language: " + this.language);
    }
  }
}

module.exports = Developer;
