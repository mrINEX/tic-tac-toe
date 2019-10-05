class TicTacToe {
    constructor() {
        this.symbolx = 'x';
        this.symbolo = 'o';
        let matrixx =[['','',''],['','',''],['','','']];
        this.matrix = matrixx;
        this.xo = this.symbolx;
        this.xo2 = this.symbolx;
        this.count = 1;
        this.getwin = null;
        this.drow;
    }

    getCurrentPlayerSymbol() {
        //console.log('count: '+this.count);
        return this.xo;
    }

    nextTurn(rowIndex, columnIndex) {     
        //console.log('row: '+rowIndex+' col: '+columnIndex);
        if((this.matrix[rowIndex][columnIndex] === 'o') || (this.matrix[rowIndex][columnIndex] === 'x'))
        {
            //console.log('not add');
        }
        else{
        this.matrix[rowIndex][columnIndex] = this.xo2;
        //console.log('matrix: '+this.matrix[rowIndex][columnIndex]);
        //console.log('arrm: '+this.matrix);
        if((this.count % 2) === 0){
            this.xo = this.symbolx;
            this.xo2 = this.symbolx;
            this.count += 1;
        }
        else{
            this.xo = this.symbolo;
            this.xo2 = this.symbolo;
            this.count += 1;
        }
        }
    }

    isFinished() {
        if(this.getWinner() !== null  || this.isDraw() || this.noMoreTurns())
            return true;
        else
            return false;
    }

    getWinner() {
        if(this.matrix[0][0]==='x' && this.matrix[0][1]==='x' && this.matrix[0][2]==='x')
            {this.getwin = 'x';return 'x';}
        else if(this.matrix[0][0]==='o' && this.matrix[0][1]==='o' && this.matrix[0][2]==='o')
            {this.getwin = 'o';return 'o';}   // 1 2 3
        else if(this.matrix[1][0]==='x' && this.matrix[1][1]==='x' && this.matrix[1][2]==='x')
            {this.getwin = 'x';return 'x';}
        else if(this.matrix[1][0]==='o' && this.matrix[1][1]==='o' && this.matrix[1][2]==='o')
            {this.getwin = 'o';return 'o';}  // 4 5 6
        else if(this.matrix[2][0]==='x' && this.matrix[2][1]==='x' && this.matrix[2][2]==='x')
            {this.getwin = 'x';return 'x';}
        else if(this.matrix[2][0]==='o' && this.matrix[2][1]==='o' && this.matrix[2][2]==='o')
            {this.getwin = 'o';return 'o';}  // 7 8 9
        else if(this.matrix[0][0]==='x' && this.matrix[1][0]==='x' && this.matrix[2][0]==='x')
            {this.getwin = 'x';return 'x';}
        else if(this.matrix[0][0]==='o' && this.matrix[1][0]==='o' && this.matrix[2][0]==='o')
            {this.getwin = 'o';return 'o';}  // 1,4,7
        else if(this.matrix[0][1]==='x' && this.matrix[1][1]==='x' && this.matrix[2][1]==='x')
            {this.getwin = 'x';return 'x';}
        else if(this.matrix[0][1]==='o' && this.matrix[1][1]==='o' && this.matrix[2][1]==='o')
            {this.getwin = 'o';return 'o';}  // 2,5,8
        else if(this.matrix[0][2]==='x' && this.matrix[1][2]==='x' && this.matrix[2][2]==='x')
            {this.getwin = 'x';return 'x';}
        else if(this.matrix[0][2]==='o' && this.matrix[1][2]==='o' && this.matrix[2][2]==='o')
            {this.getwin = 'o';return 'o';}  // 3,6,9
        else if(this.matrix[0][0]==='x' && this.matrix[1][1]==='x' && this.matrix[2][2]==='x')
            {this.getwin = 'x';return 'x';}
        else if(this.matrix[0][0]==='o' && this.matrix[1][1]==='o' && this.matrix[2][2]==='o')
            {this.getwin = 'o';return 'o';} //left
        else if(this.matrix[2][0]==='x' && this.matrix[1][1]==='x' && this.matrix[0][2]==='x')
            {this.getwin = 'x';return 'x';}
        else if(this.matrix[2][0]==='o' && this.matrix[1][1]==='o' && this.matrix[0][2]==='o')
            {this.getwin = 'o';return 'o';}
        else
            {return null;} 
    }

    noMoreTurns() { 
        if(this.count === 10)
            {return true;}
        else
            return false;
    }

    isDraw() {
        if(this.noMoreTurns() && this.getWinner()=== null) //&& this.getwin !== 'x') //|| this.count === 10 && this.getwin !== 'o')
            {return true;}
        else
            {return false;}
    }

    getFieldValue(rowIndex, colIndex) { 
        if((this.matrix[rowIndex][colIndex] === 'x') || (this.matrix[rowIndex][colIndex] === 'o')){
            //console.log('Field: '+this.matrix[rowIndex][colIndex]);
            return this.matrix[rowIndex][colIndex];
        }
        else{
            //console.log('here: null');
            return null;
        }
    }
}

module.exports = TicTacToe;
