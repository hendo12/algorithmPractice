const deliveryDistance = (grid) => {
    if(grid === null || grid.length === 0) {
        return -1;
    }

    let distance = 0;

    distance += findRoute(grid, 0, 0, distance);


    // for(let i = 0; i < grid.length; i++) {
    //     for(let j = 0; j < grid[i].length; j++) {
    //         if(grid[i][j] === 1) {
    //             distance += findRoute(grid[i][j]);
    //         }
    //     }
    // }

    console.log('answer: ', distance);
    return findRoute(grid, 0, 0, distance);
}

const findRoute = (grid, i, j, distance) => {
    if(grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === 0) {
        return;
    } 

    if(grid[i][j] === 9) {
        console.log('finished. total distance: ', distance);
        return distance;
    } 
    
    distance += 1;
    console.log('distance: ', distance);
    findRoute(grid, i + 1, j, distance);
    findRoute(grid, i, j + 1, distance);
    return 1;
    //need a return
}

deliveryDistance([[1,0,0],[1,0,0],[1,9,1]]);