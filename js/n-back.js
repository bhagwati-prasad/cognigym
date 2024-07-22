const NBack = ((ctx) => {
    /*
        Dimensions
        Sound: alphabet, number, word
        TileColor: tile color, background of any other dimension
        PictureColor: color of the picture, foreground of any other dimension
        Picture: alphabet, number, object
    */
    //dimension = 1, n steps => n-back, one of any dimension
    //dimension = 2, n steps => dual-n-back, two of any dimensions
    //dimension = 3, n steps => trio-n-back, all three dimensions

    function NBack(dimensions = 1, steps = 1) {
        this.allDimensions = {
            "SoundAlphabet" : "SoundAlphabet",
            "SoundNumber" : "SoundNumber",
            "SoundWord" : "SoundWord",
            "ColorTile" : "ColorTile",
            "ColorObject" : "ColorObject",
            "PictureAlphabet" : "PictureAlphabet",
            "PictureNumber" : "PictureNumber",
            "PictureObject" : "PictureObject"
        };

        this.gridSize = 9;
        this.solutionGuessDuration = 1000;
        this.solutionFlashDuration = 330;
        this.dimensions = dimensions;
        this.steps = steps;
        this.gameDimensions = ["ColorTile"];
        this.gameStreamItemCount = 5;
        this.gameStream = [];
        this.gameStreamItemIndex = 0;
    }

    const setSolutionFlashDuration = function(duration) {
        this.solutionFlashDuration = duration;
    }

    const getSolutionFlashDuration = function() {
        return this.solutionFlashDuration;
    }

    const setSolutionGuessDuration = function(duration) {
        this.solutionGuessDuration = duration;
    }

    const getSolutionGuessDuration = function() {
        return this.solutionGuessDuration;
    }

    const getDimensions = function() {
        return this.dimensions;
    }

    const getSteps = function() {
        return this.steps;
    }

    const setGridSize = function(gridSize) {
        this.gridSize = gridSize;
    }

    const getGridSize = function() {
        return this.gridSize;
    }

    const getAllGameDimensions = function() {
        return this.allDimensions;
    }

    const getGameDimensions = function() {
        return this.gameDimensions;
    }

    const setGameDimensions = function(dimensions) {
        let missingDimensions = [];
        let validDimensions = [];
        let possibleDimensions = this.getAllGameDimensions();
        
        dimensions.forEach((dimension, key) => {
            if(!possibleDimensions[dimension]) {
                missingDimensions.push(dimension);
            } else {
                validDimensions.push(dimension);
            }
        });
        this.gameDimensions = validDimensions;
    }

    const setGameStreamItemCount = function(number) {
        this.gameStreamItemCount = number
    }

    const getGameStreamItemCount = function() {
        return gameStreamItemCount();
    }

    const generateGameStream = function() {

    }

    const getGameStream = function() {
        return this.gameStream;
    }

    const getNext = function() {
        if(this.gameStreamItemCount === (gameStreamItemIndex + 1)) {
            return false;
        }
        return this.gameStream[gameStreamItemIndex++];
    }

    const resetCurrentGame = function() {

    }

    const restartGame = function() {

    }

    let publicProps = {
        getDimensions,
        getSteps,
        getAllGameDimensions,
        getGameDimensions,
        setGameDimensions,
        setGridSize,
        getGridSize,
        setSolutionGuessDuration,
        getSolutionGuessDuration,
        setSolutionFlashDuration,
        getSolutionFlashDuration,
        setGameStreamItemCount,
        getGameStreamItemCount,
        generateGameStream,
        getGameStream,
        getNext,
        resetCurrentGame,
        restartGame
    }

    Object.keys(publicProps).forEach(key => {
        NBack.prototype[key] = publicProps[key];
    });

    return NBack;
})(window);