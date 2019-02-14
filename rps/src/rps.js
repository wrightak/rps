function Requests() {
    this.playRound = (p1Hand, p2Hand, observer) => {
        if (!['rock', 'paper', 'scissors'].includes(p1Hand) ||
            !['rock', 'paper', 'scissors'].includes(p2Hand)) {
            observer.invalid()
        } else if (p1Hand === p2Hand) {
            observer.tie()
        } else if (p1Hand === 'scissors' && p2Hand === 'rock' ||
            p1Hand === 'paper' && p2Hand === 'scissors' ||
            p1Hand === 'rock' && p2Hand === 'paper') {
            observer.p2Wins()
        } else {
            observer.p1Wins()
        }
    }
}

module.exports = {
    Requests
}