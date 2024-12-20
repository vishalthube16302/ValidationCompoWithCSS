import { LightningElement, track } from 'lwc';
import style from "./day9ValidationWith_CSS.css";

export default class ValidationWith_CSS extends LightningElement {
    @track buttonClass = 'button-center';
    @track isMove = true;
    FieldsMap = new Map();


    handleInputBlur(event){
        console.log('Method--> Handle Input Blur');
        const inputKey = event.target.name;
        const inputValue = event.target.value.trim();

        if (inputValue !== "") {
            this.FieldsMap.set(inputKey, inputValue);
            this.checkEmptyFieldValues()

        }else if(this.FieldsMap.has(inputKey)){
            this.FieldsMap.delete(inputKey);
            this.isMove= true;      
        }

        console.log('Map Size-->', this.FieldsMap);

    }
    checkEmptyFieldValues() {
        console.log('Method--> Check Empty Field Value');
        if (this.FieldsMap) {
            this.FieldsMap.forEach((value, key) => {
                if (!value && key!=='mobilenumber') {
                    console.log(`Field '${key}' is empty.`);
                    this.isMove= true;
                }else if(this.FieldsMap.size === 3){
                    this.isMove= false;
                }
            });
        } 
    }
    handleMouseOver() {
        if(this.isMove === false){
            this.buttonClass = 'button-center';
        }
        else if(this.buttonClass === 'button-left'){
            this.buttonClass = 'button-right';
        }else{
            this.buttonClass = 'button-left';

        }
    }
    handleInputFocus(){
        console.log('Handle Input Focus');
        this.buttonClass = 'button-center';

    }
    clearMethod(){
        this.isMove = true;
        this.FieldsMap = new Map();
        const inputedData = this.template.querySelectorAll("lightning-input");
        inputedData.forEach(Element=>{
            Element.value = null;
        });

    }


    handleOnClick() {
        this.handleMouseOver();
        if(this.isMove === false){
             alert('Thank you.. -->');
        }
       
    }
}