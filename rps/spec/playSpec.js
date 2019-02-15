const {Requests, Round} = require('../src/rps')

describe('playRound', () => {
    let observer
    let spyRepo

    beforeEach(() => {
        spyRepo = jasmine.createSpyObj('repo', ['save'])
    })

    describe('saving after playing rounds', () => {
        it('saves an invalid game result', () => {
            const observer = {invalid: () => {}}


            new Requests().playRound('rock', 'sailboat', observer, spyRepo)


            expect(spyRepo.save).toHaveBeenCalledWith(
                new Round('rock', 'sailboat', 'invalid')
            )
        })

        it('saves a p1Wins game result', () => {
            const observer = {p1Wins: () => {}}


            new Requests().playRound('rock', 'scissors', observer, spyRepo)


            expect(spyRepo.save).toHaveBeenCalledWith(
                new Round('rock', 'scissors', 'p1Wins')
            )
        })

        it('saves a p2Wins game result', () => {
            const observer = {p2Wins: () => {}}


            new Requests().playRound('rock', 'paper', observer, spyRepo)


            expect(spyRepo.save).toHaveBeenCalledWith(
                new Round('rock', 'paper', 'p2Wins')
            )
        })

        it('saves a tie game result', () => {
            const observer = {tie: () => {}}


            new Requests().playRound('rock', 'rock', observer, spyRepo)


            expect(spyRepo.save).toHaveBeenCalledWith(
                new Round('rock', 'rock', 'tie')
            )
        })
    })

    describe('p1 win scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['p1Wins'])
        })

        it('rock vs. scissors', () => {
            new Requests().playRound('rock', 'scissors', observer, spyRepo)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('scissors vs. paper', () => {
            new Requests().playRound('scissors', 'paper', observer, spyRepo)

            expect(observer.p1Wins).toHaveBeenCalled()
        })

        it('paper vs. rock', () => {
            new Requests().playRound('paper', 'rock', observer, spyRepo)

            expect(observer.p1Wins).toHaveBeenCalled()
        })
    })

    describe('p2 win scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['p2Wins'])
        })

        it('scissors vs. rock', () => {
            new Requests().playRound('scissors', 'rock', observer, spyRepo)

            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('paper vs. scissors', () => {
            new Requests().playRound('paper', 'scissors', observer, spyRepo)

            expect(observer.p2Wins).toHaveBeenCalled()
        })

        it('rock vs. paper', () => {
            new Requests().playRound('rock', 'paper', observer, spyRepo)

            expect(observer.p2Wins).toHaveBeenCalled()
        })
    })

    describe('tie scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['tie'])
        })

        it('rock vs. rock', () => {
            new Requests().playRound('rock', 'rock', observer, spyRepo)

            expect(observer.tie).toHaveBeenCalled()
        })

        it('scissors vs. scissors', () => {
            new Requests().playRound('scissors', 'scissors', observer, spyRepo)

            expect(observer.tie).toHaveBeenCalled()
        })

        it('paper vs. paper', () => {
            new Requests().playRound('paper', 'paper', observer, spyRepo)

            expect(observer.tie).toHaveBeenCalled()
        })
    })

    describe('invalid scenarios', () => {
        beforeEach(() => {
            observer = jasmine.createSpyObj('observer', ['invalid'])
        })

        it('invalid vs. rock', () => {
            new Requests().playRound(Math.random(), 'rock', observer, spyRepo)

            expect(observer.invalid).toHaveBeenCalled()
        })

        it('rock vs. invalid', () => {
            new Requests().playRound('rock', Math.random(), observer, spyRepo)

            expect(observer.invalid).toHaveBeenCalled()
        })
    })
})