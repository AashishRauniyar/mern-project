class ApiError extends Error{
    constructor(status, message="Something went wrong",errors=[], stack="") {
        super(message)
        this.status = status;
        this.message = message;
        this.data = null;
        this.errors = errors;
        this.message = message;
        this.success = false;
    
        if(stack){
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor);    
    
        }
    }
    
    
}

export { ApiError }

