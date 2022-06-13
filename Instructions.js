class Instructions
{
    constructor(onOkayClick)
    {
        this.instructionPanel = new PanelWithImage(_canvasWidth/2, _canvasHeight/2, 0.8, "./Images/InstructionPanel.png");

        this.okayButton = new Button(0.2, _canvasWidth/2, _canvasHeight*0.78, "./Images/OKButton.png", "", ()=>
        {
            this.instructionPanel.container.visible = false;
            this.okayButton.container.visible = false;
            onOkayClick();
            console.log("Okay button was clicked");
        });
    }
}