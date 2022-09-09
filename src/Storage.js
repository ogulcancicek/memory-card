export default class Storage {

    static getTopScore() {
        let topScore;
        if (localStorage.getItem('topScore') === null) {
            topScore = 0;
            localStorage.setItem('topScore', JSON.stringify(topScore));    
        } else {
            topScore = JSON.parse(localStorage.getItem('topScore'));
        }
        return topScore;
    }

    static setTopScore(topScore) {
        localStorage.setItem('topScore', JSON.stringify(topScore));
    }
}