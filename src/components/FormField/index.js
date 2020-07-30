import React from 'react';






function FormField( { label, fieldType, type, value, name, onChange } ) {
    return (
        
        <div>
            <label>{label}
    
            {fieldType === 'textarea' ? 
                
                <textarea 
                    type  = {type}
                    value = {value}
                    name = {name}
                    onChange = {onChange}
                 />  
            
            : 
            
                <input 
                        type  = {type}
                        value = {value}
                        name = {name}
                        onChange = {onChange}
                />  
            }

    

            </label>
        </div>

    )


};

export default FormField;