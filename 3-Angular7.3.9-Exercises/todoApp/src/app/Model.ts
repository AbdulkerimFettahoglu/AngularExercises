export class Model {
    user: string;
    items: ModelItem[];

    constructor() {
        this.user = "Kerim";
        this.items = [
            new ModelItem("Kahvaltı", true),
            new ModelItem("Spor", true),
            new ModelItem("Ders", false),
            new ModelItem("Kitap Okumak", false)
        ];
    }
}

export class ModelItem {
    description: string;
    action: boolean;

    constructor(description:string,action:boolean) {
        this.description = description;
        this.action = action;
    }
}