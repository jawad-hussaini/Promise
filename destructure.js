// change value of title and author without calling it, call the property with calling new another name
obj = {
    title: "MernStackCourse",
    author: "Jawad"
}

let {title:ti, author:aj}=obj;
console.log(ti);
console.log(aj);