let dimensionAndStepTest = {
    title: 'Dimension test',
    desc : 'See if dimensions and step getter works while initializing',
    test : () => {
        let dimensions = 5;
        let steps = 3;
        let nBack = new NBack(dimensions, steps);

        expect([dimensions, steps]).toEqual([nBack.getDimensions(), nBack.getSteps()]);
    }
}
test(dimensionAndStepTest);


let solutionFlashDurationTest = {
    title: 'Solution flash duration test',
    desc : 'See if solution flash duration setters and getters work',
    test : () => {
        let solutionFlashDuration = 100;
        let nBack = new NBack();
        nBack.setSolutionFlashDuration(solutionFlashDuration);

        expect(solutionFlashDuration).toEqual(nBack.getSolutionFlashDuration());
    }
}
test(solutionFlashDurationTest);

let solutionGuessDurationTest = {
    title: 'Solution guess duration test',
    desc : 'See if solution guess duration setters and getters work',
    test : () => {
        let solutionGuessDuration = 700;
        let nBack = new NBack();
        nBack.setSolutionGuessDuration(solutionGuessDuration);

        expect(solutionGuessDuration).toEqual(nBack.getSolutionGuessDuration());
    }
}
test(solutionGuessDurationTest);

let gameDimensionTest = {
    title: 'Game dimensions check',
    desc : 'Check if all (and only) valid game dimensions are present',
    test : () => {
        let actualGameDimensitions = {
            "SoundAlphabet" : "SoundAlphabet",
            "SoundNumber" : "SoundNumber",
            "SoundWord" : "SoundWord",
            "ColorTile" : "ColorTile",
            "ColorObject" : "ColorObject",
            "PictureAlphabet" : "PictureAlphabet",
            "PictureNumber" : "PictureNumber",
            "PictureObject" : "PictureObject"
        }
        let nBack = new NBack();

        expect(actualGameDimensitions).toEqual(nBack.getAllGameDimensions());
    }
}
test(gameDimensionTest);

let gameDimensionSetterTest = {
    title: 'Game dimensions setter, getter test',
    desc : 'See if only valid game dimensions can be set, and can be retrieved',
    test : () => {
        let newDimensions = ["SoundNumber", "SoundNumbers"];
        let newValidDimensions = ["SoundNumber"];
        let nBack = new NBack();
        nBack.setGameDimensions(newDimensions);

        let gameDimensions = nBack.getGameDimensions();

        expect(newDimensions).not.toEqual(gameDimensions);
        expect(newValidDimensions).toEqual(gameDimensions);
    }
}
test(gameDimensionSetterTest);