function getLength(val: any[]): number;
function getLength(val: string): string;

function getLength(val: string | any[]) {
    if(typeof val === 'string'){
        const numberOfWords = val.split(' ').length;
        return `${numberOfWords} words`;
    }
    return val.length;
}

const numOfWords = getLength('does it work?');
numOfWords.length;
const numOfItems = getLength(['Sports', 'Cookies']);