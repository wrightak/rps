describe('play', () => {
    it('rock vs. scissors', () => {
        let observer = jasmine.createSpyObj('observer', ['p1Wins'])

        new Requests().play('rock', 'scissors', observer)

        expect(observer.p1Wins).toHaveBeenCalled()
    })

    it('scissors vs. paper', () => {
        let observer = jasmine.createSpyObj('observer', ['p1Wins'])

        new Requests().play('scissors', 'paper', observer)

        expect(observer.p1Wins).toHaveBeenCalled()
    })

    it('paper vs. rock', () => {
        let observer = jasmine.createSpyObj('observer', ['p1Wins'])

        new Requests().play('paper', 'rock', observer)

        expect(observer.p1Wins).toHaveBeenCalled()
    })

    it('scissors vs. rock', () => {
        let observer = jasmine.createSpyObj('observer', ['p2Wins'])

        new Requests().play('scissors', 'rock', observer)

        expect(observer.p2Wins).toHaveBeenCalled()
    })

    it('paper vs. scissors', () => {
        let observer = jasmine.createSpyObj('observer', ['p2Wins'])

        new Requests().play('paper', 'scissors', observer)

        expect(observer.p2Wins).toHaveBeenCalled()
    })

    it('rock vs. paper', () => {
        let observer = jasmine.createSpyObj('observer', ['p2Wins'])

        new Requests().play('rock', 'paper', observer)

        expect(observer.p2Wins).toHaveBeenCalled()
    })

    it('rock vs. rock', () => {
        let observer = jasmine.createSpyObj('observer', ['tie'])

        new Requests().play('rock', 'rock', observer)

        expect(observer.tie).toHaveBeenCalled()
    })

    it('scissors vs. scissors', () => {
        let observer = jasmine.createSpyObj('observer', ['tie'])

        new Requests().play('scissors', 'scissors', observer)

        expect(observer.tie).toHaveBeenCalled()
    })

    it('paper vs. paper', () => {
        let observer = jasmine.createSpyObj('observer', ['tie'])

        new Requests().play('paper', 'paper', observer)

        expect(observer.tie).toHaveBeenCalled()
    })
})

function Requests() {
    this.play = (p1Throw, p2Throw, observer) => {
        if (p1Throw === p2Throw) {
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