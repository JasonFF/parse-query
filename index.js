module.exports = function () {
    var partList = window.location.search.slice(1).split('&')
    var result = {}
    for (var i = 0; i < partList.length; i++) {
        var it = partList[i]
        var spart = it.split('=')
        var pro = spart[0]
        var val = spart[1]==undefined?true:spart[1]
        if (result[pro]) {
            if (result[pro] instanceof Array) {
                result[pro].push(val)
            } else {
                result[pro] = [result[pro],val]
            }
        } else {
            result[pro] = val
        }
    }
    return result
}