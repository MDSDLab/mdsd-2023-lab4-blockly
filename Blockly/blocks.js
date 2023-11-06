Blockly.Blocks['webpage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Title")
        .appendField(new Blockly.FieldTextInput("default"), "Title");
    this.appendValueInput("Style")
        .setCheck(null)
        .appendField("Style");
    this.appendStatementInput("Elements")
        .setCheck(null)
        .appendField("Elements");
    this.setInputsInline(false);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};