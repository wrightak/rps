function Requests() {
    this.playRound = (p1Hand, p2Hand, observer) => {
        new PlayRoundRequest(p1Hand, p2Hand, observer).process()
    }
}

function PlayRoundRequest(p1Hand, p2Hand, observer) {
    this.process = () => {
        if (invalidThrow(p1Hand) || invalidThrow(p2Hand)) {
            observer.invalid()
        } else if (tie()) {
            observer.tie()
        } else if (
            p2Wins()
        ) {
            observer.p2Wins()
        } else {
            observer.p1Wins()
        }
    }

    function tie() {
        return p1Hand === p2Hand
    }

    function p2Wins() {
        return p1Hand === 'scissors' && p2Hand === 'rock' ||
            p1Hand === 'paper' && p2Hand === 'scissors' ||
            p1Hand === 'rock' && p2Hand === 'paper'
    }

    function invalidThrow(hand) {
        return !['rock', 'paper', 'scissors'].includes(hand)
    }
}

module.exports = {
    Requests
}