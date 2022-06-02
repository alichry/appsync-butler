import ValidationError from "../ValidationError.js";

/**
 * @category Error
 */
export class DataSourceNotFoundError extends ValidationError {
    public readonly dataSource: string;
    
    constructor(message: string, dataSource: string) {
        super(message);
        
        Object.setPrototypeOf(this, DataSourceNotFoundError.prototype);
        this.name = this.constructor.name;
        this.dataSource = dataSource;
    }
}

/**
 * @category Error
 */
export class FunctionNotFoundError extends ValidationError {
    public readonly functionName: string;
    
    constructor(message: string, functionName: string) {
        super(message);
        
        Object.setPrototypeOf(this, FunctionNotFoundError.prototype);
        this.name = this.constructor.name;
        this.functionName = functionName;
    }
}
