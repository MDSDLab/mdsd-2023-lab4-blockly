javascript.javascriptGenerator.forBlock['webpage'] = function(block, generator) {
  var text_name = block.getFieldValue('Title');
  var value_style = generator.valueToCode(block, 'Style', javascript.Order.ATOMIC);
  var statements_elements = generator.statementToCode(block, 'Elements');
  // TODO: Assemble javascript into code variable.
  var code = ` <html><head><title>${text_name}</title></head><body>Generated page</body></html>`;
  return code;
};