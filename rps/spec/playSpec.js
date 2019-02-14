describe('play', () => {
    let observer

    describe('p1 win scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['p1Wins'])
        })

        it('rock vs. scissors', () => {
            new Requests().play('rock', 'scissors', observer)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('scissors vs. paper', () => {
            new Requests().play('scissors', 'paper', observer)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('paper vs. rock', () => {
            new Requests().play('paper', 'rock', observer)

            expect(observer.p1Wins).toHaveBeenCalled()
        })
    })

    describe('p2 win scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['p2Wins'])
        })

        it('scissors vs. rock', () => {
            new Requests().play('scissors', 'rock', observer)

            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('paper vs. scissors', () => {
            new Requests().play('paper', 'scissors', observer)

            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('rock vs. paper', () => {
            new Requests().play('rock', 'paper', observer)

            expect(observer.p2Wins).toHaveBeenCalled()
        })
    })

    describe('tie scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['tie'])
        })

        it('rock vs. rock', () => {
            new Requests().play('rock', 'rock', observer)

            expect(observer.tie).toHaveBeenCalled()
        })

        it('scissors vs. scissors', () => {
            new Requests().play('scissors', 'scissors', observer)

            expect(observer.tie).toHaveBeenCalled()
        })

        it('paper vs. paper', () => {
            new Requests().play('paper', 'paper', observer)

            expect(observer.tie).toHaveBeenCalled()
        })
    })

    describe('invalid scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['invalid'])
        })

        it('invalid vs. rock', () => {
            new Requests().play(Math.random(), 'rock', observer)

            expect(observer.invalid).toHaveBeenCalled()
        })

        it('rock vs. invalid', () => {
            new Requests().play('rock', Math.random(), observer)

            expect(observer.invalid).toHaveBeenCalled()
        })
    })
})

function Requests() {
    this.play = (p1Throw, p2Throw, observer) => {
        if (!['rock', 'paper', 'scissors'].includes(p1Throw) ||
            !['rock', 'paper', 'scissors'].includes(p2Throw)) {
            observer.invalid()
        } else if (p1Throw === p2Throw) {
            observer.tie()
        } else if (p1Throw === 'scissors' && p2Throw === 'rock' ||
            p1Throw === 'paper' && p2Throw === 'scissors' ||
            p1Throw === 'rock' && p2Throw === 'paper') {
            observer.p2Wins()
        } else {
            observer.p1Wins()
        }
    }
}