
// todo: implement the times function

Number.prototype.times = function(callback) {
    return Array.from({length: this}, (item, index) => callback(index) )
}

