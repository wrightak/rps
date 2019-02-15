function Requests() {
    this.playRound = (p1Hand, p2Hand, observer, repo) => {
        new PlayRoundRequest(p1Hand, p2Hand, observer, repo).process()
    }

    this.fetchResults = (observer, repo) => {
        if (repo.isEmpty()) {
            observer.noRounds()
        } else {
            observer.rounds(repo.getAll())
        }
    }
}

function Round(p1Hand, p2Hand, result) {
    this.p1Hand = p1Hand
    this.p2Hand = p2Hand
    this.result = result
}

function PlayRoundRequest(p1Hand, p2Hand, observer, repo) {
    this.process = () => {
        if (invalidThrow(p1Hand) || invalidThrow(p2Hand)) {
            repo.save(new Round(p1Hand, p2Hand, 'invalid'))
            observer.invalid()
        } else if (tie()) {
            repo.save(new Round(p1Hand, p2Hand, 'tie'))
            observer.tie()
        } else if (
            p2Wins()
        ) {
            repo.save(new Round(p1Hand, p2Hand, 'p2Wins'))
            observer.p2Wins()
        } else {
            repo.save(new Round(p1Hand, p2Hand, 'p1Wins'))
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
    Requests,
    Round
}