import ReactDOM from 'react-dom'
import React from 'react'
import PlayForm from '../src/PlayForm'
import ReactTestUtils from 'react-dom/test-utils'

describe("WebSpec", function () {
    let domFixture

    beforeEach(() => {
        domFixture = document.createElement('div')
        document.querySelector('body').appendChild(domFixture)
    })

    afterEach(() => {
        domFixture.remove()
    })

    it('displays title', () => {
        ReactDOM.render(
            <PlayForm/>,
            domFixture
        )

        expect(domFixture.innerText).toContain('RPS App')
    })

    it('displays INVALID if Requests calls invalid', () => {
        const invalidRequestStub = {
            play: (p1Hand, p2Hand, observer) => observer.invalid()
        }

        ReactDOM.render(
            <PlayForm requests={invalidRequestStub}/>,
            domFixture
        )

        expect(domFixture.innerText).not.toContain('Invalid')
        document.querySelector('button').click()
        expect(domFixture.innerText).toContain('Invalid')
    })

    it('displays Player 1 Wins if Requests calls p1_wins', () => {
    })
    it('displays Player 2 Wins if Requests calls p2_wins', () => {
    })
    it('displays TIE if Requests calls tie', () => {
    })

    it('sends p1 input and p2 input to the play request', () => {
        const playSpy = jasmine.createSpy('playSpy')
        const requests = {play: playSpy}

        ReactDOM.render(
            <PlayForm requests={requests}/>,
            domFixture
        )

        let input1 = document.querySelector('input[name="player1"]')
        input1.value = 'rock'
        ReactTestUtils.Simulate.change(input1)
        // DONT FORGET import ReactTestUtils from 'react-dom/test-utils'


        expect(??)
    })
})