class TableState{

    constructor(row_offset, rows_per_page, total_rows){
        this.row_offset = row_offset;
        this.rows_per_page = rows_per_page;
        this.total_rows = total_rows;
    }

    getState() {
        return {row_offset: this.row_offset,
                rows_per_page: this.rows_per_page,
                total_rows: this. total_rows};
    }

    getInstance(){
        return new TableState(0, 10, 15);
    }

}

module.exports = TableState;