const {Requests, Round} = require('../src/rps')

describe('fetchResults', () => {
    describe('when no one has played', () => {
        it('tells the observer there are no rounds', () => {
            const observer = jasmine.createSpyObj('observer', ['noRounds'])
            const stubRepo = {
                isEmpty: () => {return true}
            }


            new Requests().fetchResults(observer, stubRepo)


            expect(observer.noRounds).toHaveBeenCalled()
        })
    })

    describe('rounds have been played', () => {
        it('tells the observer that rounds have been played', () => {
            let stubRepo = {
                isEmpty: () => {return false},
                getAll: () => {return [
                    new Round('rock', 'sailboat', 'invalid')
                ]}
            }
            let observer = jasmine.createSpyObj('observer', ['rounds'])


            new Requests().fetchResults(observer, stubRepo)


            expect(observer.rounds).toHaveBeenCalledWith(
                [
                    new Round('rock', 'sailboat', 'invalid')
                ]
            )
        })
    })
})