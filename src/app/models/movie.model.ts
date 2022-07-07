
export class Movie {

    id: string;
    title: string;
    category: string;
    description: string;
    userid: string;
    isEditable: Boolean

    constructor(id: string, title: string, category: string, description: string, userid: string, isEditable: Boolean) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.description = description;
        this.userid = userid;
        this.isEditable = isEditable;
    }
}