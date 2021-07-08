var photobook = /** @class */ (function () {
    function photobook() {
        var myarray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            myarray[_i] = arguments[_i];
        }
        if (myarray.length == 1) {
            this.numpages = myarray[0];
        }
        else {
            this.numpages = 16;
        }
    }
    ;
    photobook.prototype.getNumberPages = function () {
        return this.numpages;
    };
    return photobook;
}());
var Bigphotobook = /** @class */ (function () {
    function Bigphotobook() {
        this.numpages = 64;
    }
    return Bigphotobook;
}());
var book1 = new photobook();
var book2 = new photobook(25);
var book3 = new Bigphotobook();
console.log("Book1 has " + book1.getNumberPages() + " pages");
console.log("Book2 has " + book2.getNumberPages() + " pages");
console.log("Book3 has " + book3.numpages + " pages");
