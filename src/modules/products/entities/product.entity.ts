export class Product {
    private id: string;
    private name: string;
    private category: string;
    private price: number;
    private stock: number;
    private sales: number;
    private stop_level: number;
    private total_sold: number;
    private warning_level: number;
    private enable: boolean;
    private enable_stop: boolean;
    private is_warning: boolean;


    get $id():string{
        return this.id;
    }

    set $id(id: string){
        this.id = id;
    }

    get $name():string{
        return this.name;
    }

    set $name(name: string){
        this.name = name;
    }

    
}