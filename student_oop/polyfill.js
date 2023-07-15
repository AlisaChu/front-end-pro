if (!Array.prototype.max) {
    Array.prototype.max = function () {
        return Math.max(...this);
    };
}
