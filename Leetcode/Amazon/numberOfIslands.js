var numIslands = function(grid) {
    let numberOfIslands = 0;
            
    //iterate through grid    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            //if there's even just one piece of land, then number of islands is at least 1
            if(grid[i][j] === '1') {
                numberOfIslands++;
                teraform(grid, i, j);
            }
            
        }
    }
    
    return numberOfIslands;
};

const teraform = (grid, i, j) => {
    if(i < 0 || i > grid.length || j < 0 || j > grid[i].length) {
        return;
    }
    grid[i][j] = '0';
    teraform(grid, i - 1, j);
    teraform(grid, i + 1, j);
    teraform(grid, i, j - 1);
    teraform(grid, i, j + 1);
}