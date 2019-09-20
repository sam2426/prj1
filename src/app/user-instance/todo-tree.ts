export interface TodoTree {

    todoId: string;
    todo:String,
    contributors:String,
    time?:Date,
    showChildren?: boolean,
    childrenNodes: any[],

}
