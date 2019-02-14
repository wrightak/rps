function play(p1, p2, ui) {
    if (!["rock", "paper", "scissors"].includes(p1) || !["rock", "paper", "scissors"].includes(p2))
        ui.invalid();
    else if (p1 === p2)
        ui.tie();
    else if (
        p1 === "rock" && p2 === "scissors" ||
        p1 === "scissors" && p2 === "paper" ||
        p1 === "paper" && p2 === "rock"
    )
        ui.p1Wins();
    else
        ui.p2Wins();
}

describe("play", function () {
    let observer;

    describe("p1 win scenarios", function () {
        beforeEach(function () {
            observer = jasmine.createSpyObj("observer", ["p1Wins"]);
        });

        it('rock v. scissors', function () {
            play("rock", "scissors", observer);

            expect(observer.p1Wins).toHaveBeenCalled();
        });

        it('scissors v. paper', function () {
            play("scissors", "paper", observer);

            expect(observer.p1Wins).toHaveBeenCalled();
        });

        it('paper v. rock', function () {
            play("paper", "rock", observer);

            expect(observer.p1Wins).toHaveBeenCalled();
        });
    });

    describe("p2 win scenarios", function () {
        beforeEach(function () {
            observer = jasmine.createSpyObj("observer", ["p2Wins"]);
        });

        it('scissors v. rock', function () {
            play("scissors", "rock", observer);

            expect(observer.p2Wins).toHaveBeenCalled();
        });

        it('paper v. scissors', function () {
            play("paper", "scissors", observer);

            expect(observer.p2Wins).toHaveBeenCalled();
        });

        it('rock v. paper', function () {
            play("rock", "paper", observer);

            expect(observer.p2Wins).toHaveBeenCalled();
        });
    });

    describe("tie scnenarios", function () {
        beforeEach(function () {
            observer = jasmine.createSpyObj("observer", ["tie"]);
        });

        it("rock v. rock", function () {
            play("rock", "rock", observer);

            expect(observer.tie).toHaveBeenCalled();
        });
    });

    describe("invalid scenarios", function () {
        beforeEach(function () {
            observer = jasmine.createSpyObj("observer", ["invalid"]);
        });

        it("invalid v. rock", function () {
            play(Math.random(), "rock", observer);

            expect(observer.invalid).toHaveBeenCalled();
        });

        it("rock v. invalid", function () {
            play("rock", Math.random(), observer);

            expect(observer.invalid).toHaveBeenCalled();
        });

        it('invalid v. same invalid', function () {
            play("sailboat", "sailboat", observer);

            expect(observer.invalid).toHaveBeenCalled();
        });
    });
});