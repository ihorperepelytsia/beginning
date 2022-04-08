class StringBuilder {
  constructor(string) {
    this.string = string;
  }

  get value() {
    return this.string;
  }

  append(str) {
    return (this.string = this.string + str);
  }

  prepend(str) {
    return (this.string = str + this.string);
  }
  pad(str) {
    return (this.string = str + this.string + str);
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
