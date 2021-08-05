const naiveSearch = (text, pattern, startIndex) => {
    if (typeof text === "string" && typeof pattern === "string") {
        const start = startIndex >= 0 ? startIndex : 0
        if (pattern === "") {
            return start < text.length ? start : text.length
        }
        for(let i=Math.floor(start); i<text.length - pattern.length + 1; i++) {
            for(let j=0; j<pattern.length; j++) {
                if (text[i+j] !== pattern[j]) {
                    j=pattern.length
                }
                if(j === pattern.length - 1) {
                    return i
                }
            } 
        }
    }
    return -1
}

const naiveSearchMulti = (text, pattern, startIndex) => {
    const result = []
    if (typeof text === "string" && typeof pattern === "string") {
        const start = startIndex >= 0 ? startIndex : 0
        for(let i=Math.floor(start); i<text.length - pattern.length + 1; i++) {
            for(let j=0; j<pattern.length; j++) {
                if (text[i+j] !== pattern[j]) {
                    j=pattern.length
                }
                if(j === pattern.length - 1) {
                    result.push(i)
                }
            } 
        }
    }
    return result
}


module.exports = {
    naiveSearch,
    naiveSearchMulti
}

