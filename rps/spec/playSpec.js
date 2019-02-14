const {Requests} = require('../src/rps')

describe('playRound', () => {
    let observer

    describe('p1 win scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['p1Wins'])
        })

        it('rock vs. scissors', () => {
            new Requests().playRound('rock', 'scissors', observer)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('scissors vs. paper', () => {
            new Requests().playRound('scissors', 'paper', observer)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('paper vs. rock', () => {
            new Requests().playRound('paper', 'rock', observer)

            expect(observer.p1Wins).toHaveBeenCalled()
        })
    })

    describe('p2 win scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['p2Wins'])
        })

        it('scissors vs. rock', () => {
            new Requests().playRound('scissors', 'rock', observer)

            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('paper vs. scissors', () => {
            new Requests().playRound('paper', 'scissors', observer)

            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('rock vs. paper', () => {
            new Requests().playRound('rock', 'paper', observer)

            expect(observer.p2Wins).toHaveBeenCalled()
        })
    })

    describe('tie scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['tie'])
        })

        it('rock vs. rock', () => {
            new Requests().playRound('rock', 'rock', observer)

            expect(observer.tie).toHaveBeenCalled()
        })

        it('scissors vs. scissors', () => {
            new Requests().playRound('scissors', 'scissors', observer)

            expect(observer.tie).toHaveBeenCalled()
        })

        it('paper vs. paper', () => {
            new Requests().playRound('paper', 'paper', observer)

            expect(observer.tie).toHaveBeenCalled()
        })
    })

    describe('invalid scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['invalid'])
        })

        it('invalid vs. rock', () => {
            new Requests().playRound(Math.random(), 'rock', observer)

            expect(observer.invalid).toHaveBeenCalled()
        })

        it('rock vs. invalid', () => {
            new Requests().playRound('rock', Math.random(), observer)

            expect(observer.invalid).toHaveBeenCalled()
        })
    })
})