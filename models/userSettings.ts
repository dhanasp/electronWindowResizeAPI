

export const updateUserSettings = function(data:object){
    const newEvent = new MessageEvent('User_Settings_RESP', {
        data: {
            data
        },
        bubbles: false,
        cancelable: false
    });
    window.dispatchEvent(newEvent);
    
}